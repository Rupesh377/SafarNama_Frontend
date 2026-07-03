import React from 'react';

export default function Logo({ className = "h-12", showText = true }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Mountain & Sun Icon */}
      <svg
        viewBox="0 0 500 400"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky Background/Sun */}
        <circle cx="250" cy="220" r="110" fill="url(#sunGradient)" />
        
        {/* Sun Rays Details */}
        <line x1="120" y1="220" x2="135" y2="220" stroke="#ffaa44" strokeWidth="4" strokeLinecap="round" />
        <line x1="365" y1="220" x2="380" y2="220" stroke="#ffaa44" strokeWidth="4" strokeLinecap="round" />
        <line x1="250" y1="90" x2="250" y2="105" stroke="#ffaa44" strokeWidth="4" strokeLinecap="round" />

        {/* Birds Flying */}
        <path d="M210 160 Q215 155 220 160 Q225 155 230 160" stroke="#553311" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M275 145 Q281 139 287 145 Q293 139 299 145" stroke="#553311" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M190 180 Q194 176 198 180 Q202 176 206 180" stroke="#553311" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M305 170 Q309 166 313 170 Q317 166 321 170" stroke="#553311" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M245 130 Q250 123 255 130 Q260 123 265 130" stroke="#553311" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Left Pine Trees Silhouettes */}
        <path d="M110 300 L125 240 L140 300 Z" fill="#0b2347" />
        <path d="M100 310 L118 250 L136 310 Z" fill="#051730" />
        <path d="M125 315 L140 255 L155 315 Z" fill="#133c75" />

        {/* Right Pine Trees Silhouettes */}
        <path d="M360 305 L375 245 L390 305 Z" fill="#0b2347" />
        <path d="M345 312 L363 252 L381 312 Z" fill="#133c75" />
        <path d="M370 315 L385 260 L400 315 Z" fill="#051730" />

        {/* Dynamic Mountains (Deep Blue Silhouette with Snow Caps) */}
        {/* Left Mountain */}
        <path
          d="M100 320 L210 190 L260 250 L310 210 L400 320 Z"
          fill="#112d54"
        />
        {/* Main Center Mountain */}
        <path
          d="M170 320 L250 160 L340 280 L380 320 Z"
          fill="#0a1d3a"
        />
        {/* Snow Caps for Main Mountain */}
        <path
          d="M250 160 L233 194 L245 190 L250 198 L256 190 L268 194 Z"
          fill="#fafafa"
        />
        <path
          d="M210 190 L195 208 L203 206 L210 212 L216 206 L224 210 Z"
          fill="#eaeaea"
        />
        <path
          d="M310 210 L300 223 L306 222 L310 226 L314 222 L320 224 Z"
          fill="#eaeaea"
        />

        {/* Mountain Highlights/Shadows */}
        <path d="M250 160 L283 204 L295 220 L250 198 Z" fill="#061226" opacity="0.3" />

        {/* Forefront Ground Shadow */}
        <ellipse cx="250" cy="320" rx="160" ry="8" fill="#0f172a" opacity="0.3" />

        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="sunGradient" x1="250" y1="110" x2="250" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col">
          {/* Main "SafarNama" script rendering */}
          <div className="flex items-baseline leading-none">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-orange-light">सफ़र </span>
            <span className="font-display text-2xl font-extrabold tracking-wide text-[#ffffff] ml-1">nama</span>
          </div>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-400 mt-0.5">
            E V E N T S
          </span>
        </div>
      )}
    </div>
  );
}
