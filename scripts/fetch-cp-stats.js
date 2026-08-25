#!/usr/bin/env node
/**
 * Fetches live CP ratings from Codeforces and CodeChef APIs
 * and writes them to src/data/cpStats.json.
 *
 * Run manually:  node scripts/fetch-cp-stats.js
 * Or via GitHub Actions on a cron schedule.
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'src', 'data', 'cpStats.json');

const CF_HANDLE = 'Anish033';
const CC_HANDLE = 'anish_033';

async function fetchCF() {
  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`);
    const data = await res.json();
    if (data.status === 'OK' && data.result?.[0]) {
      const user = data.result[0];
      return {
        rating: user.rating ?? null,
        maxRating: user.maxRating ?? 1507,
        rank: user.rank ?? 'specialist',
        maxRank: user.maxRank ?? 'specialist',
      };
    }
  } catch (e) {
    console.error('Codeforces fetch failed:', e.message);
  }
  return { rating: null, maxRating: 1507, rank: 'specialist', maxRank: 'specialist' };
}

async function fetchCC() {
  try {
    const res = await fetch(`https://codechef-api.vercel.app/handle/${CC_HANDLE}`);
    const data = await res.json();
    return {
      rating: data.currentRating ?? null,
      maxRating: data.highestRating ?? 1628,
      stars: data.stars ?? '3★',
    };
  } catch (e) {
    console.error('CodeChef fetch failed:', e.message);
  }
  return { rating: null, maxRating: 1628, stars: '3★' };
}

async function main() {
  console.log('Fetching CP stats...');
  const [cf, cc] = await Promise.all([fetchCF(), fetchCC()]);

  const stats = {
    lastUpdated: new Date().toISOString(),
    codeforces: cf,
    codechef: cc,
  };

  writeFileSync(OUTPUT, JSON.stringify(stats, null, 2) + '\n');
  console.log('Written to', OUTPUT);
  console.log(JSON.stringify(stats, null, 2));
}

main();
