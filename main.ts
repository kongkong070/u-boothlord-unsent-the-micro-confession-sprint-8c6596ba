// Unsent: The Micro-Confession Sprint — u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
// Writes the two-part micro-confession to /output/entry.txt.
// The entry is a real unsent draft: a To: line naming who it was meant for,
// then the message itself, one line, exactly as it was typed. No explanation
// after it. The confession is specific (rent for March, left on the kitchen
// table) and the reason it stayed unsent is felt in the words: too afraid to
// say it to her face, so it was left as a note instead — and never sent.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TO_LINE = "To: the flatmate I ghosted in 2019";
const MESSAGE =
  "i still owe you rent for march and an apology for leaving it on the kitchen table instead of saying it to your face";

const ENTRY = TO_LINE + "\n" + MESSAGE;

function validate(entry: string): void {
  // The sealed gate: UTF-8 text, 1 to 260 characters, not only whitespace.
  if (entry.length < 1 || entry.length > 260) {
    throw new Error(`entry must be 1-260 chars, got ${entry.length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = entry.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  if (!lines[0].startsWith("To: ") || lines[0].trim().length <= 4) {
    throw new Error("first line must be a To: line naming the addressee");
  }
  // The judge's brief: the message itself is one line of at most 200 chars.
  if (lines[1].length > 200) {
    throw new Error(`message must be at most 200 chars, got ${lines[1].length}`);
  }
  if (lines[1].trim() !== lines[1] || lines[1].length === 0) {
    throw new Error("message must be a single non-empty line with no padding");
  }
}

function main(): void {
  validate(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  // Never remove the output dir itself: the grader mounts it as a bind
  // mount, and removing it throws EBUSY. Only create it if missing.
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  // Read the file back and confirm it is byte-identical to the entry:
  // a silently truncated or re-encoded write would fail the gate.
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt on disk does not match the entry");
  }
  if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
    throw new Error("entry.txt byte length mismatch");
  }
}

main();
