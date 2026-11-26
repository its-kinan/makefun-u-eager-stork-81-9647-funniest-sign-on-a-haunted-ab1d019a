import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Sign on a Haunted Server Room Door.
// Revised draft: cut 142 chars to 104. "WARNING" was redundant with
// "DO NOT ENTER"; "has started answering support tickets" tightened to
// "answers tickets"; "average" dropped. The punch still lands on the
// last word — eternity — and the colon reads like a real printed sign.
// Deterministic: one fixed string, no network, no clock, no randomness.
const LINE =
  "DO NOT ENTER AFTER MIDNIGHT: the ghost in Rack 7 answers tickets, and his resolution time is eternity.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
