import React from 'react';

export default function FloatingActions() {
  const whatsAppNumber = "919462388706";
  const whatsAppText = encodeURIComponent("Hi SafarNama! I am interested in joining your upcoming treks, weekend getaways, and events. Please connect back!");
  const callingNumber = "+919462388706";

  const btnBase = {
    position: "relative",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  };

  return (
    <div style={{
      position: "fixed",
      right: "20px",
      bottom: "32px",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "center",
    }}>

      {/* WhatsApp Button */}
      <div style={{ position: "relative" }} className="float-btn-wrap">
        {/* Pulse ring */}
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "#25D366", opacity: 0.35,
          animation: "safar-ping 1.6s ease-out infinite",
          pointerEvents: "none",
        }} />
        <a
          href={`https://wa.me/${whatsAppNumber}?text=${whatsAppText}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Message on WhatsApp"
          style={{ ...btnBase, background: "#25D366" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)";    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)"; }}
        >
          {/* Official WhatsApp SVG */}
          <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.8 1.83 6.8L2 30l7.38-1.8A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 01-5.88-1.6l-.42-.25-4.38 1.07 1.1-4.26-.28-.44A11.56 11.56 0 014.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.66c-.35-.17-2.06-1.01-2.38-1.13-.32-.11-.55-.17-.78.17s-.9 1.13-1.1 1.36c-.2.23-.4.26-.74.09-.35-.17-1.47-.54-2.8-1.72-1.03-.92-1.73-2.05-1.93-2.4-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.65.29-.81.29-1.5.2-1.65-.08-.14-.3-.23-.65-.4z"/>
          </svg>
          {/* Tooltip */}
          <span style={{
            position: "absolute", right: "66px", top: "50%", transform: "translateY(-50%)",
            background: "#1a1a1a", color: "white", fontSize: "12px", fontWeight: 600,
            padding: "6px 12px", borderRadius: "8px", whiteSpace: "nowrap",
            opacity: 0, pointerEvents: "none", transition: "opacity 0.2s",
          }} className="float-tooltip">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Call Button */}
      <a
        href={`tel:${callingNumber}`}
        title="Call SafarNama"
        style={{ ...btnBase, background: "#FF6B35" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,107,53,0.45)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)";    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)"; }}
      >
        {/* Phone SVG */}
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        {/* Tooltip */}
        <span style={{
          position: "absolute", right: "66px", top: "50%", transform: "translateY(-50%)",
          background: "#1a1a1a", color: "white", fontSize: "12px", fontWeight: 600,
          padding: "6px 12px", borderRadius: "8px", whiteSpace: "nowrap",
          opacity: 0, pointerEvents: "none", transition: "opacity 0.2s",
        }} className="float-tooltip">
          Call Us
        </span>
      </a>

      <style>{`
        @keyframes safar-ping {
          0%   { transform: scale(1);   opacity: 0.35; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .float-btn-wrap:hover .float-tooltip,
        a:hover > .float-tooltip {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
