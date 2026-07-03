export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "24px" }}>
      <span style={{ color: "#F97316", fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" }}>
        {tag}
      </span>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#1a1a1a", marginTop: "10px", marginBottom: "12px", letterSpacing: "-0.4px" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: "15px", color: "#888", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>{subtitle}</p>
      )}
    </div>
  );
}

