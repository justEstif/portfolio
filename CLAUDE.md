## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Stack**: SvelteKit 5, Tailwind CSS, DaisyUI

---

## Local gate

Run before handing any work back:

```bash
npm run verify
```

Runs in order: `prettier --check` → `oxlint --deny-warnings` → `svelte-check` → `vite build`. CI runs the same command. A passing local gate is required before pushing.

Auto-fix formatting:

```bash
npm run format   # prettier --write
npm run lint     # oxlint (check only; oxlint --fix for auto-fixes)
```

---

## Git safety

- **Never** push directly to `main`, `master`, `prod`, `production`, or `release/*`. Open a pull request.
- **Never** use `git push --force`, `git reset --hard`, `git clean -fdx`, branch deletion, or tag deletion without explicit user approval in the current conversation.
- **Never** commit `.env` files, private keys, `.mcp.json`, or production credentials.
- Pre-commit hook runs format check + lint. Pre-push hook runs the full gate and blocks protected branches and force pushes.
- If git reports divergence or conflicts, stop and explain — do not rewrite history.

---

## Svelte MCP tools

You have access to comprehensive Svelte 5 and SvelteKit documentation via the Svelte MCP server.

**list-sections** — Call first to discover documentation sections when asked about Svelte/SvelteKit topics.

**get-documentation** — Fetches full docs for specific sections. Fetch ALL relevant sections before implementing.

**svelte-autofixer** — Analyzes Svelte code for issues. Run before sending any Svelte code to the user; keep calling until no issues remain.

**playground-link** — Generates a Svelte Playground link. Only after user confirmation; never if code was written to project files.
