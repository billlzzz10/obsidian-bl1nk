# Project Setup Guide

This document provides the detailed steps for setting up the `bl1nk-web-editor` project for the first time.

## Initial File Structure

Use your Git client or the GitHub web interface to create the following file structure. The contents for each file are provided in the "GitHub-First Development" section of the main `README.md`.

- `package.json`
- `turbo.json`
- `apps/studio/package.json`
- `apps/studio/next.config.mjs`
- `apps/studio/tailwind.config.ts`
- `apps/studio/app/layout.tsx`
- `apps/studio/app/page.tsx`
- `apps/studio/app/globals.css`
- `packages/ui/package.json`
- `packages/ui/tsup.config.ts`
- `packages/ui/src/index.ts`
- ... (and other shared config files)

## Deployment

1.  **Connect to Hosting:** In your Vercel or Cloudflare dashboard, import the GitHub repository.
2.  **Framework Preset:** Select "Next.js".
3.  **Root Directory:** Set this to `apps/studio`.
4.  **Build Command:** `npm run build`
5.  **Environment Variables:** Add `JSONBIN_API_KEY` as described in the main README.
6.  **Deploy:** Trigger the first deployment.
