# MStreetMusic - Project Rules
> Related: [[MEMORY]] | [[decisions]] | [[payments]] | [[lessons-deploy]]

## Server (CroHost - shared hosting)
- **Host:** prohost15.crohost.net
- **User:** mstreetm, SSH key: ~/.ssh/id_rsa_mstreet (passphrase: 77hDDsSZ54Qb7ca)
- **App path:** ~/mstreetmusic-next
- **Web root:** ~/public_html (static only)
- **Runtime:** Passenger + Node.js 22
- **Restart:** `touch ~/mstreetmusic-next/tmp/restart.txt` (NIKAD pkill/kill!)

## Deploy
```bash
# UVIJEK PRVO PULL SA SERVERA
scp -i ~/.ssh/id_rsa_mstreet mstreetm@prohost15.crohost.net:~/mstreetmusic-next/FILE ./FILE.bak
# Deploy:
scp -i ~/.ssh/id_rsa_mstreet FILE mstreetm@prohost15.crohost.net:~/mstreetmusic-next/PATH
ssh -i ~/.ssh/id_rsa_mstreet mstreetm@prohost15.crohost.net "cd ~/mstreetmusic-next && npm run build && touch tmp/restart.txt"
```

## CRITICAL
- **DB path: prisma/prisma/dev.db** (nested!), NE prisma/dev.db
- **Restart: SAMO `touch tmp/restart.txt`** - pkill ubija SSH konekciju
- **NE koristiti `output: 'standalone'`** s custom server.js
- **ISR ne radi pouzdano** na Passenger - full rebuild za guaranteed update
- **CroHost deploy: server.js koristi .next/server/ i .next/static/** - ne standalone
- **Passenger cold start 2-7s** - cron warmup drzi proces toplim

## Build & Deploy Fallback
- **CroHost SIGABRT** - Remote `npm run build` moze pasti na SIGABRT (memory limit)
- **Fallback**: lokalni build + `rsync .next/` na server + `touch tmp/restart.txt`
- `rsync -avz --delete -e "ssh -i ~/.ssh/id_rsa_mstreet" .next/ mstreetm@prohost15.crohost.net:~/mstreetmusic-next/.next/`

## Static Pages (public_html)
- **Mixing Books Funnel:** `public_html/mixing-books/` - static HTML/CSS, served by Apache before Passenger
- **.htaccess:** trailing slash redirects needed for static subdirs (Passenger catches paths without trailing slash)
- **PDF update:** keep filename `home-studio-mixing-blueprint.pdf` - mail links depend on it

## Git & GitHub
- **Repo:** github.com/sinkovick/mstreetmusic-next (PUBLIC privremeno za remote trigger clone - vratiti na private kad automatizacija blog postova zavrsi)
- **Local git:** inicijaliziran 2026-04-14, main branch
- **.env NIKAD u git** - secrets u .env.example kao template
- **Security**: uklonjeni hardcoded JWT_SECRET/ADMIN_PASSWORD fallbacki (throw error ako env missing)
- **NAPOMENA**: /api/admin/* endpoints nemaju auth check (middleware stiti samo /admin UI) - known security debt, fix odgoden

## Blog Automation
- **Remote triggeri** na claude.ai/code/scheduled (Anthropic infra, 3/day plan limit)
- **Sandbox ogranicenje**: agent ne moze POST na mstreetmusic.hr - priprema JSON payload + curl komandu koju Gazda ujutro kopira lokalno
- **Source materijali**: data/carrell-transcripts.md + plans/blog-content-plan.md (u repo)
