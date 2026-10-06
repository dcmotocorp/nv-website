import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHero, SectionHead, CtaBand, Pill, CheckList } from '../components/ui';
import { IndustryCard, ProjectCard } from '../components/cards';
import { industries } from '../data/company';
import { projects } from '../data/projects';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

const regulations = [
  {
    body: 'SEBI',
    items: ['Cyber Security & Cyber Resilience Framework (CSCRF)', 'System audit for market intermediaries', 'Algorithmic trading approval documentation'],
  },
  {
    body: 'RBI',
    items: ['Cyber security framework for banks and NBFCs', 'IT governance and outsourcing directions', 'Incident reporting timelines'],
  },
  {
    body: 'CERT-In',
    items: ['Six-hour incident notification', 'Empanelled audit reports for filing', 'Log retention directions'],
  },
  {
    body: 'Data & privacy',
    items: ['Digital Personal Data Protection Act 2023', 'Consent artefacts and subject-request workflows', 'Retention and erasure engineering'],
  },
  {
    body: 'International',
    items: ['ISO/IEC 27001:2022 and SOC 2 Type II', 'PCI DSS 4.0 for card environments', 'IEC 62443-informed OT segmentation'],
  },
];

export default function Industries() {
  return (
    <>
      <PageHero
        image={asset('img/banner/page.jpg')}
        imageAlt=""
        eyebrow="Industries"
        title="We work best where mistakes are named in a statute."
        lede="Six sectors where downtime is measured, data is regulated and somebody has to sign the audit. The constraints are what make the engineering interesting."
        aside={
          <aside className="card card--raised stack" style={{ gap: 16 }}>
            <span className="eyebrow">Sector coverage</span>
            <div className="stack" style={{ gap: 11 }}>
              {industries.map((ind) => (
                <span key={ind.name} className="row" style={{ gap: 10, fontSize: 14.5, color: 'var(--ink-2)' }}>
                  <Icon name={ind.icon} size={16} style={{ color: 'var(--clay)' }} />
                  {ind.name}
                </span>
              ))}
            </div>
            <hr className="rule" />
            <p className="small">
              Not listed? We have taken on single engagements in education, media and public sector.
              Ask — we will tell you honestly whether we have the domain depth.
            </p>
          </aside>
        }
      />

      <section className="section">
        <div className="shell">
          <div className="grid grid--3">
            {industries.map((ind) => (
              <IndustryCard key={ind.name} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- regulatory ---------------------------------------- */}
      <section className="section section--sunk section--line-top">
        <div className="shell">
          <div className="split">
            <div className="stack" style={{ gap: 22 }}>
              <Pill>Regulatory ground</Pill>
              <h2 className="h2">The frameworks we deliver against, routinely.</h2>
              <p className="lede">
                Compliance is not a separate workstream we subcontract. Our auditors sit in the same
                firm as the engineers who have to satisfy them, which shortens the argument
                considerably.
              </p>
              <CheckList
                items={[
                  'CERT-In empanelled — our audit reports are filed directly',
                  'PCI DSS 4.0 assessments through a QSA partnership',
                  'Evidence packs assembled during delivery, not reconstructed afterwards',
                  'Board-level reporting written for a non-technical audience',
                ]}
              />
            </div>
            <div className="stack" style={{ gap: 14 }}>
              {regulations.map((r) => (
                <article key={r.body} className="card stack" style={{ gap: 12, padding: 22 }}>
                  <span className="eyebrow" style={{ color: 'var(--clay-darker)' }}>
                    {r.body}
                  </span>
                  <ul className="stack" style={{ gap: 7, margin: 0, padding: 0, listStyle: 'none' }}>
                    {r.items.map((i) => (
                      <li key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                        <Icon
                          name="check"
                          size={13}
                          strokeWidth={2.4}
                          style={{ color: 'var(--clay)', marginTop: 4 }}
                        />
                        <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink-3)' }}>{i}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- sector work --------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Sector work"
            title="Engagements by industry."
            lede="A sample across capital markets, banking, insurance, logistics, manufacturing and retail."
            action={
              <Link to="/projects" className="btn btn--ghost btn--sm">
                All case studies
                <Icon name="arrowRight" size={15} strokeWidth={2} />
              </Link>
            }
          />
          <div className="grid grid--3">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Does your sector have a constraint we have not met?"
        body="Possibly, and we would rather find out on a call than three months into a contract. Tell us what regulator you answer to and what breaks."
        secondary={{ to: '/services', label: 'Browse services' }}
      />
    </>
  );
}
