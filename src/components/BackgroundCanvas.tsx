import { useRef, useEffect } from 'react';

const STAR_COUNT = 80;

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotionQuery.matches) {
      return undefined;
    }

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return undefined;

    let rafId = 0;
    let isVisible = !document.hidden;

    // Pre-compute per-star alpha offsets so Math.random() is NOT called each frame
    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      alphaOffset: number; // phase offset for sine-based twinkle
    }

    const stars: Star[] = [];

    const resize = () => {
      // Only cover the visible viewport — not the full document height
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const seedStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.3 + 0.05,
          alphaOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    let frame = 0;

    const animate = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      frame++;

      // Solid fill — avoids semi-transparent fillRect overdraw
      ctx.fillStyle = 'rgb(2, 6, 23)'; // slate-950
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        // Sine-based twinkle — no Math.random() per frame
        const alpha = 0.4 + 0.45 * Math.sin(frame * 0.018 + star.alphaOffset);
        ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    // Debounced resize — avoids thrashing on every pixel of drag
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        seedStars();
      }, 250);
    };

    // Pause animation when tab is hidden
    const onVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    resize();
    seedStars();
    animate();

    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, willChange: 'transform', contain: 'strict' }}
    />
  );
}
