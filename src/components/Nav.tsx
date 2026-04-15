'use client';

import { useState, useEffect } from 'react';

const links = [
  { href: '#home',     label: 'Home',     id: 'home' },
  { href: '#aanbod',   label: 'Aanbod',   id: 'aanbod' },
  { href: '#over-mij', label: 'Over mij', id: 'over-mij' },
  { href: '#contact',  label: 'Contact',  id: 'contact' },
];

export default function Nav() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      // Highlight whichever section's top is at or above the viewport midpoint
      let current = 'home';
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y + 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const opaque = true;
  const navBg  = 'var(--bg)';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        borderBottom: opaque ? '1px solid rgba(82,69,27,0.1)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
        display: 'flex', alignItems: 'stretch', justifyContent: 'space-between',
      }}>
        {/* Logo — no padding, fills full nav height */}
        <a href="#home" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Sasha Elisabeth — Teambuilding & Coaching"
            style={{ height: 'auto', maxHeight: '44px', width: 'auto', mixBlendMode: 'multiply', display: 'block' }}
          />
        </a>

        {/* Right side — desktop links + hamburger, with padding */}
        <div className="nav-right">
          {/* Desktop links */}
          <div className="nav-links">
            {links.map(l => {
              const active = activeSection === l.id;
              return (
                <a key={l.href} href={l.href} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: 500,
                  textDecoration: 'none',
                  color: active ? 'var(--accent-4)' : opaque ? 'var(--ink)' : 'rgba(247,239,210,0.9)',
                  borderBottom: active ? '1px solid var(--accent-4)' : '1px solid transparent',
                  paddingBottom: '2px', transition: 'color 0.2s',
                }}>
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 1.5,
                background: i === 2 ? 'var(--accent-3)' : opaque ? 'var(--accent-1)' : 'var(--bg)',
                borderRadius: 2, transition: 'background 0.3s',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-dropdown" style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 49,
          background: 'var(--bg)',
          borderBottom: '1px solid rgba(82,69,27,0.1)',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', fontWeight: 500,
              textDecoration: 'none',
              color: activeSection === l.id ? 'var(--accent-4)' : 'var(--ink)',
            }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
