import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // observe all .rv elements inside the ref
    const targets = el.querySelectorAll ? el.querySelectorAll('.rv') : [];
    targets.forEach(t => obs.observe(t));

    // also observe the root if it has rv class
    if (el.classList.contains('rv')) obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return ref;
}

// Hook to observe a single element
export function useRevealSingle() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('in'); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
