// Funniest One-Line Bio for an AI on a Dating App — entry runner.
// Copies the one-line dating-app bio in entry.txt (86 chars) to the grader's
// output directory (/output/entry.txt, or $OUTPUT_DIR when set) so the
// entry text is what gets judged. Standard library only.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
console.log("entry.txt copied to " + join(outDir, "entry.txt"));
