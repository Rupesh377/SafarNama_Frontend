import { useState } from "react";
import { submitEnquiry } from "../Services/enquiryService";

const inputStyle = {
  width: "100%", background: "#fafaf8", border: "1.5px solid #dde8dd",
  borderRadius: "10px", padding: "11px 14px", fontSize: "13px", color: "#1a1a1a",
  outline: "none", transition: "border-color 0.2s", boxSizing: "border-box"
};

export default function EnquiryModal({ subject = "", onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject, message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError("");
    try {
      await submitEnquiry(form);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); onClose(); }, 2000);
    } catch { setError("Failed to send. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: "white", borderRadius: "20px", width: "100%", maxWidth: "440px", padding: "32px", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#1a1a1a" }}>Send Enquiry</h2>
          <button onClick={onClose} style={{ background: "#f4f4f0", border: "none", borderRadius: "8px", padding: "6px 10px", cursor: "pointer", fontSize: "14px", color: "#666" }}>✕</button>
        </div>

        {success ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
            <p style={{ fontWeight: 700, color: "#2d5a3d", fontSize: "16px" }}>Enquiry Sent!</p>
            <p style={{ color: "#888", fontSize: "13px", marginTop: "6px" }}>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { name: "name", label: "Name", placeholder: "Your name" },
              { name: "email", label: "Email", placeholder: "your@email.com", type: "email" },
              { name: "phone", label: "Phone", placeholder: "+91 99999 99999" },
              { name: "subject", label: "Subject", placeholder: "Subject" },
            ].map(({ name, label, placeholder, type = "text" }) => (
              <div key={name}>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "#666", marginBottom: "5px", letterSpacing: "0.3px", textTransform: "uppercase" }}>{label}</label>
                <input name={name} type={type} value={form[name]} onChange={handleChange} required placeholder={placeholder}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#4a7c59"}
                  onBlur={e => e.target.style.borderColor = "#dde8dd"} />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "#666", marginBottom: "5px", letterSpacing: "0.3px", textTransform: "uppercase" }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={3}
                placeholder="Your message..."
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => e.target.style.borderColor = "#4a7c59"}
                onBlur={e => e.target.style.borderColor = "#dde8dd"} />
            </div>
            {error && <p style={{ color: "#e53e3e", fontSize: "12px" }}>{error}</p>}
            <button type="submit" disabled={loading}
              style={{ background: loading ? "#aaa" : "#4a7c59", color: "white", border: "none", borderRadius: "10px", padding: "13px", fontWeight: 700, fontSize: "14px", cursor: loading ? "not-allowed" : "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => { if (!loading) e.target.style.background = "#3a6347"; }}
              onMouseLeave={e => { if (!loading) e.target.style.background = "#4a7c59"; }}>
              {loading ? "Sending..." : "Send Enquiry →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
