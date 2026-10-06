import { Link } from 'react-router-dom';
import Icon from './Icon';
import AnimatedNumber from './AnimatedNumber';
import { formatDate } from '../data/insights';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

/* ---------- Service card ---------------------------------------------- */
export function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card card--link stack" style={{ gap: 18 }}>
      <span className="icon-tile icon-tile--lg">
        <Icon name={service.icon} size={23} />
      </span>
      <div className="stack" style={{ gap: 8 }}>
        <h3 className="h4">{service.name}</h3>
        <p className="small">{service.short}</p>
      </div>
      <span
        className="row"
        style={{ gap: 6, marginTop: 'auto', fontSize: 13.5, fontWeight: 600, color: 'var(--clay)' }}
      >
        What this involves
        <Icon name="arrowRight" size={14} strokeWidth={2} />
      </span>
    </Link>
  );
}

/* ---------- Project card ---------------------------------------------- */
export function ProjectCard({ project, size = 'default' }) {
  const large = size === 'large';
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card card--link stack"
      style={{ gap: 20, padding: large ? 32 : 26, overflow: 'hidden' }}
    >
      <div
        style={{
          height: large ? 196 : 168,
          margin: large ? '-32px -32px 0' : '-26px -26px 0',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          padding: large ? 32 : 26,
          overflow: 'hidden',
          background: 'var(--cream-sunk)',
        }}
      >
        <img
          src={asset(`img/projects/${project.slug}.jpg`)}
          alt=""
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, rgba(23,21,19,0.88) 0%, rgba(23,21,19,0.42) 48%, ${project.accent}26 100%)`,
          }}
        />
        <span
          style={{
            position: 'relative',
            fontFamily: 'var(--mono)',
            fontSize: 11.5,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(247,244,239,0.92)',
            fontWeight: 500,
          }}
        >
          {project.categoryLabel} · {project.year}
        </span>
      </div>

      <div className="stack" style={{ gap: 12 }}>
        {/* Title leads; the client reads as a quiet byline beneath it. */}
        <div className="stack" style={{ gap: 4 }}>
          <h3 className={large ? 'h3' : 'h4'}>{project.title}</h3>
          <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-4)' }}>
            {project.client}
          </span>
        </div>
        <p className="small">{project.teaser}</p>
      </div>

      {/* Fixed columns and a reserved label height, so every card's footer is
          the same shape and the figures line up across a row. */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${large ? 3 : 2}, minmax(0, 1fr))`,
          gap: '10px 18px',
          marginTop: 'auto',
          paddingTop: 4,
        }}
      >
        {project.metrics.slice(0, large ? 3 : 2).map((m) => (
          <span key={m.label} className="stack" style={{ gap: 2 }}>
            <AnimatedNumber
              value={m.value}
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 1.1,
                color: 'var(--ink)',
              }}
            />
            <span
              style={{
                fontSize: 11.5,
                lineHeight: 1.35,
                color: 'var(--ink-4)',
                minHeight: '2.7em',
              }}
            >
              {m.label}
            </span>
          </span>
        ))}
      </div>
    </Link>
  );
}

/* ---------- Insight card ---------------------------------------------- */
export function InsightCard({ article, compact = false }) {
  return (
    <Link to={`/insights/${article.slug}`} className="card card--link stack" style={{ gap: 14 }}>
      {!compact && (
        <div
          style={{
            height: 150,
            margin: '-28px -28px 2px',
            borderBottom: '1px solid var(--line)',
            overflow: 'hidden',
            background: 'var(--cream-sunk)',
          }}
        >
          <img
            src={asset(`img/insights/${article.slug}.jpg`)}
            alt=""
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="row" style={{ gap: 10, justifyContent: 'space-between' }}>
        <span className="tag" style={{ background: 'var(--cream)' }}>
          {article.topic}
        </span>
        <span style={{ fontSize: 12, color: 'var(--ink-4)' }}>{article.readingTime}</span>
      </div>
      <h3 className={compact ? 'h4' : 'h3'} style={{ fontSize: compact ? 18 : undefined }}>
        {article.title}
      </h3>
      {!compact && <p className="small">{article.deck}</p>}
      <div
        className="row"
        style={{ gap: 8, marginTop: 'auto', paddingTop: 6, fontSize: 12.5, color: 'var(--ink-4)' }}
      >
        <span>{article.author}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(article.date)}</span>
      </div>
    </Link>
  );
}

/* ---------- Industry card --------------------------------------------- */
export function IndustryCard({ industry }) {
  return (
    <article className="card stack" style={{ gap: 18 }}>
      {industry.image && (
        <div
          style={{
            height: 150,
            margin: '-28px -28px 2px',
            borderBottom: '1px solid var(--line)',
            overflow: 'hidden',
            background: 'var(--cream-sunk)',
            position: 'relative',
          }}
        >
          <img
            src={asset(industry.image)}
            alt=""
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <span
            className="icon-tile"
            style={{ position: 'absolute', left: 20, bottom: 14, background: 'var(--surface)' }}
          >
            <Icon name={industry.icon} size={20} />
          </span>
        </div>
      )}
      {!industry.image && (
        <span className="icon-tile icon-tile--lg">
          <Icon name={industry.icon} size={23} />
        </span>
      )}
      <div className="stack" style={{ gap: 8 }}>
        <h3 className="h4">{industry.name}</h3>
        <p className="small">{industry.body}</p>
      </div>
      <ul className="stack" style={{ gap: 8, margin: 0, padding: 0, listStyle: 'none', marginTop: 4 }}>
        {industry.points.map((p) => (
          <li key={p} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <Icon name="check" size={13} strokeWidth={2.4} style={{ color: 'var(--clay)', marginTop: 4 }} />
            <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink-3)' }}>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
