import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import {
  PageHero,
  SectionHead,
  StatStrip,
  CtaBand,
  CheckList,
  Pill,
  Avatar,
  QuoteCard,
} from '../components/ui';
import { site, stats } from '../data/site';
import { values, timeline, leadership, testimonials } from '../data/company';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

export default function About() {
  return (
    <>
      <PageHero
        image={asset('img/banner/about.jpg')}
        imageAlt="NV Infotech engineering floor"
        eyebrow="About NV Infotech"
        title="An engineering firm, run by engineers."
        lede="We started in 2017 with four people and one brokerage client. Nine years later there are 140 of us across Mohali, Mumbai and Dubai, and the founder still reviews the architecture on every trading engagement."
        aside={
          <aside className="card card--raised stack" style={{ gap: 18 }}>
            <div className="row" style={{ gap: 14 }}>
              <Avatar initials={site.founder.initials} size={54} />
              <div className="stack" style={{ gap: 2 }}>
                <span style={{ fontSize: 17, fontWeight: 600 }}>{site.founder.name}</span>
                <span className="mono">{site.founder.role}</span>
              </div>
            </div>
            <p className="body">
              “I started this firm because I kept being handed systems where nobody had measured
              anything. The whole method follows from that — instrument it first, and be willing to
              say the answer you were not paid to give.”
            </p>
            <hr className="rule" />
            <div className="stack" style={{ gap: 10 }}>
              {site.certifications.map((c) => (
                <span key={c} className="row" style={{ gap: 9, fontSize: 13.5, color: 'var(--ink-3)' }}>
                  <Icon name="check" size={14} strokeWidth={2.4} style={{ color: 'var(--clay)' }} />
                  {c}
                </span>
              ))}
            </div>
          </aside>
        }
      />

      <StatStrip items={stats} />

      {/* ---------- story -------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 22 }}>
              <Pill>Our story</Pill>
              <h2 className="h2">It began with reconciliation work nobody else wanted.</h2>
              <div className="stack" style={{ gap: 18 }}>
                <p style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
                  The first engagement was unglamorous: a broker whose end-of-day obligation files
                  disagreed with the clearing corporation often enough that two people spent every
                  morning finding out why. We fixed it, and then we were asked why the order path was
                  slow, and that question turned into a trading practice.
                </p>
                <p style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
                  The security practice started the same accidental way. A client asked us to test the
                  system we had just built for them, which felt like the wrong people to ask, so we
                  hired testers who had no stake in defending our own code. That separation is still
                  how the practice is run.
                </p>
                <p style={{ fontSize: 16.5, lineHeight: 1.72, color: 'var(--ink-2)' }}>
                  We have never raised outside capital and we have never had a sales team. The work
                  comes from clients who have moved firms and called us from the new one, which is a
                  slower way to grow and a better filter on what we take on.
                </p>
              </div>
            </div>

            <aside className="card card--raised stack" style={{ gap: 22 }}>
              <span className="eyebrow">What we will not do</span>
              <CheckList
                items={[
                  'Quote a fixed price on work nobody has scoped',
                  'Staff an engagement with people we have not worked with',
                  'Deliver a security report without sitting with your engineers to fix it',
                  'Take a project where we think the client is wrong about the problem and will not discuss it',
                  'Build something we cannot hand over',
                ]}
              />
              <hr className="rule" />
              <p className="small">
                This list has cost us work. It is also why our average engagement runs past three
                years.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- values ------------------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <SectionHead
            eyebrow="How we think"
            title="4 principles we are willing to be judged on."
            lede="Every firm publishes values. These are the four that have actually changed a decision we made."
          />
          <div className="grid grid--2">
            {values.map((v) => (
              <article key={v.title} className="card stack" style={{ gap: 16 }}>
                <span className="icon-tile icon-tile--lg">
                  <Icon name={v.icon} size={23} />
                </span>
                <h3 className="h4">{v.title}</h3>
                <p className="small">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- timeline ----------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead eyebrow="Timeline" title="9 years, mostly by accident." />
          <ol className="stack" style={{ gap: 0, margin: 0, padding: 0, listStyle: 'none' }}>
            {timeline.map((t, i) => (
              <li
                key={t.year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '92px 1fr',
                  gap: 28,
                  padding: '26px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === timeline.length - 1 ? '1px solid var(--line)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 24,
                    fontWeight: 500,
                    color: 'var(--clay)',
                    lineHeight: 1.2,
                  }}
                >
                  {t.year}
                </span>
                <span className="stack" style={{ gap: 6 }}>
                  <span style={{ fontSize: 17, fontWeight: 600 }}>{t.title}</span>
                  <span className="body">{t.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- leadership --------------------------------------- */}
      <section className="section section--line-top" style={{ background: 'var(--surface)' }}>
        <div className="shell">
          <SectionHead
            eyebrow="Leadership"
            title="The people who will actually be on your engagement."
            lede="Practice leads here are practitioners. Each of them still does technical work, which is deliberate and occasionally inconvenient for their calendars."
          />
          <div className="grid grid--3">
            {leadership.map((p) => (
              <article key={p.name} className="card stack" style={{ gap: 16 }}>
                <div className="row" style={{ gap: 14 }}>
                  <Avatar initials={p.initials} size={46} />
                  <div className="stack" style={{ gap: 2 }}>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>{p.name}</span>
                    <span style={{ fontSize: 13, color: 'var(--ink-4)' }}>{p.role}</span>
                  </div>
                </div>
                <p className="small">{p.bio}</p>
                <span className="mono" style={{ marginTop: 'auto' }}>
                  {p.focus}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- offices ------------------------------------------ */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Where we are"
            title="3 offices, each there for a reason."
            lede="Mumbai exists because latency work over a VPN is guesswork. Dubai exists because plant-floor engagements need somebody on site the same week."
          />
          <div className="grid grid--3">
            {site.offices.map((o) => (
              <article key={o.city} className="card stack" style={{ gap: 14 }}>
                <span className="icon-tile">
                  <Icon name="pin" size={19} />
                </span>
                <div className="stack" style={{ gap: 3 }}>
                  <h3 className="h4" style={{ fontSize: 18 }}>
                    {o.city}
                  </h3>
                  <span className="mono">{o.label}</span>
                </div>
                <address style={{ fontStyle: 'normal' }} className="small">
                  {o.lines.map((l) => (
                    <span key={l} style={{ display: 'block' }}>
                      {l}
                    </span>
                  ))}
                </address>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- testimonials ------------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <SectionHead eyebrow="References" title="What clients say." align="center" />
          <div className="grid grid--2">
            {testimonials.map((t) => (
              <QuoteCard key={t.company} {...t} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/careers" className="btn btn--ghost">
              We are hiring — see open roles
              <Icon name="arrowRight" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to know whether we are any good?"
        body="Ask us for a reference call with a client in your sector. We will arrange one before you have signed anything."
      />
    </>
  );
}
