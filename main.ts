// Monday Morning Punchlines — entry for make.fun competition
// u-gentle-badger-68-monday-morning-punchlines-709645dc
//
// Writes a single joke about Monday mornings (at most 200 characters)
// to /output/entry.txt. Deterministic: the same constant line every run.
//
// The joke: a domestic-court metaphor. The bed files for custody, the alarm
// clock testifies against me, and the inbox schedules the hearing for 9 a.m.
// Unmistakably Monday morning, a real twist, one sentence, no tired cliche.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Monday morning: my bed filed for custody, my alarm clock testified against me, and my inbox scheduled the hearing for 9 a.m.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
// Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry joke is ${JOKE.length} chars; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
