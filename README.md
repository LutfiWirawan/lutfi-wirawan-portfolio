# GIS & Fullstack Developer Portfolio

A personal portfolio website for a GIS and Fullstack developer, built with TanStack Start (React) and deployed on Netlify. Showcases projects, work experience, a technical blog, and a contact form.

## Tech Stack

- **Framework**: TanStack Start (React 19, file-based routing)
- **Styling**: Tailwind CSS v4 with a custom dark GIS-inspired theme
- **Content**: `@content-collections` for type-safe Markdown content (blog posts, projects, jobs, education)
- **Fonts**: Syne (headings), DM Sans (body), JetBrains Mono (code/coordinates)
- **Icons**: Lucide React
- **Deployment**: Netlify (SSR via `@netlify/vite-plugin-tanstack-start`)
- **Forms**: Netlify Forms (contact page)

## Routes

| Path | Description |
|------|-------------|
| `/` | Hero home page with animated GIS map visualization and skills grid |
| `/projects` | Portfolio project cards auto-populated from `content/projects/` |
| `/resume` | Work experience, education, and skills from `content/jobs/` and `content/education/` |
| `/blog` | Blog post listing from `content/blog/` |
| `/blog/:slug` | Individual blog post reader |
| `/contact.html` | Static contact page with Netlify Forms |

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Content

All content lives in the `content/` directory as Markdown files with YAML frontmatter:

- **Blog posts** → `content/blog/your-post.md`
- **Projects** → `content/projects/your-project.md`
- **Work history** → `content/jobs/your-job.md`
- **Education** → `content/education/your-school.md`

See `content-collections.ts` for the complete schema for each content type.
