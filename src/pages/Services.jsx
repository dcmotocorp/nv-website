import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { SectionHead, CtaBand, CheckList, Pill } from '../components/ui';
import { services } from '../data/services';
import { process } from '../data/company';
import './services.css';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

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

function ServiceRow({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="svc-row">
      <span className="icon-tile svc-row__icon">
        <Icon name={service.icon} size={20} />
      </span>

      <span className="svc-row__head">
        <span className="svc-row__name">{service.name}</span>
      </span>

      <Icon name="arrowRight" size={16} strokeWidth={2} className="svc-row__arrow" />

      <span className="svc-row__body">
        <span className="svc-row__desc">{service.short}</span>
        <ul className="svc-row__caps">
          {service.capabilities.map((c) => (
            <li key={c.title}>{c.title}</li>
          ))}
        </ul>
      </span>
    </Link>
  );
}

export default function Services() {
  return (
    <>
      {/* ---------- compact intro, so the list starts high ------------ */}
      <section className="svc-intro banner">
        <div className="banner__media">
          <img src={asset('img/banner/page.jpg')} alt="" fetchpriority="high" />
        </div>
        <div className="shell svc-intro__inner">
          <div className="svc-intro__copy">
            <Pill>Services</Pill>
            <h1 className="h2">Everything we do, on one page.</h1>
            <p className="body">
              9 practices and the capabilities inside each. Most engagements use two or three
              together, because that is how the problems arrive.
            </p>
          </div>
          <div className="row" style={{ gap: 12 }}>
            <Link to="/contact" className="btn btn--primary">
              Describe your problem
              <Icon name="arrowRight" size={16} strokeWidth={2} />
            </Link>
            <Link to="/projects" className="btn btn--ghost">
              See the work
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- the directory ------------------------------------- */}
      <section className="section--tight">
        <div className="shell">
          <span className="eyebrow" style={{ display: 'block', marginBottom: 20 }}>
            All practices
          </span>
          <div className="svc-index">
            {services.map((s) => (
              <ServiceRow key={s.slug} service={s} />
            ))}
          </div>
          <p className="small" style={{ marginTop: 22 }}>
            Not sure which one your problem belongs to? Describe the symptom — a slow order path, a
            failed audit, a model that never shipped — and{' '}
            <Link to="/contact">we will tell you what it usually turns out to be</Link>.
          </p>
        </div>
      </section>

      {/* ---------- engagement models --------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <SectionHead
            eyebrow="How we engage"
            title="5 shapes of contract, chosen to fit the risk."
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
