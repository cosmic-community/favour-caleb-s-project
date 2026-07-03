# Favour Caleb's Project

![App Preview](https://imgix.cosmicjs.com/b9ebd240-771e-11f1-af5d-39f47753a5ca-autopilot-photo-1523726491678-bf852e717f6a-1783110927702.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning, modern graphic design portfolio website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase creative projects, filter by category, and present your design work with elegant, responsive galleries.

## Features

- 🎨 **Beautiful Portfolio Gallery** — Browse graphic design projects in an elegant grid layout
- 🏷️ **Category Filtering** — Organize and filter projects by category
- 📱 **Fully Responsive** — Perfect on mobile, tablet, and desktop
- 🖼️ **Optimized Images** — Fast-loading, high-resolution imagery via imgix
- ✨ **Project Detail Pages** — Rich project views with client info, galleries, and completion dates
- ⚡ **Server-Side Rendering** — Fast initial loads powered by Next.js App Router
- 🔍 **SEO Optimized** — Proper metadata for every page

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a481cd5bc97f04ea218a52f&clone_repository=6a481da9bc97f04ea218a565)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Graphic design"

### Code Generation Prompt

> Build a Next.js application for a website called "Favour Caleb's Project". The content is managed in Cosmic CMS with the following object types: categories, projects. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Graphic design

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js 18+
- A Cosmic account with a bucket containing `categories` and `projects` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (see below)
4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Set the following in your hosting platform or a local `.env` file (never commit this):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with connected category data
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single project
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)

// Fetch all categories
const { objects: categories } = await cosmic.objects
  .find({ type: 'categories' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application reads content from two Cosmic object types:

- **Categories** (`categories`) — with `name` and `description` metafields
- **Projects** (`projects`) — with `title`, `description`, `client`, `category` (connected object), `main_image`, `gallery`, and `completion_date` metafields

The app uses the `depth` parameter to resolve connected category objects directly within project queries. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/)
3. Add the environment variables
4. Deploy

### Netlify

1. Connect your repository in [Netlify](https://netlify.com/)
2. Set build command to `bun run build`
3. Add environment variables
4. Deploy

<!-- README_END -->