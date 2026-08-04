# IntelliForceAI — Enterprise Web Platform (v1.0.0)

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-cyan)](#)
[![WCAG](https://img.shields.io/badge/WCAG-2.2_AA-success)](#)

A world-class, high-performance enterprise web application for **IntelliForceAI**, built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lucide React**.

The project is architected specifically for **100% Static Export (`output: 'export'`)** and optimized for seamless deployment to **cPanel Shared Hosting (`public_html/`)** without requiring Node.js server runtimes, server-side actions, or database backends.

---

## 🚀 Key Modules & Capabilities

- **Module 1 — Project Foundation & Architecture**: Next.js 15 App Router with static export configuration.
- **Module 2 — Enterprise Design System**: Glassmorphism (`glass-card`), HSL tokens, dark mode default, high contrast UI.
- **Module 3 — Global Layout & Navigation**: Sticky blur header, mobile drawer, multi-column mega-footer, breadcrumbs.
- **Module 4 — Hero Section**: Interactive particle mesh background, dynamic typography, CTA buttons.
- **Module 5 — Services Section**: Filterable service cards, interactive service drawer modal.
- **Module 6 — Products Showcase**: Tabbed product suite showcase (*IntelliForceAI 2.0, Sentinel Shield, BlackMarlin OMS, Vision AI*).
- **Module 7 — Why Choose Us**: Interactive feature matrix and comparison table.
- **Module 8 — Statistics & Achievements**: Animated counter counters and global telemetry milestones.
- **Module 9 — Case Studies**: Filterable enterprise case studies with impact metrics.
- **Module 10 — Testimonials**: Interactive tabbed testimonial carousel with client avatars.
- **Module 11 — Trusted By & Partners**: Animated logo marquee and enterprise partner cards.
- **Module 12 — Research & Innovation**: Interactive paper drawer modal, research timeline, citation copy.
- **Module 13 — Industries**: Sector-specific solution cards (Finance, Healthcare, Defense, Autonomous, Supply Chain, Telecom).
- **Module 14 — Team & Leadership**: Executive leadership cards with bio modals & social links.
- **Module 15 — Company Timeline**: Vertical interactive milestone roadmap.
- **Module 16 — Blog System**: Category filterable blog list, blog detail pages, reading time, share buttons.
- **Module 17 — Careers**: Job board filterable by department & location, 4-step hiring process.
- **Module 18 — Contact System**: Validated contact form with anti-spam honeypot & static PHP email backend (`public/contact.php`).
- **Module 19 — FAQ**: Category tabbed accordion with smooth Framer Motion expand/collapse animations.
- **Module 20 — Global CTA**: Premium reusable CTA component supporting 6 types & 4 background styles.
- **Module 21 — Documentation Center**: Product documentation hub with sidebar navigation, breadcrumbs, code blocks, tabs, callouts, and TOC.
- **Module 22 — Global Search**: Client-side instant search modal triggered via `⌘K` shortcut.
- **Module 23 — SEO & Structured Data**: Automated JSON-LD (`OrganizationJsonLd`), OpenGraph, `robots.txt`, `sitemap.xml`, `manifest.json`.
- **Module 24 — Accessibility & i18n**: WCAG 2.2 AA compliance, `SkipToContent`, reduced motion rules, client-side i18n (*English & Bangla*).
- **Module 25 — Performance Optimization**: SWC minification, dynamic code splitting with `next/dynamic`, lazy loading, font swap (`display: 'swap'`).
- **Module 26 — Analytics & Monitoring**: Privacy-friendly analytics manager (GA4, Clarity, Plausible, Cloudflare) and GDPR cookie consent banner.
- **Module 27 — Security & Compliance**: Apache `.htaccess` security headers (CSP, HSTS, X-Frame-Options), Privacy Policy, Terms of Service, Cookie Policy, Accessibility Statement.
- **Module 28 — Testing & QA**: Automated Node.js QA audit script (`scripts/qa-audit.mjs`), ESLint, and TypeScript validation.
- **Module 29 — Deployment**: cPanel operations manual (`DEPLOYMENT.md`), `.htaccess` caching & compression directives.
- **Module 30 — Production Release (v1.0.0)**: Final release candidate, complete component catalog, and maintenance guide.

---

## 📁 Directory Structure

```
├── app/                      # Next.js App Router static pages
│   ├── about/                # About Us page
│   ├── accessibility-statement/ # Accessibility Statement
│   ├── blog/                 # Blog listing & dynamic [slug] pages
│   ├── careers/              # Careers & Job board
│   ├── contact/              # Contact page
│   ├── cookie-policy/        # Cookie Policy
│   ├── docs/                 # Documentation Center & dynamic [slug] pages
│   ├── faq/                  # FAQ page
│   ├── industries/           # Industries page
│   ├── privacy/              # Privacy Policy
│   ├── products/             # Products showcase page
│   ├── research/             # Research papers page
│   ├── services/             # Services page
│   ├── terms/                # Terms of Service
│   ├── globals.css           # Global Tailwind CSS & animation keyframes
│   ├── layout.tsx            # Root layout with providers & SEO
│   └── page.tsx              # Homepage
├── components/               # Reusable React components
│   ├── analytics/            # AnalyticsManager & CookieConsent
│   ├── buttons/              # Custom Button & IconButton components
│   ├── cards/                # Feature, Product, Service, Blog, Doc, & Career Cards
│   ├── footer/               # Footer & FooterColumn
│   ├── layout/               # Container, Section, RootShell
│   ├── navigation/           # Header, Navbar, MobileDrawer, SearchModal, ScrollProgress
│   ├── providers/            # ThemeProvider & LanguageProvider
│   ├── search/               # SearchModal dialog
│   ├── sections/             # Modular hero, CTA, & section wrappers
│   ├── seo/                  # JSON-LD Schema scripts
│   └── ui/                   # Badge, Logo, Accordion, ImageWrapper, LanguageSwitcher
├── config/                   # Centralized JSON data configurations
│   ├── analytics.ts          # GA4 & analytics tracking settings
│   ├── blog.ts               # Blog posts dataset
│   ├── careers.ts            # Job postings dataset
│   ├── contact.ts            # Department emails & office locations
│   ├── docs.ts               # Documentation articles dataset
│   ├── faq.ts                # FAQ category items
│   ├── i18n.ts               # Locale definitions
│   ├── products.ts           # Product suite dataset
│   ├── research.ts           # Research papers dataset
│   ├── search-index.ts       # Global in-memory search aggregator
│   ├── seo.ts                # Metadata generator
│   ├── services.ts           # Service offerings dataset
│   ├── site.ts               # Site metadata & navigation links
│   └── translations.ts       # English & Bangla dictionaries
├── public/                   # Static compliance files
│   ├── .htaccess             # Apache security, caching & compression rules
│   ├── contact.php           # Static PHP contact mailer backend
│   ├── manifest.json         # Web App Manifest
│   ├── robots.txt            # Search crawler directives
│   └── sitemap.xml           # Static XML sitemap
├── scripts/                  # Build & QA tools
│   └── qa-audit.mjs          # Automated static export auditor
├── DEPLOYMENT.md             # cPanel deployment & maintenance manual
└── next.config.ts            # Next.js static export compiler configuration
```

---

## 🛠️ Local Development & Build Commands

```bash
# 1. Install Dependencies
npm install

# 2. Run Local Development Server
npm run dev

# 3. Type Checking
npx tsc --noEmit

# 4. ESLint Linting
npm run lint

# 5. Production Static Export Build
npm run build

# 6. Automated QA & Build Verification Audit
npm run test:qa
```

---

## 🌐 cPanel Shared Hosting Deployment

To deploy the production build to shared cPanel hosting (`public_html/`):

1. Execute `npm run build` locally.
2. Compress the contents of the generated `out/` directory into `deploy-v1.0.0.zip`.
3. Upload `deploy-v1.0.0.zip` to `public_html/` via **cPanel File Manager**.
4. Extract the zip file directly into `public_html/`.
5. Refer to [DEPLOYMENT.md](file:///home/miraz/Documents/intelliforceai/DEPLOYMENT.md) for full SMTP and update instructions.

---

## 🔮 Future Roadmap (Phase 2)

- **AI Search Integration**: Integrate vector embedding index for natural language search queries.
- **RTL Language Expansion**: Add Arabic and Hebrew localization options.
- **Interactive Sandbox**: Embedded WebAssembly code runner for SDK live testing in documentation pages.

---

## 📜 License & Copyright

© 2026 **IntelliForceAI Inc.** All Rights Reserved. Proprietary software.
# intelliforceai
