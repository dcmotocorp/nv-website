import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHero, SectionHead, CtaBand, CheckList, Pill } from '../components/ui';
import { ServiceCard } from '../components/cards';
import { services } from '../data/services';
import { process } from '../data/company';

const engagementModels = [
  {
    icon: 'target',
    title: 'Discovery sprint',
    price: 'Fixed price · 2–3 weeks',
    body: 'We instrument what exists, interview the people who use it and produce a scoped first release with an honest estimate range. Ends with a go or no-go, and either is a valid outcome.',
    best: 'Best when the problem is clear but the solution is not.',
  },
  {
    icon: 'users',
    title: 'Embedded squad',
    price: 'Monthly capacity · 3 months minimum',
    body: 'A cross-functional team — engineers, a designer, a delivery lead — working in your repository against your roadmap, with a scoped release commitment each cycle.',
    best: 'Best for sustained product or platform work.',
  },
  {
    icon: 'shield',
    title: 'Managed service',
    price: 'Annual · SLA-backed',
    body: 'We run it: SOC monitoring, platform operations or trading-system support, with named engineers, defined response times and a monthly service review.',
    best: 'Best when the system is live and the risk is operational.',
  },
  {
    icon: 'globe',
    title: 'Dedicated pod or GCC',
    price: 'Annual · 12 people and up',
    body: 'A standing squad, or a full captive centre with entity, hiring and compliance handled — run to our engineering standards, with a build-operate-transfer path if you want it to become yours.',
    best: 'Best when the work is permanent and you want to own the capability.',
  },
  {
    icon: 'file',
    title: 'Assessment & audit',
    price: 'Fixed price · 1–4 weeks',
    body: 'Latency audits, penetration tests, cloud posture reviews, CERT-In audits and compliance gap assessments, delivered with findings sequenced by exploitability.',
    best: 'Best when you need an independent answer on the record.',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering for systems that are measured."
        lede="Nine practices covering the trading floor, the watch floor, the delivery centre and everything that feeds them. Most engagements use two or three together, because that is how the problems arrive."
        aside={
          <aside className="card card--raised stack" style={{ gap: 16 }}>
            <span className="eyebrow">Start here</span>
            <p className="body">
              Not sure which of these you need? Describe the symptom — a slow order path, a failed
              audit, a model that never shipped — and we will tell you what it usually turns out to be.
            </p>
            <Link to="/contact" className="btn btn--primary btn--block">
              Describe your problem
              <Icon name="arrowRight" size={16} strokeWidth={2} />
            </Link>
            <hr className="rule" />
            <div className="stack" style={{ gap: 10 }}>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="row"
                  style={{ gap: 9, fontSize: 14, color: 'var(--ink-2)' }}
                >
                  <Icon name={s.icon} size={15} style={{ color: 'var(--clay)' }} />
                  {s.name}
                </Link>
              ))}
            </div>
          </aside>
        }
      />

      <section className="section">
        <div className="shell">
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- engagement models --------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <SectionHead
            eyebrow="How we engage"
            title="Four shapes of contract, chosen to fit the risk."
            lede="We do not quote fixed-price delivery for work nobody has scoped yet. The model follows how much is genuinely unknown."
          />
          <div className="grid grid--2">
            {engagementModels.map((m) => (
              <article key={m.title} className="card stack" style={{ gap: 16 }}>
                <div className="row" style={{ gap: 14 }}>
                  <span className="icon-tile">
                    <Icon name={m.icon} size={20} />
                  </span>
                  <span className="stack" style={{ gap: 2 }}>
                    <span style={{ fontSize: 17, fontWeight: 600 }}>{m.title}</span>
                    <span className="mono">{m.price}</span>
                  </span>
                </div>
                <p className="small">{m.body}</p>
                <p
                  style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: 'var(--clay-darker)',
                    marginTop: 'auto',
                  }}
                >
                  {m.best}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- process ------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 22 }}>
              <Pill>Delivery</Pill>
              <h2 className="h2">The same five steps, whatever the practice.</h2>
              <p className="lede">
                A SOC onboarding and a trading-platform build look nothing alike in detail and run on
                an identical spine. It is the part of our method we are least willing to negotiate.
              </p>
              <CheckList
                items={[
                  'Weekly written status, including the things going badly',
                  'Architecture decisions recorded, with the rejected options and why',
                  'Code in your repository from day one — no delivery-day transfer',
                  'Security review and accessibility audit as release gates',
                ]}
              />
            </div>
            <ol className="stack" style={{ gap: 0, margin: 0, padding: 0, listStyle: 'none' }}>
              {process.map((p, i) => (
                <li
                  key={p.step}
                  style={{
                    display: 'flex',
                    gap: 20,
                    padding: '22px 0',
                    borderBottom: i < process.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <span className="mono" style={{ color: 'var(--clay)', fontWeight: 500, paddingTop: 3 }}>
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

      <CtaBand
        title="Which practice does your problem belong to?"
        body="Often more than one, and occasionally none of them. A 30-minute call with the practice lead will tell you which — and whether we are the right firm at all."
        secondary={{ to: '/industries', label: 'See industries we serve' }}
      />
    </>
  );
}
