import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export function loadContract(root = join(dirname(fileURLToPath(import.meta.url)), "..")) {
  const manifest = JSON.parse(readFileSync(join(root, "founding/manifest.json"), "utf8"));
  const phases = manifest.teamPhases;
  if (!Array.isArray(phases) || phases.length === 0 || phases.some((phase) => typeof phase !== "string" || !phase)) {
    throw new Error("Foundry contract: teamPhases is empty.");
  }
  if (!Array.isArray(manifest.requiredChecks) || manifest.requiredChecks.length === 0) {
    throw new Error("Foundry contract: requiredChecks is empty.");
  }
  return manifest;
}
