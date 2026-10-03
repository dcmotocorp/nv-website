# NV Infotech — static marketing site

A static React site for **NV Infotech** (founder: Navdeep Sharma), an engineering firm
working across trading technology, cybersecurity, AI and data, cloud/platform and
product engineering.

The visual language is taken from the supplied `MediCore Login.dc.html` reference —
warm cream canvas, terracotta accent, Source Serif 4 headings over Instrument Sans
body text, 10–16px radii and the same soft card shadows. The reference file is kept
in [reference/](reference/) for comparison.

## Running it

```bash
npm install
npm run dev       # dev server on http://localhost:5173
npm run build     # static output into dist/
npm run preview   # serve the built output
```

Output is a fully static bundle in `dist/` — no server-side runtime required.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, stats, services, featured work, process, industries, testimonials, insights |
| `/services` | Services overview, engagement models, delivery process |
| `/services/:slug` | Six service detail pages (capabilities, engagement shape, FAQs, related work) |
| `/projects` | Case-study index with category filtering |
| `/projects/:slug` | Eight case-study detail pages (problem, approach, scope, outcome, quote) |
| `/industries` | Six sectors plus the regulatory frameworks we deliver against |
| `/about` | Story, values, timeline, leadership, offices, references |
| `/insights` | Article index with topic filtering |
| `/insights/:slug` | Six long-form articles |
| `/careers` | Culture, perks, six open roles, hiring process |
| `/contact` | Enquiry form, contact routes, offices, office hours |
| `/login` | Standalone client portal sign-in — the direct port of the design reference |
| `*` | 404 |

## Structure

```
src/
  data/          all site copy lives here — edit these, not the components
    site.js        company facts, navigation, offices, stats, clients
    services.js    six services with capabilities, stack, engagement, FAQs
    projects.js    eight case studies
    insights.js    six articles (body is a block array: {p}, {h}, {list}, {quote})
    company.js     values, timeline, leadership, industries, process, roles, perks
  components/    Header, Footer, Logo, Icon, ui.jsx (primitives), cards.jsx
  pages/         one file per route
  styles/global.css   design tokens and shared classes
```

Content is deliberately separated from presentation: to change copy, add a case
study or post an article, edit the relevant file under `src/data/` — the pages,
filters, related-content links and navigation all derive from it.

### Design tokens

All colour, type and shadow values are CSS custom properties on `:root` in
[src/styles/global.css](src/styles/global.css). Re-theming the site means editing
that one block.

## Deploying

Live at **https://dcmotocorp.github.io/nv-website/**

### How it is published today

GitHub Actions is currently blocked on this account — workflow runs fail
immediately with *"the job was not started because your account is locked due to
a billing issue"* — so the site is published through branch-based GitHub Pages,
which needs no Actions minutes.

Pages is set to **Deploy from a branch → `main` / `docs`**, and `docs/` holds the
committed production build.

**To publish a change:**

```bash
npm run build:pages   # writes the production build into docs/
git add docs && git commit -m "Rebuild site" && git push
```

Pages picks it up within a minute or two.

### Switching back to GitHub Actions

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) is ready and
builds from source — it is just reduced to a manual trigger so it stops failing
on every push. Once Actions billing is resolved:

1. Settings → Pages → Source → **GitHub Actions**.
2. Uncomment the `push:` trigger in the workflow.
3. Delete `docs/` and the `build:pages` script — they are no longer needed.

### What makes routing work on Pages

- `vite.config.js` sets `base` to `/nv-website/` so assets resolve under the
  project-site subpath, and `BrowserRouter` picks that up via `basename`.
- Pages has no SPA rewrite rule, so the build emits `404.html` as a copy of
  `index.html`. A deep link such as `/nv-website/about` is served that file (with
  a 404 status), the app boots with the address bar intact, and the router
  renders the right page.

### Other hosts

Set `BASE_PATH=/` at build time for a root domain:

```bash
BASE_PATH=/ npm run build
```

- **Netlify** — `public/_redirects` is already included.
- **Vercel** — `vercel.json` is already included.
- **Nginx** — `try_files $uri $uri/ /index.html;`

## Note on content

This is a demonstration build. The company details, client names, case studies,
metrics, certifications and registration numbers are **illustrative sample
content** and should be replaced with real information before the site goes live.
The footer carries a visible disclaimer to that effect — remove it once real
content is in place.

The contact and login forms validate in the browser but have no backend; both
show an explicit notice saying so rather than pretending to submit.
