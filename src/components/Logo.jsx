import { Link } from 'react-router-dom';
import { site } from '../data/site';

// Wordmark + mark. The mark reuses the pulse-line motif from the reference
// design, which doubles neatly as a price chart for a trading-led firm.
export default function Logo({ to = '/', subtitle = 'Trading · Cybersecurity · AI', compact = false }) {
  return (
    <Link
      to={to}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        color: 'var(--ink)',
        textDecoration: 'none',
      }}
      aria-label={`${site.name} — home`}
    >
      <span
        className="icon-tile"
        style={{ width: 40, height: 40, borderRadius: 10 }}
        aria-hidden="true"
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17l4.5-9L12 19l4.5-14L21 11" />
        </svg>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 21,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </span>
        {!compact && (
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: 'var(--ink-4)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
            }}
          >
            {subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}
