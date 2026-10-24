# Principles

Status: golden. These sentences are the law. The system an agent follows is this file, not a paraphrase kept somewhere else.

## Invariants

The founding set is the law. A change that contradicts it does not land.

An agent does not merge its own contract change.

External actions wait for a person.

## The rest of the law

1. Propose, then review, then apply, then record. Those are the only team phases. They live in `founding/manifest.json`.
2. An agent may draft. It may not push to the default branch, and it may not approve its own contract change.
3. `contract` and `infra` changes bump `revision` in the same change. Clarifying prose does not.
4. A check that is not named in the manifest is not a gate. A gate named in the manifest and missing from CI is a broken build.
5. Third-party CI actions are pinned to a full commit SHA. A floating tag is not a pin.
6. Secrets stay out of the tree, the logs, and the prompt. A token in a diff is a stop.
7. External actions (deploys, spending, sending, deleting shared state) use `ask_external` or `ask_always`. `auto` is only for reads and for writes inside the repo's tests.
8. The scorecard reads the rubric. A boolean in the runner does not outrank the table.
9. Copy this repository to start a project. Replace the name, write domain invariants, and keep the bedrock. Do not fork a second copy of the phase list into application code.
