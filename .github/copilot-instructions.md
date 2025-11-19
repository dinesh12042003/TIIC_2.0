<!-- Repository-specific Copilot instructions for TIIC_2.0 -->
# Copilot / AI Agent Instructions — TIIC_2.0

Purpose: make an AI coding assistant productive quickly in this repository. Focus on the two Next.js apps, where CSS/Tailwind is wired, and the dev workflows you'll need to run locally.

- **Repo layout**: two independent Next.js apps at the repo root:
  - `my-app/` — sources under `src/app/` (see `my-app/src/app/globals.css`).
  - `tiic_2.0/` — sources under `app/` (see `tiic_2.0/app/globals.css`).

- **Frameworks & versions (from `package.json`)**: Next `16.x`, React `19.x`, TypeScript present. Both apps use Tailwind v4 (`tailwindcss` + `@tailwindcss/postcss`).

- **Where CSS/Tailwind is wired**:
  - `my-app/postcss.config.mjs` and `tiic_2.0/postcss.config.mjs` register the PostCSS plugin `"@tailwindcss/postcss"`.
  - The CSS entry files are:
    - `my-app/src/app/globals.css` — contains `@import "tailwindcss";`
    - `tiic_2.0/app/globals.css` — contains `@import "tailwindcss";`
  - There is currently *no* `tailwind.config.*` file in either project (no content paths discovered).

- **Why Tailwind may not be producing CSS (common repo-specific cause)**:
  - Tailwind v4 uses the `@tailwindcss/postcss` plugin with `@import "tailwindcss";` in your CSS. However, Tailwind needs a config with `content` paths (or explicit CLI input) so the JIT/compiler knows which classes to generate. Since this repo lacks `tailwind.config.*`, the generated CSS may be empty or missing utilities.

- **Quick reproducible checks (what an agent should run)**:
  - From `my-app/`:
    - `npm install` (if not installed)
    - `npm run dev` — open http://localhost:3000 and inspect elements to see if Tailwind classes apply.
  - To quickly verify Tailwind output (local debug):
    - `npx tailwindcss -i ./src/app/globals.css -o ./public/tailwind-debug.css --minify --content "./src/app/**/*.{ts,tsx,js,jsx,mdx}"`
    - For `tiic_2.0/`: adjust input path to `./app/globals.css` and content path to `./app/**/*.{ts,tsx,js,jsx,mdx}`.

- **Minimal recommended fix (concrete example)**:
  1. Add `tailwind.config.cjs` at the project root (repeat per app if they are run separately). Example content:

```js
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}', // for `my-app`
    './app/**/*.{ts,tsx,js,jsx,mdx}',     // for `tiic_2.0`
  ],
  theme: { extend: {} },
  plugins: []
};
```

  2. Keep `@import "tailwindcss";` in `globals.css` (Tailwind v4 + `@tailwindcss/postcss` plugin is consistent with this pattern). Alternatively, you can use explicit directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

  3. Restart dev server and confirm CSS appears.

- **Important project conventions / patterns**:
  - Two separate apps live in the same repository and should be treated as independent projects for install/run tasks.
  - `my-app` places app sources under `src/app/`; `tiic_2.0` uses `app/` directly — content paths in configs must reflect this.
  - PostCSS uses an ESM config file (`postcss.config.mjs`) which exports a default object with `plugins: { "@tailwindcss/postcss": {} }`.

- **Build / dev commands**:
  - `npm run dev` — development server (inside each app directory).
  - `npm run build` / `npm run start` — production build and start.
  - `npm run lint` — run ESLint (configured via `eslint.config.mjs`).

- **Where to look for changes or CI interaction**:
  - `public/` holds static assets. Generated debugging CSS can be written there for quick verification.
  - No API routes found; logic lives in the app routes/components under `app/` or `src/app/`.

- **When making PRs, follow these practical rules**:
  - Edit the app-specific `tailwind.config.*` in that app's root and include correct `content` globs.
  - If changing CSS entrypoints, update `postcss.config.mjs` and `globals.css` together.
  - Test by running `npm run dev` and verifying generated CSS in the browser devtools.

If any of this is unclear or you want me to apply the minimal fix to one or both apps (create `tailwind.config.cjs`, adjust `globals.css`, run a local build command), tell me which app to target and I'll make the change and verify.
