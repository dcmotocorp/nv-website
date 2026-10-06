import { Link } from 'react-router-dom';
import { site } from '../data/site';

/**
 * The mark is an NV monogram drawn as a single unbroken stroke: the N's right
 * stem runs straight into the V, so the whole thing also reads as a price line.
 * It sits in a solid clay tile, which holds up far better at small sizes than
 * the thin outline mark it replaces.
 */
export function LogoMark({ size = 40, radius = 11 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        flex: 'none',
        width: size,
        height: size,
        borderRadius: radius,
        background: 'linear-gradient(145deg, #D8734D 0%, #C96442 48%, #A9502F 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 1px 2px rgba(20,20,19,0.14)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width={Math.round(size * 0.62)}
        height={Math.round(size * 0.62)}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M6.5 23.5V9.5L14.5 23.5V9.5L20 23.5L25.5 9.5"
          stroke="#FFFFFF"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Logo({ to = '/', subtitle = 'Trading · Cybersecurity · AI', compact = false }) {
  return (
    <Link
      to={to}
      style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink)', textDecoration: 'none' }}
      aria-label={`${site.name} — home`}
    >
      <LogoMark />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 21,
            fontWeight: 500,
            letterSpacing: '-0.012em',
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
