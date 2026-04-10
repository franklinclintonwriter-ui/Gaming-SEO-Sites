# Gaming Landing Sites

This repository is a collection of published online gaming and casino landing pages. Each website is stored in its own dedicated folder, named after its domain. Every folder contains all the files needed to run that specific site — HTML, sitemap, and robots.txt.

---

## Repository Structure

```
Gaming-SEO-Sites/
└── ck444.game/
    ├── index.html       # Main landing page
    ├── sitemap.xml      # Sitemap for search engine indexing
    └── robots.txt       # Crawler instructions
```

Each new site added to this workspace follows the same pattern:

```
Gaming-SEO-Sites/
└── your-domain.com/
    ├── index.html
    ├── sitemap.xml
    └── robots.txt
```

---

## Published Sites

| Folder | Domain | Status | Platform |
|--------|--------|--------|----------|
| `ck444.game` | [ck444.game](https://ck444.game) | ✅ Live | Cloudflare Pages |

---

## How This Works

- **One folder per website.** The folder name matches the live domain exactly.
- **All site files live inside the folder.** Never place files in the root of this repo.
- **Cloudflare Pages** is connected to this repo. Every push to `main` triggers an automatic deployment.
- **Each site has its own Cloudflare Pages project** pointing to its folder as the build root.

---

## Adding a New Site

1. Create a new folder named after the domain (e.g. `newsite.com/`)
2. Add `index.html`, `sitemap.xml`, and `robots.txt` inside it
3. Push to `main`
4. Create a new Cloudflare Pages project with `root_dir` set to the folder name
5. Attach the custom domain in Cloudflare Pages
6. Update this README with the new entry in the Published Sites table

---

## Tech Stack

- **Hosting:** Cloudflare Pages (free tier)
- **DNS & CDN:** Cloudflare
- **Pages:** Static HTML — no build step required
- **Deployment:** Auto-deploy on every push to `main`

---

## Notes for AI Assistants

- This repo is managed and maintained with AI assistance.
- When adding or updating a site, always work inside the site's own folder.
- Never modify files belonging to another site's folder.
- The `main` branch is the production branch. All changes go directly to `main`.
- Cloudflare Pages root directory must match the folder name exactly.
- Each site's `sitemap.xml` must reference its own live domain, not a pages.dev URL.
