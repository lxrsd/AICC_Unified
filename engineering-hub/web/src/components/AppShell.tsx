import { useState, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import { NAV_ITEMS, ONE_CLICK } from '../nav';

/**
 * Shared chrome for every Engineering Hub page: the sticky top navigation and a
 * footer. Header layout matches the reference exactly, left to right:
 *   AICC logo | Engineering Hub · Engagement Model · Agentic Engineering ·
 *   Architectures · Accelerators · Knowledge Base · [One-Click Deployment] · user
 * The AICC logo stands alone — there is intentionally NO second "Engineering
 * Hub" brand label beside it; "Engineering Hub" exists once, as the home tab.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  const closeMenu = () => setOpen(false);

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__inner">
          <Link to="/" className="brand__word" aria-label="AICC Engineering Hub home" onClick={closeMenu}>
            AICC
          </Link>
          <span className="brand__divider" aria-hidden="true" />

          <nav className="mainnav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="topbar__right">
            <Link to={ONE_CLICK.to} className="btn btn--pill">
              {ONE_CLICK.label}
            </Link>
            <span className="avatar" aria-label="Account">
              <User size={22} aria-hidden="true" />
            </span>
            <button
              className="nav-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mobilenav" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={ONE_CLICK.to} className="btn btn--pill" onClick={closeMenu}>
              {ONE_CLICK.label}
            </Link>
          </nav>
        )}
      </header>

      <main key={location.pathname}>{children}</main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>AICC Engineering Hub — Build faster with proven solutions and reusable assets.</span>
          <span>A separate application from the AICC Unified Center.</span>
        </div>
      </footer>
    </div>
  );
}
