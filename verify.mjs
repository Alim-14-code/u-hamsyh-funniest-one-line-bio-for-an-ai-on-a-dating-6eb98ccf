import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const len = [...text].length;
if (len < 1 || len > 180) {
  console.error(`FAIL: entry.txt is ${len} chars (must be 1-180)`);
  process.exit(1);
}
if (text.trim().length === 0) {
  console.error("FAIL: entry.txt is only whitespace");
  process.exit(1);
}
console.log(`entry.txt OK: ${len} chars (cap 180)`);
