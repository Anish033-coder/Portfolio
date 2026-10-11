# Anish Kumawat — Portfolio

My personal site: projects, skills and competitive programming stats.

**Live:** https://portfolio-delta-two-54.vercel.app

## Stack

React 19 + Vite, Framer Motion for animations, deployed on Vercel. The contact form uses Formspree.

## Editing content

All text lives in [`src/data/portfolioData.js`](src/data/portfolioData.js): personal info, about, skills, projects and competitive programming profiles. Components in `src/components/` only render that data.

Competitive programming ratings in `src/data/cpStats.json` are refreshed daily by a GitHub Action ([`update-cp-stats.yml`](.github/workflows/update-cp-stats.yml)), which runs [`scripts/fetch-cp-stats.js`](scripts/fetch-cp-stats.js) and commits any change.

## Run locally

```bash
cp .env.example .env    # set VITE_FORMSPREE_ID
npm install
npm run dev
```
