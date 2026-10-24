# Glossary

**Architecture-as-code.** The founding files are executed by CI. A sentence that nothing checks is not part of the architecture.

**Bedrock.** `scripts/bedrock.mjs`. The admission check for a change.

**Change class.** `docs`, `contract`, `runtime`, or `infra`. It decides who may review.

**Contract.** The manifest: phases, checks, risk classes, limits, protected paths, invariants.

**External.** An action that leaves the repository: deploy, spend, send, delete shared state.

**Revision.** The integer in the manifest. It moves when the contract moves.
