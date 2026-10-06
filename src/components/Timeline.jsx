import { useCallback, useEffect, useRef, useState } from 'react';
import './timeline.css';

/**
 * Horizontal timeline. Eight entries as a vertical list ran to roughly 1400px;
 * as a rail with one detail panel it fits in about a quarter of that.
 *
 * It walks forward on its own, pausing on hover, on focus and for anyone who
 * prefers reduced motion. Built as a tablist, so arrow keys move between years.
 */
export default function Timeline({ items, interval = 4200 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabsRef = useRef([]);
  const railRef = useRef(null);

  const go = useCallback(
    (i, focus = false) => {
      const next = (i + items.length) % items.length;
      setActive(next);
      if (focus) tabsRef.current[next]?.focus();
    },
    [items.length]
  );

  useEffect(() => {
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || paused || items.length < 2) return;
    const id = setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, items.length]);

  // keep the active year in view when the rail scrolls on narrow screens
  useEffect(() => {
    const tab = tabsRef.current[active];
    const rail = railRef.current;
    if (!tab || !rail || rail.scrollWidth <= rail.clientWidth) return;
    const target = tab.offsetLeft - rail.clientWidth / 2 + tab.offsetWidth / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [active]);

  const onKeyDown = (e) => {
    const map = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: items.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    go(map[e.key], true);
  };

  const current = items[active];
  const progress = items.length > 1 ? (active / (items.length - 1)) * 100 : 0;

  return (
    <div
      className="tl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="tl__rail" ref={railRef}>
        <div className="tl__track" role="tablist" aria-label="Company timeline" onKeyDown={onKeyDown}>
          {/* Inset to the first and last dot centres, not the track edges. */}
          <span
            className="tl__line"
            aria-hidden="true"
            style={{ left: `calc(50% / ${items.length})`, right: `calc(50% / ${items.length})` }}
          >
            <span className="tl__line-fill" style={{ width: `${progress}%` }} />
          </span>

          {items.map((item, i) => (
            <button
              key={item.year}
              type="button"
              role="tab"
              ref={(el) => (tabsRef.current[i] = el)}
              id={`tl-tab-${i}`}
              aria-controls="tl-panel"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              className={`tl__tab${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
              onClick={() => go(i)}
            >
              <span className="tl__dot" aria-hidden="true" />
              <span className="tl__year">{item.year}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="tl__panel"
        id="tl-panel"
        role="tabpanel"
        aria-labelledby={`tl-tab-${active}`}
        key={active}
      >
        <div className="tl__panel-year" aria-hidden="true">
          {current.year}
        </div>
        <div className="tl__panel-copy">
          <span className="tl__step">
            {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <h3 className="h3">{current.title}</h3>
          <p className="body">{current.body}</p>
        </div>
      </div>
    </div>
  );
}
