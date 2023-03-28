# Internet Time
![GitHub](https://img.shields.io/github/license/javitoro/internet-time) [![GitHub issues](https://img.shields.io/github/issues/JaviToro/internet-time)](https://github.com/JaviToro/internet-time/issues) [![GitHub forks](https://img.shields.io/github/forks/JaviToro/internet-time)](https://github.com/JaviToro/internet-time/network)

## Introduction
Swatch Internet Time (or .beat time) is a decimal time concept introduced in 1998 by the Swatch corporation as part of their marketing campaign for their line of "Beat" watches.

Instead of hours and minutes, the mean solar day is divided into 1,000 parts called .beats. Each .beat is equal to one decimal minute in the French Revolutionary decimal time system and lasts 1 minute and 26.4 seconds (86.4 seconds) in standard time. Times are notated as a 3-digit number out of 1,000 after midnight. So, for example, @248 would indicate a time 248 .beats after midnight, representing 248⁄1000 of a day, just over 5 hours and 57 minutes.

There are no time zones in Swatch Internet Time; instead, it is globally based on what is conventionally known as Central European Time, West Africa Time, and UTC+1, which is the time zone in which Swatch's headquarters in Biel, Switzerland, is located; Swatch calls this "Biel Mean Time" (BMT), despite the fact that it is not actually mean solar time as measured in Biel. Unlike civil time in Switzerland and many other countries, Swatch Internet Time does not observe daylight saving time.

*(From [Wikipedia](https://en.wikipedia.org/wiki/Swatch_Internet_Time))*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
