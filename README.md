# Thesar Ramadhani — Portfolio

A responsive, animated personal portfolio built from the **Portfolio 8 - REP** Figma design as part of the WPH Bootcamp *Slicing Portfolio Challenge*.

**Live demo:** https://portofolio-thesar1305.vercel.app

## Features

- Pixel-faithful slicing of the Figma design for desktop (1440 px) and mobile (393 px), with tuned tablet layouts in between.
- Sections: Hero, Services, About, Skills, Why Choose Me, Selected Work, FAQ, and Contact.
- Smooth animations with Framer Motion: staggered hero entrance, scroll-reveal, animated skill bars, hover effects, mobile menu transitions. Animations respect `prefers-reduced-motion`.
- Working contact form: a Next.js API route validates the input and sends it by email through [Resend](https://resend.com), with a honeypot field against bots and success/failure dialogs.
- Optimized images with `next/image`, per-page metadata, Open Graph preview image, and a custom favicon.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack) and React 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 with design tokens taken from Figma
- [shadcn/ui](https://ui.shadcn.com) (Radix) and [lucide-react](https://lucide.dev) / [react-icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com) for email delivery
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
git clone https://github.com/thesar1305/portofolio-thesar1305.git
cd portofolio-thesar1305
git checkout portofolio
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev
```

Open http://localhost:3000.

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from your Resend account. |
| `CONTACT_TO_EMAIL` | yes | Inbox that receives the contact form messages. |
| `CONTACT_FROM_EMAIL` | no | Verified sender address. Defaults to Resend's `onboarding@resend.dev`, which can only deliver to the email of the Resend account owner. |

These are server-side secrets. Never prefix them with `NEXT_PUBLIC_` and never commit `.env.local`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production build. |
| `npm run lint` | Lint the code with ESLint. |

## Project structure

```text
app/
  api/contact/route.ts   # Contact form endpoint (validation + Resend)
  layout.tsx             # Fonts, metadata, header/footer
  page.tsx               # Page composition
components/
  layout/                # Header, Footer
  motion/                # Reveal helpers (Framer Motion)
  sections/              # One file per page section
  ui/                    # shadcn/ui primitives and small shared pieces
lib/                     # Site constants and utilities
public/images/           # Optimized static assets and project thumbnails
```

## Featured projects

| Project | Stack | Access |
| --- | --- | --- |
| Sociality | Next.js, REST API | Public sign-up |
| SIMANKAR | React, PHP/MySQL, Firebase Auth | Login required (internal HR and asset system) |
| Aplikasi Telur | PHP, MySQL, Bootstrap 5 | Login required (internal business app) |
| Movie Explorer | React, Vite, TMDB API | Public |

Thumbnails of internal systems use masked or dummy data.

## Credits

Design: *Portfolio 8 - REP* (Figma), provided by the WPH Bootcamp. Implementation by Thesar Ramadhani.
