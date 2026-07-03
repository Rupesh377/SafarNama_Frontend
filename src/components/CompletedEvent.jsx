import { useState, useEffect } from "react";
import { getPublicCompletedEvents } from "../Services/completedEventService";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";
import EnquiryModal from "./EnquiryModal";
import CardSlider from "./CardSlider";

const DEMO_COMPLETED = [
  {
    id: "demo-1",
    title: "Sunrise Trek – Nahargarh Fort, Jaipur",
    location: "Nahargarh, Jaipur",
    duration: "1 Day | Jan 2025",
    price: 599,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80&fit=crop",
    description: "Witnessed a breathtaking sunrise from the historic Nahargarh Fort with 80+ adventurers. A perfect blend of history, nature, and community.",
  },
  {
    id: "demo-2",
    title: "Holi Celebration – Colors of Joy 2025",
    location: "Jaipur, Rajasthan",
    duration: "1 Day | Mar 2025",
    price: 799,
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80&fit=crop",
    description: "An electrifying Holi bash with organic colors, DJ, live performances, and 500+ attendees. Jaipur's most talked-about Holi party of 2025.",
  },
  {
    id: "demo-3",
    title: "Garba Night – Navratri Special",
    location: "Jaipur, Rajasthan",
    duration: "1 Night | Oct 2024",
    price: 699,
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80&fit=crop",
    description: "A grand Garba night with traditional folk music, dandiya, and live performances celebrating the spirit of Navratri with 300+ dancers.",
  },
  {
    id: "demo-4",
    title: "Desert Camp – Jaisalmer Stargazing",
    location: "Sam Sand Dunes, Jaisalmer",
    duration: "2 Days | Dec 2024",
    price: 3499,
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&q=80&fit=crop",
    description: "Camping under a million stars in the Thar Desert. Camel rides, bonfire, folk music, and an unforgettable night sky. Sold out in 24 hours.",
  },
  {
    id: "demo-5",
    title: "New Year Bash 2025 – Countdown to Joy",
    location: "Jaipur, Rajasthan",
    duration: "1 Night | Dec 2024",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=700&q=80&fit=crop",
    description: "Rang in 2025 with 700+ people — live DJ, performances, food stalls, and a spectacular midnight countdown. The biggest Safarnama party yet.",
  },
  {
    id: "demo-6",
    title: "Music Baithak – Acoustic Evening",
    location: "Jaipur, Rajasthan",
    duration: "1 Evening | Nov 2024",
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700&q=80&fit=crop",
    description: "An intimate acoustic session featuring local artists and open mic performers. A soulful evening of music, chai, and connections.",
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

export default function CompletedEvent() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [enquiryItem, setEnquiryItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublicCompletedEvents()
      .then(r => setEvents(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const displayEvents = events.length > 0 ? events : DEMO_COMPLETED;

  return (
    <section id="completed-events" style={{ width: "100%", padding: "64px 0", background: "#FAF4EC" }}>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      <div style={{ padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "#F97316", fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Memories Made
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#0D1B2A", marginTop: "10px", marginBottom: "12px", letterSpacing: "-0.4px" }}>
            Completed Events
          </h2>
          <p style={{ fontSize: "15px", color: "#888", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Adventures we've already conquered. Click any card for the full story.
          </p>
        </div>

        {loading ? (
          <div style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
            {[...Array(3)].map((_, i) => <Skeleton key={i} />)}
          </div>
        ) : (
          <CardSlider>
            {displayEvents.map(e => (
              <div key={e.id} style={{ flexShrink: 0, width: "300px" }}>
                <EventCard item={e} type="completed" onClick={() => setSelected(e)} onEnquiry={() => setEnquiryItem(e)} />
              </div>
            ))}
          </CardSlider>
        )}
      </div>

      {selected && <EventDetailsModal item={selected} type="completed" onClose={() => setSelected(null)} />}
      {enquiryItem && !selected && <EnquiryModal subject={enquiryItem.title} onClose={() => setEnquiryItem(null)} />}
    </section>
  );
}
