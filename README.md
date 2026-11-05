# Neha Suresh Chavan | Portfolio

Professional portfolio website of **Neha Suresh Chavan**, AI & Full Stack Developer.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Features

- **Modern Hero Interface**: Interactive developer console mockup with animated code terminal and ambient lighting.
- **Project Showcase**: Infinite auto-scrolling marquee of featured projects, with 3D interactive flip cards for client web applications.
- **Skills Matrix**: Categorized technical capabilities spanning Programming Languages, Frontend, Backend, Databases, AI & Data, and DevOps.
- **Experience & Education**: Timeline of professional software engineering experience at BRTNeura Technologies, academic achievements, and certifications.
- **Direct Resume Access**: Direct PDF download (`Neha-Suresh-Chavan-Resume.pdf`) and fallback plain text version (`neha-suresh-chavan-resume.txt`).
- **Responsive & Accessible**: Fully optimized for mobile (360px, 390px), tablet (768px portrait), laptop, and high-DPI desktop viewports.
- **SEO & Social Ready**: Complete Open Graph metadata, semantic HTML5 structure, and custom developer favicon.

---

## 🛠️ Tech Stack

- **Framework**: React 19 & React DOM 19
- **Language**: TypeScript 5.7+
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: FontAwesome Free 7
- **Bundler & Dev Server**: Vite 8
- **Deployment Platform**: Netlify

---

## 📂 Project Structure

```text
├── public/
│   ├── _redirects              # Netlify SPA redirect configuration
│   ├── anaadhi-logo.webp       # Client logo
│   ├── avadhut-logo.webp       # Client logo
│   ├── favicon.svg             # Developer-themed purple SVG favicon
│   └── neha-suresh-chavan-resume.txt # Text resume fallback
├── src/
│   ├── assets/
│   │   └── Neha-Suresh-Chavan-Resume.pdf # Full PDF resume
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles, Tailwind v4 theme, animations
│   ├── main.tsx                # Application entrypoint
│   └── vite-env.d.ts           # Vite TypeScript definitions
├── index.html                  # HTML document shell with SEO metadata
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the application locally at `http://localhost:8443/` with hot module replacement (HMR).

### Production Build

```bash
npm run build
```

Compiles TypeScript, processes Tailwind CSS, and outputs optimized static assets to the `dist/` directory.

### Preview Build

```bash
npm run preview
```

Serves the production build locally to verify deployment readiness.

---

## 🌐 Netlify Deployment

The repository includes a pre-configured `public/_redirects` rule (`/* /index.html 200`) for seamless client-side single-page routing on Netlify.

- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

## 📄 License & Attribution

Designed and built with intention for Neha Suresh Chavan. All rights reserved.
