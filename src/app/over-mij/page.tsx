import Link from "next/link";

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

export default function OverMij() {
  return (
    <div className="page" style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="page-hero">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>Wie ik ben</p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
          fontWeight: 300, lineHeight: 1.15,
          margin: "0 0 1.25rem", letterSpacing: "-0.02em",
        }}>
          Over mij
        </h1>
      </div>

      {/* ── PERSOONLIJKE INTRO ── */}
      <section style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", padding: "6rem 5rem",
        alignItems: "start",
        borderBottom: "1px solid rgba(82,69,27,0.1)",
      }}>
        {/* Photo placeholder */}
        <div style={{
          borderRadius: "10px", overflow: "hidden",
          aspectRatio: "4/5",
          background: `
            radial-gradient(ellipse at 60% 30%, rgba(232,180,100,0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 80%, rgba(172,85,58,0.4) 0%, transparent 55%),
            linear-gradient(160deg, #c4985a 0%, #8a5c38 50%, #3d2410 100%)
          `,
          position: "relative",
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
          <p style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: "1.25rem", color: "var(--accent-2)",
            lineHeight: 1.6, margin: "0 0 2rem",
          }}>
            &ldquo;Ik geloof dat verandering niet alleen in het hoofd gebeurt — maar ook in de handen, het lichaam en het doen.&rdquo;
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.975rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "1.25rem",
          }}>
            Ik ben Sasha Elisabeth, vaktherapist beeldend en coach. Ik werk met mensen
            die willen groeien, vastlopen of zichzelf beter willen begrijpen — en met
            teams die samen sterker willen worden.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.975rem", lineHeight: 1.85,
            color: "var(--ink)",
          }}>
            Mijn aanpak combineert beeldende therapie met coaching: praktisch,
            persoonlijk en altijd op jouw tempo.
          </p>
        </div>
      </section>

      {/* ── ACHTERGROND ── */}
      <section style={{
        padding: "6rem 5rem",
        borderBottom: "1px solid rgba(82,69,27,0.1)",
        display: "grid", gridTemplateColumns: "280px 1fr", gap: "5rem",
        alignItems: "start",
      }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Achtergrond</p>
          <div style={{ marginTop: "0.5rem" }}>
            <BotanicalOrnament size={36} />
          </div>
        </div>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
            fontWeight: 300, lineHeight: 1.25,
            margin: "0 0 1.75rem", letterSpacing: "-0.01em",
          }}>
            Vaktherapie beeldend — werken met materiaal als taal.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "1.25rem",
          }}>
            Ik ben opgeleid als vaktherapist beeldend. Vaktherapie is een erkende vorm
            van therapie waarbij je niet via woorden maar via handelen en maken werkt
            aan psychisch en sociaal welbevinden.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--ink)", marginBottom: "1.25rem",
          }}>
            Tekenen, schilderen, boetseren, bouwen — het beeldende materiaal werkt als
            spiegel. Wat je maakt, zegt iets over wie je bent en wat je nodig hebt.
            Dat maakt het inzichtelijk, ook voor mensen die moeite hebben om dingen
            onder woorden te brengen.
          </p>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "2rem",
          }}>
            {["HBO Vaktherapie Beeldend", "Erkend vaktherapist", "Gecertificeerd coach", "Ervaringsgerichte methoden"].map(tag => (
              <span key={tag} style={{
                fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 400,
                color: "var(--accent-2)",
                border: "1px solid rgba(121,48,31,0.25)",
                borderRadius: "999px", padding: "0.4rem 1rem",
                background: "rgba(246,216,204,0.25)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WERKWIJZE ── */}
      <section style={{
        padding: "6rem 5rem",
        borderBottom: "1px solid rgba(82,69,27,0.1)",
        display: "grid", gridTemplateColumns: "280px 1fr", gap: "5rem",
        alignItems: "start",
      }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Werkwijze</p>
        </div>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
            fontWeight: 300, lineHeight: 1.25,
            margin: "0 0 1.75rem", letterSpacing: "-0.01em",
          }}>
            Ervaringsgericht — leren door te doen.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--accent-2)", marginBottom: "1.25rem",
          }}>
            Mijn werkwijze is ervaringsgericht. Dat betekent dat inzicht niet alleen
            ontstaat door er over na te denken, maar door iets te ervaren, te doen of
            te maken — en daarna samen te reflecteren op wat er gebeurde.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontWeight: 300,
            fontSize: "0.9375rem", lineHeight: 1.85,
            color: "var(--ink)", marginBottom: "2.5rem",
          }}>
            Ik werk zowel individueel als met groepen. Bij teambuilding en het
            vrouwenprogramma staat de groepsdynamiek centraal; bij individuele coaching
            gaat het over jouw persoonlijke groei.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { title: "Veiligheid eerst", body: "Elk proces begint met het creëren van een veilige omgeving, zonder oordeel." },
              { title: "Geen kunstervaring nodig", body: "Het gaat niet om het resultaat, maar om wat het proces je laat zien." },
              { title: "Op jouw tempo", body: "Ik sluit aan bij waar jij bent — niet bij waar je volgens anderen zou moeten zijn." },
              { title: "Reflectie centraal", body: "Samen kijken we naar wat het beeldende werk vertelt over patronen en behoeften." },
            ].map(item => (
              <div key={item.title} style={{
                padding: "1.5rem",
                background: "rgba(82,69,27,0.03)",
                border: "1px solid rgba(82,69,27,0.08)",
                borderRadius: "8px",
              }}>
                <h4 style={{
                  fontFamily: "var(--font-display)", fontSize: "1.1rem",
                  fontWeight: 500, color: "var(--accent-1)",
                  margin: "0 0 0.5rem",
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "0.85rem",
                  fontWeight: 300, lineHeight: 1.7,
                  color: "var(--accent-2)", margin: 0,
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: "1.375rem", color: "var(--accent-2)",
          margin: "0 0 2rem", maxWidth: "500px", marginLeft: "auto", marginRight: "auto",
          lineHeight: 1.5,
        }}>
          &ldquo;Je hoeft het niet te begrijpen om ermee aan de slag te gaan.&rdquo;
        </p>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: "0.65rem",
          background: "var(--accent-4)", border: "none",
          color: "var(--bg)", fontFamily: "var(--font-sans)",
          fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
          padding: "0.85rem 1.75rem", borderRadius: "2px", textDecoration: "none",
        }}>
          Maak een afspraak
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

    </div>
  );
}
