import { useState } from "react";
import { submitEnquiry } from "../Services/enquiryService";
import SectionHeader from "./SectionHeader";

const inputStyle = {
  width: "100%", background: "#fafaf8", border: "1.5px solid #dde8dd",
  borderRadius: "12px", padding: "13px 16px", fontSize: "14px", color: "#1a1a1a",
  outline: "none", transition: "border-color 0.2s", boxSizing: "border-box"
};

export default function EnquirySection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitEnquiry(form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry" style={{ width: "100%", padding: "40px 0", background: "#f4f7f4" }}>
      <div style={{ maxWidth: "580px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader tag="Get in Touch" title="Send an Enquiry" subtitle="Have a question or want to book? We'll get back to you within 24 hours." />

        <div style={{ background: "white", border: "1px solid #e0e8e0", borderRadius: "24px", padding: "40px", boxShadow: "0 4px 24px rgba(74,124,89,0.07)" }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#1a1a1a", marginBottom: "8px" }}>Enquiry Sent!</h3>
              <p style={{ color: "#777", fontSize: "15px", marginBottom: "24px" }}>Thanks for reaching out. We'll be in touch shortly.</p>
              <button onClick={() => setSuccess(false)}
                style={{ background: "none", border: "none", color: "#4a7c59", fontWeight: 600, fontSize: "14px", cursor: "pointer", textDecoration: "underline" }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>YOUR NAME</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#4a7c59"}
                    onBlur={e => e.target.style.borderColor = "#dde8dd"} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>PHONE</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 99999 99999"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#4a7c59"}
                    onBlur={e => e.target.style.borderColor = "#dde8dd"} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>EMAIL ADDRESS</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="rahul@example.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#4a7c59"}
                  onBlur={e => e.target.style.borderColor = "#dde8dd"} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>SUBJECT</label>
                <input name="subject" value={form.subject} onChange={handleChange} required placeholder="e.g. Kedarkantha Trek booking"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#4a7c59"}
                  onBlur={e => e.target.style.borderColor = "#dde8dd"} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>MESSAGE</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell us about your group size, preferred dates, any questions..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "#4a7c59"}
                  onBlur={e => e.target.style.borderColor = "#dde8dd"} />
              </div>

              {error && <p style={{ color: "#e53e3e", fontSize: "13px" }}>{error}</p>}

              <button type="submit" disabled={loading}
                style={{ width: "100%", background: loading ? "#888" : "#4a7c59", color: "white", border: "none", borderRadius: "12px", padding: "15px", fontWeight: 700, fontSize: "15px", cursor: loading ? "not-allowed" : "pointer", transition: "background 0.2s", marginTop: "4px" }}
                onMouseEnter={e => { if (!loading) e.target.style.background = "#3a6347"; }}
                onMouseLeave={e => { if (!loading) e.target.style.background = "#4a7c59"; }}>
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
);
}