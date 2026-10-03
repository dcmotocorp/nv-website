import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHero, CtaBand, Pill } from '../components/ui';
import { InsightCard } from '../components/cards';
import { insights, formatDate } from '../data/insights';

export default function Insights() {
  const topics = useMemo(() => ['All topics', ...new Set(insights.map((a) => a.topic))], []);
  const [topic, setTopic] = useState('All topics');

  const visible = topic === 'All topics' ? insights : insights.filter((a) => a.topic === topic);
  const [lead, ...rest] = visible;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from engagements, not thought leadership."
        lede="Things we have learned on real systems — where the milliseconds actually go, why detection coverage is usually overstated, and the reason most AI projects stall before deployment."
      />

      <section className="section">
        <div className="shell stack" style={{ gap: 36 }}>
          <div className="row" style={{ gap: 8, justifyContent: 'space-between' }}>
            <div className="row" role="group" aria-label="Filter by topic" style={{ gap: 8 }}>
              {topics.map((t) => {
                const active = topic === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    aria-pressed={active}
                    style={{
                      height: 38,
                      padding: '0 16px',
                      borderRadius: 999,
                      border: `1px solid ${active ? 'var(--clay)' : 'var(--line-strong)'}`,
                      background: active ? 'var(--clay-tint)' : 'var(--surface)',
                      color: active ? 'var(--clay-darker)' : 'var(--ink-2)',
                      font: 'inherit',
                      fontSize: 14,
                      fontWeight: active ? 600 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            <span className="mono" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {/* lead article */}
          {lead && (
            <Link
              to={`/insights/${lead.slug}`}
              className="card card--link card--raised split"
              style={{ gap: 40, padding: 'clamp(26px, 4vw, 44px)', alignItems: 'center' }}
            >
              <div className="stack" style={{ gap: 18 }}>
                <Pill>Latest</Pill>
                <h2 className="h2" style={{ fontSize: 'clamp(26px, 3.2vw, 36px)' }}>
                  {lead.title}
                </h2>
                <p className="lede">{lead.deck}</p>
                <div className="row" style={{ gap: 10, fontSize: 13, color: 'var(--ink-4)' }}>
                  <span>{lead.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{formatDate(lead.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lead.readingTime}</span>
                </div>
              </div>
              <div className="stack" style={{ gap: 16 }}>
                <span className="tag" style={{ background: 'var(--cream)' }}>
                  {lead.topic}
                </span>
                <span
                  className="row"
                  style={{ gap: 7, fontSize: 14.5, fontWeight: 600, color: 'var(--clay)' }}
                >
                  Read the article
                  <Icon name="arrowRight" size={15} strokeWidth={2} />
                </span>
              </div>
            </Link>
          )}

          <div className="grid grid--3">
            {rest.map((a) => (
              <InsightCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Subscribe"
        title="We publish roughly monthly, when we have something to say."
        body="No newsletter cadence for its own sake. Email us and we will add you to the list that goes out when an article is published."
        primary={{ to: '/contact', label: 'Join the list' }}
        secondary={{ to: '/projects', label: 'See the work behind these' }}
      />
    </>
  );
}
