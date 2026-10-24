# Scorecard

Grades are the lowest critical row. A failed critical row is an F for the project. A failed non-critical row caps the project at C.

| Grade | Rule |
| --- | --- |
| A | Every row passes |
| B | Every critical row passes, and nothing else is defined as B |
| C | A non-critical row fails |
| F | A critical row fails |

| `law-invariants` | Law | yes | Invariants equal the manifest and the recorded hash |
| `ci-jobs` | CI | yes | The workflow has every required check and pins its actions |
| `protected-paths` | Change | yes | CODEOWNERS covers every protected path |
| `agent-charter` | Agents | yes | AGENTS.md names every phase and the manifest |
