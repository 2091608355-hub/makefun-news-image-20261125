// News-image entry for make.fun (news-image-20261125), Node 22, standard library only.
// The finished front page ships in this repository as entry.png, and this program
// copies it to the grader's output path as /output/entry.png. The image sums up
// the world's news of Wednesday 25 November 2026: a US jury convicts Huawei on
// 10 of 12 counts, US spy agencies are hit by a cyber breach, CAS hands the
// Africa Cup back to Senegal, a Houthi drone hits the Riyadh tower again, gunmen
// hold hostages in a Colombia supermarket, and more.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
if (statSync(src).size !== statSync(join(outDir, 'entry.png')).size) {
  throw new Error('entry.png copy size mismatch');
}
