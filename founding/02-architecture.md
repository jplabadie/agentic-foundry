# Architecture

Three layers, and each one may only know the one below it.

| Layer | May know | May not know |
| --- | --- | --- |
| Agents | `AGENTS.md`, the founding set, the diff | How to skip CI, a private side channel |
| Bedrock | The founding files and the workflow text | Product behavior that is not in a fixture |
| Product | `src/contract.mjs`, which reads the manifest | A second list of phases, checks, or risk classes |

`src/contract.mjs` is the only code path that publishes the contract to the rest of the program. If a product needs a limit, the limit is added to the manifest and the revision moves.

Agents propose. People review contract and external changes. CI applies the gate. The merge commit is the record.
