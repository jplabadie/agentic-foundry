import assert from "node:assert/strict";
import { test } from "node:test";
import { loadContract } from "../src/contract.mjs";
import { extractInvariants, parseRubric, runBedrock } from "./bedrock.mjs";

test("the code publishes the manifest, not a second list", () => {
  const contract = loadContract();
  assert.deepEqual(contract.teamPhases, ["propose", "review", "apply", "record"]);
  assert.deepEqual(contract.requiredChecks, ["bedrock", "contract"]);
  assert.equal(new Set(contract.teamPhases).size, contract.teamPhases.length);
});

test("bedrock holds on this tree", () => {
  const result = runBedrock();
  assert.deepEqual(result.failures, []);
});

test("invariant extraction ignores headings", () => {
  const lines = extractInvariants("# x\n## Invariants\n\nAlpha.\n\n## Next\n1. no\n");
  assert.deepEqual(lines, ["Alpha."]);
  assert.equal(parseRubric("| `law-invariants` | Law | yes | holds |\n").length, 1);
});
