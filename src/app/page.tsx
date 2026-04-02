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

const offerings = [
  {
    id: "teambuilding",
    label: "Teambuilding",
    title: "Samen sterker door creatief werken",
    body: "Ervaringsgerichte trainingen waarbij teams via beeldende werkvormen ontdekken hoe ze samenwerken en communiceren.",
    price: "v.a. € 950",
    priceNote: "per groep",
    bg: "var(--accent-1)",
    labelColor: "var(--accent-3)",
    titleColor: "var(--bg)",
    bodyColor: "rgba(246,216,204,0.75)",
    priceColor: "var(--bg)",
  },
  {
    id: "coaching",
    label: "Individuele Coaching",
    title: "Ruimte voor jouw verhaal",
    body: "Een persoonlijk traject van 6–10 sessies om patronen te ontdekken en te bewegen naar wat echt bij jou past.",
    price: "€ 95",
    priceNote: "per sessie",
    bg: "var(--accent-3)",
    labelColor: "var(--accent-2)",
    titleColor: "var(--accent-1)",
    bodyColor: "var(--accent-2)",
    priceColor: "var(--accent-1)",
  },
  {
    id: "vrouwen",
    label: "Vrouwen op de werkvloer",
    title: "Jouw kracht zichtbaar maken",
    body: "Groepsprogramma van 6 bijeenkomsten voor vrouwen die professioneel en persoonlijk willen groeien.",
    price: "€ 595",
    priceNote: "per deelneemster",
    bg: "rgba(172,179,198,0.18)",
    labelColor: "var(--accent-2)",
    titleColor: "var(--accent-1)",
    bodyColor: "var(--accent-2)",
    priceColor: "var(--accent-1)",
    striped: true,
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)" }}>

      {/* ─────────────── HERO ─────────────── */}
      <section id="home" className="hero">

        {/* Left — dark panel */}
        <div className="hero-panel" style={{
          background: "var(--accent-1)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.035,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }} />
          <div style={{
            position: "absolute", top: "4rem", left: "3.5rem", right: "3.5rem",
            height: 4, background: "var(--accent-4)", borderRadius: 3,
            opacity: 0.2, transform: "rotate(-0.4deg) scaleX(0.9)",
          }} />

          <div style={{ position: "relative" }}>
            <p className="fade-up eyebrow" style={{ color: "var(--accent-3)", marginBottom: "1.5rem" }}>
              Vaktherapie en Coaching
            </p>
            <h1 className="fade-up delay-1" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              fontWeight: 300, lineHeight: 1.15,
              color: "var(--bg)", margin: "0 0 0.5rem",
              letterSpacing: "-0.01em",
            }}>
              Ontdekken wie je bent
            </h1>
            <h1 className="fade-up delay-1" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              fontWeight: 300, lineHeight: 1.15,
              color: "var(--accent-3)", margin: "0 0 1.75rem",
              letterSpacing: "-0.01em", fontStyle: "italic",
            }}>
              door te maken en te doen.
            </h1>
            <p className="fade-up delay-2" style={{
              fontFamily: "var(--font-sans)", fontWeight: 300,
              fontSize: "0.9rem", lineHeight: 1.8,
              color: "rgba(247,239,210,0.7)",
              maxWidth: "360px", marginBottom: "2.5rem",
            }}>
              Ik ben Sasha Elisabeth — vaktherapist en coach. Via beeldende therapie
              en coaching help ik individuen en teams dichter bij zichzelf te komen.
            </p>
            <a href="#aanbod" className="fade-up delay-3 btn-ghost-light" style={{
              display: "inline-flex", alignItems: "center", gap: "0.65rem",
              background: "none", border: "1px solid rgba(247,239,210,0.4)",
              color: "var(--bg)", fontFamily: "var(--font-sans)",
              fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
              padding: "0.8rem 1.75rem", textDecoration: "none",
            }}>
              Bekijk het aanbod
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right — warm gradient (hidden on mobile/iPad) */}
        <div className="hero-photo" style={{
          position: "relative", overflow: "hidden",
          background: `
            radial-gradient(ellipse at 80% 15%, rgba(232,180,100,0.6) 0%, transparent 45%),
            radial-gradient(ellipse at 20% 75%, rgba(172,85,58,0.5) 0%, transparent 50%),
            linear-gradient(165deg, #c4985a 0%, #8a5c38 45%, #3d2410 100%)
          `,
        }}>
          {[
            { top: "30%", left: "10%", right: "10%", h: 4, color: "rgba(246,216,204,0.4)", rotate: "-2deg" },
            { top: "36%", left: "20%", right: "20%", h: 2, color: "rgba(172,179,198,0.5)", rotate: "1deg" },
            { top: "42%", left: "5%",  right: "30%", h: 3, color: "rgba(121,0,19,0.45)",  rotate: "-1deg" },
          ].map((s, i) => (
            <div key={i} style={{
              position: "absolute", top: s.top, left: s.left, right: s.right,
              height: s.h, background: s.color, borderRadius: 4,
              transform: `rotate(${s.rotate})`,
            }} />
          ))}
          <div style={{ position: "absolute", bottom: "2.5rem", right: "2.5rem", opacity: 0.25 }}>
            <BotanicalOrnament size={56} color="var(--bg)" opacity={1} />
          </div>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, transparent 35%, rgba(20,10,5,0.5) 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: "2.5rem", left: "2.5rem",
            fontFamily: "var(--font-script)", fontSize: "1rem",
            color: "rgba(247,239,210,0.6)",
          }}>
            creatief herstel
          </div>
        </div>
      </section>

      {/* ─────────────── AANBOD ─────────────── */}
      <section id="aanbod" className="section-pad">
        <div className="aanbod-header">
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Wat ik aanbied</p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 300, lineHeight: 1.2, margin: 0,
              letterSpacing: "-0.01em",
            }}>
              Werken op jouw manier.
            </h2>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "0.65rem",
            background: "var(--accent-4)", color: "var(--bg)",
            fontFamily: "var(--font-sans)", fontSize: "0.6rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "0.8rem 1.75rem", borderRadius: "2px", textDecoration: "none",
          }}>
            Maak een afspraak
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="offerings-grid">
          {offerings.map(o => (
            <div key={o.id} style={{
              background: o.bg, borderRadius: "10px", padding: "2.25rem 2rem",
              border: o.striped ? "1px solid rgba(172,179,198,0.4)" : "1px solid transparent",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}>
              {o.striped && (
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.2,
                  backgroundImage: "repeating-linear-gradient(90deg, var(--accent-5) 0px, var(--accent-5) 1px, transparent 1px, transparent 18px)",
                }} />
              )}
              <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="eyebrow" style={{ marginBottom: "0.75rem", color: o.labelColor }}>{o.label}</p>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "1.375rem",
                  fontWeight: 400, lineHeight: 1.25,
                  margin: "0 0 0.75rem", color: o.titleColor,
                }}>
                  {o.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "0.85rem",
                  fontWeight: 300, lineHeight: 1.75,
                  color: o.bodyColor, margin: "0 0 1.75rem", flex: 1,
                }}>
                  {o.body}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "1.375rem",
                    fontWeight: 500, color: o.priceColor,
                  }}>{o.price}</span>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "0.7rem",
                    fontWeight: 300, color: o.bodyColor, letterSpacing: "0.04em",
                  }}>{o.priceNote}</span>
                </div>
              </div>
            </div>
          ))}
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

        {/* Photo placeholder — hidden on mobile */}
        <div className="about-photo" style={{
          borderRadius: "10px", overflow: "hidden",
          aspectRatio: "4/5",
          background: `
            radial-gradient(ellipse at 60% 30%, rgba(232,180,100,0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 80%, rgba(172,85,58,0.4) 0%, transparent 55%),
            linear-gradient(160deg, #c4985a 0%, #8a5c38 50%, #3d2410 100%)
          `,
          position: "relative", maxHeight: "520px",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(20,10,5,0.4) 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: "2rem", left: "2rem",
            fontFamily: "var(--font-script)", fontSize: "1.1rem",
            color: "rgba(247,239,210,0.65)",
          }}>
            Sasha Elisabeth
          </div>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Over mij</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
            fontWeight: 300, lineHeight: 1.2,
            margin: "0 0 1.5rem", letterSpacing: "-0.01em",
          }}>
            Werken vanuit het doen, niet alleen het denken.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "1.25rem",
          }}>
            Ik ben Sasha Elisabeth, vaktherapist beeldend en coach. Ik geloof dat
            verandering niet alleen in het hoofd gebeurt — maar ook in de handen,
            het lichaam en het doen.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--ink)", marginBottom: "2rem",
          }}>
            Mijn aanpak is ervaringsgericht: via tekenen, schilderen of boetseren
            ontstaat er inzicht dat met woorden alleen moeilijk te bereiken is.
            Geen kunstervaring nodig — het gaat om het proces, niet het resultaat.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {["HBO Vaktherapie Beeldend", "Gecertificeerd coach", "Ervaringsgericht"].map(tag => (
              <span key={tag} style={{
                fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 400,
                color: "var(--accent-2)",
                border: "1px solid rgba(121,48,31,0.25)",
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
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Laten we kennismaken</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
            fontWeight: 300, lineHeight: 1.2,
            margin: "0 0 1.5rem", letterSpacing: "-0.01em",
          }}>
            Het eerste gesprek is altijd vrijblijvend.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "2rem",
          }}>
            Heb je een vraag of wil je meer weten? Stuur een bericht —
            ik reageer binnen twee werkdagen.
          </p>
          <a href="mailto:hallo@sashaelisabeth.nl" style={{
            fontFamily: "var(--font-display)", fontSize: "1.125rem",
            fontWeight: 400, color: "var(--accent-2)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(121,48,31,0.3)", paddingBottom: "2px",
          }}>
            hallo@sashaelisabeth.nl
          </a>
          <div style={{
            marginTop: "2.5rem",
            borderLeft: "2px solid var(--accent-3)", paddingLeft: "1.25rem",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: "1rem", color: "var(--accent-2)",
              lineHeight: 1.65, margin: 0,
            }}>
              &ldquo;Je hoeft het niet te begrijpen om ermee aan de slag te gaan.&rdquo;
            </p>
          </div>
        </div>

        <ContactForm />
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="footer-bar" style={{ borderTop: "1px solid rgba(82,69,27,0.12)" }}>
        <div>
          <div style={{
            fontFamily: "var(--font-logo)", fontSize: "0.8rem", fontWeight: 900,
            letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-2)",
          }}>S. Elisabeth</div>
          <div style={{
            fontFamily: "var(--font-script)", fontSize: "0.65rem",
            color: "var(--accent-5)", marginTop: "2px",
          }}>vaktherapie &amp; coaching</div>
        </div>
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "0.75rem",
          fontWeight: 300, color: "var(--accent-5)", letterSpacing: "0.04em",
        }}>© 2026 · Sasha Elisabeth</span>
      </footer>

    </div>
  );
}
