import { useRef, useState, useEffect } from "react";

export default function CardSlider({ children }) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [children]);

  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <div style={{ position: "relative" }}>
      {/* Left btn */}
      {canLeft && (
        <button onClick={() => scroll(-1)}
          style={{ position: "absolute", left: "-18px", top: "50%", transform: "translateY(-50%)", zIndex: 10, width: "40px", height: "40px", borderRadius: "50%", background: "white", border: "1.5px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", fontSize: "18px", fontWeight: 700, transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}>
          ‹
        </button>
      )}

      {/* Right btn */}
      {canRight && (
        <button onClick={() => scroll(1)}
          style={{ position: "absolute", right: "-18px", top: "50%", transform: "translateY(-50%)", zIndex: 10, width: "40px", height: "40px", borderRadius: "50%", background: "white", border: "1.5px solid #e0e0e0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", fontSize: "18px", fontWeight: 700, transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}>
          ›
        </button>
      )}

      {/* Track */}
      <div ref={trackRef}
        style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "8px", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        {children}
      </div>
    </div>
  );
}
