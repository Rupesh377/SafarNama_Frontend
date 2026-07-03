import React, { useRef } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function EventSlider({ onSelectEvent, events = [] }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360; // Card width + gap matrix tracking
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = 
        direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const getCategoryTheme = (category) => {
    switch(category) {
      case 'trek':
        return { bg: 'bg-indigo-50 text-indigo-700', label: 'Sunrise Trek' };
      case 'trip':
        return { bg: 'bg-amber-50 text-amber-700', label: 'Group Getaway' };
      case 'baithak':
        return { bg: 'bg-emerald-50 text-emerald-700', label: 'Music Baithak' };
      default:
        return { bg: 'bg-gray-50 text-gray-700', label: 'Special Event' };
    }
  };

  return (
    <div className="w-full relative px-1">
      {/* Slider Layout Directional Control Buttons */}
      {events.length > 0 && (
        <div className="absolute -top-16 right-4 z-10 hidden sm:flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white border border-slate-700 rounded-xl transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white border border-slate-700 rounded-xl transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Flex Scroll Wrapper */}
      <div
        ref={scrollContainerRef}
        className="w-full flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 px-1 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.length === 0 ? (
          <div className="w-full py-16 text-center text-slate-400 border border-dashed border-slate-800 rounded-3xl bg-slate-900/50">
            <p className="text-sm font-medium">No adventures are scheduled at this moment.</p>
            <p className="text-xs text-slate-500 mt-1">Please inspect back later or reach out via our enquiry forms!</p>
          </div>
        ) : (
          events.map((event) => {
            const theme = getCategoryTheme(event.category);
            return (
              <motion.div
                key={event.id}
                className="w-[290px] sm:w-[330px] shrink-0 bg-white text-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col snap-start group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header Highlight Image Frame */}
                <div className="h-44 sm:h-48 w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={event.highlightImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md ${theme.bg}`}>
                    {theme.label}
                  </span>
                </div>

                {/* Content Frame Details Segment */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-orange mb-2">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{event.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-800 line-clamp-1 group-hover:text-brand-blue transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed flex-grow">
                    {event.description}
                  </p>

                  <div className="border-t border-slate-100 my-4 pt-4 space-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 ml-6">
                      Duration: <span className="text-slate-800 font-semibold">{event.duration}</span>
                    </div>
                  </div>

                  {/* Pricing and Action Activation Footer row */}
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold block leading-none">
                        Starting from
                      </span>
                      <span className="text-lg sm:text-xl font-display font-extrabold text-slate-800">
                        ₹{event.price}
                      </span>
                      <span className="text-[10px] text-gray-500 block leading-none mt-0.5">
                        / person
                      </span>
                    </div>

                    <button
                      id={`event-btn-${event.id}`}
                      onClick={() => onSelectEvent(event)}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-brand-blue hover:bg-brand-blue-dark active:scale-95 text-white text-xs font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      View Itinerary
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}