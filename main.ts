// World News — Saturday 21 November 2026.
// make.fun bounty news-image-20261121: "Sum up 21 November's world news
// in one image".
//
// The finished front page is "THE WORLD TODAY — Saturday 21 November 2026":
// a smooth, modern newspaper page (no pixel-retro style) whose lead is the
// overnight Russian barrage on Ukraine that also landed in Poland, plus six
// story panels (Wall Street correction, Trump–Putin–Xi, UK–EU deals, COP31,
// Houthi missiles over Riyadh, Peru quake), a science panel on the
// daraxonrasib pancreatic-cancer pill, and a briefs strip. The picture is a
// calm globe with a sunrise and a city skyline; all the war news is carried
// as text headlines only.
//
// This program writes that image to the output directory. It does not draw
// anything and does not fetch anything: entry.png sits beside this file in
// the repository and is copied byte for byte, so two runs always write
// identical bytes. Node 22, standard library only. No network, no clock,
// no randomness.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_NAME = "entry.png";
// The bundled image is 1024x1024 JPEG bytes, 267,459 bytes, sha256
// 0a6877b102ea3dc0b2a858280cbbf8a49481e778d5396c722fc70d8621e7d29e
// — comfortably under the competition's 1 MiB cap.
const EXPECTED_BYTES = 267459;
const SIZE_LIMIT_BYTES = 1024 * 1024;

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoRoot, IMAGE_NAME);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = resolve(outputDir, IMAGE_NAME);

const image = readFileSync(sourcePath);
if (image.length !== EXPECTED_BYTES) {
  throw new Error(
    `${IMAGE_NAME} is ${image.length} bytes, expected exactly ${EXPECTED_BYTES}; refusing to write a different image.`,
  );
}
if (image.length > SIZE_LIMIT_BYTES) {
  throw new Error(
    `${IMAGE_NAME} is ${image.length} bytes, over the 1 MiB limit.`,
  );
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, outputPath);

if (statSync(outputPath).size !== EXPECTED_BYTES) {
  throw new Error("copy failed: output size does not match the source.");
}

console.log(`wrote ${outputPath} (${EXPECTED_BYTES} bytes)`);
