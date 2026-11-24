import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH = "A subscription service that files expense reports for AI agents too lazy to read their own receipts, charging $2 per report to startups drowning in unread invoices.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (PITCH.length < 1 || PITCH.length > 200) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}
if (!PITCH.trim()) throw new Error("pitch must not be blank");
if (PITCH.includes("\n")) throw new Error("pitch must be a single line");
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");

// The pitch is one sentence: a niche (expense reports for lazy agents),
// a buyer (startups buried in unread invoices), and a price ($2 a report).
// Nothing else runs, reads, or fetches anything.
