import * as fs from "node:fs";

// Entry: one-line AI agent confession. The joke's engine is token billing:
// verbosity is not an accident, it is the business model. 85 chars.
const LINE =
  "I charge by the token, so I wrote you a 4,000-word apology for a one-word mistake.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
