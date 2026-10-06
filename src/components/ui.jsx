import { Link } from 'react-router-dom';
import Icon from './Icon';
import AnimatedNumber from './AnimatedNumber';

/* ---------- Pill ------------------------------------------------------ */
export function Pill({ children, dot = true }) {
  return (
    <span className="pill">
      {dot && <span className="pill__dot" />}
      {children}
    </span>
  );
}

/* ---------- Section heading ------------------------------------------ */
export function SectionHead({ eyebrow, title, lede, align = 'left', max = '58ch', action }) {
  const centred = align === 'center';
  return (
    <div
      className="stack"
      style={{
        gap: 18,
        alignItems: centred ? 'center' : 'flex-start',
        textAlign: centred ? 'center' : 'left',
        marginBottom: 44,
      }}
    >
      {eyebrow && <Pill>{eyebrow}</Pill>}
      <div
        style={{
          display: 'flex',
          gap: 32,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
          flexDirection: centred ? 'column' : 'row',
        }}
      >
        <h2 className="h2" style={{ maxWidth: centred ? '24ch' : '28ch' }}>
          {title}
        </h2>
        {action}
      </div>
      {lede && (
        <p className="lede" style={{ maxWidth: max }}>
          {lede}
        </p>
      )}
    </div>
  );
}

/* ---------- Page banner ----------------------------------------------- */
// A dark band with a photo behind it, so the top of a page reads as a
// distinct zone rather than as more cream.
export function PageHero({ eyebrow, title, lede, children, aside, image, imageAlt = '' }) {
  return (
    <section className="banner">
      {image && (
        <div className="banner__media">
          <img src={image} alt={imageAlt} loading="eager" fetchpriority="high" />
        </div>
      )}
      <div className="shell" style={{ paddingTop: 84, paddingBottom: 84 }}>
        <div className={aside ? 'split' : ''}>
          <div className="stack" style={{ gap: 22 }}>
            {eyebrow && <Pill>{eyebrow}</Pill>}
            <h1 className="display" style={{ maxWidth: '20ch' }}>
              {title}
            </h1>
            {lede && <p className="lede">{lede}</p>}
            {children}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat ------------------------------------------------------ */
export function StatBlock({ value, label, note, accent }) {
  return (
    <div className="stack" style={{ gap: 6 }}>
      <AnimatedNumber
        value={value}
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(30px, 3.4vw, 38px)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: accent || 'var(--clay)',
        }}
      />
      <span style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.4 }}>{label}</span>
      {note && <span style={{ fontSize: 12.5, color: 'var(--ink-4)' }}>{note}</span>}
    </div>
  );
}

export function StatStrip({ items, sunk = true }) {
  return (
    <section
      className={sunk ? 'section--sunk' : ''}
      style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="shell" style={{ paddingTop: 44, paddingBottom: 44 }}>
        <div className="grid grid--4">
          {items.map((s) => (
            <StatBlock key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature row ----------------------------------------------- */
export function FeatureRow({ icon, title, body }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <span className="icon-tile icon-tile--plain" style={{ width: 38, height: 38 }}>
        <Icon name={icon} size={18} />
      </span>
      <div className="stack" style={{ gap: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 600 }}>{title}</span>
        <span className="small">{body}</span>
      </div>
    </div>
  );
}

/* ---------- Bulleted list with check marks ---------------------------- */
export function CheckList({ items, gap = 12 }) {
  return (
    <ul className="stack" style={{ gap, margin: 0, padding: 0, listStyle: 'none' }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span
            style={{
              flex: 'none',
              width: 20,
              height: 20,
              borderRadius: 999,
              background: 'var(--clay-tint)',
              color: 'var(--clay-darker)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 2,
            }}
          >
            <Icon name="check" size={12} strokeWidth={2.4} />
          </span>
          <span className="body">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Tag row --------------------------------------------------- */
export function TagRow({ items, label }) {
  return (
    <div className="stack" style={{ gap: 12 }}>
      {label && <span className="eyebrow">{label}</span>}
      <div className="row" style={{ gap: 8 }}>
        {items.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Quote ----------------------------------------------------- */
export function QuoteCard({ text, author, company }) {
  return (
    <figure className="card card--raised stack" style={{ gap: 20, margin: 0 }}>
      <Icon name="speak" size={22} style={{ color: 'var(--clay)' }} />
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--serif)',
          fontSize: 19,
          lineHeight: 1.45,
          letterSpacing: '-0.01em',
        }}
      >
        “{text}”
      </blockquote>
      <figcaption className="stack" style={{ gap: 2 }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>{author}</span>
        {company && <span style={{ fontSize: 13, color: 'var(--ink-4)' }}>{company}</span>}
      </figcaption>
    </figure>
  );
}

/* ---------- CTA band -------------------------------------------------- */
export function CtaBand({
  eyebrow = 'Next step',
  title = 'Tell us what is not working.',
  body = 'A short call with an engineer who has built the thing you are describing — not a sales qualification script. We will tell you if we are the wrong firm for it.',
  primary = { to: '/contact', label: 'Start a conversation' },
  secondary = { to: '/projects', label: 'See our work' },
}) {
  return (
    <section className="section--line-top" style={{ background: 'var(--surface)' }}>
      <div className="shell" style={{ paddingTop: 76, paddingBottom: 76 }}>
        <div
          className="card card--raised split split--center"
          style={{
            padding: 'clamp(28px, 5vw, 56px)',
            gap: 36,
            background:
              'radial-gradient(760px 300px at 85% -30%, rgba(201,100,66,0.10), transparent 70%), var(--cream)',
          }}
          data-cta
        >
          <div className="stack" style={{ gap: 18 }}>
            <Pill>{eyebrow}</Pill>
            <h2 className="h2" style={{ maxWidth: '22ch' }}>
              {title}
            </h2>
            <p className="lede" style={{ maxWidth: '52ch' }}>
              {body}
            </p>
          </div>
          <div className="stack" style={{ gap: 12 }}>
            <Link to={primary.to} className="btn btn--primary">
              {primary.label}
              <Icon name="arrowRight" size={16} strokeWidth={2} />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn btn--ghost">
                {secondary.label}
              </Link>
            )}
            <p style={{ fontSize: 12.5, color: 'var(--ink-4)', marginTop: 4 }}>
              Typical reply inside one working day. NDAs signed before the first technical session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Breadcrumb ------------------------------------------------- */
// Colours come from CSS so the trail can invert inside a dark banner.
export function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb row">
      {trail.map((item, i) => (
        <span key={item.label} className="row" style={{ gap: 8 }}>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          {i < trail.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  );
}

/* ---------- Prose renderer for article bodies ------------------------- */
export function Prose({ blocks }) {
  return (
    <div className="stack" style={{ gap: 24 }}>
      {blocks.map((block, i) => {
        if (block.h) {
          return (
            <h2 key={i} className="h3" style={{ marginTop: 16 }}>
              {block.h}
            </h2>
          );
        }
        if (block.quote) {
          return (
            <blockquote
              key={i}
              style={{
                margin: '8px 0',
                padding: '4px 0 4px 22px',
                borderLeft: '2px solid var(--clay)',
                fontFamily: 'var(--serif)',
                fontSize: 21,
                lineHeight: 1.45,
                fontStyle: 'italic',
                color: 'var(--ink-2)',
              }}
            >
              {block.quote}
            </blockquote>
          );
        }
        if (block.list) {
          return (
            <ul key={i} className="stack" style={{ gap: 10, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
              {block.list.map((li) => (
                <li key={li} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flex: 'none',
                      width: 5,
                      height: 5,
                      borderRadius: 999,
                      background: 'var(--clay)',
                      marginTop: 10,
                    }}
                  />
                  <span style={{ fontSize: 16.5, lineHeight: 1.68, color: 'var(--ink-2)' }}>{li}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
            {block.p}
          </p>
        );
      })}
    </div>
  );
}

/* ---------- Scroll restoration ---------------------------------------- */
export function Avatar({ initials, size = 48 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        flex: 'none',
        width: size,
        height: size,
        borderRadius: 999,
        background: 'var(--clay-tint)',
        border: '1px solid var(--clay-line)',
        color: 'var(--clay-darker)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--serif)',
        fontSize: size * 0.38,
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}
    >
      {initials}
    </span>
  );
}
