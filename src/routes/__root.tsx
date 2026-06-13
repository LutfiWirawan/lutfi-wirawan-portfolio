import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router'
import { MapPin, Github, Linkedin, Mail } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Arief Setiawan — GIS & Fullstack Developer' },
      { name: 'description', content: 'GIS & Fullstack Developer specializing in web mapping, geoportal development, and spatial data engineering.' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

const navLinks = [
  { to: '/' as const, label: 'Home', exact: true },
  { to: '/projects' as const, label: 'Projects' },
  { to: '/resume' as const, label: 'Resume' },
  { to: '/blog' as const, label: 'Blog' },
]

function Navigation() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid oklch(0.19 0.030 218)',
        background: 'oklch(0.07 0.022 218 / 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              background: 'oklch(0.74 0.19 162 / 0.15)',
              border: '1px solid oklch(0.74 0.19 162 / 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MapPin size={16} color="oklch(0.74 0.19 162)" />
          </div>
          <span
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.05em',
              color: 'oklch(0.88 0.015 210)',
            }}
          >
            ARIEF<span style={{ color: 'oklch(0.74 0.19 162)' }}>.DEV</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: 'oklch(0.60 0.025 210)',
                transition: 'color 0.15s ease, background 0.15s ease',
              }}
              activeProps={{ className: 'nav-link-active' }}
              activeOptions={label === 'Home' ? { exact: true } : undefined}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'oklch(0.88 0.015 210)'
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.15 0.025 218)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'oklch(0.60 0.025 210)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="/contact.html"
            style={{
              marginLeft: '0.5rem',
              padding: '0.35rem 1rem',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: 'oklch(0.74 0.19 162 / 0.12)',
              border: '1px solid oklch(0.74 0.19 162 / 0.3)',
              color: 'oklch(0.74 0.19 162)',
              transition: 'background 0.15s ease, border-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.74 0.19 162 / 0.22)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.74 0.19 162 / 0.5)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.74 0.19 162 / 0.12)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.74 0.19 162 / 0.3)'
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid oklch(0.19 0.030 218)',
        padding: '2.5rem 1.5rem',
        marginTop: '5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} color="oklch(0.74 0.19 162)" />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'oklch(0.45 0.030 210)',
            }}
          >
            Arief Setiawan © {new Date().getFullYear()} — GIS & Fullstack Developer
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'oklch(0.45 0.030 210)', transition: 'color 0.15s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.74 0.19 162)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.45 0.030 210)')}
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'oklch(0.45 0.030 210)', transition: 'color 0.15s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.70 0.16 200)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.45 0.030 210)')}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="/contact.html"
            style={{ color: 'oklch(0.45 0.030 210)', transition: 'color 0.15s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.74 0.19 162)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'oklch(0.45 0.030 210)')}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

function RootLayout() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '60px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
