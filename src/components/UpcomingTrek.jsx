import { useState, useEffect } from "react";
import { getPublicUpcomingTreks } from "../Services/trekService";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";
import EnquiryModal from "./EnquiryModal";
import CardSlider from "./CardSlider";

const DEMO_UPCOMING_TREKS = [
  {
    id: "demo-t-1",
    title: "Khejarli Forest Trek – Night Under Stars",
    location: "Khejarli, Jodhpur",
    startDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString(),
    price: 1499,
    difficultyLevel: "Easy",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80&fit=crop",
    description: "A gentle overnight forest trek through the sacred Khejarli woods. Camp under a canopy of stars and wake up to the sounds of birds at dawn.",
  },
  {
    id: "demo-t-2",
    title: "Alwar Hill Trek – Sariska Edge",
    location: "Sariska, Alwar",
    startDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000).toISOString(),
    price: 1899,
    difficultyLevel: "Moderate",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80&fit=crop",
    description: "Trek through the rugged Aravalli ranges bordering Sariska Tiger Reserve. Enjoy panoramic valley views and a stay at a forest eco-camp.",
  },
  {
    id: "demo-t-3",
    title: "Pushkar Plateau Trek & Camel Safari",
    location: "Pushkar, Ajmer",
    startDate: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000).toISOString(),
    price: 2199,
    difficultyLevel: "Easy",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80&fit=crop",
    description: "Combine a scenic plateau trek with a sunset camel safari. End the day with a bonfire dinner overlooking the holy Pushkar lake.",
  },
  {
    id: "demo-t-4",
    title: "Kumbhalgarh Wall Trek – Mewar Trails",
    location: "Kumbhalgarh, Rajsamand",
    startDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    price: 3299,
    difficultyLevel: "Moderate",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80&fit=crop",
    description: "Trek along the Great Wall of India — Kumbhalgarh Fort. Explore ancient temples, dense wildlife sanctuary, and stay in a heritage camp.",
  },
  {
    id: "demo-t-5",
    title: "Mount Abu Sunrise Trek – Guru Shikhar",
    location: "Mount Abu, Sirohi",
    startDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 36 * 24 * 60 * 60 * 1000).toISOString(),
    price: 2799,
    difficultyLevel: "Hard",
    imageUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=700&q=80&fit=crop",
    description: "Summit Guru Shikhar — Rajasthan's highest peak — at sunrise. A challenging yet rewarding trek through misty forests and rocky ridges.",
  },
  {
    id: "demo-t-6",
    title: "Ranthambore Jungle Walk – Wildlife Trail",
    location: "Ranthambore, Sawai Madhopur",
    startDate: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 41 * 24 * 60 * 60 * 1000).toISOString(),
    price: 3999,
    difficultyLevel: "Moderate",
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=700&q=80&fit=crop",
    description: "A guided jungle walk and safari experience in Ranthambore. Spot leopards, deer, and birds while exploring fort ruins inside the tiger reserve.",
  },
];

const Skeleton = () => (
  <div style={{ flexShrink: 0, width: "300px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
    <div style={{ height: "210px", background: "linear-gradient(90deg,#f0ebe3 25%,#e8e0d5 50%,#f0ebe3 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }} />
    <div style={{ padding: "18px 20px", background: "white" }}>
      {[80,55,65,90,70].map((w,i) => <div key={i} style={{ height: "11px", background: "#f0ebe3", borderRadius: "6px", marginBottom: "8px", width: `${w}%` }} />)}
    </div>
  </div>
);

export default function UpcomingTrek() {
  const [treks, setTreks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [enquiryItem, setEnquiryItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublicUpcomingTreks()
      .then(r => setTreks(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const displayTreks = treks.length > 0 ? treks : DEMO_UPCOMING_TREKS;

  return (
    <section id="upcoming-treks" style={{ width: "100%", padding: "64px 0", background: "#FAFAF8" }}>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      <div style={{ padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "#F97316", fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Hit the Trail
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#0D1B2A", marginTop: "10px", marginBottom: "12px", letterSpacing: "-0.4px" }}>
            Upcoming Treks
          </h2>
          <p style={{ fontSize: "15px", color: "#888", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Beginner trails to expert expeditions — your next challenge awaits.
          </p>
        </div>

        {loading ? (
          <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
            {[...Array(3)].map((_, i) => <Skeleton key={i} />)}
          </div>
        ) : (
          <CardSlider>
            {displayTreks.map(t => (
              <div key={t.id} style={{ flexShrink: 0, width: "300px" }}>
                <EventCard item={t} type="trek" onClick={() => setSelected(t)} onEnquiry={() => setEnquiryItem(t)} />
              </div>
            ))}
          </CardSlider>
        )}
      </div>

      {selected && <EventDetailsModal item={selected} type="trek" onClose={() => setSelected(null)} />}
      {enquiryItem && !selected && <EnquiryModal subject={enquiryItem.title} onClose={() => setEnquiryItem(null)} />}
    </section>
  );
}
