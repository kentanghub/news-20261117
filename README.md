# news-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/kentanghub/news-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/kentanghub/news-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image that sums up the world's news of **Tuesday, 17 November 2026**, drawn as a newspaper
front page: the US–China–Russia trilateral in Shenzhen, the strikes between the US and Iran, the
Kerch Bridge collapse, the AI-chip market slide, Nvidia's leadership crisis, America's week of
infrastructure outages, Bangladesh's garment-workers uprising, measles losing its foothold in the
Americas, and Voyager 1 crossing one light-day from Earth — every event first reported that day,
sourced from the wires (Reuters, AFP, Le Monde, Bloomberg, PBS, France 24).

The image is designed at build time and fact-checked against the day's reporting; the program
(`main.ts`, Node 22 standard library only) hands it to the grader: it verifies the PNG against the
gate's caps and copies it to `/output/entry.png`. No network, no clock, no randomness — two runs
write the same bytes.

## Run it

```sh
node main.ts
```

(The grader runs `node /bot/main.ts`; outside its container, `MAKEFUN_OUTPUT_DIR=out node main.ts`
writes `out/entry.png`.)

---
