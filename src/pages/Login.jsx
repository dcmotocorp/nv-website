import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Logo from '../components/Logo';
import { Pill, FeatureRow } from '../components/ui';
import { site } from '../data/site';

// Standalone screen, rendered without the site header and footer. This is the
// React port of the original design reference, re-skinned for NV Infotech.
export default function Login() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ---------- header ------------------------------------------- */}
      <header style={{ borderBottom: '1px solid var(--line)' }}>
        <div
          className="shell"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <Logo subtitle="Secure client portal" />
          <Link
            to="/"
            className="row"
            style={{ gap: 6, fontSize: 14, fontWeight: 500, color: 'var(--ink-3)' }}
          >
            <Icon name="arrowLeft" size={14} strokeWidth={2} />
            Back to site
          </Link>
        </div>
      </header>

      {/* ---------- main --------------------------------------------- */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div className="shell" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 72,
              alignItems: 'center',
            }}
          >
            {/* left column */}
            <section className="stack" style={{ gap: 28 }}>
              <Pill>Sign in</Pill>
              <h1 className="display">
                Welcome back to your <em className="em-clay">portal</em>.
              </h1>
              <p className="lede" style={{ maxWidth: 520 }}>
                Access your engagement dashboards, SOC alert queue, delivery reports and audit
                evidence packs. Need an account? Your delivery lead can issue one.
              </p>
              <div className="stack" style={{ gap: 22, marginTop: 8 }}>
                <FeatureRow
                  icon="gauge"
                  title="Live delivery and service dashboards"
                  body="Sprint status, SLO burn, open defects and change calendar for every active engagement — the same view your delivery lead sees."
                />
                <FeatureRow
                  icon="shield"
                  title="SOC alerts and incident timeline"
                  body="Detections, containment actions and analyst notes in one queue, with the full forensic timeline for anything escalated."
                />
                <FeatureRow
                  icon="file"
                  title="Audit evidence, ready to file"
                  body="ISO 27001, SOC 2, PCI DSS and CERT-In artefacts assembled as we go, downloadable with their chain of custody intact."
                />
              </div>
            </section>

            {/* right column — form card */}
            <section
              className="card"
              style={{
                padding: 36,
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              <div className="stack" style={{ gap: 10 }}>
                <h2
                  style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 500,
                    fontSize: 30,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  Sign in to {site.name}
                </h2>
                <p className="small" style={{ fontSize: 15 }}>
                  No account yet? <Link to="/contact" style={{ fontWeight: 500 }}>Ask your delivery lead</Link> or{' '}
                  <Link to="/services" style={{ fontWeight: 500 }}>see what we do</Link>.
                </p>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="row"
                  style={{
                    gap: 10,
                    alignItems: 'flex-start',
                    padding: '14px 16px',
                    borderRadius: 10,
                    background: 'var(--clay-tint)',
                    border: '1px solid var(--clay-line)',
                  }}
                >
                  <Icon name="lock" size={15} strokeWidth={2} style={{ color: 'var(--clay-darker)', marginTop: 2 }} />
                  <span style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--clay-darker)' }}>
                    This is a demonstration build with no authentication backend, so no credentials
                    were transmitted or checked.
                  </span>
                </div>
              )}

              <form
                className="stack"
                style={{ gap: 20 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="field">
                  <span className="field__label">
                    Work email <span className="field__req">*</span>
                  </span>
                  <input
                    className="input"
                    type="email"
                    required
                    autoComplete="username"
                    defaultValue="demo.client@nvinfotech.in"
                  />
                </label>

                <div className="field">
                  <div
                    className="row"
                    style={{ justifyContent: 'space-between', gap: 12 }}
                  >
                    <span className="field__label">
                      Password <span className="field__req">*</span>
                    </span>
                    <Link
                      to="/contact"
                      style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div style={{ position: 'relative', display: 'flex' }}>
                    <input
                      className="input"
                      type={show ? 'text' : 'password'}
                      required
                      autoComplete="current-password"
                      defaultValue="demoportal1"
                      style={{ paddingRight: 46, letterSpacing: show ? 'normal' : '0.08em' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShow((v) => !v)}
                      aria-label={show ? 'Hide password' : 'Show password'}
                      style={{
                        position: 'absolute',
                        right: 6,
                        top: 6,
                        width: 36,
                        height: 36,
                        border: 'none',
                        background: 'transparent',
                        borderRadius: 8,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--ink-4)',
                      }}
                    >
                      <Icon name="eye" size={18} />
                    </button>
                  </div>
                </div>

                <label className="row" style={{ gap: 9 }}>
                  <input
                    type="checkbox"
                    style={{ width: 15, height: 15, accentColor: 'var(--clay)' }}
                  />
                  <span className="small" style={{ fontSize: 13.5 }}>
                    Keep me signed in on this device for 12 hours
                  </span>
                </label>

                <button type="submit" className="btn btn--primary" style={{ height: 50, marginTop: 4 }}>
                  Sign in
                  <Icon name="arrowRight" size={16} strokeWidth={2} />
                </button>
              </form>

              <div
                className="row"
                style={{ gap: 8, alignItems: 'flex-start', paddingTop: 4, color: 'var(--ink-4)', flexWrap: 'nowrap' }}
              >
                <Icon name="lock" size={13} strokeWidth={2} style={{ marginTop: 2 }} />
                <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1.6 }}>
                  ENCRYPTED IN TRANSIT · ARGON2 PASSWORD HASHING · MFA ENFORCED
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ---------- footer ------------------------------------------- */}
      <footer style={{ borderTop: '1px solid var(--line)' }}>
        <div
          className="shell"
          style={{
            paddingTop: 22,
            paddingBottom: 22,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px 32px',
            flexWrap: 'wrap',
          }}
        >
          <div
            className="row"
            style={{
              gap: '12px 24px',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: 'var(--ink-4)',
            }}
          >
            <span>ISO 27001 · SOC 2 TYPE II</span>
            <span>ROLE-BASED ACCESS · FULL AUDIT TRAIL</span>
          </div>
          <div className="row" style={{ gap: '8px 20px', fontSize: 13, color: 'var(--ink-3)' }}>
            <span>© {new Date().getFullYear()} {site.name}</span>
            <Link to="/contact" style={{ color: 'var(--ink-3)' }}>
              Privacy
            </Link>
            <Link to="/contact" style={{ color: 'var(--ink-3)' }}>
              Terms
            </Link>
            <a href={`mailto:${site.contact.email}`} style={{ color: 'var(--ink-3)' }}>
              {site.contact.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
