import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";
import AdminLayout from "../../components/AdminLayout";

const statCards = (s) => [
  { label: "Upcoming Events",  value: s?.upcomingEvents  ?? "–", emoji: "📅", path: "/admin/events",           bg: "#eef6f0", border: "#c8dece", text: "#2d5a3d" },
  { label: "Completed Events", value: s?.completedEvents ?? "–", emoji: "✅", path: "/admin/completed-events",  bg: "#f0f4ff", border: "#c5d0f0", text: "#2d3a7a" },
  { label: "Upcoming Treks",   value: s?.upcomingTrek    ?? "–", emoji: "🏔️", path: "/admin/treks",            bg: "#fff5ed", border: "#f0d8b8", text: "#7a3d0a" },
  { label: "Enquiries",        value: s?.enquiries        ?? "–", emoji: "💬", path: "/admin/enquiries",        bg: "#fef0f0", border: "#f0c5c5", text: "#7a2020" },
];

const quickLinks = [
  { label: "Add Upcoming Event",    path: "/admin/events",           emoji: "📅" },
  { label: "Add Completed Event",   path: "/admin/completed-events", emoji: "✅" },
  { label: "Add Upcoming Trek",     path: "/admin/treks",            emoji: "🏔️" },
  { label: "View All Enquiries",    path: "/admin/enquiries",        emoji: "💬" },
];

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/dashboard").then(r => setStats(r.data)).catch(console.error);
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {/* Welcome */}
      <div style={{ background: "linear-gradient(135deg, #2d5a3d, #4a7c59)", borderRadius: "20px", padding: "32px 36px", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h2 style={{ color: "white", fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>Welcome back 👋</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>Here's what's happening with SafarNama today.</p>
        </div>
        <div style={{ fontSize: "48px" }}>🏔️</div>
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "36px" }}>
        {statCards(stats).map(({ label, value, emoji, path, bg, border, text }) => (
          <button key={label} onClick={() => navigate(path)}
            style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: "18px", padding: "24px", textAlign: "left", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>{emoji}</div>
            <div style={{ fontSize: "36px", fontWeight: 900, color: text, letterSpacing: "-1px", marginBottom: "4px" }}>
              {stats === null ? <span style={{ fontSize: "20px", opacity: 0.4 }}>...</span> : value}
            </div>
            <div style={{ fontSize: "13px", color: "#666", fontWeight: 500 }}>{label}</div>
          </button>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#333", marginBottom: "14px", letterSpacing: "0.3px" }}>Quick Actions</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {quickLinks.map(({ label, path, emoji }) => (
            <button key={label} onClick={() => navigate(path)}
              style={{ background: "white", border: "1.5px solid #e8ede6", borderRadius: "14px", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#4a7c59"; e.currentTarget.style.background = "#f4faf4"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8ede6"; e.currentTarget.style.background = "white"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "18px" }}>{emoji}</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>{label}</span>
              </div>
              <span style={{ color: "#aaa", fontSize: "16px" }}>→</span>
            </button>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
