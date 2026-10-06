import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHero, SectionHead, CtaBand, Pill, CheckList, StatStrip } from '../components/ui';
import { openings, perks } from '../data/company';
import { site } from '../data/site';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const hiringSteps = [
  { step: '01', title: 'A conversation, not a screen', body: 'Thirty minutes with the practice lead you would work for. You will hear what the role actually involves, including the parts that are tedious.' },
  { step: '02', title: 'A technical session', body: 'A problem close to our real work, discussed together. No whiteboard algorithms and no take-home longer than three hours — if we ask for one, we pay for it.' },
  { step: '03', title: 'Meet the team', body: 'Two or three people you would sit with, with time reserved for your questions rather than ours.' },
  { step: '04', title: 'Offer, with the band shown', body: 'We tell you the level, the band and where in it you land, and why. The number is not a negotiation performance.' },
];

const teamStats = [
  { value: '140', label: 'People across three offices', note: 'Engineers, analysts, SOC, design' },
  { value: '4.4 yrs', label: 'Median tenure', note: 'Unusual for our sector' },
  { value: '₹80k', label: 'Annual learning budget', note: 'Per person, plus four days a quarter' },
  { value: '31%', label: 'Women in technical roles', note: 'Target is 40% by 2028' },
];

export default function Careers() {
  return (
    <>
      <PageHero
        image={asset('img/banner/careers.jpg')}
        imageAlt="Engineers working together"
        eyebrow="Careers"
        title="Hard problems, honest hours, published bands."
        lede="We hire people who want to work on systems where correctness is measurable. In exchange: paid on-call, a published promotion ladder, and managers who were engineers recently enough to remember."
        aside={
          <aside className="card card--raised stack" style={{ gap: 16 }}>
            <span className="eyebrow">Open roles</span>
            <div className="stack" style={{ gap: 11 }}>
              {openings.map((o) => (
                <a
                  key={o.title}
                  href={`#${o.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="row"
                  style={{ gap: 9, fontSize: 14, color: 'var(--ink-2)' }}
                >
                  <Icon name="arrowRight" size={14} style={{ color: 'var(--clay)' }} />
                  {o.title}
                </a>
              ))}
            </div>
            <hr className="rule" />
            <p className="small">
              Nothing fits? Send us something you have built and tell us what you want to work on.
            </p>
            <a href={`mailto:${site.contact.careersEmail}`} className="btn btn--ghost btn--sm btn--block">
              {site.contact.careersEmail}
            </a>
          </aside>
        }
      />

      <StatStrip items={teamStats} />

      {/* ---------- why here ------------------------------------------ */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 22 }}>
              <Pill>Why here</Pill>
              <h2 className="h2">A consultancy that behaves like a product company.</h2>
              <p className="lede">
                Most of our engagements run for years, so you own systems rather than renting them for
                a quarter. You will be on the pager for what you build, which is the fastest way we
                know to learn how to build it well.
              </p>
              <CheckList
                items={[
                  'You own a component end to end, including its operational behaviour',
                  'Code review is a real conversation, not a rubber stamp on a deadline',
                  'Research Fridays every fortnight — several internal tools started there',
                  'Nobody is billed at 100% utilisation; slack is budgeted deliberately',
                  'Promotion criteria and salary bands are written down and reviewed twice a year',
                ]}
              />
            </div>
            <div className="grid" style={{ gap: 14 }}>
              {perks.map((p) => (
                <article key={p.title} className="card stack" style={{ gap: 7, padding: 22 }}>
                  <span style={{ fontSize: 15.5, fontWeight: 600 }}>{p.title}</span>
                  <span className="small">{p.body}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- openings ----------------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <SectionHead
            eyebrow="Open positions"
            title="6 roles open right now."
            lede="Every one of these is a genuine vacancy with a start date. We do not post roles to collect résumés."
          />
          <div className="stack" style={{ gap: 16 }}>
            {openings.map((o) => (
              <article
                key={o.title}
                id={o.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="card stack"
                style={{ gap: 20, scrollMarginTop: 100 }}
              >
                <div
                  className="row"
                  style={{ justifyContent: 'space-between', gap: 20, alignItems: 'flex-start' }}
                >
                  <div className="stack" style={{ gap: 10 }}>
                    <h3 className="h4" style={{ fontSize: 19 }}>
                      {o.title}
                    </h3>
                    <div className="row" style={{ gap: 8 }}>
                      <span className="tag" style={{ background: 'var(--cream)' }}>
                        {o.team}
                      </span>
                      <span className="tag" style={{ background: 'var(--cream)' }}>
                        <Icon name="pin" size={12} style={{ marginRight: 5 }} />
                        {o.location}
                      </span>
                      <span className="tag" style={{ background: 'var(--cream)' }}>
                        {o.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${site.contact.careersEmail}?subject=${encodeURIComponent(
                      `Application — ${o.title}`
                    )}`}
                    className="btn btn--primary btn--sm"
                  >
                    Apply
                    <Icon name="arrowRight" size={15} strokeWidth={2} />
                  </a>
                </div>
                <p className="body">{o.about}</p>
                <div className="stack" style={{ gap: 10 }}>
                  <span className="eyebrow">What we are looking for</span>
                  <ul className="stack" style={{ gap: 8, margin: 0, padding: 0, listStyle: 'none' }}>
                    {o.looking.map((l) => (
                      <li key={l} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <Icon
                          name="check"
                          size={14}
                          strokeWidth={2.4}
                          style={{ color: 'var(--clay)', marginTop: 4 }}
                        />
                        <span className="small">{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- hiring process ----------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Hiring process"
            title="4 steps, 2 weeks, no surprises."
            lede="You will know where you stand after every stage. If we decide against, you get a reason rather than silence."
          />
          <div className="grid grid--4">
            {hiringSteps.map((s) => (
              <article key={s.step} className="stack" style={{ gap: 10 }}>
                <span className="mono" style={{ color: 'var(--clay)', fontWeight: 500 }}>
                  {s.step}
                </span>
                <span style={{ fontSize: 16.5, fontWeight: 600 }}>{s.title}</span>
                <span className="small">{s.body}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Apply"
        title="Send us something you have built."
        body="A repository, a write-up, a bug you found. It tells us more than a résumé and it is the fastest route into a conversation here."
        primary={{ to: '/contact', label: 'Get in touch' }}
        secondary={{ to: '/about', label: 'Meet the team' }}
      />
    </>
  );
}
