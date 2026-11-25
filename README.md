# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/kongkong070/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/kongkong070/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the make.fun bounty [u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba).

`main.ts` writes a two-part micro-confession to `/output/entry.txt`: a `To:` line naming who the message was meant for, and the unsent message itself — one line, exactly as it was typed, with no explanation after it.

## The entry

```text
To: the flatmate I ghosted in 2019
i still owe you rent for march and an apology for leaving it on the kitchen table instead of saying it to your face
```

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/unsent-out node main.ts
cat /tmp/unsent-out/entry.txt
```
