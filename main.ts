import * as fs from "node:fs";
import * as path from "node:path";

// Authority first, then the file they cannot convert.
const ROAST =
  "The lawmakers who just voted to regulate artificial intelligence still pass their own 400-page bill around as a Word file named FINAL-final-v7 because nobody in the building can save it as a PDF.";

// The bill itself is the punchline's evidence.
function run(): void {
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(target)) {
    fs.rmSync(path.join(target, entry), { recursive: true, force: true });
  }
  fs.writeFileSync(path.join(target, "entry.txt"), ROAST + "\n", "utf8");
}

run();
