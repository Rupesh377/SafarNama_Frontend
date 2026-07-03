import { MapPin, Clock, Calendar, MessageCircle, ChevronRight, Mountain, Star } from "lucide-react";

const diffBadge = {
  Easy:     { bg: "#16a34a", label: "Easy" },
  Moderate: { bg: "#d97706", label: "Moderate" },
  Hard:     { bg: "#dc2626", label: "Hard" },
};

// Fallback gradient images per type when no imageUrl is provided
const fallbackImages = {
  event:     "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80&fit=crop",
  completed: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80&fit=crop",
  trek:      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80&fit=crop",
};

export default function EventCard({ item, type, onClick, onEnquiry }) {
  const fmt    = (d) => d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : null;
  const fmtDT  = (d) => d ? new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : null;

  let dateStr = "";
  if (type === "completed") dateStr = item.duration || "";
  else if (type === "event") dateStr = item.time ? fmtDT(item.time) : "";
  else if (type === "trek")  dateStr = item.startDate ? `${fmt(item.startDate)} – ${fmt(item.endDate)}` : "";

  const imgSrc = item.imageUrl || fallbackImages[type] || fallbackImages.event;
  const diff   = item.difficultyLevel ? diffBadge[item.difficultyLevel] : null;

  const typeTag = type === "trek" ? "Trek" : type === "completed" ? "Past Event" : "Upcoming";
  const typeColor = type === "trek" ? "#0ea5e9" : type === "completed" ? "#8b5cf6" : "#F97316";

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "box-shadow 0.3s, transform 0.3s",
        cursor: "pointer",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.16)";
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onClick={onClick}
    >
      {/* ── Image ── */}
      <div style={{ position: "relative", height: "210px", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={imgSrc}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
          onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 55%)",
        }} />

        {/* Type tag */}
        <span style={{
          position: "absolute", top: "12px", left: "12px",
          background: typeColor,
          color: "white", fontSize: "10px", fontWeight: 700,
          padding: "4px 10px", borderRadius: "20px", letterSpacing: "0.5px", textTransform: "uppercase",
        }}>
          {typeTag}
        </span>

        {/* Difficulty badge */}
        {diff && (
          <span style={{
            position: "absolute", top: "12px", right: "12px",
            background: diff.bg,
            color: "white", fontSize: "10px", fontWeight: 700,
            padding: "4px 10px", borderRadius: "20px", letterSpacing: "0.4px",
          }}>
            {diff.label}
          </span>
        )}

        {/* Price overlay on image bottom */}
        {item.price && (
          <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
            <span style={{
              background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)",
              color: "white", fontWeight: 800, fontSize: "16px",
              padding: "4px 12px", borderRadius: "10px",
            }}>
              ₹{item.price.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div style={{ padding: "18px 20px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{
          fontSize: "15px", fontWeight: 800, color: "#0D1B2A",
          marginBottom: "10px", lineHeight: 1.4,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {item.title}
        </h3>

        {/* Meta info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
          {item.location && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "12px" }}>
              <MapPin size={11} style={{ flexShrink: 0, color: "#F97316" }} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.location}</span>
            </div>
          )}
          {dateStr && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "12px" }}>
              {type === "completed"
                ? <Clock size={11} style={{ flexShrink: 0, color: "#F97316" }} />
                : <Calendar size={11} style={{ flexShrink: 0, color: "#F97316" }} />}
              {dateStr}
            </div>
          )}
          {type === "trek" && item.altitude && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "12px" }}>
              <Mountain size={11} style={{ flexShrink: 0, color: "#F97316" }} />
              {item.altitude}
            </div>
          )}
        </div>

        {/* Description */}
        <p style={{
          fontSize: "13px", color: "#888", lineHeight: 1.65, flex: 1, marginBottom: "16px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {item.description || ""}
        </p>

        {/* ── Footer ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: "12px", borderTop: "1px solid #f0f0f0",
        }}>
          {/* View details */}
          <button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            style={{
              display: "flex", alignItems: "center", gap: "4px",
              background: "none", border: "none", cursor: "pointer",
              color: typeColor, fontSize: "12px", fontWeight: 700, padding: 0,
              transition: "gap 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.gap = "8px"}
            onMouseLeave={e => e.currentTarget.style.gap = "4px"}
          >
            View Details <ChevronRight size={13} />
          </button>

          {/* Enquire button */}
          <button
            onClick={(e) => { e.stopPropagation(); onEnquiry(); }}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: typeColor,
              border: "none",
              color: "white", fontSize: "12px", fontWeight: 700,
              padding: "8px 16px", borderRadius: "10px", cursor: "pointer",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: `0 4px 12px ${typeColor}40`,
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <MessageCircle size={12} /> Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
