import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import { navLinks, site } from '../data/site';
import './header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-head${scrolled ? ' site-head--scrolled' : ''}`}>
      <div className="site-head__bar shell">
        <Logo />

        <nav className="site-head__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `site-head__link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-head__actions">
          <Link to="/login" className="btn btn--ghost btn--sm">
            <Icon name="lock" size={15} />
            Client login
          </Link>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Start a conversation
          </Link>
        </div>

        <button
          type="button"
          className="site-head__burger"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger${open ? ' burger--open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-nav" className={`site-head__sheet${open ? ' is-open' : ''}`} hidden={!open}>
        <div className="shell site-head__sheet-inner">
          <nav aria-label="Mobile" className="stack" style={{ gap: 2 }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `site-head__sheet-link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
                <Icon name="arrowRight" size={16} />
              </NavLink>
            ))}
          </nav>
          <hr className="rule" />
          <div className="stack" style={{ gap: 10 }}>
            <Link to="/contact" className="btn btn--primary btn--block">
              Start a conversation
            </Link>
            <Link to="/login" className="btn btn--ghost btn--block">
              <Icon name="lock" size={15} />
              Client login
            </Link>
          </div>
          <div className="stack" style={{ gap: 6 }}>
            <a className="small" href={`tel:${site.contact.phoneHref}`} style={{ color: 'var(--ink-3)' }}>
              {site.contact.phone}
            </a>
            <a className="small" href={`mailto:${site.contact.email}`} style={{ color: 'var(--ink-3)' }}>
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
