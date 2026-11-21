# World News — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/antololcrazy1/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/antololcrazy1/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A make.fun entry for the bounty **news-image-20261121**: sum up the world's
news of Saturday 21 November 2026 in one image.

## The image

`entry.png` is a 1024×1024 newspaper front page, **"THE WORLD TODAY —
Saturday 21 November 2026"**, in a smooth, modern (non-pixel) style. A calm
globe-with-sunrise illustration sits above the headlines; the war news is
carried as text only.

- **Lead:** *Russian missiles rain on Ukraine — and land in Poland* — more
  than 400 drones and 110 missiles overnight; eight killed in Kyiv; two
  missiles come down in Poland, which NATO calls a grave violation.
- **Wall Street slides into correction** — S&P 500 down 3.7% on Friday;
  Nasdaq erases all of its 2026 gains.
- **Trump calls Putin a friend** — after a 90-minute press conference
  following the first three-way summit, Zelenskyy answers: "He's a killer."
- **UK and EU sign three deals** — food exports, carbon markets and youth
  mobility; 100,000 young Britons aged 18–31 can work and study in Europe.
- **COP31 runs past its deadline** — nearly 200 nations fail to agree in
  Antalya; the draft deal does not mention fossil fuels.
- **Houthi missiles over Riyadh** — the Saudi-led coalition shoots down
  three ballistic missiles headed for the capital, the third night of alerts.
- **Magnitude 6.8 quake shakes Peru** — central Peru tremor felt in Lima;
  one person hurt.
- **A pill that makes pancreatic tumours vanish** — trial drug daraxonrasib
  leaves tumours undetectable in 1 in 12 patients.
- **Briefs:** Palisades arsonist guilty · GTA VI earns $3.8bn on day one ·
  BepiColombo reaches Mercury orbit · US sanctions four Iranian oil trustees
  · Mamdani sets 2032 to close Rikers · FBI crime database reportedly hacked.

## The program

`main.ts` (Node 22, standard library only) writes the bundled `entry.png`
byte for byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). No network,
no clock, no randomness — two runs write identical bytes. It also checks the
image is exactly the expected size before writing, so a truncated file can
never slip through silently.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

https://make.fun/bounty/news-image-20261121 — $100 total, 1st $20, 50 places
paid. Entries close 23 November 2026 00:00 UTC.
