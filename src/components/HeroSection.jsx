export default function HeroSection() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{
      width: "100%",
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      {/* Background mountain photo */}
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80&fit=crop"
        alt="Mountain trek background"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
        }}
      />
      {/* Dark overlay — midnight-to-dusk gradient matching night sky palette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, rgba(13,27,42,0.78) 0%, rgba(29,58,47,0.62) 50%, rgba(13,27,42,0.72) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center",
        padding: "0 20px",
        maxWidth: "780px",
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "100px", padding: "6px 18px", marginBottom: "28px",
        }}>
          <span style={{ width: "7px", height: "7px", background: "#F97316", borderRadius: "50%", display: "inline-block" }} />
          <span style={{ color: "rgba(255,255,255,0.92)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.4px" }}>
            Explore India's Most Beautiful Trails
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 7vw, 80px)",
          fontWeight: 900,
          color: "white",
          lineHeight: 1.08,
          marginBottom: "22px",
          letterSpacing: "-2px",
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}>
          Adventure is<br />
          <span style={{ color: "#F97316" }}>Calling You</span>
        </h1>

        <p style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.78)",
          lineHeight: 1.7,
          maxWidth: "500px",
          margin: "0 auto 40px",
        }}>
          Curated treks, group events, and wilderness experiences designed for every kind of explorer.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("#completed-events")}
            style={{
              background: "linear-gradient(135deg, #F97316, #C45A00)",
              color: "white",
              border: "none", borderRadius: "12px",
              padding: "14px 34px", fontWeight: 700, fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(249,115,22,0.40)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(249,115,22,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(249,115,22,0.40)"; }}
          >
            Explore Events
          </button>
          <button
            onClick={() => scrollTo("#enquiry")}
            style={{
              background: "transparent", color: "white",
              border: "2px solid rgba(255,255,255,0.45)",
              borderRadius: "12px", padding: "14px 34px",
              fontWeight: 600, fontSize: "15px", cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"; }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      }}>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "24px", height: "38px", border: "2px solid rgba(255,255,255,0.25)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "5px" }}>
          <div style={{ width: "3px", height: "7px", background: "rgba(255,255,255,0.5)", borderRadius: "2px", animation: "scrollBounce 2s infinite" }} />
        </div>
      </div>
      <style>{`@keyframes scrollBounce{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(7px);opacity:0.4}}`}</style>
    </section>
  );
}
