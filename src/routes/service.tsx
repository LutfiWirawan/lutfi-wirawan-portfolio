import { createFileRoute } from '@tanstack/react-router'
import { allServices } from 'content-collections'
import { ExternalLink, MessageCircle, Tractor, Route as RouteIcon, Building2, Globe, ShoppingCart, Receipt, } from 'lucide-react'

export const Route = createFileRoute('/service')({
  component: Services,
})

const categoryConfig: Record<string, { icon: React.ElementType; accent: string; label: string }> = {
  Agriculture: { icon: Tractor,      accent: '#84cc16', label: 'Agriculture GIS' },
  Fleet:       { icon: RouteIcon,    accent: '#ef4444', label: 'Fleet Tracking' },
  SmartCity:   { icon: Building2,    accent: '#f59e0b', label: 'Smart City' },
  Web:         { icon: Globe,        accent: '#22d3ee', label: 'Web Platform' },
  Ecommerce:   { icon: ShoppingCart, accent: '#a78bfa', label: 'E-Commerce' },
  POS:         { icon: Receipt,      accent: '#10d68e', label: 'Retail System' }
}

function categoryFromTags(tags: string[]) {
  if (tags.some((t) => /harvest|remote sensing|satellite|field|agriculture/i.test(t))) return 'Agriculture'
  if (tags.some((t) => /gps tracking|telemetry|mqtt|geofencing|route history/i.test(t))) return 'Fleet'
  if (tags.some((t) => /smart city|real-time monitoring|spatial analytics/i.test(t))) return 'SmartCity'
  if (tags.some((t) => /company profile|landing page|seo|branding|corporate website/i.test(t))) return 'Web'
  if (tags.some((t) => /e-commerce|shopping cart|payment gateway|order tracking/i.test(t))) return 'Ecommerce'
  if (tags.some((t) => /pos|cashier|receipt printing|sales reporting/i.test(t))) return 'POS'
  return 'Web'
}

function Services() {
  const services = allServices

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
            // CHOOSE YOUR SOLUTION
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
            Services
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
           Building scalable geospatial systems, enterprise applications, and spatial data platforms for real-world operations.
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
          {services.map((service) => {
            const cat = categoryFromTags(service.tags)
            const cfg = categoryConfig[cat] ?? categoryConfig['Fullstack']
            const Icon = cfg.icon
            const accent = cfg.accent

            return (
              <article
                key={service._meta.path}
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
                  {service.title}
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
                  {service.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {service.tags.map((tag) => (
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
                {(service.github || service.liveUrl) && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid oklch(0.15 0.025 218)',
                    }}
                  >
                    {/* Let's Talk (replace GitHub) */}
                    {service.github && (
                      <a
                        href={service.github}
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
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                      >
                        <MessageCircle size={14} />
                        Let’s Talk
                      </a>
                    )}
                    {service.liveUrl && (
                      <a
                        href={service.liveUrl}
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
