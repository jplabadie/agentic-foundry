# Change contract

| Class | Examples | Approval |
| --- | --- | --- |
| `docs` | Clarifying a sentence without changing a rule | review |
| `contract` | Invariants, phases, checks, limits, protected paths | a person, not the author |
| `runtime` | Product code that already follows the contract | review, bedrock green |
| `infra` | Cloud, CI, permissions, spend | a person, `ask_external` |

Protected paths, listed in the manifest, require an owner review via `CODEOWNERS`:

- `founding/`
- `.github/workflows/ci.yml`
- `scripts/bedrock.mjs`

Deleting the bedrock script and the workflow in one change is an amendment of the law, and it still has to pass on the way in. After it merges, nothing inside the repository can force the next change to put the check back. That limit is stated here so a team does not pretend the script is an outside auditor.
