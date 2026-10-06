import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import './carousel.css';

/**
 * Horizontal scroll-snap carousel that advances on its own.
 *
 * Autoplay stops on hover, on keyboard focus inside the track, while the tab
 * is hidden, and entirely for visitors who prefer reduced motion. The track is
 * a plain scroller, so swipe and keyboard scrolling keep working if JS is slow.
 */
export default function Carousel({
  children,
  eyebrow,
  title,
  lede,
  seeAll,
  interval = 4500,
  ariaLabel = 'Carousel',
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const items = Array.isArray(children) ? children.filter(Boolean) : [children];

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    return first.getBoundingClientRect().width + gap;
  }, []);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    setIndex(s ? Math.round(track.scrollLeft / s) : 0);
    setAtStart(track.scrollLeft < 8);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
  }, [step]);

  const go = useCallback(
    (dir) => {
      const track = trackRef.current;
      if (!track) return;
      const s = step();
      const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (dir > 0 && end) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: dir * s, behavior: 'smooth' });
    },
    [step]
  );

  const toIndex = (i) => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: i * step(), behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      track.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  useEffect(() => {
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || paused || items.length < 2) return;

    const id = setInterval(() => {
      if (!document.hidden) go(1);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, go, items.length]);

  return (
    <section
      className="carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="carousel__head">
        <div className="carousel__copy">
          {eyebrow && (
            <span className="pill">
              <span className="pill__dot" />
              {eyebrow}
            </span>
          )}
          {title && <h2 className="h2">{title}</h2>}
          {lede && <p className="lede">{lede}</p>}
        </div>

        <div className="carousel__controls">
          {seeAll && (
            <Link to={seeAll.to} className="btn btn--ghost btn--sm">
              {seeAll.label}
              <Icon name="arrowRight" size={15} strokeWidth={2} />
            </Link>
          )}
          <div className="carousel__arrows">
            <button
              type="button"
              className="carousel__arrow"
              onClick={() => go(-1)}
              disabled={atStart}
              aria-label="Previous"
            >
              <Icon name="arrowLeft" size={17} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="carousel__arrow"
              onClick={() => go(1)}
              aria-label={atEnd ? 'Back to start' : 'Next'}
            >
              <Icon name="arrowRight" size={17} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <ul className="carousel__track" ref={trackRef}>
        {items.map((child, i) => (
          <li
            className="carousel__slide"
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
          >
            {child}
          </li>
        ))}
      </ul>

      {items.length > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Choose slide">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`carousel__dot${i === index ? ' is-active' : ''}`}
              onClick={() => toIndex(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
