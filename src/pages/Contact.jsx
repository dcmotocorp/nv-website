import { useState } from 'react';
import Icon from '../components/Icon';
import { PageHero, Pill, CheckList } from '../components/ui';
import { site } from '../data/site';
import { services } from '../data/services';

const budgets = [
  'Not sure yet',
  'Under ₹25 lakh',
  '₹25–75 lakh',
  '₹75 lakh – 2 crore',
  'Over ₹2 crore',
  'Retainer / managed service',
];

const routes = [
  {
    icon: 'briefcase',
    title: 'New business',
    body: 'Scoping a project, asking for a proposal, or wanting a reference call before you commit.',
    contact: site.contact.salesEmail,
    note: 'Reply inside one working day',
  },
  {
    icon: 'shield',
    title: 'Security incident',
    body: 'Active incident on an estate we manage, or an organisation that needs response help now.',
    contact: site.contact.soc,
    note: '24×7 · four-hour engagement SLA',
    urgent: true,
  },
  {
    icon: 'lock',
    title: 'Responsible disclosure',
    body: 'Found a vulnerability in something we built or run? Tell us and we will acknowledge within 48 hours.',
    contact: site.contact.securityEmail,
    note: 'PGP key available on request',
  },
  {
    icon: 'users',
    title: 'Careers',
    body: 'Applying for a role, or sending something you have built without a role in mind.',
    contact: site.contact.careersEmail,
    note: 'Every application gets a response',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Static build — no backend. The form validates, then shows a confirmation
  // panel with the mailto fallback so the page is honest about what happened.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what is not working."
        lede="You will get an engineer on the first call, not a qualification script. If we are the wrong firm for your problem we will say so and, where we can, point you at who is right."
      />

      <section className="section">
        <div className="shell">
          <div className="split">
            {/* ---------- form -------------------------------------- */}
            <div className="card card--raised stack" style={{ gap: 26, padding: 'clamp(26px, 4vw, 40px)' }}>
              {sent ? (
                <div className="stack" style={{ gap: 18 }}>
                  <span className="icon-tile icon-tile--lg">
                    <Icon name="check" size={24} strokeWidth={2.2} />
                  </span>
                  <h2 className="h3">Form validated — but this is a demonstration site.</h2>
                  <p className="body">
                    There is no backend attached to this build, so nothing was transmitted. On a live
                    deployment this would post to our CRM and acknowledge within one working day.
                  </p>
                  <p className="body">
                    To reach us for real, email{' '}
                    <a href={`mailto:${site.contact.salesEmail}`}>{site.contact.salesEmail}</a> or call{' '}
                    <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>.
                  </p>
                  <button type="button" className="btn btn--ghost" style={{ width: 'fit-content' }} onClick={() => setSent(false)}>
                    <Icon name="arrowLeft" size={15} strokeWidth={2} />
                    Back to the form
                  </button>
                </div>
              ) : (
                <>
                  <div className="stack" style={{ gap: 10 }}>
                    <h2 className="h3">Start a conversation</h2>
                    <p className="small">
                      Everything except the message is optional if you would rather keep it brief. We
                      sign an NDA before the first technical session as a matter of course.
                    </p>
                  </div>

                  <form onSubmit={onSubmit} className="stack" style={{ gap: 20 }}>
                    <div className="grid grid--pair" style={{ gap: 18 }}>
                      <label className="field">
                        <span className="field__label">
                          Your name <span className="field__req">*</span>
                        </span>
                        <input className="input" type="text" name="name" required autoComplete="name" placeholder="Navdeep Sharma" />
                      </label>
                      <label className="field">
                        <span className="field__label">
                          Work email <span className="field__req">*</span>
                        </span>
                        <input className="input" type="email" name="email" required autoComplete="email" placeholder="you@company.com" />
                      </label>
                    </div>

                    <div className="grid grid--pair" style={{ gap: 18 }}>
                      <label className="field">
                        <span className="field__label">Company</span>
                        <input className="input" type="text" name="company" autoComplete="organization" placeholder="Company name" />
                      </label>
                      <label className="field">
                        <span className="field__label">Phone</span>
                        <input className="input" type="tel" name="phone" autoComplete="tel" placeholder="+91" />
                      </label>
                    </div>

                    <div className="grid grid--pair" style={{ gap: 18 }}>
                      <label className="field">
                        <span className="field__label">What is this about?</span>
                        <select className="select" name="service" defaultValue="">
                          <option value="">Select a practice</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.name}
                            </option>
                          ))}
                          <option value="other">Something else</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">Indicative budget</span>
                        <select className="select" name="budget" defaultValue="Not sure yet">
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <label className="field">
                      <span className="field__label">
                        What is going wrong? <span className="field__req">*</span>
                      </span>
                      <textarea
                        className="textarea"
                        name="message"
                        required
                        placeholder="The symptom is more useful to us than a proposed solution. What breaks, how often, and who notices?"
                      />
                    </label>

                    <label className="row" style={{ gap: 10, alignItems: 'flex-start' }}>
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        style={{ width: 16, height: 16, marginTop: 3, accentColor: 'var(--clay)' }}
                      />
                      <span className="small">
                        I agree to NV Infotech storing these details to respond to my enquiry, in line
                        with the DPDP Act 2023. <span className="field__req">*</span>
                      </span>
                    </label>

                    <button type="submit" className="btn btn--primary" style={{ height: 50 }}>
                      Send enquiry
                      <Icon name="arrowRight" size={16} strokeWidth={2} />
                    </button>

                    <div className="row" style={{ gap: 8, color: 'var(--ink-4)', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
                      <Icon name="lock" size={13} strokeWidth={2} />
                      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em' }}>
                        ENCRYPTED IN TRANSIT · NOT SHARED WITH THIRD PARTIES
                      </span>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* ---------- routes & offices --------------------------- */}
            <aside className="stack" style={{ gap: 20 }}>
              {routes.map((r) => (
                <article
                  key={r.title}
                  className="card stack"
                  style={{
                    gap: 12,
                    padding: 24,
                    borderColor: r.urgent ? 'var(--clay-line)' : 'var(--line)',
                    background: r.urgent ? 'var(--cream)' : 'var(--surface)',
                  }}
                >
                  <div className="row" style={{ gap: 12 }}>
                    <span className="icon-tile" style={{ width: 36, height: 36 }}>
                      <Icon name={r.icon} size={17} />
                    </span>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>{r.title}</span>
                  </div>
                  <p className="small">{r.body}</p>
                  <a
                    href={r.contact.includes('@') ? `mailto:${r.contact}` : `tel:${r.contact.replace(/\s/g, '')}`}
                    style={{ fontSize: 14.5, fontWeight: 600 }}
                  >
                    {r.contact}
                  </a>
                  <span className="mono">{r.note}</span>
                </article>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- offices ------------------------------------------ */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <div className="stack" style={{ gap: 18, marginBottom: 40 }}>
            <Pill>Offices</Pill>
            <h2 className="h2">Three places you can turn up.</h2>
          </div>
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
                <address className="small" style={{ fontStyle: 'normal' }}>
                  {o.lines.map((l) => (
                    <span key={l} style={{ display: 'block' }}>
                      {l}
                    </span>
                  ))}
                </address>
              </article>
            ))}
          </div>

          <div className="split" style={{ marginTop: 56 }}>
            <div className="stack" style={{ gap: 18 }}>
              <h3 className="h3">What happens after you write</h3>
              <CheckList
                items={[
                  'An engineer from the relevant practice reads it — not a sales inbox',
                  'A reply inside one working day, even if the answer is that we are not a fit',
                  'A 30-minute call to understand the problem, with no deck',
                  'NDA signed before any technical detail is exchanged',
                  'A written summary of what we understood, so you can correct us',
                ]}
              />
            </div>
            <div className="card stack" style={{ gap: 16 }}>
              <span className="eyebrow">Office hours</span>
              <div className="stack" style={{ gap: 12 }}>
                <div className="row" style={{ gap: 10, justifyContent: 'space-between' }}>
                  <span className="small">Monday to Friday</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>09:30 – 18:30 IST</span>
                </div>
                <hr className="rule" />
                <div className="row" style={{ gap: 10, justifyContent: 'space-between' }}>
                  <span className="small">Saturday</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>By appointment</span>
                </div>
                <hr className="rule" />
                <div className="row" style={{ gap: 10, justifyContent: 'space-between' }}>
                  <span className="small">SOC &amp; incident line</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--clay-darker)' }}>
                    24×7, all year
                  </span>
                </div>
              </div>
              <hr className="rule" />
              <p className="small">
                Trading-system support follows market hours plus a two-hour window either side, with
                expiry-day cover extended by agreement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
