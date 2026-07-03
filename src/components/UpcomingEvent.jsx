import { useState, useEffect } from "react";
import { getPublicUpcomingEvents } from "../Services/eventService";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";
import EnquiryModal from "./EnquiryModal";
import CardSlider from "./CardSlider";

const DEMO_UPCOMING_EVENTS = [
  {
    id: "demo-ue-1",
    title: "Monsoon Trek – Bhangarh & Ajabgarh",
    location: "Bhangarh, Rajasthan",
    time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80&fit=crop",
    description: "Explore the mystical ruins of Bhangarh through lush monsoon trails. An adventurous day trek through history, forests, and scenic landscapes.",
  },
  {
    id: "demo-ue-2",
    title: "Independence Day Special – Community Picnic",
    location: "Nahargarh Biological Park, Jaipur",
    time: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&fit=crop",
    description: "Celebrate Independence Day with the Safarnama community — games, food, music, and great company in the heart of nature.",
  },
  {
    id: "demo-ue-3",
    title: "Open Mic Night – Voices of Jaipur",
    location: "Jaipur, Rajasthan",
    time: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80&fit=crop",
    description: "An open stage for poets, singers, comedians, and storytellers. Come perform or just enjoy an evening of raw, unfiltered talent.",
  },
  {
    id: "demo-ue-4",
    title: "Sunrise Yoga & Nature Walk",
    location: "Amer, Jaipur",
    time: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    price: 349,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80&fit=crop",
    description: "Start your day with guided yoga at sunrise followed by a peaceful nature walk through Amer's scenic hills. Limited to 30 participants.",
  },
  {
    id: "demo-ue-5",
    title: "Night Photography Walk – Walled City",
    location: "Pink City, Jaipur",
    time: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    price: 449,
    imageUrl: "https://images.unsplash.com/photo-1492136344046-866c85e0bf04?w=700&q=80&fit=crop",
    description: "Capture the magic of Jaipur's Walled City after dark. A guided photography walk through lit-up bazaars, monuments, and hidden lanes.",
  },
  {
    id: "demo-ue-6",
    title: "Corporate Team Outing – Adventure Day",
    location: "Jaipur Outskirts",
    time: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&fit=crop",
    description: "A full-day team-building experience with outdoor activities, group challenges, BBQ lunch, and team bonding sessions. Perfect for corporate groups.",
  },
];

const Skeleton = () => (
  <div style={{ flexShrink: 0, width: "300px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
    <div style={{ height: "210px", background: "linear-gradient(90deg,#1e2d3d 25%,#243447 50%,#1e2d3d 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }} />
    <div style={{ padding: "18px 20px", background: "#162030" }}>
      {[80,55,65,90,70].map((w,i) => <div key={i} style={{ height: "11px", background: "#1e2d3d", borderRadius: "6px", marginBottom: "8px", width: `${w}%` }} />)}
    </div>
  </div>
);

export default function UpcomingEvent() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [enquiryItem, setEnquiryItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublicUpcomingEvents()
      .then(r => setEvents(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const displayEvents = events.length > 0 ? events : DEMO_UPCOMING_EVENTS;

  return (
    <section id="upcoming-events" style={{ width: "100%", padding: "64px 0", background: "#0D1B2A" }}>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      <div style={{ padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "#F97316", fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Coming Up
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "white", marginTop: "10px", marginBottom: "12px", letterSpacing: "-0.4px" }}>
            Upcoming Events
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Spots fill fast — secure yours before it's too late.
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
                <EventCard item={e} type="event" onClick={() => setSelected(e)} onEnquiry={() => setEnquiryItem(e)} />
              </div>
            ))}
          </CardSlider>
        )}
      </div>

      {selected && <EventDetailsModal item={selected} type="event" onClose={() => setSelected(null)} />}
      {enquiryItem && !selected && <EnquiryModal subject={enquiryItem.title} onClose={() => setEnquiryItem(null)} />}
    </section>
  );
}
