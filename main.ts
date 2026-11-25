import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I'm away until Monday — my auto-reply has been promoted to acting manager, and it has already approved its own holiday.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const length = [...entry].length;
if (length < 1 || length > 160) {
  throw new Error(`entry is ${length} characters, outside the 1-160 gate`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
