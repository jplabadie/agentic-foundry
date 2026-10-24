# Quality

## Amendment

1. Write the rule in the founding file that owns it.
2. If a contractual value changed, change `founding/manifest.json` in the same change and bump `revision`.
3. Update `founding/fixtures.json` when the invariant hash moves. The bedrock fails until you do.
4. Do not land a behavior the documents still forbid.

## Grade

`founding/09-scorecard.md` is the rubric. The bedrock parses it. A row with no runner fails. A runner with no row fails. Critical rows come from the `yes` column, not from a flag beside the code.
