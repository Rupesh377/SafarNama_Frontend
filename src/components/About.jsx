const stats = [
  {
    value: "50+",
    label: "Treks Completed",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80&fit=crop",
    // Hikers on a mountain trail
  },
  {
    value: "1,000+",
    label: "Happy Adventurers",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop",
    // Group of friends celebrating outdoors
  },
  {
    value: "30+",
    label: "Destinations",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop",
    // Aerial mountain landscape
  },
  {
    value: "4.9",
    label: "Avg. Rating",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80&fit=crop",
    // Campfire / celebration night
  },
];

const whatWeDo = [
  {
    label: "Adventure Treks & Hiking Experiences",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80&fit=crop",
  },
  {
    label: "Weekend Getaways & Group Trips",
    img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=600&q=80&fit=crop",
  },
  {
    label: "Holi, New Year & Festive Celebrations",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80&fit=crop",
  },
  {
    label: "Garba Nights & Cultural Events",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80&fit=crop",
  },
  {
    label: "Music Baithaks & Live Shows",
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80&fit=crop",
  },
  {
    label: "Open Mics & Community Meetups",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80&fit=crop",
  },
  {
    label: "Corporate & Team-Building Events",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop",
  },
  {
    label: "Customized Travel & Event Experiences",
    img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80&fit=crop",
  },
];

export default function About() {
  return (
    <section id="about" style={{ width: "100%", background: "var(--clr-sand)" }}>

      {/* ── Hero block ── */}
      <div style={{ padding: "64px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="about-grid">

          {/* Left */}
          <div>
            <span style={{ color: "#F97316", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              About SafarNama
            </span>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 900, color: "#1a1a1a", marginTop: "12px", marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
              Not Just a Journey,<br />Not Just an Event —<br />
              <span style={{ color: "#F97316" }}>It's a Community.</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.9, marginBottom: "16px" }}>
              Safarnama Events is a <strong>Jaipur-based travel and experiential events company</strong> dedicated to creating unforgettable moments through adventure, culture, entertainment, and community-driven experiences.
            </p>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.9, marginBottom: "16px" }}>
              What started as a passion for exploring new places and bringing people together has evolved into a vibrant community of travelers, adventurers, artists, and experience seekers. At Safarnama, we believe that the best memories are created when people come together to celebrate life, explore new experiences, and build meaningful connections.
            </p>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.9 }}>
              Over the years, we have successfully organized a wide range of experiences — from sunrise treks, hiking adventures, and weekend getaways to large-scale cultural and entertainment events across Jaipur, including Holi Parties, New Year Celebrations, Garba Nights, Music Baithaks, Live Shows, Open Mics, and Social Events that bring hundreds of people together.
            </p>
          </div>

          {/* Right — photo stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map(({ value, label, img }) => (
              <div key={label} style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: "160px",
                cursor: "default",
                boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.28)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)";    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)"; }}
              >
                {/* Photo background */}
                <img src={img} alt={label} style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                }} />
                {/* Dark gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(160deg, rgba(13,27,42,0.35) 0%, rgba(13,27,42,0.72) 100%)",
                }} />
                {/* Text */}
                <div style={{ position: "relative", zIndex: 1, padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ fontSize: "34px", fontWeight: 900, color: "white", letterSpacing: "-1px", lineHeight: 1, textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 600, marginTop: "4px", letterSpacing: "0.3px" }}>{label}</div>
                </div>
                {/* Orange accent bar at bottom */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #F97316, #E8A020)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div style={{ background: "#0D1B2A", padding: "56px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "960px", margin: "0 auto" }} className="about-grid">

          {/* Mission */}
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", minHeight: "280px" }}>
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&fit=crop"
              alt="Our Mission"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.88) 100%)" }} />
            {/* Orange accent top border */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #F97316, #E8A020)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "40px 36px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "52px", height: "52px", borderRadius: "16px",
                background: "rgba(249,115,22,0.18)", border: "1px solid rgba(249,115,22,0.35)",
                marginBottom: "20px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <h3 style={{ color: "white", fontWeight: 800, fontSize: "22px", marginBottom: "16px", letterSpacing: "-0.3px" }}>Our Mission</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.85 }}>
                To inspire people to explore, celebrate, and connect through thoughtfully curated travel experiences, cultural gatherings, and community-driven events.
              </p>
              <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ height: "2px", width: "32px", background: "#F97316", borderRadius: "2px" }} />
                <span style={{ color: "#F97316", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>Explore. Celebrate. Connect.</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", minHeight: "280px" }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop"
              alt="Our Vision"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(13,27,42,0.45) 0%, rgba(13,27,42,0.88) 100%)" }} />
            {/* Gold accent top border */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #E8A020, #F97316)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "40px 36px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "52px", height: "52px", borderRadius: "16px",
                background: "rgba(232,160,32,0.18)", border: "1px solid rgba(232,160,32,0.35)",
                marginBottom: "20px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 6l5 5 5-5 5 5 5-5"/><path d="M1 12l5 5 5-5 5 5 5-5"/>
                </svg>
              </div>
              <h3 style={{ color: "white", fontWeight: 800, fontSize: "22px", marginBottom: "16px", letterSpacing: "-0.3px" }}>Our Vision</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.85 }}>
                To become one of India's most loved experiential brands, creating meaningful journeys, memorable events, and a thriving community built around shared experiences.
              </p>
              <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ height: "2px", width: "32px", background: "#E8A020", borderRadius: "2px" }} />
                <span style={{ color: "#E8A020", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>India's Most Loved Brand</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── What We Do ── */}
      <div style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span style={{ color: "#F97316", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>What We Do</span>
          <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a1a1a", marginTop: "10px", marginBottom: "32px", letterSpacing: "-0.4px" }}>
            Experiences Crafted for <span style={{ color: "#F97316" }}>Every Soul</span>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {whatWeDo.map(({ label, img }) => (
              <div key={label} style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: "140px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)";    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"; }}
              >
                {/* Photo */}
                <img src={img} alt={label} style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                }} />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg, rgba(13,27,42,0.82) 0%, rgba(13,27,42,0.25) 60%, transparent 100%)",
                }} />
                {/* Label */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "14px 14px 12px",
                  zIndex: 1,
                }}>
                  <span style={{ color: "white", fontSize: "13px", fontWeight: 700, lineHeight: 1.4, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{label}</span>
                </div>
                {/* Orange bottom bar */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #F97316, #E8A020)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Promise ── */}
      <div style={{ position: "relative", overflow: "hidden", padding: "80px 24px" }}>
        {/* Background photo — group celebrating at summit */}
        <img
          src="https://images.unsplash.com/photo-1527004013197-933b977c3db6?w=1600&q=80&fit=crop"
          alt="Our Promise"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        {/* Deep overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(13,27,42,0.82) 0%, rgba(13,27,42,0.70) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "#F97316", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Our Promise</span>
          <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.92)", lineHeight: 1.9, marginTop: "16px", marginBottom: "28px", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Every event, every journey, and every gathering is crafted to deliver <strong style={{ color: "#F97316" }}>memorable experiences</strong>, genuine connections, and stories that stay with you long after the day ends.
          </p>
          <div style={{ borderTop: "2px solid rgba(249,115,22,0.5)", paddingTop: "24px" }}>
            <p style={{ fontSize: "16px", color: "#F97316", fontWeight: 800, letterSpacing: "0.5px" }}>
              Safarnama Events
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginTop: "6px", fontStyle: "italic" }}>
              Not Just a Journey, Not Just an Event — It's a Community.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-grid{ grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
