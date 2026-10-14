# `--esbuild-plugins` is not applied to the Tailwind compatibility check

Minimal reproduction, based on `npx create-email@latest`.

`emails/greeting.tsx` imports `emails/greeting.custom`. esbuild has no loader for `.custom`, so `esbuild-plugins.mjs` loads it, and `npm run dev` passes that module with `--esbuild-plugins`.

## Steps

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000/preview/greeting in a browser.

The template renders with the text from `greeting.custom`. The terminal then logs:

```
⨯ Error: Build failed with 1 error:
emails/greeting.tsx:3:21: ERROR: No loader is configured for ".custom" files: emails/greeting.custom
```

Remove `config={tailwindConfig}` from `<Tailwind>` and restart the server. The error is gone.
