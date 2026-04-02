import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="page" style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="page-hero">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>Laten we kennismaken</p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
          fontWeight: 300, lineHeight: 1.15,
          margin: "0 0 1.25rem", letterSpacing: "-0.02em",
        }}>
          Contact
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)", fontWeight: 300,
          fontSize: "0.975rem", lineHeight: 1.8,
          color: "var(--accent-2)", maxWidth: "480px",
        }}>
          Heb je een vraag, wil je meer weten over het aanbod, of ben je klaar om
          een eerste stap te zetten? Stuur een bericht — ik reageer binnen twee werkdagen.
        </p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{
        display: "grid", gridTemplateColumns: "1fr 1.6fr",
        gap: "6rem", padding: "6rem 5rem 8rem",
        alignItems: "start",
      }}>

        {/* Left — contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Email */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>E-mailadres</p>
            <a
              href="mailto:hallo@sashaelisabeth.nl"
              style={{
                fontFamily: "var(--font-display)", fontSize: "1.25rem",
                fontWeight: 400, color: "var(--accent-2)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(121,48,31,0.3)",
                paddingBottom: "2px",
              }}
            >
              hallo@sashaelisabeth.nl
            </a>
          </div>

          {/* Response time */}
          <div style={{
            background: "rgba(246,216,204,0.35)",
            border: "1px solid rgba(121,48,31,0.12)",
            borderRadius: "8px", padding: "1.5rem",
          }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Reactietijd</p>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "0.875rem",
              fontWeight: 300, lineHeight: 1.7, color: "var(--accent-2)", margin: 0,
            }}>
              Ik reageer doorgaans binnen twee werkdagen.
              Het eerste kennismakingsgesprek is altijd vrijblijvend en gratis.
            </p>
          </div>

          {/* Quote */}
          <div style={{
            borderLeft: "2px solid var(--accent-3)",
            paddingLeft: "1.25rem",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: "1.0625rem", color: "var(--accent-2)",
              lineHeight: 1.6, margin: 0,
            }}>
              &ldquo;Elke samenwerking begint met een gesprek. Ik hoor graag wat jou bezighoudt.&rdquo;
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Stuur een bericht</p>
          <ContactForm />
        </div>

      </section>

    </div>
  );
}
