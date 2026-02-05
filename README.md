# CA Agent MVP (Google-Native)

## Overview
CA Agent is a Google Workspace-native contract administration copilot for Australian SME contractors. It ingests correspondence, classifies it into CA types (RFI/EOT/Variation/etc), writes registers, generates draft notices, and tracks time bars.

## Tech stack
- Next.js (App Router) + TypeScript + Tailwind
- Prisma + SQLite (swap to Postgres/Supabase for production)
- Google APIs (Gmail/Drive/Sheets/Docs) via integration modules

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create `.env`:
```
DATABASE_URL="file:./dev.db"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GOOGLE_REDIRECT_URI="http://localhost:3000/api/auth/callback"
GOOGLE_ALLOWED_DOMAINS="yourcompany.com"
```

### 3) Prisma setup
```bash
npm run prisma:generate
npm run prisma:migrate
```

### 4) Run locally
```bash
npm run dev
```

## Google Cloud OAuth configuration
1. Create a Google Cloud project and OAuth consent screen.
2. Enable APIs: Gmail API, Google Drive API, Google Sheets API, Google Docs API.
3. Create OAuth credentials for a web app.
4. Add the redirect URI from `.env` (e.g. `http://localhost:3000/api/auth/callback`).
5. Limit scopes to least privilege:
   - Gmail readonly + modify label
   - Drive file access limited to selected folder
   - Sheets/Docs write scopes

## Project setup flow (MVP)
1. Connect Google account (stubbed in `/login`).
2. Create project via `/api/demo` (or extend with real Drive/Sheets creation).
3. Ingest correspondence via `POST /api/ingest`.
4. Register entries via `POST /api/register`.
5. View alerts via `GET /api/alerts`.

## Demo mode
If Google APIs are not connected:
1. `POST /api/demo` to create a demo project.
2. Run `npm run demo:seed` to add sample correspondence.

## Key folders
- `src/lib/google/*`: Google API integration stubs.
- `src/lib/classifier.ts`: Deterministic classification fallback.
- `prisma/schema.prisma`: Core data model for projects, correspondence, registers, drafts, alerts.

## Next steps (production)
- Replace stubs with Google API clients (OAuth token storage, Drive/Docs/Sheets/Gmail calls).
- Add background job runner for ingestion + alerts.
- Configure Postgres + Supabase for multi-tenant production.
