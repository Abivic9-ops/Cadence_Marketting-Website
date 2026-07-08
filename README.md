# Cadence

A responsive marketing website for a fictional habit building brand, built with Next.js and Tailwind CSS. The design focuses on utility first styling for rapid development and production quality layouts.

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Requirements Checklist](#requirements-checklist)
- [Getting Started](#getting-started)
- [Build and Deployment](#build-and-deployment)
- [Section Details](#section-details)
  - [Navigation](#navigation)
  - [Hero](#hero)
  - [Features](#features)
  - [Pricing](#pricing)
  - [Testimonials](#testimonials)
  - [Footer](#footer)

---

## Features

- Fully responsive design with mobile first breakpoints
- Utility first styling using Tailwind CSS
- Static site generation for fast page loads
- Accessible interactive elements with hover and focus states
- Semantic HTML structure for SEO
- Dark theme with consistent color palette

---

## Technology Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4 with PostCSS
- **UI Primitives:** Base UI React (Radix)
- **Icons:** Lucide React
- **Animation Utilities:** Class Variance Authority, Tailwind Merge
- **Language:** TypeScript with strict mode

---

## Project Structure

```
src/
  app/
    globals.css          Global styles and Tailwind theme configuration
    layout.tsx           Root layout with font and metadata
    page.tsx             Home page composing all sections
  components/
    navbar.tsx           Responsive navigation with mobile menu
    hero.tsx             Hero section with CTA and habit preview
    features.tsx         Three column feature grid
    pricing.tsx          Pricing tier cards
    testimonials.tsx     Customer testimonial cards
    footer.tsx           Site footer with links and newsletter form
    ui/
      button.tsx         Reusable button component
      input.tsx          Reusable input component
      badge.tsx          Reusable badge component
      card.tsx           Reusable card component with header, footer, content
  lib/
    utils.ts             cn utility for class merging
```

---

## Requirements Checklist

### Tailwind CSS Installation

Tailwind CSS is installed via npm as a project dependency. The configuration uses PostCSS with `@tailwindcss/postcss` for processing. The `@tailwind` directive is imported in `globals.css` at the application entry point. The `tailwindcss-animate` plugin is included for animation support.

### Hero Section

The hero section includes a headline with gradient accent text, a supporting description paragraph, a call to action button, a habit preview card showing daily progress with visual streak indicators, and a social proof section displaying user avatars with rating and review count. The layout centers all content using `mx-auto` and `max-w` utilities with responsive text sizing.

### Features Section (3 Column Grid)

Three feature cards display in a responsive grid arrangement. On small screens, cards stack in a single column. On medium screens (`sm:`), the grid uses two columns. On large screens (`lg:`), the grid expands to three columns. Each card contains an icon, heading, description, and a "Learn more" link with hover animation. Cards include hover lift effects and focus visible ring indicators.

### Pricing Cards

Three pricing tiers (Free, Pro, Team) are presented in a responsive card grid. The grid transitions from single column on mobile to two columns on medium screens (`md:`) to three columns on large screens (`lg:`). The Pro plan is visually highlighted with a gradient background, scale effect, and a "Most popular" badge. Each card lists plan features with checkmarks and includes a styled call to action button with hover and focus states.

### Footer

The footer is organized into a five column responsive grid. The first column spans two columns on all sizes and contains the brand logo, description, and social media icon links. Three middle columns display Product, Company, and Support link groups. The last column contains a newsletter signup form with email input and subscribe button wrapped in a form element. A copyright notice appears at the bottom with a top border separator.

### Responsive Breakpoints

The design uses three responsive breakpoints throughout:
- `sm:` at 640px for tablet adjustments
- `md:` at 768px for medium screen layouts
- `lg:` at 1024px for desktop layouts

Responsive utilities are applied to typography (`text-4xl` to `sm:text-5xl` to `md:text-6xl` to `lg:text-7xl`), spacing (`px-4` to `sm:px-6`), padding (`py-20` to `lg:py-28`), grid columns (`grid-cols-1` to `sm:grid-cols-2` to `lg:grid-cols-3`), visibility (`hidden` to `md:flex`), and component specific layouts.

### Hover and Focus States

Every interactive element across the site includes hover and focus visible states:

- **Navigation links:** Hover changes text color to white. Focus visible shows an indigo ring.
- **Buttons:** Hover triggers scale transform and shadow intensity increase. Focus visible shows an indigo ring with offset.
- **Feature cards:** Hover lifts the card with translate Y and adds border highlight and shadow. Focus visible shows an indigo ring.
- **Pricing cards:** Hover lifts the card with translate Y and shadow. Focus visible shows an indigo ring.
- **Testimonial cards:** Hover brightens background and border. Focus visible shows an indigo ring.
- **Social links:** Hover changes border, background, and text color. Focus visible shows an indigo ring.
- **Footer links:** Hover lightens text color. Focus visible shows an indigo ring.
- **Logo links:** Hover reduces opacity. Focus visible shows an indigo ring.
- **Mobile menu button:** Hover changes icon color to indigo. Focus visible shows an indigo ring.
- **Form input:** Focus visible highlights border and shows indigo ring shadow.

### Layout and Spacing

All sections use `mx-auto max-w-7xl` for centered content with maximum width constraint. Padding utilities create consistent section spacing (`px-4` on mobile, `sm:px-6` on tablet). Vertical spacing uses Tailwind spacing scale (`py-20` to `lg:py-28`). Gap utilities control grid and flex spacing (`gap-6`, `gap-8`, `gap-10`). Stack spacing uses margin utilities (`mt-6`, `mb-4`, `space-y-3`).

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The development server supports hot module replacement for instant updates.

### Build

```bash
npm run build
```

Produces an optimized static export in the `.next` directory.

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Build and Deployment

The site builds as a fully static application (all pages prerendered as static HTML). No server side rendering is required. This makes deployment straightforward on any static hosting platform including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Netlify Deployment

1. Push the repository to GitHub.
2. Log in to Netlify and select "New site from Git".
3. Choose the repository and set build command to `npm run build`.
4. Set publish directory to `.next`.
5. Deploy.

### GitHub Pages Deployment

1. Add `output: "export"` to `next.config.ts`.
2. Run `npm run build`.
3. Deploy the `out` folder to GitHub Pages.

---

## Section Details

### Navigation

The navigation bar is fixed at the top of the viewport with a backdrop blur effect. On desktop screens, it displays inline navigation links and login/start buttons. On mobile screens, these elements are hidden and a hamburger menu button appears. Tapping the hamburger button reveals a full width mobile menu with all navigation options and a full width start button.

### Hero

The hero section presents the brand value proposition with a large gradient accented heading, supporting description, and a primary call to action button. Below the main content, a "Today's progress" card previews the habit tracking interface with sample habit rows showing completion dots and streak counters. Social proof is displayed below with avatar circles and a star rating.

### Features

The features section presents three product capabilities in a responsive card grid. Each card is a clickable element with an icon, title, description, and a "Learn more" link. Cards include hover lift animations and focus visible ring indicators for keyboard navigation.

### Pricing

The pricing section presents three plan options in a responsive card grid. The middle Pro plan is highlighted as the recommended option with a gradient background, scale increase, and a "Most popular" badge. Each plan card lists its included features with checkmark icons. Buttons at the bottom of each card include hover scale effects and focus visible rings.

### Testimonials

The testimonials section displays customer reviews in a two column layout on large screens. The left column contains the section heading with a description and user avatar group. The right column lists individual testimonial cards with quotes, user avatars, names, and verification badges. Cards include hover background and border effects.

### Footer

The footer contains brand information, navigation link groups, social media icon links, and a newsletter subscription form. The layout uses a responsive grid that adapts from single column on mobile to five columns on desktop. The newsletter form includes an email input field with a subscribe button, wrapped in an accessible form element.

---

## License

This project is for educational purposes as part of a responsive web development exercise.
