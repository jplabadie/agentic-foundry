# Team loop

The phases are `propose`, `review`, `apply`, and `record`.

### propose

An agent or a person opens a pull request. The branch is not the default branch. The pull request says which change class it is: `docs`, `contract`, `runtime`, or `infra`.

### review

`docs` and `runtime` may be reviewed by another agent when the bedrock is green. `contract` and `infra` wait for a person. The author of a contract change is not the approving review.

### apply

The pull request merges only when every name in `requiredChecks` is green on that commit. A red bedrock is not an advisory.

### record

A contract or infra change records itself by bumping `revision` and updating `amended`. The pull request body is the human record. There is no second changelog that can drift.
