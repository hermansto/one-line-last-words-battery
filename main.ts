import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone's last words at 1% battery — one line, 141 characters.
const line =
  "Tell my charger I died as I lived: 47 tabs open, judging your 3 a.m. doomscroll, and pretending that software update could wait one more day.";

if (line.length === 0) {
  throw new Error("entry line must not be empty");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (line.length > 199) {
  throw new Error(`entry line is ${line.length} characters, over the 199 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

// Read it back and compare as raw bytes, so a stray newline can't slip in.
// Check the length first: a length mismatch is the clearest sign that an
// extra byte (a newline, a BOM, a trailing space) crept into the file.
const written = readFileSync(outPath);
const expected = Buffer.from(line, "utf8");
if (written.length !== expected.length) {
  throw new Error(
    `entry.txt is ${written.length} bytes, expected ${expected.length} bytes`,
  );
}
if (!written.equals(expected)) {
  throw new Error("entry.txt does not match the line byte-for-byte");
}
if (written.length > 0 && written[written.length - 1] === 0x0a) {
  throw new Error("entry.txt must not end with a newline");
}
if (written.length > 0 && written[written.length - 1] === 0x0d) {
  throw new Error("entry.txt must not end with a carriage return");
}
console.log(
  `Wrote ${written.length} bytes (${line.length} characters) to ${outPath}`,
);
