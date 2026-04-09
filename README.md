# AI Resume Builder

A modern resume building web app with a polished multi-page experience for:

- marketing and onboarding users,
- selecting ATS-friendly templates,
- drafting resume content with an AI-assistant workflow,
- previewing and exporting resumes.

Built with Next.js App Router, React 19, and Tailwind CSS v4.

## Table of Contents

- [Overview](#overview)
- [Current Status](#current-status)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [App Routes](#app-routes)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Go-Live Checklist](#go-live-checklist)
- [Known Limitations](#known-limitations)
- [Roadmap](#roadmap)
- [License](#license)

## Overview

AI Resume Builder is designed to help users create job-ready resumes with a guided, friendly UI. The product flow includes:

1. Landing page and value proposition
2. Authentication pages (login/register UI)
3. Onboarding form for profile details
4. Template browsing
5. Resume builder workspace with AI assistant panel and live preview
6. User dashboard for managing resumes

## Current Status

This repository is currently a frontend MVP/prototype.

- Core pages and navigation are implemented.
- UI is responsive and styled with Tailwind CSS.
- Data shown in dashboard, templates, and builder is currently static/mock.
- Authentication, database persistence, and AI API integration are not yet wired in.

This makes it suitable for a public UI demo and iterative product launch.

## Key Features

- Marketing landing page with feature highlights and conversion CTAs
- Registration and login interfaces
- Multi-step onboarding UI for profile capture
- Dashboard with quick actions and resume cards
- Template gallery with multiple visual styles and filtering controls
- Resume builder workspace:
	- AI chat-style assistant panel
	- job description input area
	- live resume preview panel
	- export/download action placeholders

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Linting | ESLint 9 + eslint-config-next |
| Language | JavaScript (ES Modules) |

## Project Structure

```text
resume-builder/
	public/
	src/
		app/
			builder/
				page.js
			dashboard/
				page.js
			login/
				page.js
			onboarding/
				page.js
			register/
				page.js
			templates/
				page.js
			globals.css
			layout.js
			page.js
	eslint.config.mjs
	jsconfig.json
	next.config.mjs
	postcss.config.mjs
	package.json
	README.md
```

## App Routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Landing page and product marketing | Implemented |
| `/register` | User sign-up interface | Implemented (UI only) |
| `/login` | User sign-in interface | Implemented (UI only) |
| `/onboarding` | Profile setup form | Implemented (UI only) |
| `/dashboard` | Resume management dashboard | Implemented (static data) |
| `/templates` | Template browsing and selection | Implemented (static data) |
| `/builder` | AI-assisted resume editing workspace | Implemented (static data) |

## Getting Started

### Prerequisites

- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm 9+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Note for some Windows PowerShell setups: if script execution is restricted, use:

```bash
npm.cmd run dev
```

## Available Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts local development server |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Starts production server after build |
| `npm run lint` | Runs ESLint checks |

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Push this project to GitHub.
2. Go to Vercel and import the repository.
3. Keep defaults for a Next.js project.
4. Click Deploy.
5. Add your custom domain in Vercel project settings.

Vercel handles build, hosting, HTTPS, and CDN by default.

### Option 2: Self-Hosted Node Server

Build and run production locally or on a VM:

```bash
npm run build
npm run start
```

The app will run in production mode on port 3000 by default.

## Go-Live Checklist

Before announcing publicly, verify the following:

- Update global metadata title/description for SEO in `src/app/layout.js`
- Replace placeholder/mock content with real user data sources
- Wire authentication flows for register/login/logout
- Connect onboarding form submissions to backend storage
- Implement AI content generation backend integration
- Implement actual PDF/DOC export pipeline
- Add error states, loading states, and form validation messages
- Add privacy policy and terms pages linked from auth screens
- Add analytics and monitoring (for example: Vercel Analytics, Sentry)
- Run lint and production build successfully

## Known Limitations

- No backend/API integration in this snapshot
- No persistent user/session data
- No real AI API calls yet
- No complete export implementation yet

## Roadmap

- Integrate authentication provider (NextAuth or custom auth)
- Add database models for users, resumes, and templates
- Add AI provider integration for content generation and resume optimization
- Add autosave and version history for resumes
- Add complete export support (PDF/DOCX)
- Add profile and settings pages referenced by dashboard navigation
- Add test coverage (unit and end-to-end)

## License

MIT License

Copyright (c) 2025 Fahad Ali
