import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { Pill, Breadcrumb, CtaBand, CheckList, TagRow } from '../components/ui';
import { ProjectCard } from '../components/cards';
import AnimatedNumber from '../components/AnimatedNumber';
import { projects, projectBySlug } from '../data/projects';
import { serviceBySlug } from '../data/services';
import NotFound from './NotFound';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectBySlug(slug);

  if (!project) return <NotFound />;

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const linkedServices = (project.services || []).map(serviceBySlug).filter(Boolean);

  return (
    <>
      {/* ---------- hero ---------------------------------------------- */}
      <section className="banner">
        <div className="banner__media">
          <img src={asset(`img/projects/${project.slug}.jpg`)} alt="" fetchpriority="high" />
        </div>
        <div className="shell" style={{ paddingTop: 36, paddingBottom: 80 }}>
          <Breadcrumb
            trail={[
              { label: 'Home', to: '/' },
              { label: 'Case studies', to: '/projects' },
              { label: project.title },
            ]}
          />

          <div className="stack" style={{ gap: 24, marginTop: 40, maxWidth: '58ch' }}>
            <Pill>
              {project.categoryLabel} · {project.year}
            </Pill>
            <h1 className="display" style={{ fontSize: 'clamp(34px, 4.8vw, 54px)' }}>
              {project.title}
            </h1>
            <p className="lede" style={{ fontSize: 19.5 }}>
              {project.subtitle}
            </p>
          </div>

          <dl
            className="grid grid--4"
            style={{ marginTop: 52, paddingTop: 32, borderTop: '1px solid rgba(247,244,239,0.18)' }}
          >
            {[
              { k: 'Client', v: project.client },
              { k: 'Sector', v: project.sector },
              { k: 'Engagement', v: project.year },
              { k: 'Practices', v: linkedServices.map((s) => s.name).join(', ') || project.categoryLabel },
            ].map((item) => (
              <div key={item.k} className="stack" style={{ gap: 5 }}>
                <dt className="eyebrow">{item.k}</dt>
                <dd style={{ margin: 0, fontSize: 15.5, fontWeight: 500, lineHeight: 1.45 }}>
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- metrics ------------------------------------------- */}
      <section className="section--sunk" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="shell" style={{ paddingTop: 44, paddingBottom: 44 }}>
          <div className="grid grid--3">
            {project.metrics.map((m) => (
              <div key={m.label} className="stack" style={{ gap: 6 }}>
                <AnimatedNumber
                  value={m.value}
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(32px, 3.8vw, 42px)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: project.accent,
                  }}
                />
                <span style={{ fontSize: 14.5, fontWeight: 600 }}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- narrative ----------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 44 }}>
              <div className="stack" style={{ gap: 16 }}>
                <Pill>The problem</Pill>
                <h2 className="h3">What the client was dealing with</h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
                  {project.challenge}
                </p>
              </div>

              <div className="stack" style={{ gap: 16 }}>
                <Pill>Our approach</Pill>
                <h2 className="h3">How we went at it</h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
                  {project.approach}
                </p>
              </div>

              <div className="stack" style={{ gap: 16 }}>
                <Pill>Scope of work</Pill>
                <h2 className="h3">What we built</h2>
                <CheckList items={project.work} />
              </div>

              <div className="stack" style={{ gap: 16 }}>
                <Pill>Outcome</Pill>
                <h2 className="h3">Where it landed</h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
                  {project.outcome}
                </p>
              </div>

              {project.quote && (
                <figure
                  className="card card--raised stack"
                  style={{ gap: 18, margin: 0, padding: 32 }}
                >
                  <Icon name="speak" size={22} style={{ color: project.accent }} />
                  <blockquote
                    style={{
                      margin: 0,
                      fontFamily: 'var(--serif)',
                      fontSize: 21,
                      lineHeight: 1.45,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    “{project.quote.text}”
                  </blockquote>
                  <figcaption style={{ fontSize: 14, fontWeight: 600 }}>
                    {project.quote.author}
                  </figcaption>
                </figure>
              )}
            </div>

            {/* sidebar */}
            <aside className="stack" style={{ gap: 20, position: 'sticky', top: 100 }}>
              <div className="card stack" style={{ gap: 18 }}>
                <TagRow label="Technology" items={project.stack} />
              </div>

              {linkedServices.length > 0 && (
                <div className="card stack" style={{ gap: 14 }}>
                  <span className="eyebrow">Practices involved</span>
                  <div className="stack" style={{ gap: 10 }}>
                    {linkedServices.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="row"
                        style={{ gap: 10, fontSize: 14.5, color: 'var(--ink-2)' }}
                      >
                        <Icon name={s.icon} size={16} style={{ color: 'var(--clay)' }} />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div
                className="card stack"
                style={{ gap: 14, background: 'var(--cream)', borderColor: 'var(--clay-line)' }}
              >
                <span className="eyebrow">Similar problem?</span>
                <p className="small">
                  We will walk you through this engagement in detail on a call, including what went
                  wrong along the way.
                </p>
                <Link to="/contact" className="btn btn--primary btn--sm btn--block">
                  Request a walkthrough
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- more work ----------------------------------------- */}
      <section className="section section--line-top" style={{ background: 'var(--surface)' }}>
        <div className="shell stack" style={{ gap: 36 }}>
          <div
            className="row"
            style={{ justifyContent: 'space-between', gap: 20, alignItems: 'flex-end' }}
          >
            <h2 className="h2">More of our work</h2>
            <Link to="/projects" className="btn btn--ghost btn--sm">
              All case studies
              <Icon name="arrowRight" size={15} strokeWidth={2} />
            </Link>
          </div>
          <div className="grid grid--3">
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand secondary={{ to: '/projects', label: 'Back to case studies' }} />
    </>
  );
}
