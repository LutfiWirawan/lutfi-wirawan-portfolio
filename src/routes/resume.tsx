import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
      }}
    >
      <h2
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: '1.6rem',
          color: 'oklch(0.88 0.015 210)',
          letterSpacing: '-0.01em',
          margin: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </h2>
      <div style={{ flex: 1, height: '1px', background: 'oklch(0.17 0.030 218)' }} />
    </div>
  )
}

function Tag({ children, accent = '#10d68e' }: { children: React.ReactNode; accent?: string }) {
  return (
    <span
      style={{
        background: `${accent}10`,
        border: `1px solid ${accent}28`,
        color: accent,
        fontSize: '0.68rem',
        padding: '0.2rem 0.6rem',
        borderRadius: '9999px',
        fontFamily: 'JetBrains Mono, monospace',
        letterSpacing: '0.03em',
        cursor: 'default',
      }}
    >
      {children}
    </span>
  )
}

function Resume() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Page header */}
        <div
          style={{
            marginBottom: '3.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid oklch(0.17 0.030 218)',
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              color: 'oklch(0.40 0.025 210)',
            }}
          >
            // CURRICULUM VITAE
          </span>
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              letterSpacing: '-0.025em',
              color: 'oklch(0.88 0.015 210)',
              margin: '0.4rem 0 1.5rem',
              lineHeight: 1.05,
            }}
          >
           Muhammad Lutfi <span style={{ color: '#10d68e' }}>Wirawan</span>
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '2rem',
              alignItems: 'start',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'oklch(0.60 0.025 210)',
                margin: 0,
                maxWidth: '520px',
              }}
            >
              Fullstack and GIS developer with 5+ years building spatial web applications,
              geoportal platforms, and data-driven mapping solutions. Proficient across the
              entire stack — from PostGIS spatial queries and GeoServer configuration to
              interactive LeafletJS and MapLibre front-ends deployed via Laravel or Next.js.
              Passionate about making geographic data accessible and actionable through
              thoughtfully engineered interfaces.
            </p>
            <img
              src="/headshot-on-white.jpg"
              alt="Lutfi Wirawan"
              style={{
                width: '100px',
                height: '120px',
                borderRadius: '10px',
                objectFit: 'cover',
                border: '1px solid oklch(0.19 0.030 218)',
                filter: 'brightness(0.9) contrast(1.05)',
              }}
            />
          </div>
        </div>

        {/* Work Experience */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionLabel>Work Experience</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {allJobs.map((job) => (
              <div
                key={job.jobTitle + job.company}
                style={{
                  background: 'oklch(0.10 0.026 218)',
                  border: '1px solid oklch(0.17 0.030 218)',
                  borderRadius: '10px',
                  padding: '1.6rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'oklch(0.88 0.015 210)',
                        margin: '0 0 0.3rem',
                      }}
                    >
                      {job.jobTitle}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.78rem',
                        color: '#10d68e',
                        margin: 0,
                      }}
                    >
                      {job.company}
                      <span style={{ color: 'oklch(0.45 0.030 210)', marginLeft: '0.5rem' }}>
                        — {job.location}
                      </span>
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      color: 'oklch(0.45 0.030 210)',
                      background: 'oklch(0.15 0.025 218)',
                      border: '1px solid oklch(0.19 0.030 218)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {job.startDate} — {job.endDate ?? 'Present'}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'oklch(0.60 0.025 210)',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                  }}
                >
                  {job.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: job.content ? '1rem' : 0 }}>
                  {job.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {job.content && (
                  <div
                    className="prose prose-sm max-w-none"
                    style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid oklch(0.15 0.025 218)' }}
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionLabel>Education</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {allEducations.map((edu) => (
              <div
                key={edu.school}
                style={{
                  background: 'oklch(0.10 0.026 218)',
                  border: '1px solid oklch(0.17 0.030 218)',
                  borderRadius: '10px',
                  padding: '1.6rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'oklch(0.88 0.015 210)',
                      margin: 0,
                    }}
                  >
                    {edu.school}
                  </h3>
                  {(edu.startDate || edu.endDate) && (
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.7rem',
                        color: 'oklch(0.45 0.030 210)',
                        background: 'oklch(0.15 0.025 218)',
                        border: '1px solid oklch(0.19 0.030 218)',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '6px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {edu.startDate} — {edu.endDate ?? 'Present'}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'oklch(0.60 0.025 210)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {edu.summary}
                </p>
                {edu.content && (
                  <div
                    className="prose prose-sm max-w-none"
                    style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid oklch(0.15 0.025 218)' }}
                    dangerouslySetInnerHTML={{ __html: marked(edu.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills summary */}
        <section>
          <SectionLabel>Core Skills</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                category: 'Frontend',
                accent: '#22d3ee',
                skills: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
              },
              {
                category: 'Backend',
                accent: '#10d68e',
                skills: ['PHP', 'Laravel', 'Node.js', 'REST API'],
              },
              {
                category: 'GIS / Mapping',
                accent: '#10d68e',
                skills: ['LeafletJS', 'Mapbox GL', 'MapLibre', 'GeoServer', 'GeoJSON', 'WMS/WFS'],
              },
              {
                category: 'Databases',
                accent: '#fbbf24',
                skills: ['PostGIS', 'PostgreSQL', 'MySQL', 'SQLite'],
              },
            ].map(({ category, accent, skills }) => (
              <div
                key={category}
                style={{
                  background: 'oklch(0.10 0.026 218)',
                  border: '1px solid oklch(0.17 0.030 218)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    color: accent,
                    marginBottom: '0.85rem',
                  }}
                >
                  {category.toUpperCase()}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {skills.map((s) => (
                    <Tag key={s} accent={accent}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
