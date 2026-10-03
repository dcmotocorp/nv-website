import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { Pill } from '../components/ui';
import { navLinks } from '../data/site';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '68vh',
        display: 'flex',
        alignItems: 'center',
        background:
          'radial-gradient(900px 400px at 15% -10%, rgba(201,100,66,0.07), transparent 70%), var(--cream)',
      }}
    >
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="stack" style={{ gap: 24, maxWidth: '54ch' }}>
          <Pill>Error 404</Pill>
          <h1 className="display">
            That page is not <em className="em-clay">here</em>.
          </h1>
          <p className="lede">
            The address may have changed, or the link that brought you here may be out of date. The
            pages below cover everything on the site.
          </p>
          <div className="row" style={{ gap: 12, marginTop: 8 }}>
            <Link to="/" className="btn btn--primary">
              Back to the home page
              <Icon name="arrowRight" size={16} strokeWidth={2} />
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Report a broken link
            </Link>
          </div>
          <div className="stack" style={{ gap: 14, marginTop: 24 }}>
            <span className="eyebrow">Go to</span>
            <div className="row" style={{ gap: 10 }}>
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="tag"
                  style={{ padding: '8px 14px', fontSize: 13.5, color: 'var(--ink-2)' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
