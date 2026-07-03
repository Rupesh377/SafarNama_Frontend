import SectionHeader from "./SectionHeader";

const reviews = [
  { id: 1, name: "Gaurav Raheja", avatar: "P", rating: 5, date: "March 2026", text: "Sunday summit trek was refreshing and challenging; made new friends, fun with coach, laughter, mountain views, unforgettable memories together." },
  { id: 2, name: "Stuti Badal",  avatar: "A", rating: 5, date: "April 2026", text: "Had an amazing experience it was so promising and fun... enjoy the whole event team served what they actually offer's ." },
  { id: 3, name: "Anju Saini",  avatar: "S", rating: 5, date: "May 2026", text: "An unforgettable trekking experience with Safarnama. Amazing team, well-managed safety, and breathtaking views throughout the journey! 🌄 …" },
  { id: 4, name: "Ashish Verma",  avatar: "R", rating: 5, date: "January 2026", text: "“Safarnama crew provided an excellent trekking experience. Great coordination, friendly nature, proper guidance and amazing hospitality. Highly satisfied and would love to join them again." },
];

const avatarColors = ["#4a7c59", "#2d7d9a", "#c17f3a", "#7a5c8a"];

export default function Reviews() {
  return (
    <section id="reviews" style={{ width: "100%", padding: "40px 0", background: "#0D1B2A" }}>
      <div style={{ padding: "0 24px" }}>
        <SectionHeader tag="Google Reviews" title={<span style={{ color: "white" }}>What Our Adventurers Say</span>} subtitle={<span style={{ color: "rgba(255,255,255,0.5)" }}>Real experiences from people who've walked the trails with us.</span>} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {reviews.map((r, i) => (
            <div key={r.id} style={{
              background: "white", border: "1px solid #e8ede6", borderRadius: "20px",
              padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              display: "flex", flexDirection: "column", gap: "16px",
              transition: "box-shadow 0.2s, transform 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(74,124,89,0.10)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px" }}>
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ fontSize: "14px", color: s < r.rating ? "#f4b942" : "#e0e0e0" }}>★</span>
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, flex: 1 }}>"{r.text}"</p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  background: avatarColors[i % avatarColors.length],
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: 700, fontSize: "14px", flexShrink: 0
                }}>
                  {r.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a" }}>{r.name}</div>
                  <div style={{ fontSize: "12px", color: "#aaa" }}>{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a href="https://www.google.com/maps/search/SafarNama Events" target="_blank" rel="noopener noreferrer"
            style={{ color: "#F97316", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}


