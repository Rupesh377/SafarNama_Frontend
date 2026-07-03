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
      background: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      boxShadow: scrolled ? "0 1px 24px rgba(13,27,42,0.25)" : "none",
    }}>
      <div style={{ padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <button onClick={handleLogoClick} style={{ display: "flex", alignItems: "center", gap: "10px", background: "none", border: "none", cursor: "pointer" }}>
          <img src="/Safarnama_logo.png" alt="SafarNama Logo" style={{ width: "44px", height: "44px", borderRadius: "10px", objectFit: "cover" }} />
          <span style={{ fontWeight: 800, fontSize: "20px", color: "white", letterSpacing: "-0.3px" }}>
            Safar<span style={{ color: "#F97316" }}>Nama</span>
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden md:flex">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", fontWeight: 500, fontSize: "14px", color: "rgba(255,255,255,0.85)", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#F97316"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.85)"}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}
      style={{ background: "none", border: "none", cursor: "pointer", color: "white" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0D1B2A", borderTop: "1px solid rgba(249,115,22,0.2)", padding: "16px 24px" }}>
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 0", background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", cursor: "pointer", fontSize: "15px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

