// Events.jsx
import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, title: "Valley Trek", shortDesc: "3 days trek", image: "..." },
  { id: 2, title: "Snow Adventure", shortDesc: "Himalayan trek", image: "..." }
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="grid">
      {events.map((event) => (
        <div
          key={event.id}
          className="card"
          onClick={() => navigate(`/event/${event.id}`)}
        >
          <img src={event.image} />
          <h3>{event.title}</h3>
          <p>{event.shortDesc}</p>
        </div>
      ))}
    </div>
  );
}