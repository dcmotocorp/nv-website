import { useMemo, useState } from 'react';
import { PageHero, CtaBand, StatStrip } from '../components/ui';
import { ProjectCard } from '../components/cards';
import { projects, projectCategories } from '../data/projects';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const summary = [
  { value: '40+', label: 'Estates under management', note: 'Trading, SOC and platform' },
  { value: '14', label: 'Case studies published', note: 'Of 60-plus engagements' },
  { value: '7', label: 'Sectors served', note: 'All regulated or safety-critical' },
  { value: '92%', label: 'Clients still with us', note: 'Measured over three years' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        image={asset('img/banner/page.jpg')}
        imageAlt=""
        eyebrow="Case studies"
        title="Work that is running in production right now."
        lede="Fourteen engagements described in enough detail to be useful — the constraint we hit, the approach we took and what we delivered. Client names appear only where we have permission to use them."
      />

      <StatStrip items={summary} />

      <section className="section">
        <div className="shell stack" style={{ gap: 32 }}>
          <div
            className="row"
            role="group"
            aria-label="Filter case studies"
            style={{ gap: 8, justifyContent: 'space-between' }}
          >
            <div className="row" style={{ gap: 8 }}>
              {projectCategories.map((c) => {
                const active = filter === c.key;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setFilter(c.key)}
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
                      transition: 'background 120ms ease, border-color 120ms ease',
                    }}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
            <span className="mono" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'study' : 'studies'}
            </span>
          </div>

          <div className="grid grid--3">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="lede" style={{ textAlign: 'center', padding: '40px 0' }}>
              Nothing published in this category yet. Ask us directly — most of our work is under NDA.
            </p>
          )}
        </div>
      </section>

      <CtaBand
        title="The relevant case study is probably the one we cannot publish."
        body="Around three quarters of our work stays under NDA. Tell us your sector and constraint and we will arrange a reference call with a client in a similar position."
        secondary={{ to: '/services', label: 'Browse services' }}
      />
    </>
  );
}
