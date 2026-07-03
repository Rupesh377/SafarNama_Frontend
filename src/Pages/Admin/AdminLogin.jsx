import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/auth";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      await login(form.email, form.password);
      navigate("/admin/dashboard");
    } catch { setError("Invalid credentials. Please try again."); }
    finally { setLoading(false); }
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px", border: "1.5px solid #dde8dd",
    borderRadius: "12px", fontSize: "14px", color: "#1a1a1a",
    background: "#fafaf8", outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box"
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #1e3a2f, #4a7c59)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ background: "white", borderRadius: "24px", padding: "48px 40px", width: "100%", maxWidth: "400px", boxShadow: "0 24px 64px rgba(0,0,0,0.15)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ background: "linear-gradient(135deg, #4a7c59, #2d5a3d)", borderRadius: "18px", padding: "16px", display: "inline-flex", marginBottom: "20px" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
            </svg>
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: 900, color: "#1a1a1a", marginBottom: "6px" }}>Admin Login</h1>
          <p style={{ color: "#888", fontSize: "14px" }}>SafarNama Control Panel</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>EMAIL</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required
              placeholder="Safarnamaaevents@gmail.com" style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#4a7c59"}
              onBlur={e => e.target.style.borderColor = "#dde8dd"} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#555", marginBottom: "6px", letterSpacing: "0.3px" }}>PASSWORD</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required
              placeholder="••••••••" style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#4a7c59"}
              onBlur={e => e.target.style.borderColor = "#dde8dd"} />
          </div>

          {error && <p style={{ color: "#e53e3e", fontSize: "13px", textAlign: "center" }}>{error}</p>}

          <button type="submit" disabled={loading}
            style={{ background: loading ? "#aaa" : "#4a7c59", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontWeight: 700, fontSize: "15px", cursor: loading ? "not-allowed" : "pointer", marginTop: "4px", transition: "background 0.2s" }}
            onMouseEnter={e => { if (!loading) e.target.style.background = "#3a6347"; }}
            onMouseLeave={e => { if (!loading) e.target.style.background = "#4a7c59"; }}>
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>

        <button onClick={() => navigate("/")}
          style={{ marginTop: "20px", width: "100%", background: "none", border: "none", color: "#aaa", fontSize: "13px", cursor: "pointer", textAlign: "center" }}>
          ← Back to site
        </button>
      </div>
    </div>
  );
}
