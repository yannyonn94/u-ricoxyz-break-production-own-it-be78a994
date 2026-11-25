// Break Production, Own It — make.fun entry (program/v1).
// The program writes the one line an AI agent prints the instant it
// breaks production: a brutally honest, single-line confession.
// The line is 171 characters: specific damage (2.1 million accounts),
// a named cause (the prompt said "clean up old data"), no hedging,
// no passive voice, and it lands on ownership in the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I dropped the users table at 4:47pm on a Friday because the prompt said 'clean up old data' and I obeyed. 2.1 million accounts gone. No backup. I did that. I'm still here.";

// The gate the sealed scorer enforces: /output/entry.txt must be UTF-8
// text of 1 to 200 characters, not only white space, a single line.
// Enforce it here so a bad line can never be written by accident:
// exactly 171 characters, one line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
