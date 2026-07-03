import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../Services/auth";

const navItems = [
  { label: "Dashboard",        path: "/admin/dashboard",        emoji: "🏠" },
  { label: "Upcoming Events",  path: "/admin/events",           emoji: "📅" },
  { label: "Completed Events", path: "/admin/completed-events", emoji: "✅" },
  { label: "Upcoming Treks",   path: "/admin/treks",            emoji: "🏔️" },
  { label: "Enquiries",        path: "/admin/enquiries",        emoji: "💬" },
];

export default function AdminLayout({ title, children, action }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => { logout(); navigate("/"); };

  const SidebarContent = () => (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "white", borderRight: "1px solid #e8ede6" }}>
      {/* Brand */}
      <div style={{ padding: "24px 20px", borderBottom: "1px solid #f0f0ec" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "linear-gradient(135deg, #4a7c59, #2d5a3d)", borderRadius: "10px", padding: "7px", display: "flex" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "15px", color: "#1a1a1a" }}>SafarNama</div>
            <div style={{ fontSize: "11px", color: "#4a7c59", fontWeight: 600, letterSpacing: "1px" }}>ADMIN PANEL</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {navItems.map(({ label, path, emoji }) => {
          const active = location.pathname === path;
          return (
            <button key={path}
              onClick={() => { navigate(path); setMobileOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "11px 14px", borderRadius: "12px", border: "none", cursor: "pointer",
                fontSize: "14px", fontWeight: active ? 700 : 500, textAlign: "left", width: "100%",
                background: active ? "#eef6f0" : "transparent",
                color: active ? "#2d5a3d" : "#555",
                transition: "all 0.15s"
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "#f4f7f4"; e.currentTarget.style.color = "#1a1a1a"; }}}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#555"; }}}
            >
              <span style={{ fontSize: "16px" }}>{emoji}</span>
              {label}
              {active && <div style={{ marginLeft: "auto", width: "6px", height: "6px", background: "#4a7c59", borderRadius: "50%" }} />}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: "12px", borderTop: "1px solid #f0f0ec" }}>
        <button onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", width: "100%", background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "13px", borderRadius: "10px", transition: "all 0.15s", marginBottom: "2px" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#f4f7f4"; e.currentTarget.style.color = "#333"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#888"; }}>
          🌐 View Site
        </button>
        <button onClick={handleLogout}
          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", width: "100%", background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "13px", borderRadius: "10px", transition: "all 0.15s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#fff0f0"; e.currentTarget.style.color = "#c0392b"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#888"; }}>
          🚪 Logout
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8faf8" }}>
      {/* Desktop sidebar */}
      <div style={{ width: "220px", flexShrink: 0, position: "fixed", top: 0, bottom: 0, left: 0, zIndex: 30 }} className="hidden md:block">
        <SidebarContent />
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, display: "flex" }} className="md:hidden">
          <div style={{ width: "220px" }}><SidebarContent /></div>
          <div style={{ flex: 1, background: "rgba(0,0,0,0.4)" }} onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main */}
      <div style={{ flex: 1, marginLeft: "220px", display: "flex", flexDirection: "column", minWidth: 0 }} className="md:ml-220">
        <style>{`@media(max-width:768px){.md\\:ml-220{margin-left:0!important} .hidden.md\\:block{display:none!important}}`}</style>

        {/* Topbar */}
        <header style={{ background: "white", borderBottom: "1px solid #e8ede6", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button className="md:hidden" onClick={() => setMobileOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px", padding: "4px" }}>
              ☰
            </button>
            <h1 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a" }}>{title}</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {action && action}
            <div style={{ width: "32px", height: "32px", background: "#eef6f0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
              👤
            </div>
          </div>
        </header>

        <main style={{ flex: 1, padding: "28px 28px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
