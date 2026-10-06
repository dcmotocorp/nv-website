import { useEffect, useRef, useState } from 'react';

// Splits a display value such as "92%", "31 ms", "₹80k", "1.9 M", "±18 min"
// or "40 → 1" into the first number plus whatever sits around it, so the
// number can count up while the units stay put.
const parse = (raw) => {
  const match = String(raw).match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/s);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const clean = digits.replace(/,/g, '');
  const dot = clean.indexOf('.');
  return {
    prefix,
    suffix,
    target: parseFloat(clean),
    decimals: dot === -1 ? 0 : clean.length - dot - 1,
    grouped: digits.includes(','),
  };
};

const format = (n, decimals, grouped) => {
  const fixed = n.toFixed(decimals);
  if (!grouped) return fixed;
  const [int, frac] = fixed.split('.');
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return frac ? `${withCommas}.${frac}` : withCommas;
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Counts up to the number inside `value` the first time it scrolls into view.
 * Values with no number in them, and visitors who prefer reduced motion, get
 * the final text immediately.
 */
export default function AnimatedNumber({ value, duration = 1400, className, style }) {
  const parsed = parse(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(() =>
    parsed ? format(0, parsed.decimals, parsed.grouped) : null
  );

  useEffect(() => {
    if (!parsed) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const settle = () => setDisplay(format(parsed.target, parsed.decimals, parsed.grouped));

    const node = ref.current;
    if (reduced || !node || typeof IntersectionObserver === 'undefined') {
      settle();
      return;
    }

    let frame;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setDisplay(format(parsed.target * easeOutCubic(t), parsed.decimals, parsed.grouped));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!parsed) {
    return (
      <span className={className} style={style}>
        {value}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: 'tabular-nums', ...style }}
    >
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
