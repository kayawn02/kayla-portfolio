import React, { useMemo } from 'react';

export default function Meteors({ number = 16 }) {
  const meteors = useMemo(() => {
    return Array.from({ length: number }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 80) - 20 + '%',
      left: Math.floor(Math.random() * 90) + '%',
      delay: (Math.random() * 8).toFixed(2) + 's',
      duration: (Math.random() * 4 + 4).toFixed(2) + 's',
      size: Math.floor(Math.random() * 60) + 100 + 'px',
    }));
  }, [number]);

  return (
    <div className="meteor-container">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor-streak"
          style={{
            top: m.top,
            left: m.left,
            width: m.size,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
}
