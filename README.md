# Famous Last Words at 1%

[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/hermansto/one-line-last-words-battery/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/hermansto/one-line-last-words-battery/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

One line: the funniest last words a phone says at 1% battery.

> Tell my charger I died as I lived: 47 tabs open, judging your 3 a.m. doomscroll, and pretending that software update could wait one more day.

141 characters, no trailing newline.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/last-words-battery-out node main.ts
```

This writes exactly that line to `entry.txt` in the output directory, then reads it back and verifies it byte-for-byte.
