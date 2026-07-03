import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Branded SVG Icons ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socialLinks = [
  {
    label: "safarnama.officials",
    sublabel: "Instagram",
    href: "https://www.instagram.com/safarnama.officials?igsh=MTVrZmRjNG1vMDJsNQ==",
    icon: <InstagramIcon />,
    color: "#E1306C",
  },
  {
    label: "safarnama.events",
    sublabel: "Instagram",
    href: "https://www.instagram.com/safarnama.events?igsh=aGJlOGk4bHplZWtz",
    icon: <InstagramIcon />,
    color: "#E1306C",
  },
  {
    label: "safarnama.travelss",
    sublabel: "Instagram",
    href: "https://www.instagram.com/safarnama.travelss?igsh=Y3c0ZjIxYXdpemFz",
    icon: <InstagramIcon />,
    color: "#E1306C",
  },
  {
    label: "SafarNama",
    sublabel: "Facebook",
    href: "https://www.facebook.com/share/1EWN8Q5Rw4/?mibextid=wwXIfr",
    icon: <FacebookIcon />,
    color: "#1877F2",
  },
  {
    label: "@safarnamaevents",
    sublabel: "YouTube",
    href: "https://youtube.com/@safarnamaevents?si=Ge2P3v-8acIisEId",
    icon: <YouTubeIcon />,
    color: "#FF0000",
  },
  {
    label: "safarnama-events",
    sublabel: "LinkedIn",
    href: "https://www.linkedin.com/company/safarnama-events/",
    icon: <LinkedInIcon />,
    color: "#0A66C2",
  },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);
  const handleSecretClick = () => {
    const n = clicks + 1; setClicks(n);
    if (n >= 5) { setClicks(0); navigate("/admin/login"); }
    setTimeout(() => setClicks(0), 3000);
  };

  return (
    <footer id="contact" style={{ width: "100%", background: "#0D1B2A", paddingTop: "48px", paddingBottom: "32px" }}>
      <div style={{ padding: "0 24px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", marginBottom: "36px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ background: "#1A2744", borderRadius: "12px", padding: "8px", display: "flex" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: "18px", color: "white" }}>
                Safar<span style={{ color: "#F97316" }}>Nama</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
              Your trusted partner for adventures, treks, and group events across India.
            </p>

            {/* Social icon buttons row */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${item.sublabel}: ${item.label}`}
                  style={{
                    width: "36px", height: "36px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = item.color;
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "About Us",         href: "#about" },
                { label: "Completed Events", href: "#completed-events" },
                { label: "Upcoming Events",  href: "#upcoming-events" },
                { label: "Upcoming Treks",   href: "#upcoming-treks" },
                { label: "Send Enquiry",     href: "#enquiry" },
              ].map(l => (
                <button key={l.label} onClick={() => scrollTo(l.href)}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", color: "rgba(255,255,255,0.5)", fontSize: "14px", transition: "color 0.2s", padding: 0 }}
                  onMouseEnter={e => e.target.style.color = "#F97316"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:Safarnamaaevents@gmail.com" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                Safarnamaaevents@gmail.com
              </a>
              <a href="tel:+919462388706" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                📞 +91 94623 88706
              </a>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                📍 Jaipur, Rajasthan, India
              </span>
            </div>
          </div>

          {/* Follow Us — with branded icons + labels */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Follow Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {socialLinks.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    color: "rgba(255,255,255,0.5)", fontSize: "13px",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = item.color; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                  <span style={{
                    width: "28px", height: "28px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "11px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.sublabel}</span>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Ready?</h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
              Drop us an enquiry and let's plan your next adventure together.
            </p>
            <button onClick={() => scrollTo("#enquiry")}
              style={{ background: "linear-gradient(135deg, #F97316, #C45A00)", color: "white", border: "none", borderRadius: "12px", padding: "12px 22px", fontWeight: 600, fontSize: "14px", cursor: "pointer", transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.target.style.opacity = "0.9"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}>
              Get Started →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            ©{" "}
            <span onClick={handleSecretClick} style={{ cursor: "default", userSelect: "none" }}>
              {new Date().getFullYear()}
            </span>
            {" "}SafarNama. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>Made with ❤️ for adventurers</p>
        </div>
      </div>
    </footer>
  );
}
