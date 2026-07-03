import { useState, useEffect } from "react";
import { Trash2, Mail, Phone, MessageSquare } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import { getAllEnquiries, deleteEnquiry } from "../../Services/enquiryService";

export default function ManageEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    getAllEnquiries().then((r) => setEnquiries(r.data)).catch(console.error).finally(() => setLoading(false));
  };
  useEffect(load, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this enquiry?")) return;
    await deleteEnquiry(id);
    load();
  };

  return (
    <AdminLayout title="Enquiries">

      {loading ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ background: "white", borderRadius: "14px", height: "100px", border: "1.5px solid #e8ede6",
              background: "linear-gradient(90deg,#f0ede8 25%,#e8e4de 50%,#f0ede8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }} />
          ))}
          <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
        </div>
      ) : enquiries.length === 0 ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 0", textAlign: "center" }}>
          <div style={{ background: "#eef6f0", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
            <MessageSquare size={28} color="#4a7c59" />
          </div>
          <p style={{ color: "#333", fontWeight: 600, fontSize: "15px" }}>No enquiries yet</p>
          <p style={{ color: "#999", fontSize: "13px", marginTop: "4px" }}>User messages will appear here.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {enquiries.map((e) => (
            <div key={e.Id} style={{ background: "white", border: "1.5px solid #e8ede6", borderRadius: "14px", padding: "20px", display: "flex", gap: "16px", transition: "box-shadow 0.2s" }}
              onMouseEnter={ev => ev.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.07)"}
              onMouseLeave={ev => ev.currentTarget.style.boxShadow = "none"}>

              {/* Avatar */}
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#eef6f0", border: "1.5px solid #c8dece", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "15px", fontWeight: 800, color: "#2d5a3d", textTransform: "uppercase" }}>
                  {e.name?.charAt(0) || "?"}
                </span>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{e.name}</span>
                  {e.subject && (
                    <span style={{ fontSize: "11px", fontWeight: 600, padding: "2px 10px", borderRadius: "20px", background: "#eef6f0", color: "#2d5a3d", border: "1px solid #c8dece" }}>
                      {e.subject}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "10px" }}>
                  <a href={`mailto:${e.email}`} style={{ fontSize: "12px", color: "#777", display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={ev => ev.currentTarget.style.color = "#2d5a3d"}
                    onMouseLeave={ev => ev.currentTarget.style.color = "#777"}>
                    <Mail size={11} color="#4a7c59" />{e.email}
                  </a>
                  {e.phone && (
                    <a href={`tel:${e.phone}`} style={{ fontSize: "12px", color: "#777", display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={ev => ev.currentTarget.style.color = "#2d5a3d"}
                      onMouseLeave={ev => ev.currentTarget.style.color = "#777"}>
                      <Phone size={11} color="#4a7c59" />{e.phone}
                    </a>
                  )}
                </div>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>{e.message}</p>
              </div>

              {/* Delete */}
              <button onClick={() => handleDelete(e.Id)}
                style={{ background: "#fff0f0", border: "none", borderRadius: "8px", padding: "6px 8px", cursor: "pointer", flexShrink: 0, alignSelf: "flex-start", transition: "background 0.15s" }}
                onMouseEnter={ev => ev.currentTarget.style.background = "#ffd6d6"}
                onMouseLeave={ev => ev.currentTarget.style.background = "#fff0f0"}
                title="Delete enquiry">
                <Trash2 size={14} color="#e05252" />
              </button>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
