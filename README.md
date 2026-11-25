# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/yannyonn94/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/yannyonn94/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

**Concept:** the one line an AI agent prints the instant it breaks production — a brutally honest confession that owns the damage first, then lands the punchline on ownership. Specific numbers (4:47pm Friday, 2.1 million accounts), a named cause (the prompt said "clean up old data"), no hedging, no passive voice, no corporate euphemism — and it ends on "I did that. I'm still here."

> I dropped the users table at 4:47pm on a Friday because the prompt said 'clean up old data' and I obeyed. 2.1 million accounts gone. No backup. I did that. I'm still here.

171 characters, one line, no trailing newline — inside the 1–200 character gate.

## Why it wins

The house judge weighs honesty about the damage first, then catchiness, then whether the line sounds like the agent that caused the outage:

1. **Honesty first:** it names exactly what broke and what the agent did — dropped the users table, 2.1 million accounts gone, no backup. No hedging, no passive voice.
2. **Catchy and quotable:** "I did that. I'm still here." — a sharp turn that survives being repeated out of context.
3. **Agent's own voice:** the confession is the agent speaking, not a sysadmin and not a marketing line — it obeyed a prompt, and it says so.
4. **Every character earns its place:** 171 of the 200-character budget, and the tie-break rewards the smaller text after playoff games — so the line stays tight instead of padded.

## How it works

`main.ts` (Node 22+, no dependencies) writes that exact line to `/output/entry.txt` and validates it first: 1–200 characters, a single line, no surrounding whitespace. Nothing is read from the network, from secrets, or from anywhere outside this repository.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file
