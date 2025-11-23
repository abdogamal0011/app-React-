import React, { useEffect, useRef } from 'react';

// We use Vanta background which requires THREE. Vanta attaches to an element and
// provides a lightweight animated 3D background.
function ThreeBackground(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    async function initVanta() {
      // Dynamically import to avoid SSR issues and reduce initial bundle size
      const THREE = await import('three');
      // Some Vanta packages expect THREE on window
      // @ts-ignore
      window.THREE = THREE;

      const vanta = await import('vanta/dist/vanta.net.min');

      if (!mounted || !ref.current) return;

      try {
        vantaRef.current = (vanta as any).default
          ? (vanta as any).default({
              el: ref.current,
              THREE: (window as any).THREE,
              color: 0x0ea5e9,
              backgroundColor: 0x0f172a,
              points: 10.0,
              maxDistance: 20.0,
              spacing: 15.0,
            })
          : (vanta as any)({
              el: ref.current,
              THREE: (window as any).THREE,
              color: 0x0ea5e9,
              backgroundColor: 0x0f172a,
              points: 10.0,
              maxDistance: 20.0,
              spacing: 15.0,
            });
      } catch (e) {
        // If Vanta fails, silently ignore — background is decorative
        // console.warn('Vanta init failed', e);
      }
    }

    initVanta();

    return () => {
      mounted = false;
      if (vantaRef.current && typeof vantaRef.current.destroy === 'function') {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="vanta-bg fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}

export default ThreeBackground;
