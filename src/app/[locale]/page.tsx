import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

function BotanicalOrnament({ size = 48, color = "var(--accent-1)", opacity = 0.35 }: {
  size?: number; color?: string; opacity?: number;
}) {
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 48 65" fill="none" style={{ opacity }}>
      <path d="M24 65V20" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      <path d="M24 20C24 20 10 26 10 40" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      <path d="M24 20C24 20 38 26 38 40" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      <path d="M14 28C14 28 8 32 8 42" stroke={color} strokeWidth="0.75" strokeLinecap="round"/>
      <path d="M34 28C34 28 40 32 40 42" stroke={color} strokeWidth="0.75" strokeLinecap="round"/>
      <ellipse cx="24" cy="12" rx="4" ry="7" stroke={color} strokeWidth="0.9"/>
      <ellipse cx="24" cy="12" rx="4" ry="7" stroke={color} strokeWidth="0.9" transform="rotate(45 24 12)"/>
      <ellipse cx="24" cy="12" rx="4" ry="7" stroke={color} strokeWidth="0.9" transform="rotate(90 24 12)"/>
      <ellipse cx="24" cy="12" rx="4" ry="7" stroke={color} strokeWidth="0.9" transform="rotate(135 24 12)"/>
      <circle cx="24" cy="12" r="3" stroke={color} strokeWidth="0.9" fill="none"/>
    </svg>
  );
}

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
};

export default async function Home({ params, searchParams }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { service } = await searchParams;
  const t = await getTranslations("Home");

  const teambuildingBullets = t.raw("aanbod.teambuilding.bullets") as string[];
  const coachingBullets = t.raw("aanbod.coaching.bullets") as string[];
  const vrouwenBullets = t.raw("aanbod.vrouwen.bullets") as string[];
  const tags = t.raw("overMij.tags") as string[];

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)" }}>

      {/* ─────────────── HERO ─────────────── */}
      <section id="home" className="hero" style={{ background: "var(--accent-1)" }}>
        <div className="hero-panel">
          <img
            src="/logo.png"
            alt={t("hero.logoAlt")}
            className="hero-logo fade-up"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
            fontWeight: 300, lineHeight: 1.12,
            color: "var(--bg)", margin: "0 0 0.4rem",
            letterSpacing: "-0.01em",
          }}>
            {t("hero.titleLine1")}
          </h1>
          <h1 className="fade-up delay-2" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
            fontWeight: 300, lineHeight: 1.12,
            color: "var(--bg)", margin: "0 0 1.75rem",
            letterSpacing: "-0.01em",
          }}>
            {t("hero.titleLine2")}
          </h1>
          <p className="fade-up delay-3" style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.95rem", lineHeight: 1.85,
            color: "rgba(247,239,210,0.75)",
            maxWidth: "620px", margin: "0 auto 2.5rem",
          }}>
            {t.rich("hero.intro", { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <a href="#aanbod" className="fade-up delay-4 btn-ghost-light" style={{
            display: "inline-flex", alignItems: "center", gap: "0.65rem",
            background: "none", border: "1px solid rgba(247,239,210,0.4)",
            color: "var(--bg)", fontFamily: "var(--font-sans)",
            fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "0.85rem 1.9rem", textDecoration: "none",
          }}>
            {t("hero.cta")}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ─────────────── AANBOD ─────────────── */}
      <section id="aanbod" className="section-pad">

        {/* Section header */}
        <div className="aanbod-header">
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>{t("aanbod.eyebrow")}</p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 300, lineHeight: 1.2, margin: 0,
              letterSpacing: "-0.01em",
            }}>
              {t("aanbod.title")}
            </h2>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "0.65rem",
            background: "var(--accent-4)", color: "var(--bg)",
            fontFamily: "var(--font-sans)", fontSize: "0.6rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "0.8rem 1.75rem", borderRadius: "2px", textDecoration: "none",
          }}>
            {t("aanbod.cta")}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* ── Service cards grid ── */}
        <div className="offerings-grid">

          {/* ── Teambuilding ── */}
          <Link href="/teambuilding" className="service-card-link">
          <div style={{
            background: "var(--accent-1)", borderRadius: "12px",
            overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
            position: "relative",
            boxShadow: "0 8px 26px rgba(64,56,43,0.13)",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ padding: "1.75rem 1.75rem 1.5rem" }}>
                <p className="eyebrow" style={{ color: "var(--accent-3)", marginBottom: "0.5rem" }}>{t("aanbod.teambuilding.label")}</p>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                  fontWeight: 400, color: "var(--bg)", margin: 0, lineHeight: 1.25,
                }}>
                  {t("aanbod.teambuilding.title")}
                </h3>
              </div>
              <div style={{ height: "180px", flexShrink: 0, overflow: "hidden" }}>
                <img src="/paint 1.jpeg" alt={t("aanbod.teambuilding.label")} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                  {teambuildingBullets.map(item => (
                    <li key={item} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent-3)", flexShrink: 0, marginTop: "2px", fontSize: "0.7rem" }}>✓</span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(246,216,204,0.85)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid rgba(246,216,204,0.15)", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, color: "var(--bg)", margin: "0 0 0.15rem", lineHeight: 1 }}>{t("aanbod.teambuilding.price")}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 300, color: "rgba(246,216,204,0.6)", margin: 0 }}>{t("aanbod.teambuilding.priceNote")}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, color: "var(--accent-3)" }}>
                  {t("aanbod.teambuilding.cardCta")}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>
          </Link>

          {/* ── Individuele Coaching ── */}
          <Link href="/individuele-coaching" className="service-card-link">
          <div style={{
            background: "var(--accent-3)", borderRadius: "12px",
            overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
            border: "1px solid rgba(157,82,51,0.3)",
            boxShadow: "0 8px 26px rgba(64,56,43,0.13)",
          }}>
            <div style={{ padding: "1.75rem 1.75rem 1.5rem" }}>
              <p className="eyebrow" style={{ color: "var(--accent-1)", marginBottom: "0.5rem" }}>{t("aanbod.coaching.label")}</p>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                fontWeight: 400, color: "var(--accent-1)", margin: 0, lineHeight: 1.25,
              }}>
                {t("aanbod.coaching.title")}
              </h3>
            </div>
            <div style={{ height: "180px", flexShrink: 0, overflow: "hidden" }}>
              <img src="/paint 2.jpeg" alt={t("aanbod.coaching.label")} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                {coachingBullets.map(item => (
                  <li key={item} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-2)", flexShrink: 0, marginTop: "2px", fontSize: "0.7rem" }}>✓</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "var(--accent-1)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid rgba(157,82,51,0.15)", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, color: "var(--accent-1)", margin: "0 0 0.15rem", lineHeight: 1 }}>{t("aanbod.coaching.price")}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 300, color: "var(--accent-2)", margin: 0 }}>{t("aanbod.coaching.priceNote")}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, color: "var(--accent-1)" }}>
                {t("aanbod.coaching.cardCta")}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          </Link>

          {/* ── Vrouwenprogramma — tijdelijk uitgeschakeld (binnenkort) ── */}
          <div style={{ height: "100%", cursor: "default" }}>
          <div style={{
            borderRadius: "12px", overflow: "hidden",
            background: "rgba(167,177,160,0.4)",
            border: "1px solid rgba(95,106,87,0.45)",
            display: "flex", flexDirection: "column", height: "100%",
            position: "relative",
            boxShadow: "0 8px 26px rgba(64,56,43,0.13)",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none",
              backgroundImage: "repeating-linear-gradient(90deg, var(--accent-5) 0px, var(--accent-5) 1px, transparent 1px, transparent 18px)",
            }} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ padding: "1.75rem 1.75rem 1.5rem" }}>
                <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>{t("aanbod.vrouwen.label")}</p>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                  fontWeight: 400, color: "var(--accent-1)", margin: 0, lineHeight: 1.25,
                }}>
                  {t("aanbod.vrouwen.title")}
                </h3>
              </div>
              <div style={{ height: "180px", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                <img src="/paint 3.jpeg" alt={t("aanbod.vrouwen.label")} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(109,76,58,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    background: "var(--accent-4)", color: "var(--bg)",
                    fontFamily: "var(--font-sans)", fontSize: "0.7rem",
                    letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600,
                    padding: "0.6rem 1.4rem", borderRadius: "999px",
                  }}>
                    {t("aanbod.vrouwen.comingSoon")}
                  </span>
                </div>
              </div>
              <div style={{ padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                  {vrouwenBullets.map(item => (
                    <li key={item} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent-4)", flexShrink: 0, marginTop: "2px", fontSize: "0.7rem" }}>✓</span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "var(--accent-1)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid rgba(167,177,160,0.3)", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, color: "var(--accent-1)", margin: "0 0 0.15rem", lineHeight: 1 }}>{t("aanbod.vrouwen.price")}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 300, color: "var(--accent-2)", margin: 0 }}>{t("aanbod.vrouwen.priceNote")}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, color: "var(--muted)" }}>
                  {t("aanbod.vrouwen.comingSoon")}
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>

      </section>

      {/* divider */}
      <div className="divider">
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--accent-2), var(--accent-4), var(--accent-5), transparent)",
          opacity: 0.2,
        }} />
      </div>

      {/* ─────────────── OVER MIJ ─────────────── */}
      <section id="over-mij" className="about-grid section-pad">

        {/* Photo — hidden on mobile */}
        <div className="about-photo" style={{
          borderRadius: "10px", overflow: "hidden",
          aspectRatio: "4/5", maxHeight: "520px",
        }}>
          <img
            src="/portfolio.jpeg"
            alt={t("overMij.photoAlt")}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{t("overMij.eyebrow")}</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
            fontWeight: 300, lineHeight: 1.2,
            margin: "0 0 1.5rem", letterSpacing: "-0.01em",
          }}>
            {t("overMij.title")}
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "1.25rem",
          }}>
            {t.rich("overMij.intro", { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--ink)", marginBottom: "2rem",
          }}>
            {t.rich("overMij.training", { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--ink)", marginBottom: "2rem",
          }}>
            {t.rich("overMij.experience", {
              strong: (chunks) => <strong>{chunks}</strong>,
              em: (chunks) => <i><strong>{chunks}</strong></i>,
            })}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--ink)", marginBottom: "2rem",
          }}>
            {t("overMij.drive")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 400,
                color: "var(--accent-2)",
                border: "1px solid rgba(157,82,51,0.25)",
                borderRadius: "999px", padding: "0.4rem 1rem",
                background: "rgba(246,216,204,0.3)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="divider">
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--accent-2), var(--accent-4), var(--accent-5), transparent)",
          opacity: 0.2,
        }} />
      </div>

      {/* ─────────────── CONTACT ─────────────── */}
      <section id="contact" className="contact-grid section-pb">
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>{t("contact.eyebrow")}</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
            fontWeight: 300, lineHeight: 1.2,
            margin: "0 0 1.5rem", letterSpacing: "-0.01em",
          }}>
            {t("contact.title")}
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "2rem",
          }}>
            {t("contact.intro")}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "2rem",
          }}>
            {t("contact.process")}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "2rem",
          }}>
            <strong>{t("contact.ready")}</strong>
          </p>
          <a href={`mailto:${t("contact.email")}`} style={{
            fontFamily: "var(--font-display)", fontSize: "1.125rem",
            fontWeight: 400, color: "var(--accent-2)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(157,82,51,0.3)", paddingBottom: "2px",
          }}>
            {t("contact.email")}
          </a>
        </div>

        <ContactForm prefilledService={service} />
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="footer-bar" style={{ borderTop: "1px solid rgba(109,76,58,0.12)" }}>
        <div>
          <div style={{
            fontFamily: "var(--font-logo)", fontSize: "0.8rem", fontWeight: 900,
            letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-2)",
          }}>{t("footer.logoName")}</div>
          <div style={{
            fontFamily: "var(--font-script)", fontSize: "0.65rem",
            color: "var(--muted)", marginTop: "2px",
          }}>{t("footer.tagline")}</div>
        </div>
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "0.75rem",
          fontWeight: 300, color: "var(--muted)", letterSpacing: "0.04em",
        }}>{t("footer.copyright")}</span>
      </footer>

    </div>
  );
}
