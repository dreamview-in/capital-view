
# Captial View — React + Vite marketing site

Small React + Vite project for a loan/finance marketing site. The app is a multi-page React site (Vite) containing several loan product pages, shared components, and styles.

**Highlights**
- Modern React app scaffolded with Vite
- Component-based layout (`src/components`) and page views (`src/pages`)
- Responsive styling via `index.css` / `App.css`

**Project Structure (top-level)**
- `index.html` — Vite entry
- `src/` — application source
	- `main.jsx` — React entry
	- `App.jsx` — root app
	- `components/` — shared UI components (e.g., `Navbar.jsx`, `Btn.jsx`, `Form.jsx`)
	- `pages/` — page views (Home, About, Contact, various Loan pages)
- `public/` — static assets
- `package.json`, `vite.config.js`, `eslint.config.js`

**Notable pages in `src/pages`**
- `Home.jsx`, `About.jsx`, `Contact.jsx`
- Loan pages: `HomeLoan.jsx`, `PersonalLoan.jsx`, `BusinessLoan.jsx`, `CapitalLoan.jsx`, `PropertyLoan.jsx`, `MSME.jsx`, `ProfesionalLoan.jsx` (and others)

Getting started

Prerequisites:
- Node.js (recommended 16+ or newer)
- npm or yarn

Install dependencies:

```bash
npm install
# or
yarn
```

Run development server:

```bash
npm run dev
# or
yarn dev
```

Build for production:

```bash
npm run build
# or
yarn build
```

Preview production build locally:

```bash
npm run preview
# or
yarn preview
```

Contributing

- Open an issue or submit a PR with improvements. Keep changes focused and follow the existing code style.

License

This repository does not include a license file. Add a `LICENSE` if you intend to open-source the project.

---
Generated README: describes structure and how to run the app locally.
