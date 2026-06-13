import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github, Map, Globe, Server, Code2 } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const categoryConfig: Record<string, { icon: React.ElementType; accent: string; label: string }> = {
  GIS:       { icon: Map,    accent: '#10d68e', label: 'GIS / Mapping' },
  Fullstack: { icon: Code2,  accent: '#22d3ee', label: 'Fullstack' },
  Backend:   { icon: Server, accent: '#fbbf24', label: 'Backend' },
  Geoportal: { icon: Globe,  accent: '#a78bfa', label: 'Geoportal' },
}

function categoryFromTags(tags: string[]) {
  if (tags.some((t) => /geoportal/i.test(t))) return 'Geoportal'
  if (tags.some((t) => /leaflet|mapbox|maplibre|geoserver|gis|spatial|postgis/i.test(t))) return 'GIS'
  if (tags.some((t) => /laravel|php|backend|api/i.test(t))) return 'Backend'
  return 'Fullstack'
}

function Projects() {
  const projects = allProjects

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              color: 'oklch(0.40 0.025 210)',
            }}
          >
            // SELECTED WORK
          </span>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              letterSpacing: '-0.02em',
              color: 'oklch(0.88 0.015 210)',
              margin: '0.4rem 0 0.75rem',
            }}
          >
            Projects
          </h1>
          <p
            style={{
              color: 'oklch(0.52 0.040 210)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: '560px',
              margin: 0,
            }}
          >
            A selection of geospatial applications, map dashboards, geoportals, and fullstack
            systems built across professional engagements and personal exploration.
          </p>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {projects.map((project) => {
            const cat = categoryFromTags(project.tags)
            const cfg = categoryConfig[cat] ?? categoryConfig['Fullstack']
            const Icon = cfg.icon
            const accent = cfg.accent

            return (
              <article
                key={project._meta.path}
                className="card-lift"
                style={{
                  background: 'oklch(0.10 0.026 218)',
                  border: '1px solid oklch(0.17 0.030 218)',
                  borderRadius: '12px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: `${accent}14`,
                      border: `1px solid ${accent}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} color={accent} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      color: accent,
                      background: `${accent}10`,
                      border: `1px solid ${accent}22`,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {cfg.label}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'oklch(0.88 0.015 210)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'oklch(0.55 0.030 210)',
                    lineHeight: 1.65,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `${accent}0d`,
                        border: `1px solid ${accent}22`,
                        color: accent,
                        fontSize: '0.67rem',
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

                {/* Links */}
                {(project.github || project.liveUrl) && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid oklch(0.15 0.025 218)',
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.8rem',
                          fontFamily: 'Syne, sans-serif',
                          fontWeight: 600,
                          color: 'oklch(0.52 0.040 210)',
                          textDecoration: 'none',
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.88 0.015 210)')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.52 0.040 210)')}
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.8rem',
                          fontFamily: 'Syne, sans-serif',
                          fontWeight: 600,
                          color: accent,
                          textDecoration: 'none',
                          transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
