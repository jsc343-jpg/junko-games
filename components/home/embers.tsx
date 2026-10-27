const EMBERS = [
  { left: "6%", size: 4, delay: "0s", duration: "9s" },
  { left: "14%", size: 3, delay: "3s", duration: "11s" },
  { left: "23%", size: 5, delay: "6s", duration: "10s" },
  { left: "31%", size: 3, delay: "1.5s", duration: "12s" },
  { left: "42%", size: 4, delay: "4.5s", duration: "9.5s" },
  { left: "51%", size: 3, delay: "7.5s", duration: "11s" },
  { left: "60%", size: 5, delay: "2s", duration: "10.5s" },
  { left: "69%", size: 3, delay: "5s", duration: "12s" },
  { left: "77%", size: 4, delay: "8s", duration: "9s" },
  { left: "85%", size: 3, delay: "0.8s", duration: "11.5s" },
  { left: "93%", size: 5, delay: "3.8s", duration: "10s" },
];

export function Embers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className="home-ember absolute bottom-0 rounded-full bg-primary"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDelay: e.delay,
            animationDuration: e.duration,
          }}
        />
      ))}
    </div>
  );
}
