import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import { site, footerColumns } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)' }}>
      <div className="shell" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="footer-grid">
          <div className="stack" style={{ gap: 18 }}>
            <Logo subtitle="Trading · Cybersecurity · AI" />
            <p className="small" style={{ maxWidth: '34ch' }}>
              {site.promise}
            </p>
            <div className="stack" style={{ gap: 8 }}>
              <a href={`mailto:${site.contact.email}`} className="row" style={{ gap: 8, fontSize: 14, color: 'var(--ink-2)' }}>
                <Icon name="mail" size={15} style={{ color: 'var(--clay)' }} />
                {site.contact.email}
              </a>
              <a href={`tel:${site.contact.phoneHref}`} className="row" style={{ gap: 8, fontSize: 14, color: 'var(--ink-2)' }}>
                <Icon name="phone" size={15} style={{ color: 'var(--clay)' }} />
                {site.contact.phone}
              </a>
            </div>
            <div className="row" style={{ gap: 14 }}>
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="small"
                  style={{ color: 'var(--ink-3)' }}
                  rel="noreferrer"
                  target="_blank"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading} className="stack" style={{ gap: 14 }}>
              <span className="eyebrow">{col.heading}</span>
              <div className="stack" style={{ gap: 10 }}>
                {col.links.map((link) => (
                  <Link
                    key={`${col.heading}-${link.label}`}
                    to={link.to}
                    style={{ fontSize: 14.5, color: 'var(--ink-3)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="stack" style={{ gap: 14, marginTop: 52 }}>
          <span className="eyebrow">Accreditations</span>
          <div className="row" style={{ gap: 10 }}>
            {site.certifications.map((c) => (
              <span key={c} className="tag" style={{ background: 'var(--cream)' }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="stack" style={{ gap: 20, marginTop: 44 }}>
          <hr className="rule" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '14px 32px',
              flexWrap: 'wrap',
            }}
          >
            <div className="row" style={{ gap: '10px 22px', fontSize: 12.5, color: 'var(--ink-4)' }}>
              <span>
                © {year} {site.legalName}
              </span>
              <span>CIN U72900PB2017PTC046512</span>
              <span>GSTIN 03AAJCN4412K1ZQ</span>
            </div>
            <div className="row" style={{ gap: '8px 20px', fontSize: 13 }}>
              <Link to="/contact" style={{ color: 'var(--ink-3)' }}>
                Privacy
              </Link>
              <Link to="/contact" style={{ color: 'var(--ink-3)' }}>
                Terms
              </Link>
              <Link to="/contact" style={{ color: 'var(--ink-3)' }}>
                Responsible disclosure
              </Link>
            </div>
          </div>
          <p style={{ fontSize: 11.5, color: 'var(--ink-5)', letterSpacing: '0.02em' }}>
            Demonstration website. Company details, client names, case studies and metrics shown here are
            illustrative sample content.
          </p>
        </div>
      </div>
    </footer>
  );
}
