import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Calendar, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const accentByIndex = ['#10d68e', '#22d3ee', '#fbbf24']

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              color: 'oklch(0.40 0.025 210)',
            }}
          >
            // WRITING
          </span>
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              letterSpacing: '-0.02em',
              color: 'oklch(0.88 0.015 210)',
              margin: '0.4rem 0 0.75rem',
            }}
          >
            Technical Blog
          </h1>
          <p style={{ color: 'oklch(0.52 0.040 210)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Articles on GIS development, spatial databases, web mapping, and fullstack engineering.
          </p>
        </div>

        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {posts.map((post, i) => {
            const accent = accentByIndex[i % accentByIndex.length]
            return (
              <Link
                key={post._meta.path}
                to="/blog/$slug"
                params={{ slug: post._meta.path }}
                style={{
                  display: 'block',
                  padding: '1.75rem',
                  borderRadius: '10px',
                  border: '1px solid oklch(0.17 0.030 218)',
                  background: 'oklch(0.10 0.026 218)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = `${accent}44`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.17 0.030 218)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <Calendar size={13} color="oklch(0.40 0.025 210)" />
                  <time
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
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
                      fontSize: '0.7rem',
                      color: 'oklch(0.45 0.030 210)',
                    }}
                  >
                    {post.author}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: 'oklch(0.88 0.015 210)',
                    margin: '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'oklch(0.55 0.030 210)',
                    lineHeight: 1.65,
                    margin: '0 0 1rem',
                  }}
                >
                  {post.summary}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: `${accent}12`,
                          border: `1px solid ${accent}28`,
                          color: accent,
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
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      color: accent,
                    }}
                  >
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
