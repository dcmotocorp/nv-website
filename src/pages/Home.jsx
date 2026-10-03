import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import {
  Pill,
  SectionHead,
  StatStrip,
  CtaBand,
  QuoteCard,
  CheckList,
} from '../components/ui';
import { ServiceCard, ProjectCard, InsightCard } from '../components/cards';
import { site, stats, clients } from '../data/site';
import { services } from '../data/services';
import { projects, featuredProjects } from '../data/projects';
import { featuredInsights } from '../data/insights';
import { process, testimonials, industries } from '../data/company';

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------------------------------------------- */}
      <section
        style={{
          borderBottom: '1px solid var(--line)',
          background:
            'radial-gradient(1200px 520px at 8% -15%, rgba(201,100,66,0.09), transparent 68%), radial-gradient(900px 400px at 95% 0%, rgba(90,120,140,0.07), transparent 70%), var(--cream)',
        }}
      >
        <div className="shell" style={{ paddingTop: 84, paddingBottom: 84 }}>
          <div className="split split--center">
            <div className="stack" style={{ gap: 26 }}>
              <Pill>Est. {site.founded} · Mohali · Mumbai · Dubai</Pill>
              <h1 className="display">
                We build the systems that move money, <em className="em-clay">guard it</em>, and make
                sense of it.
              </h1>
              <p className="lede">
                NV Infotech is an engineering firm working where the stakes are measured in
                milliseconds and audit findings — low-latency trading platforms, 24×7 cyber defence,
                and AI that actually reaches production.
              </p>
              <div className="row" style={{ gap: 12 }}>
                <Link to="/contact" className="btn btn--primary">
                  Start a conversation
                  <Icon name="arrowRight" size={16} strokeWidth={2} />
                </Link>
                <Link to="/projects" className="btn btn--ghost">
                  See the work
                </Link>
              </div>
              <div className="row" style={{ gap: 10, paddingTop: 6 }}>
                {site.certifications.slice(0, 3).map((c) => (
                  <span key={c} className="tag">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* practice summary card */}
            <aside
              className="card card--raised stack"
              style={{ gap: 0, padding: 0, overflow: 'hidden' }}
            >
              <div
                className="stack"
                style={{
                  gap: 6,
                  padding: '22px 26px',
                  borderBottom: '1px solid var(--line)',
                  background: 'var(--cream)',
                }}
              >
                <span className="eyebrow">Where we are strongest</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500 }}>
                  Three practices, one engineering standard
                </span>
              </div>
              {services.slice(0, 3).map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                    padding: '20px 26px',
                    borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <span className="icon-tile" style={{ width: 38, height: 38 }}>
                    <Icon name={s.icon} size={18} />
                  </span>
                  <span className="stack" style={{ gap: 3 }}>
                    <span style={{ fontSize: 15.5, fontWeight: 600 }}>{s.name}</span>
                    <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink-3)' }}>
                      {s.short}
                    </span>
                  </span>
                </Link>
              ))}
              <div
                className="row"
                style={{
                  gap: 8,
                  padding: '16px 26px',
                  background: 'var(--cream)',
                  borderTop: '1px solid var(--line)',
                  color: 'var(--ink-4)',
                }}
              >
                <Icon name="lock" size={13} strokeWidth={2} />
                <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em' }}>
                  NDA BEFORE THE FIRST TECHNICAL SESSION
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <StatStrip items={stats} />

      {/* ---------- client strip -------------------------------------- */}
      <section className="section--tight">
        <div className="shell stack" style={{ gap: 22, alignItems: 'center' }}>
          <span className="eyebrow">Trusted on systems that cannot be down</span>
          <div
            className="row"
            style={{ gap: '14px 36px', justifyContent: 'center', maxWidth: 900 }}
          >
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 17,
                  color: 'var(--ink-4)',
                  letterSpacing: '-0.01em',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- services ------------------------------------------ */}
      <section className="section section--line-top" style={{ background: 'var(--surface)' }}>
        <div className="shell">
          <SectionHead
            eyebrow="What we do"
            title="Six practices that keep ending up on the same projects."
            lede="A trading platform needs a security programme. An AI model needs a data platform underneath it. We run these as one firm rather than six, because that is how the problems actually arrive."
            action={
              <Link to="/services" className="btn btn--ghost btn--sm">
                All services
                <Icon name="arrowRight" size={15} strokeWidth={2} />
              </Link>
            }
          />
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- featured work ------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Selected work"
            title="Systems in production, with the numbers attached."
            lede="Each of these is running today. The figures are the ones we report to the client, not the ones that look best on a slide."
            action={
              <Link to="/projects" className="btn btn--ghost btn--sm">
                All case studies
                <Icon name="arrowRight" size={15} strokeWidth={2} />
              </Link>
            }
          />
          <div className="grid grid--3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="grid grid--3" style={{ marginTop: 24 }}>
            {projects.filter((p) => !p.featured).slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how we work --------------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <div className="split" style={{ gap: 64 }}>
            <div className="stack" style={{ gap: 22 }}>
              <Pill>How we work</Pill>
              <h2 className="h2">Measure first. Ship the risky part early. Hand it over properly.</h2>
              <p className="lede">
                Nine years of this has left us with a short list of things we will not compromise on.
                They are unglamorous and they are the reason our engagements tend to outlast the
                people who signed them.
              </p>
              <CheckList
                items={[
                  'Paid discovery before any fixed commitment — we instrument what exists first',
                  'The riskiest unknown is built first, as a thin slice in a real environment',
                  'Shared on-call through stabilisation, not a handover email',
                  'Your engineers run a release without us before we sign off',
                ]}
              />
              <Link to="/about" className="btn btn--ghost" style={{ marginTop: 8, width: 'fit-content' }}>
                More about the firm
                <Icon name="arrowRight" size={16} strokeWidth={2} />
              </Link>
            </div>

            <ol className="stack" style={{ gap: 0, margin: 0, padding: 0, listStyle: 'none' }}>
              {process.map((p, i) => (
                <li
                  key={p.step}
                  style={{
                    display: 'flex',
                    gap: 20,
                    padding: '22px 0',
                    borderBottom: i < process.length - 1 ? '1px solid var(--line-strong)' : 'none',
                  }}
                >
                  <span
                    className="mono"
                    style={{ color: 'var(--clay)', fontWeight: 500, paddingTop: 3 }}
                  >
                    {p.step}
                  </span>
                  <span className="stack" style={{ gap: 5 }}>
                    <span style={{ fontSize: 16.5, fontWeight: 600 }}>{p.title}</span>
                    <span className="small">{p.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- industries ---------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Industries"
            title="Regulated, measured, and unforgiving of downtime."
            lede="We work best where a mistake has a name for it in a statute. Those sectors reward the way we build."
            action={
              <Link to="/industries" className="btn btn--ghost btn--sm">
                Industry detail
                <Icon name="arrowRight" size={15} strokeWidth={2} />
              </Link>
            }
          />
          <div className="grid grid--3">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                to="/industries"
                className="card card--link stack"
                style={{ gap: 14 }}
              >
                <span className="icon-tile">
                  <Icon name={ind.icon} size={20} />
                </span>
                <h3 className="h4" style={{ fontSize: 17.5 }}>
                  {ind.name}
                </h3>
                <p className="small">{ind.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- testimonials -------------------------------------- */}
      <section className="section section--line-top" style={{ background: 'var(--surface)' }}>
        <div className="shell">
          <SectionHead
            eyebrow="In their words"
            title="What clients say when the project is over."
            align="center"
          />
          <div className="grid grid--2">
            {testimonials.slice(0, 4).map((t) => (
              <QuoteCard key={t.company} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- insights ------------------------------------------ */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Insights"
            title="What we have learned, written down."
            lede="Notes from engagements — latency audits, detection coverage, and why most AI projects stall before deployment."
            action={
              <Link to="/insights" className="btn btn--ghost btn--sm">
                All insights
                <Icon name="arrowRight" size={15} strokeWidth={2} />
              </Link>
            }
          />
          <div className="grid grid--3">
            {featuredInsights.map((a) => (
              <InsightCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
