import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'oklch(0.88 0.015 210)',
              marginBottom: '1rem',
            }}
          >
            Post not found
          </h1>
          <Link
            to="/blog"
            style={{ color: '#10d68e', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'oklch(0.52 0.040 210)',
            textDecoration: 'none',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
            fontSize: '0.875rem',
            marginBottom: '2.5rem',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#10d68e')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.52 0.040 210)')}
        >
          <ArrowLeft size={15} />
          Back to blog
        </Link>

        <article>
          <header style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid oklch(0.17 0.030 218)' }}>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                letterSpacing: '-0.02em',
                color: 'oklch(0.88 0.015 210)',
                margin: '0 0 1.25rem',
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.25rem',
              }}
            >
              <Calendar size={13} color="oklch(0.40 0.025 210)" />
              <time
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'oklch(0.45 0.030 210)',
                }}
              >
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span style={{ color: 'oklch(0.30 0.020 210)' }}>·</span>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'oklch(0.45 0.030 210)',
                }}
              >
                {post.author}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'oklch(0.74 0.19 162 / 0.08)',
                    border: '1px solid oklch(0.74 0.19 162 / 0.22)',
                    color: '#10d68e',
                    fontSize: '0.68rem',
                    padding: '0.18rem 0.55rem',
                    borderRadius: '9999px',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}
