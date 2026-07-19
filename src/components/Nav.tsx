'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const sectionIds = ['home', 'aanbod', 'over-mij', 'contact'] as const;

function localePrefix(locale: string) {
  return locale === routing.defaultLocale ? '' : `/${locale}`;
}

export default function Nav() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Highlight whichever section's top is at or above the viewport midpoint
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y + 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The locale switch is a full page reload (next-intl always hard-navigates across
  // locales), so restore the scroll position saved just before that reload.
  useEffect(() => {
    const saved = sessionStorage.getItem('scrollY');
    if (saved !== null) {
      sessionStorage.removeItem('scrollY');
      requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
    }
  }, []);

  const saveScroll = () => sessionStorage.setItem('scrollY', String(window.scrollY));

  const prefix = localePrefix(locale);
  const homeHref = prefix || '/';
  const links = [
    { id: 'home',     label: t('home'),    href: `${prefix}/#home` },
    { id: 'aanbod',   label: t('aanbod'),  href: `${prefix}/#aanbod` },
    { id: 'over-mij', label: t('overMij'), href: `${prefix}/#over-mij` },
    { id: 'contact',  label: t('contact'), href: `${prefix}/#contact` },
  ];

  const otherLocale = locale === 'en' ? 'nl' : 'en';

  const opaque = true;
  const navBg  = 'var(--bg)';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        borderBottom: opaque ? '1px solid rgba(109,76,58,0.1)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
        display: 'flex', alignItems: 'stretch', justifyContent: 'space-between',
      }}>
        {/* Logo — no padding, fills full nav height */}
        <a href={homeHref} className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt={t('logoAlt')}
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
                <a key={l.id} href={l.href} style={{
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
            <Link href={pathname} locale={otherLocale} onClick={saveScroll} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', fontWeight: 500,
              textDecoration: 'none', color: 'var(--muted)',
              border: '1px solid rgba(109,76,58,0.25)', borderRadius: '999px',
              padding: '0.3rem 0.7rem',
            }}>
              {t('languageSwitch')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={t('menu')}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-dropdown"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 1.5,
                background: i === 2 ? 'var(--accent-2)' : opaque ? 'var(--accent-1)' : 'var(--bg)',
                borderRadius: 2, transition: 'background 0.3s',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="nav-mobile-dropdown" className="nav-dropdown" style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 49,
          background: 'var(--bg)',
          borderBottom: '1px solid rgba(109,76,58,0.1)',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(l => (
            <a key={l.id} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', fontWeight: 500,
              textDecoration: 'none',
              color: activeSection === l.id ? 'var(--accent-4)' : 'var(--ink)',
            }}>
              {l.label}
            </a>
          ))}
          <Link href={pathname} locale={otherLocale} onClick={() => { saveScroll(); setMenuOpen(false); }} style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 500,
            textDecoration: 'none', color: 'var(--muted)',
          }}>
            {t('languageSwitch')}
          </Link>
        </div>
      )}
    </>
  );
}
