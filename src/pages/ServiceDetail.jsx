import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import {
  Pill,
  Breadcrumb,
  CtaBand,
  CheckList,
  TagRow,
  SectionHead,
} from '../components/ui';
import { ProjectCard } from '../components/cards';
import Carousel from '../components/Carousel';
import { services, serviceBySlug } from '../data/services';
import { projects } from '../data/projects';
import NotFound from './NotFound';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceBySlug(slug);

  if (!service) return <NotFound />;

  const related = projects.filter((p) => p.services?.includes(service.slug));
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* ---------- hero ---------------------------------------------- */}
      <section className="banner">
        <div className="banner__media">
          <img src={asset('img/banner/page.jpg')} alt="" fetchpriority="high" />
        </div>
        <div className="shell" style={{ paddingTop: 36, paddingBottom: 80 }}>
          <Breadcrumb
            trail={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.name },
            ]}
          />
          <div className="split" style={{ marginTop: 40 }}>
            <div className="stack" style={{ gap: 24 }}>
              {/* No icon or "Service" badge here — the breadcrumb above already
                  says Home / Services / <name>. */}
              <h1 className="display" style={{ fontSize: 'clamp(34px, 4.6vw, 52px)' }}>
                {service.name}
              </h1>
              <p className="lede" style={{ fontSize: 19 }}>
                {service.lede}
              </p>
              <p className="body">{service.summary}</p>
              <div className="row" style={{ gap: 12, marginTop: 6 }}>
                <Link to="/contact" className="btn btn--primary">
                  Talk to the practice lead
                  <Icon name="arrowRight" size={16} strokeWidth={2} />
                </Link>
                <Link to="/projects" className="btn btn--ghost">
                  Related work
                </Link>
              </div>
            </div>

            <aside className="card card--raised stack" style={{ gap: 20 }}>
              <span className="eyebrow">What this typically delivers</span>
              <CheckList items={service.outcomes} />
              <hr className="rule" />
              <TagRow label="Tools we reach for" items={service.stack} />
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- capabilities -------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Capabilities"
            title="What this practice actually covers."
            lede="Not every engagement uses all of it. This is the full surface so you can see where your problem sits."
          />
          <div className="grid grid--2">
            {service.capabilities.map((c) => (
              <article key={c.title} className="card stack" style={{ gap: 12 }}>
                <h3 className="h4" style={{ fontSize: 17.5 }}>
                  {c.title}
                </h3>
                <p className="small">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- engagement shape ---------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 20 }}>
              <Pill>Engagement shape</Pill>
              <h2 className="h2">How a {service.name.toLowerCase()} engagement runs.</h2>
              <p className="lede">
                Timelines vary with estate size, but the sequence does not. Each phase ends with
                something you can evaluate rather than a status report.
              </p>
            </div>
            <ol className="stack" style={{ gap: 16, margin: 0, padding: 0, listStyle: 'none' }}>
              {service.engagement.map((e, i) => (
                <li key={e.phase} className="card stack" style={{ gap: 8 }}>
                  <div className="row" style={{ gap: 12 }}>
                    <span
                      className="mono"
                      style={{ color: 'var(--clay)', fontWeight: 500, fontSize: 12 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: 16.5, fontWeight: 600 }}>{e.phase}</span>
                  </div>
                  <p className="small">{e.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- related work -------------------------------------- */}
      {related.length > 0 && (
        <section className="section">
          <div className="shell">
            <Carousel
              eyebrow="Related work"
              title="Where this practice has been used."
              seeAll={{ to: '/projects', label: 'See all 14 case studies' }}
              interval={6000}
              ariaLabel="Related case studies"
            >
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {/* ---------- faqs ---------------------------------------------- */}
      <section className="section section--line-top" style={{ background: 'var(--surface)' }}>
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 18 }}>
              <Pill>Questions</Pill>
              <h2 className="h2">Asked often enough to answer here.</h2>
              <p className="lede">
                If yours is not covered, ask it directly — you will get an engineer, not a form
                response.
              </p>
              <Link to="/contact" className="btn btn--ghost" style={{ width: 'fit-content' }}>
                Ask a question
              </Link>
            </div>
            <div className="stack" style={{ gap: 16 }}>
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="card"
                  style={{ padding: '20px 24px', cursor: 'pointer' }}
                >
                  <summary
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 16,
                      alignItems: 'center',
                    }}
                  >
                    {f.q}
                    <Icon name="plus" size={16} style={{ color: 'var(--clay)' }} />
                  </summary>
                  <p className="small" style={{ marginTop: 12 }}>
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- other services ------------------------------------ */}
      <section className="section section--tight section--line-top">
        <div className="shell stack" style={{ gap: 22 }}>
          <span className="eyebrow">Other practices</span>
          <div className="row" style={{ gap: 10 }}>
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="row"
                style={{
                  gap: 9,
                  padding: '10px 15px',
                  border: '1px solid var(--line-strong)',
                  borderRadius: 999,
                  background: 'var(--surface)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--ink-2)',
                  textDecoration: 'none',
                }}
              >
                <Icon name={s.icon} size={15} style={{ color: 'var(--clay)' }} />
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Thinking about ${service.name.toLowerCase()}?`}
        body="Tell us the symptom rather than the solution. We will come back with what it usually turns out to be and what it would take to find out properly."
        secondary={{ to: '/services', label: 'Back to all services' }}
      />
    </>
  );
}
