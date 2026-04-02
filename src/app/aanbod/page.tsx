import Link from "next/link";

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{
      padding: "5rem 5rem",
      borderBottom: "1px solid rgba(82,69,27,0.1)",
    }}>
      <p className="eyebrow" style={{ marginBottom: "1rem" }}>{label}</p>
      {children}
    </section>
  );
}

function PriceTag({ price, note }: { price: string; note?: string }) {
  return (
    <div style={{
      display: "inline-flex", flexDirection: "column",
      background: "rgba(246,216,204,0.4)",
      border: "1px solid rgba(121,48,31,0.2)",
      borderRadius: "6px", padding: "0.9rem 1.4rem",
    }}>
      <span style={{
        fontFamily: "var(--font-display)", fontSize: "1.625rem",
        fontWeight: 500, color: "var(--accent-1)", lineHeight: 1,
      }}>{price}</span>
      {note && (
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "0.7rem",
          fontWeight: 300, color: "var(--accent-2)", marginTop: "4px",
          letterSpacing: "0.04em",
        }}>{note}</span>
      )}
    </div>
  );
}

export default function Aanbod() {
  return (
    <div className="page" style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="page-hero">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>Wat ik aanbied</p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
          fontWeight: 300, lineHeight: 1.15,
          margin: "0 0 1.25rem", letterSpacing: "-0.02em",
        }}>
          Het aanbod
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)", fontWeight: 300,
          fontSize: "0.975rem", lineHeight: 1.8,
          color: "var(--accent-2)", maxWidth: "520px",
        }}>
          Of je nu als team wil groeien, persoonlijk wil ontwikkelen, of als vrouw
          sterker wil staan op de werkvloer — er is een traject dat bij jou past.
        </p>
      </div>

      {/* ── TEAMBUILDING ── */}
      <Section id="teambuilding" label="Teambuilding">
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
          fontWeight: 300, lineHeight: 1.2,
          margin: "0 0 3rem", letterSpacing: "-0.01em",
        }}>
          Samen sterker door creatief werken.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {/* Training A */}
          <div style={{
            background: "var(--accent-1)", borderRadius: "10px",
            padding: "2.5rem 2.25rem", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.03,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }} />
            <div style={{ position: "relative" }}>
              <p className="eyebrow" style={{ color: "var(--accent-3)", marginBottom: "0.75rem" }}>Training 1</p>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.625rem",
                fontWeight: 400, lineHeight: 1.25, color: "var(--bg)",
                margin: "0 0 1rem",
              }}>
                Verbinding door beelden
              </h3>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "0.875rem",
                fontWeight: 300, lineHeight: 1.8,
                color: "rgba(246,216,204,0.8)", marginBottom: "2rem",
              }}>
                Een halve dag waarbij teamleden via beeldende werkvormen ontdekken
                hoe ze communiceren en samenwerken. Laagdrempelig, verrassend en
                effectief. Geschikt voor teams van 6 tot 16 personen.
              </p>
              <PriceTag price="€ 950" note="per groep, halve dag" />
            </div>
          </div>

          {/* Training B */}
          <div style={{
            background: "var(--accent-3)", borderRadius: "10px",
            padding: "2.5rem 2.25rem",
          }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Training 2</p>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "1.625rem",
              fontWeight: 400, lineHeight: 1.25, color: "var(--accent-1)",
              margin: "0 0 1rem",
            }}>
              Creativiteit als teamkracht
            </h3>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "0.875rem",
              fontWeight: 300, lineHeight: 1.8,
              color: "var(--accent-2)", marginBottom: "2rem",
            }}>
              Een volledige dag dieper gaan. Teams werken aan een gezamenlijk
              beeldend project, waarbij thema&apos;s als leiderschap, vertrouwen
              en flexibiliteit op een ervaringsgerichte manier worden onderzocht.
              Inclusief terugkoppelgesprek.
            </p>
            <PriceTag price="€ 1.600" note="per groep, volledige dag" />
          </div>
        </div>

        <p style={{
          fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300,
          color: "var(--accent-5)", marginTop: "1.5rem", fontStyle: "italic",
        }}>
          Maatwerk mogelijk. Neem contact op voor een offerte op maat.
        </p>
      </Section>

      {/* ── INDIVIDUELE COACHING ── */}
      <Section id="coaching" label="Individuele Coaching">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
              fontWeight: 300, lineHeight: 1.2,
              margin: "0 0 1.75rem", letterSpacing: "-0.01em",
            }}>
              Ruimte voor jouw verhaal.
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)", fontWeight: 300,
              lineHeight: 1.85, color: "var(--accent-2)",
              fontSize: "0.9375rem", marginBottom: "1.25rem",
            }}>
              Individuele coaching is voor mensen die vastlopen, willen groeien of
              gewoon beter willen begrijpen wat hen drijft. We werken ervaringsgericht
              — via gesprek, maar ook via beeldende werkvormen als dat past.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)", fontWeight: 300,
              lineHeight: 1.85, color: "var(--ink)",
              fontSize: "0.9375rem",
            }}>
              Elk traject is persoonlijk en begint met een vrijblijvend kennismakingsgesprek.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Traject */}
            <div style={{
              background: "rgba(82,69,27,0.04)",
              border: "1px solid rgba(82,69,27,0.1)",
              borderRadius: "8px", padding: "1.75rem",
            }}>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>Het traject</p>
              {[
                { step: "01", text: "Vrijblijvend kennismakingsgesprek (30 min)" },
                { step: "02", text: "Intakegesprek en opstellen persoonlijk plan" },
                { step: "03", text: "6 tot 10 sessies van 60 minuten" },
                { step: "04", text: "Tussenevaluatie en afsluiting" },
              ].map(({ step, text }) => (
                <div key={step} style={{
                  display: "flex", gap: "1rem", alignItems: "flex-start",
                  marginBottom: "0.9rem",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "0.85rem",
                    fontWeight: 500, color: "var(--accent-4)", flexShrink: 0,
                    marginTop: "1px",
                  }}>{step}</span>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "0.875rem",
                    fontWeight: 300, color: "var(--ink)", lineHeight: 1.6,
                  }}>{text}</span>
                </div>
              ))}
            </div>
            {/* Prijs */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <PriceTag price="€ 95" note="per sessie (60 min)" />
              <PriceTag price="€ 850" note="traject van 10 sessies" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── VROUWENPROGRAMMA ── */}
      <Section id="vrouwen" label="Vrouwen op de Werkvloer">
        <div style={{ maxWidth: "800px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
            fontWeight: 300, lineHeight: 1.2,
            margin: "0 0 0.5rem", letterSpacing: "-0.01em",
          }}>
            Jouw kracht zichtbaar maken.
          </h2>
          <p style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: "1.125rem", color: "var(--accent-2)",
            margin: "0 0 2.5rem",
          }}>
            Een programma voor vrouwen die zichzelf professioneel en persoonlijk willen versterken.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
          {[
            {
              label: "Doel",
              text: "Meer zelfvertrouwen, zichtbaarheid en veerkracht op de werkvloer — zonder jezelf te verliezen.",
            },
            {
              label: "Vorm",
              text: "Groepsprogramma van 6 bijeenkomsten (2 uur per sessie). Combinatie van coaching, beeldende werkvormen en gedeelde reflectie.",
            },
            {
              label: "Voor wie",
              text: "Vrouwen die professioneel willen groeien, hun stem willen laten horen, of worstelen met grenzen en verwachtingen op het werk.",
            },
            {
              label: "Groepsgrootte",
              text: "Maximaal 8 deelneemsters voor een veilige en persoonlijke sfeer.",
            },
          ].map(item => (
            <div key={item.label} style={{
              background: "rgba(172,179,198,0.15)",
              border: "1px solid rgba(172,179,198,0.35)",
              borderRadius: "8px", padding: "1.5rem",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0, opacity: 0.15,
                backgroundImage: "repeating-linear-gradient(90deg, var(--accent-5) 0px, var(--accent-5) 1px, transparent 1px, transparent 18px)",
              }} />
              <div style={{ position: "relative" }}>
                <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>{item.label}</p>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "0.875rem",
                  fontWeight: 300, lineHeight: 1.75, color: "var(--ink)", margin: 0,
                }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
          <PriceTag price="€ 595" note="per deelneemster, volledig programma" />
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300,
            color: "var(--accent-5)", fontStyle: "italic", margin: 0,
          }}>
            Nieuwe groepen starten op aanvraag. Schrijf je in via het contactformulier.
          </p>
        </div>
      </Section>

      {/* ── CTA ── */}
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>Vragen of twijfels?</p>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
          fontWeight: 300, margin: "0 0 2rem",
          letterSpacing: "-0.01em",
        }}>
          Het eerste gesprek is altijd vrijblijvend.
        </h3>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: "0.65rem",
          background: "var(--accent-4)", border: "none",
          color: "var(--bg)", fontFamily: "var(--font-sans)",
          fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
          padding: "0.85rem 1.75rem", borderRadius: "2px", textDecoration: "none",
        }}>
          Neem contact op
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

    </div>
  );
}
