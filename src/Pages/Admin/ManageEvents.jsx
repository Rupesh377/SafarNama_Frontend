import { useState, useEffect } from "react";
import { Plus, Trash2, X, MapPin, Clock, DollarSign } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import { getAllUpcomingEvents, createUpcomingEvent, deleteUpcomingEvent } from "../../Services/eventService";
import { uploadImage } from "../../Services/trekService";

const empty = { title: "", location: "", time: "", price: "", imageUrl: "", description: "", itinerary: "" };

const inputCls = "w-full bg-[#111] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors";

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    getAllUpcomingEvents().then((r) => setEvents(r.data)).catch(console.error).finally(() => setLoading(false));
  };
  useEffect(load, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadImage(file);
      setForm((f) => ({ ...f, imageUrl: res.data }));
    } catch { setError("Image upload failed."); }
    finally { setUploading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await createUpcomingEvent({ ...form, price: Number(form.price) });
      setForm(empty);
      setShowForm(false);
      load();
    } catch { setError("Failed to create event."); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this event?")) return;
    await deleteUpcomingEvent(id);
    load();
  };

  const fmtDate = (d) => d ? new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "";

  const addBtn = (
    <button onClick={() => setShowForm(true)}
      style={{ display: "flex", alignItems: "center", gap: "6px", background: "#4a7c59", color: "white", border: "none", borderRadius: "10px", padding: "9px 18px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.background = "#3a6347"}
      onMouseLeave={e => e.currentTarget.style.background = "#4a7c59"}>
      <Plus size={14} /> Add Event
    </button>
  );

  return (
    <AdminLayout title="Upcoming Events" subtitle={`${events.length} event${events.length !== 1 ? "s" : ""}`} action={addBtn}>

      {loading ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ background: "white", borderRadius: "16px", height: "280px", border: "1.5px solid #e8ede6", overflow: "hidden" }}>
              <div style={{ height: "160px", background: "linear-gradient(90deg,#f0ede8 25%,#e8e4de 50%,#f0ede8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }} />
              <div style={{ padding: "16px" }}>
                <div style={{ height: "12px", background: "#f0ede8", borderRadius: "6px", marginBottom: "8px", width: "70%" }} />
                <div style={{ height: "10px", background: "#f0ede8", borderRadius: "6px", width: "50%" }} />
              </div>
              <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
            </div>
          ))}
        </div>
      ) : events.length === 0 ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 0", textAlign: "center" }}>
          <div style={{ background: "#eef6f0", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
            <Clock size={28} color="#4a7c59" />
          </div>
          <p style={{ color: "#333", fontWeight: 600, fontSize: "15px" }}>No upcoming events yet</p>
          <p style={{ color: "#999", fontSize: "13px", marginTop: "4px" }}>Click "Add Event" to create your first one.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {events.map((e) => (
            <div key={e.id} style={{ background: "white", borderRadius: "16px", border: "1.5px solid #e8ede6", overflow: "hidden", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={ev => { ev.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.09)"; ev.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={ev => { ev.currentTarget.style.boxShadow = "none"; ev.currentTarget.style.transform = "translateY(0)"; }}>
              {e.imageUrl
                ? <img src={e.imageUrl} alt={e.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                : <div style={{ width: "100%", height: "160px", background: "#f4f7f4", display: "flex", alignItems: "center", justifyContent: "center" }}><Clock size={28} color="#b0c4b8" /></div>
              }
              <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4, flex: 1 }}>{e.title}</h3>
                  <button onClick={() => handleDelete(e.id)}
                    style={{ background: "#fff0f0", border: "none", borderRadius: "8px", padding: "5px 7px", cursor: "pointer", flexShrink: 0, transition: "background 0.15s" }}
                    onMouseEnter={ev => ev.currentTarget.style.background = "#ffd6d6"}
                    onMouseLeave={ev => ev.currentTarget.style.background = "#fff0f0"}>
                    <Trash2 size={13} color="#e05252" />
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#777", display: "flex", alignItems: "center", gap: "6px" }}><MapPin size={11} color="#4a7c59" />{e.location}</span>
                  <span style={{ fontSize: "12px", color: "#777", display: "flex", alignItems: "center", gap: "6px" }}><Clock size={11} color="#4a7c59" />{fmtDate(e.time)}</span>
                </div>
                <div style={{ borderTop: "1px solid #f0f0ec", paddingTop: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#2d5a3d" }}>₹{e.price?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showForm && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
          onClick={e => e.target === e.currentTarget && (setShowForm(false), setError(""))}>
          <div style={{ background: "white", borderRadius: "24px", width: "100%", maxWidth: "900px", maxHeight: "90vh", display: "flex", flexDirection: "column", boxShadow: "0 32px 80px rgba(0,0,0,0.15)", overflow: "hidden" }}>

            {/* Header */}
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#1a1a1a" }}>Add Upcoming Event</h2>
              <button onClick={() => { setShowForm(false); setError(""); }} style={{ background: "#f4f4f0", border: "none", borderRadius: "8px", padding: "7px 12px", cursor: "pointer", fontSize: "13px", color: "#555", fontWeight: 600 }}>✕ Close</button>
            </div>

            {/* Body — 2 cols */}
            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1, overflow: "hidden", minHeight: 0 }} className="modal-grid">
              <style>{`@media(max-width:640px){.modal-grid{grid-template-columns:1fr!important}} .adm-input{width:100%;border:1.5px solid #e8ede6;border-radius:10px;padding:10px 14px;font-size:14px;color:#1a1a1a;outline:none;transition:border-color 0.2s;background:#fafafa;} .adm-input:focus{border-color:#4a7c59;background:white;} .adm-input::placeholder{color:#bbb;} .adm-label{font-size:11px;font-weight:700;color:#4a7c59;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;display:block;}`}</style>

              {/* LEFT */}
              <div style={{ borderRight: "1px solid #f0f0ec", overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label className="adm-label">Event Title</label>
                  <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Rishikesh Adventure Camp" className="adm-input" />
                </div>
                <div>
                  <label className="adm-label">Location</label>
                  <input name="location" value={form.location} onChange={handleChange} required placeholder="e.g. Uttarakhand" className="adm-input" />
                </div>
                <div>
                  <label className="adm-label">Price (₹)</label>
                  <input name="price" type="number" value={form.price} onChange={handleChange} required placeholder="e.g. 6999" className="adm-input" />
                </div>
                <div>
                  <label className="adm-label">Event Date & Time</label>
                  <input name="time" type="datetime-local" value={form.time} onChange={handleChange} required className="adm-input" />
                </div>
                <div>
                  <label className="adm-label">Image</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload}
                    style={{ fontSize: "13px", color: "#555" }}
                    className="file:bg-[#eef6f0] file:text-[#4a7c59] file:border-0 file:rounded-lg file:px-3 file:py-1.5 file:mr-3 file:cursor-pointer file:text-xs file:font-semibold" />
                  {uploading && <p style={{ color: "#4a7c59", fontSize: "12px", marginTop: "6px" }}>Uploading...</p>}
                  {form.imageUrl && <p style={{ color: "#4a7c59", fontSize: "12px", marginTop: "6px" }}>✓ Image ready</p>}
                </div>
              </div>

              {/* RIGHT */}
              <div style={{ overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label className="adm-label">Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange} required rows={5}
                    placeholder="Describe the event experience..." className="adm-input" style={{ resize: "vertical" }} />
                </div>
                <div>
                  <label className="adm-label">Itinerary</label>
                  <textarea name="itinerary" value={form.itinerary} onChange={handleChange} required rows={5}
                    placeholder="Day 1: Arrival&#10;Day 2: Trek&#10;Day 3: Return" className="adm-input" style={{ resize: "vertical" }} />
                </div>
                {error && <p style={{ color: "#c0392b", fontSize: "13px" }}>{error}</p>}
              </div>
            </form>

            {/* Footer CTA */}
            <div style={{ padding: "16px 24px", borderTop: "1px solid #eee", flexShrink: 0 }}>
              <button onClick={handleSubmit} disabled={saving}
                style={{ width: "100%", background: "#4a7c59", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontWeight: 700, fontSize: "15px", cursor: saving ? "not-allowed" : "pointer", opacity: saving ? 0.6 : 1, transition: "background 0.2s" }}
                onMouseEnter={e => { if (!saving) e.target.style.background = "#3a6347"; }}
                onMouseLeave={e => { e.target.style.background = "#4a7c59"; }}>
                {saving ? "Creating..." : "Create Event →"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
