import React, { useEffect, useRef, useMemo } from 'react';

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 85 Cosmic Star Particles (Simple, elegant, modern - not tacky)
    const starCount = 85;
    const stars = Array.from({ length: starCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.6,
      baseAlpha: Math.random() * 0.5 + 0.25,
      alpha: Math.random() * 0.5 + 0.25,
      twinkleSpeed: Math.random() * 0.02 + 0.008,
      twinklePhase: Math.random() * Math.PI * 2,
      speedY: -(Math.random() * 0.12 + 0.04), // Gentle upward cosmic float
      color: Math.random() > 0.35 
        ? 'rgba(255, 255, 255, ' 
        : (Math.random() > 0.5 ? 'rgba(254, 202, 202, ' : 'rgba(252, 165, 165, '), // soft ruby / white stars
    }));

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw each galaxy star
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Twinkle calculation
        const curAlpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed * 60 + s.twinklePhase) * 0.25;
        const finalAlpha = Math.max(0.1, Math.min(0.9, curAlpha));

        // Soft glow for brighter stars
        if (s.radius > 1.4) {
          const glowGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 3.5);
          glowGrad.addColorStop(0, `rgba(239, 68, 68, ${finalAlpha * 0.45})`);
          glowGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `${s.color}${finalAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        // Slow drift
        s.y += s.speedY;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ambient Meteors streaks
  const meteors = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 80) - 20 + '%',
      left: Math.floor(Math.random() * 90) + '%',
      delay: (Math.random() * 8).toFixed(2) + 's',
      duration: (Math.random() * 4 + 4).toFixed(2) + 's',
      size: Math.floor(Math.random() * 60) + 110 + 'px',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Deep Space Cosmic Red Nebula Gradients */}
      <div className="absolute inset-0 bg-[#060306]" />
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-red-700/10 via-rose-950/5 to-transparent blur-[120px]" />
      <div className="absolute top-[35%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-red-600/08 via-red-900/05 to-transparent blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[25%] w-[65vw] h-[50vw] rounded-full bg-gradient-to-t from-red-800/10 via-rose-950/05 to-transparent blur-[140px]" />

      {/* 2. Twinkling Galaxy Star Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />

      {/* 3. Subtle Shooting Meteors */}
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
    </div>
  );
}
