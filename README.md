# Comptech Enterprises — Corporate Website

A modern, animated enterprise website for Comptech Enterprises, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
comptech/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── about/
│   ├── ai-solutions/
│   ├── blog/
│   ├── case-studies/
│   ├── contact/
│   ├── partners/
│   └── services/
├── components/
│   ├── home/             # Home page sections
│   │   ├── Hero.tsx
│   │   ├── AISection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── PartnersStrip.tsx
│   │   ├── ContactSection.tsx
│   │   └── CTABanner.tsx
│   ├── layout/           # Persistent layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingActions.tsx
│   ├── sections/         # Shared page sections
│   │   └── PageHero.tsx
│   └── ui/               # Reusable UI primitives
│       ├── Counter.tsx
│       ├── Logo.tsx
│       ├── RevealWrapper.tsx
│       └── SectionLabel.tsx
├── lib/                  # Utilities and helpers
├── public/               # Static assets
└── styles/               # Global styles
```

## Pages

- **Home** — Hero, AI solutions, services, case studies, testimonials, partners, stats, contact
- **About** — Company overview and team
- **Services** — Full service offering breakdown
- **AI Solutions** — AI division details
- **Case Studies** — Client success stories
- **Blog** — Articles and insights
- **Partners** — Partner network
- **Contact** — Contact form and details
