import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

/* ─── Animated coordinate-grid SVG ─────────────────────────── */
function MapVisualization() {
  const gridLines = {
    h: [38, 76, 114, 152, 190, 228, 266, 304, 342],
    v: [50, 100, 150, 200, 250, 300, 350, 400, 450],
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid oklch(0.19 0.030 218)',
        position: 'relative',
      }}
    >
      <svg
        viewBox="0 0 500 380"
        style={{ width: '100%', height: '100%', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="500" height="380" fill="#030c18" />

        {/* Subtle diagonal topo pattern */}
        <defs>
          <pattern id="topo" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="12" x2="24" y2="12" stroke="#051828" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="500" height="380" fill="url(#topo)" />

        {/* Grid lines – horizontal */}
        {gridLines.h.map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="500" y2={y} stroke="#0c2e4a" strokeWidth="0.6" />
        ))}
        {/* Grid lines – vertical */}
        {gridLines.v.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="380" stroke="#0c2e4a" strokeWidth="0.6" />
        ))}

        {/* Topographic contour lines */}
        <path
          d="M 0,180 C 60,160 130,175 200,168 S 340,150 420,162 S 470,168 500,165"
          fill="none" stroke="#0d7a60" strokeWidth="1.2" opacity="0.5" strokeDasharray="5,4"
        />
        <path
          d="M 0,210 C 70,195 140,205 210,200 S 350,185 430,197 S 480,200 500,198"
          fill="none" stroke="#0d7a60" strokeWidth="1" opacity="0.4" strokeDasharray="5,4"
        />
        <path
          d="M 0,240 C 80,230 150,238 220,233 S 360,220 440,230 S 490,233 500,232"
          fill="none" stroke="#085c48" strokeWidth="0.8" opacity="0.3" strokeDasharray="4,5"
        />
        <path
          d="M 0,150 C 50,138 120,148 190,142 S 330,130 400,140 S 470,143 500,141"
          fill="none" stroke="#0d7a60" strokeWidth="0.8" opacity="0.35" strokeDasharray="4,5"
        />
        <path
          d="M 0,270 C 90,262 160,268 240,264 S 380,254 460,263"
          fill="none" stroke="#085c48" strokeWidth="0.6" opacity="0.22" strokeDasharray="3,6"
        />

        {/* Area fill simulation (low-elevation zone) */}
        <path
          d="M 0,210 C 70,195 140,205 210,200 S 350,185 430,197 S 480,200 500,198 L 500,380 L 0,380 Z"
          fill="oklch(0.74 0.19 162 / 0.03)"
        />

        {/* Secondary point markers */}
        <circle cx="120" cy="155" r="3.5" fill="#06b6d4" opacity="0.7" />
        <circle cx="120" cy="155" r="7" fill="none" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4">
          <animate attributeName="r" from="7" to="14" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite" />
        </circle>

        <circle cx="390" cy="225" r="3" fill="#06b6d4" opacity="0.6" />
        <circle cx="60" cy="295" r="2.5" fill="#f59e0b" opacity="0.55" />
        <circle cx="60" cy="295" r="6" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.3">
          <animate attributeName="r" from="6" to="13" dur="3s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.3" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* Primary pulsing center marker */}
        <g transform="translate(252, 192)">
          <circle r="5" fill="#10d68e" opacity="0.95" />
          <circle r="9" fill="none" stroke="#10d68e" strokeWidth="1.2" opacity="0.7">
            <animate attributeName="r" from="9" to="22" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="16" fill="none" stroke="#10d68e" strokeWidth="0.6" opacity="0.4">
            <animate attributeName="r" from="16" to="32" dur="2s" begin="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin="0.4s" repeatCount="indefinite" />
          </circle>
          <circle r="24" fill="none" stroke="#10d68e" strokeWidth="0.3" opacity="0.2">
            <animate attributeName="r" from="24" to="44" dur="2s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.2" to="0" dur="2s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          {/* Crosshair */}
          <line x1="-10" y1="0" x2="-6" y2="0" stroke="#10d68e" strokeWidth="0.8" opacity="0.5" />
          <line x1="6" y1="0" x2="10" y2="0" stroke="#10d68e" strokeWidth="0.8" opacity="0.5" />
          <line x1="0" y1="-10" x2="0" y2="-6" stroke="#10d68e" strokeWidth="0.8" opacity="0.5" />
          <line x1="0" y1="6" x2="0" y2="10" stroke="#10d68e" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Coordinate corner labels */}
        <text x="8" y="14" fill="#0c3a5a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">6°08'S</text>
        <text x="8" y="26" fill="#0c3a5a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">106°45'E</text>
        <text x="382" y="14" fill="#0c3a5a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">6°08'S</text>
        <text x="382" y="26" fill="#0c3a5a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">106°52'E</text>
        <text x="8" y="370" fill="#0c3a5a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">6°15'S 106°45'E</text>
        <text x="338" y="370" fill="#0c3a5a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">6°15'S 106°52'E</text>

        {/* Active marker label */}
        <rect x="262" y="175" width="110" height="14" rx="2" fill="#030c18" opacity="0.8" />
        <text x="265" y="186" fill="#10d68e" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0.9">
          -6.2048° / 106.8229°
        </text>

        {/* Scale bar */}
        <line x1="28" y1="350" x2="108" y2="350" stroke="#0c3a5a" strokeWidth="1.2" />
        <line x1="28" y1="344" x2="28" y2="356" stroke="#0c3a5a" strokeWidth="1.2" />
        <line x1="108" y1="344" x2="108" y2="356" stroke="#0c3a5a" strokeWidth="1.2" />
        <rect x="28" y="344" width="40" height="6" fill="#0c3a5a" />
        <text x="44" y="362" fill="#0c3a5a" fontSize="9" fontFamily="JetBrains Mono, monospace">5 km</text>

        {/* LIVE badge */}
        <rect x="432" y="8" width="56" height="20" rx="4" fill="#10d68e" fillOpacity="0.1" stroke="#10d68e" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="442" cy="18" r="3" fill="#10d68e">
          <animate attributeName="opacity" values="1;0.15;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="449" y="22" fill="#10d68e" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">LIVE</text>

        {/* Layer indicator */}
        <text x="432" y="40" fill="#0c3a5a" fontSize="8" fontFamily="JetBrains Mono, monospace">WGS84</text>
        <text x="432" y="52" fill="#0c3a5a" fontSize="8" fontFamily="JetBrains Mono, monospace">EPSG:4326</text>
      </svg>
    </div>
  )
}

/* ─── Skill category block ──────────────────────────────────── */
function SkillCategory({
  title,
  accent,
  skills,
}: {
  title: string
  accent: 'green' | 'cyan' | 'amber' | 'muted'
  skills: string[]
}) {
  const colors = {
    green: { label: '#10d68e', border: 'oklch(0.74 0.19 162 / 0.3)', bg: 'oklch(0.74 0.19 162 / 0.06)' },
    cyan:  { label: '#22d3ee', border: 'oklch(0.70 0.16 200 / 0.3)', bg: 'oklch(0.70 0.16 200 / 0.06)' },
    amber: { label: '#fbbf24', border: 'oklch(0.78 0.16 72 / 0.3)',  bg: 'oklch(0.78 0.16 72 / 0.06)'  },
    violet:{ label: '#a78bfa', border: 'oklch(0.72 0.16 290 / 0.3)', bg: 'oklch(0.72 0.16 290 / 0.06)' },
    rose:  { label: '#fb7185', border: 'oklch(0.72 0.18 15 / 0.3)',  bg: 'oklch(0.72 0.18 15 / 0.06)'  },
    orange:{ label: '#fb923c', border: 'oklch(0.75 0.18 45 / 0.3)',  bg: 'oklch(0.75 0.18 45 / 0.06)'  },
    muted: { label: '#94a3b8', border: 'oklch(0.45 0.030 210 / 0.4)', bg: 'oklch(0.45 0.030 210 / 0.06)' },
  }
  const c = colors[accent]
  return (
    <div>
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          color: c.label,
          marginBottom: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '18px',
            height: '1px',
            background: c.label,
            opacity: 0.6,
          }}
        />
        {title}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {skills.map((s) => (
          <span
            key={s}
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
              color: c.label,
              fontSize: '0.72rem',
              padding: '0.22rem 0.65rem',
              borderRadius: '9999px',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.02em',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Home page ─────────────────────────────────────────────── */
function Home() {
  return (
    <div className="gis-grid-bg" style={{ minHeight: '100vh' }}>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '6rem 1.5rem 5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left — Identity */}
        <div>
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'oklch(0.74 0.19 162 / 0.08)',
              border: '1px solid oklch(0.74 0.19 162 / 0.25)',
              borderRadius: '9999px',
              padding: '0.3rem 0.9rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10d68e',
                boxShadow: '0 0 8px #10d68e',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: '#10d68e',
              }}
            >
              GIS &amp; FULLSTACK DEVELOPER
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: 'oklch(0.88 0.015 210)',
              margin: '0 0 0.5rem',
            }}
          >
            LUTFI
          </h1>
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#10d68e',
              margin: '0 0 1.75rem',
            }}
          >
            WIRAWAN
          </h1>

          {/* Bio */}
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'oklch(0.60 0.025 210)',
              maxWidth: '460px',
              marginBottom: '1rem',
            }}
          >
            Building spatial intelligence through code. 
            Fullstack and GIS developer specializing in WebGIS applications, 
            geoportal platforms, and spatial data infrastructure using PostGIS, GeoServer, and modern web mapping technologies.
          </p>

          {/* Captions */}
          <div
            style={{
              marginBottom: '2rem',
              paddingLeft: '1rem',
              borderLeft: '2px solid oklch(0.74 0.19 162 / 0.3)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              lineHeight: 1.8,
              color: 'oklch(0.48 0.025 210)',
            }}
          >
            <div>BASELINE STATUS</div>
            <div>WITHIN CELLS INTERLINKED</div>
            <div>WITHIN MAPS INTERLINKED</div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link
              to="/projects"
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '7px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                background: '#10d68e',
                color: '#030c18',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '0.02em',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              View Projects
            </Link>
            <Link
              to="/resume"
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '7px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                background: 'oklch(0.17 0.030 218)',
                border: '1px solid oklch(0.26 0.035 218)',
                color: 'oklch(0.78 0.015 210)',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '0.02em',
                transition: 'border-color 0.15s ease, color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.74 0.19 162 / 0.4)'
                ;(e.currentTarget as HTMLElement).style.color = '#10d68e'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.26 0.035 218)'
                ;(e.currentTarget as HTMLElement).style.color = 'oklch(0.78 0.015 210)'
              }}
            >
              Resume
            </Link>
          </div>

          {/* Coordinate decoration */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid oklch(0.17 0.030 218)',
              display: 'flex',
              gap: '2rem',
            }}
          >
            {[
              { label: 'LAT', value: '-6.2048°' },
              { label: 'LON', value: '106.8229°' },
              { label: 'PROJ', value: 'EPSG:4326' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    color: 'oklch(0.40 0.025 210)',
                    marginBottom: '0.2rem',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.78rem',
                    color: 'oklch(0.55 0.025 210)',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Map visualization */}
        <div style={{ height: '380px' }}>
          <MapVisualization />
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
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
            TECH STACK
          </span>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'oklch(0.17 0.030 218)',
            }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
          }}
        >
          <SkillCategory
            title="FRONTEND"
            accent="cyan"
            skills={['Inertia.js', 'React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap CSS']}
          />
          <SkillCategory
            title="BACKEND"
            accent="green"
            skills={['PHP', 'Laravel', 'Directus', 'REST API', 'ETL/ELT']}
          />
          <SkillCategory
            title="GIS / MAPPING"
            accent="amber"
            skills={['LeafletJS', 'Mapbox GL', 'MapLibre', 'GeoServer', 'Spatial Data Processing', 'Coordinate Systems', 'OGC Services']}
          />
          <SkillCategory
            title="DATABASES"
            accent="rose"
            skills={['PostGIS', 'PostgreSQL', 'MySQL', 'SQLite']}
          />
          <SkillCategory
            title="DEV TOOLS"
            accent="violet"
            skills={['Git & GitHub', 'Linux', 'SSH', 'Docker', 'Deployment']}
          />
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid oklch(0.15 0.025 218)',
          borderBottom: '1px solid oklch(0.15 0.025 218)',
          background: 'oklch(0.09 0.024 218)',
          padding: '2.5rem 1.5rem',
          marginBottom: '5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '100+', label: 'Projects Delivered' },
            { value: '100+', label: 'Spatial Solutions' },
            { value: '7', label: 'Geoportals & Applications Built' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800,
                  fontSize: '2.4rem',
                  color: '#10d68e',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: 'oklch(0.45 0.030 210)',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick links ───────────────────────────────────── */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {[
          {
            to: '/projects',
            title: 'Projects',
            desc: 'Map dashboards, geoportals, and fullstack applications.',
            accent: '#10d68e',
          },
          {
            to: '/resume',
            title: 'Resume',
            desc: 'Work history, education, and professional experience.',
            accent: '#22d3ee',
          },
          {
            to: '/blog',
            title: 'Blog',
            desc: 'Technical articles on GIS, spatial databases, and web mapping.',
            accent: '#fbbf24',
          },
        ].map(({ to, title, desc, accent }) => (
          <Link
            key={to}
            to={to}
            style={{
              display: 'block',
              padding: '1.5rem',
              borderRadius: '10px',
              border: `1px solid oklch(0.19 0.030 218)`,
              background: 'oklch(0.10 0.026 218)',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = `${accent}44`
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.19 0.030 218)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: accent,
                marginBottom: '0.5rem',
              }}
            >
              {title} →
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'oklch(0.52 0.040 210)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {desc}
            </p>
          </Link>
        ))}
      </section>
    </div>
  )
}
