import { Swords } from "lucide-react";

const TICKS = Array.from({ length: 36 }, (_, i) => i * 10);

export function Emblem() {
  return (
    <div className="relative mx-auto flex size-48 items-center justify-center" aria-hidden="true">
      <div className="home-glow absolute inset-4 rounded-full" />

      <svg viewBox="0 0 200 200" className="home-spin-slow absolute inset-0 size-full text-primary">
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 6" />
        {TICKS.map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="6"
            x2="100"
            y2={deg % 90 === 0 ? 20 : 13}
            stroke="currentColor"
            strokeWidth={deg % 90 === 0 ? 2.5 : 1.2}
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
      </svg>

      <svg viewBox="0 0 200 200" className="home-spin-reverse absolute inset-6 size-[calc(100%-3rem)] text-accent">
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="60 20 10 20" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>

      <div className="relative flex size-20 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg">
        <Swords className="size-9 text-primary" />
      </div>
    </div>
  );
}
