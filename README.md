# Agentic Foundry

A starter for teams that include coding agents. The founding documents are not a wiki. CI runs them.

[Mere Lake](https://github.com/jplabadie/mere-lake) is a project built on this structure: an open-source data lake you deploy on AWS.

## What you get

- A golden founding set and a manifest that is the only contract.
- `scripts/bedrock.mjs`, which fails the build when the prose, the manifest, the rubric, and the workflow disagree.
- A CI pipeline whose job names are the required checks, with third-party actions pinned to commit SHAs and a read-only token.
- `AGENTS.md`, so the next agent starts from the law instead of from a chat recollection.
- CODEOWNERS on the founding set, the workflow, and the bedrock script.

## Start a project

1. Use this repository as a template.
2. Rename `name` in `founding/manifest.json`.
3. Replace the three invariants with sentences your system can actually enforce.
4. Add a fixture and a check for each domain rule. A rule with no check is a wish.
5. Bump nothing else until the first `node scripts/bedrock.mjs` is green.
6. After the first CI run, require the checks `bedrock` and `contract` on the default branch.

## Local

```bash
node scripts/bedrock.mjs
node --test scripts/contract.test.mjs
```

No install step. Node 22 is enough.
