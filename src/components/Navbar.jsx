import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "About",   href: "#about" },
  { label: "Events",  href: "#completed-events" },
  { label: "Travels", href: "#upcoming-treks" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);

  const handleLogoClick = () => {
    const n = clicks + 1;
    setClicks(n);
    if (n >= 3) { setClicks(0); navigate("/admin/login"); }
    else { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }
    setTimeout(() => setClicks(0), 1500);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      background: scrolled || open ? "rgba(13,27,42,0.97)" : "transparent",
      backdropFilter: scrolled || open ? "blur(14px)" : "none",
      boxShadow: scrolled ? "0 1px 24px rgba(13,27,42,0.25)" : "none",
    }}>
      <style>{`
        .snav-desktop { display: flex; }
        .snav-toggle  { display: none; }
        @media (max-width: 767px) {
          .snav-desktop { display: none !important; }
          .snav-toggle  { display: flex !important; }
        }
        .snav-link {
          background: none; border: none; cursor: pointer;
          font-weight: 500; font-size: 14px;
          color: rgba(255,255,255,0.85); transition: color 0.2s;
        }
        .snav-link:hover { color: #F97316; }
      `}</style>

      {/* Top bar */}
      <div style={{ padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <button onClick={handleLogoClick} style={{ display: "flex", alignItems: "center", gap: "10px", background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}>
          <img src="/Safarnama_logo.png" alt="SafarNama Logo" style={{ width: "40px", height: "40px", borderRadius: "10px", objectFit: "cover" }} />
          <span style={{ fontWeight: 800, fontSize: "20px", color: "white", letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>
            Safar<span style={{ color: "#F97316" }}>Nama</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="snav-desktop" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map((l) => (
            <button key={l.label} className="snav-link" onClick={() => scrollTo(l.href)}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="snav-toggle" onClick={() => setOpen(!open)}
          style={{ alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", padding: "6px", cursor: "pointer", color: "white" }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ borderTop: "1px solid rgba(249,115,22,0.2)", padding: "8px 16px 20px" }}>
          {navLinks.map((l, i) => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", textAlign: "left", padding: "14px 12px",
                background: "none", border: "none",
                borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                cursor: "pointer", fontSize: "15px", fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}>
              {l.label}
              <span style={{ color: "#F97316", fontSize: "14px" }}>→</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
