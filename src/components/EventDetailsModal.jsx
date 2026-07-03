import { useState } from "react";
import { MapPin, Clock, DollarSign, Users, Calendar, Activity, Navigation } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

function parseItinerary(text) {
  if (!text) return [];
  const parts = text.split(/(?=Day\s+\d+\s*:)/i);
  return parts.map(p => p.trim()).filter(Boolean).map(p => {
    const m = p.match(/^(Day\s+\d+)\s*:\s*([\s\S]*)/i);
    return m ? { day: m[1], content: m[2].trim() } : { day: null, content: p };
  });
}

export default function EventDetailsModal({ item, type, onClose }) {
  const [showEnquiry, setShowEnquiry] = useState(false);
  if (!item) return null;

  const fmt = (d) => d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : null;
  const fmtDT = (d) => d ? new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : null;

  const meta = [];
  if (type === "completed") {
    if (item.location)     meta.push({ icon: MapPin,      label: "Location",  value: item.location });
    if (item.duration)     meta.push({ icon: Clock,       label: "Duration",  value: item.duration });
    if (item.price)        meta.push({ icon: DollarSign,  label: "Price",     value: `₹${item.price.toLocaleString()}` });
    if (item.totalMembers) meta.push({ icon: Users,       label: "Members",   value: item.totalMembers });
  } else if (type === "event") {
    if (item.time)     meta.push({ icon: Calendar,   label: "Date & Time", value: fmtDT(item.time) });
    if (item.location) meta.push({ icon: MapPin,     label: "Location",    value: item.location });
    if (item.price)    meta.push({ icon: DollarSign, label: "Price",       value: `₹${item.price.toLocaleString()}` });
  } else if (type === "trek") {
    if (item.startDate)       meta.push({ icon: Calendar,   label: "Start Date",    value: fmt(item.startDate) });
    if (item.endDate)         meta.push({ icon: Calendar,   label: "End Date",      value: fmt(item.endDate) });
    if (item.location)        meta.push({ icon: MapPin,     label: "Location",      value: item.location });
    if (item.price)           meta.push({ icon: DollarSign, label: "Price",         value: `₹${item.price.toLocaleString()}` });
    if (item.difficultyLevel) meta.push({ icon: Activity,   label: "Difficulty",    value: item.difficultyLevel });
    if (item.meetingPoint)    meta.push({ icon: Navigation, label: "Meeting Point", value: item.meetingPoint });
  }

  const itinerary = parseItinerary(item.itinerary);

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
        onClick={e => e.target === e.currentTarget && onClose()}>
        <div style={{ background: "white", borderRadius: "24px", width: "100%", maxWidth: "900px", maxHeight: "90vh", display: "flex", flexDirection: "column", boxShadow: "0 32px 80px rgba(0,0,0,0.15)", overflow: "hidden" }}>

          {/* Header */}
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#1a1a1a" }}>{item.title}</h2>
            <button onClick={onClose} style={{ background: "#f4f4f0", border: "none", borderRadius: "8px", padding: "7px 12px", cursor: "pointer", fontSize: "13px", color: "#555", fontWeight: 600 }}>✕ Close</button>
          </div>

          {/* Body — 2 cols */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1, overflow: "hidden", minHeight: 0 }} className="modal-grid">
            <style>{`@media(max-width:640px){.modal-grid{grid-template-columns:1fr!important}}`}</style>

            {/* LEFT */}
            <div style={{ borderRight: "1px solid #f0f0ec", overflowY: "auto" }}>
              {item.imageUrl && (
                <div style={{ height: "220px", flexShrink: 0 }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "24px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#4a7c59", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Details</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {meta.map(({ icon: Icon, label, value }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <div style={{ background: "#eef6f0", borderRadius: "8px", padding: "8px", flexShrink: 0 }}>
                        <Icon size={13} color="#4a7c59" />
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", color: "#aaa", fontWeight: 500 }}>{label}</div>
                        <div style={{ fontSize: "14px", color: "#1a1a1a", fontWeight: 600, marginTop: "1px" }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>

              {item.description && (
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#4a7c59", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>About</p>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>{item.description}</p>
                </div>
              )}

              {itinerary.length > 0 && (
                <div style={{ borderTop: "1px solid #f0f0ec", paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#4a7c59", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Itinerary</p>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {itinerary.map(({ day, content }, i) => (
                      <div key={i} style={{ display: "flex", gap: "14px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#eef6f0", border: "2px solid #c8dece", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontSize: "11px", fontWeight: 800, color: "#4a7c59" }}>{i + 1}</span>
                          </div>
                          {i < itinerary.length - 1 && <div style={{ width: "2px", flex: 1, background: "#e8ede6", margin: "4px 0", minHeight: "20px" }} />}
                        </div>
                        <div style={{ paddingBottom: "18px" }}>
                          {day && <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px" }}>{day}</p>}
                          <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7 }}>{content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.inclusion && (
                <div style={{ borderTop: "1px solid #f0f0ec", paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#4a7c59", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Inclusions</p>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}>{item.inclusion}</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div style={{ padding: "16px 24px", borderTop: "1px solid #eee", flexShrink: 0 }}>
            <button onClick={() => setShowEnquiry(true)}
              style={{ width: "100%", background: "#4a7c59", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontWeight: 700, fontSize: "15px", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => e.target.style.background = "#3a6347"}
              onMouseLeave={e => e.target.style.background = "#4a7c59"}>
              Send an Enquiry →
            </button>
          </div>
        </div>
      </div>

      {showEnquiry && <EnquiryModal subject={item.title} onClose={() => setShowEnquiry(false)} />}
    </>
  );
}
