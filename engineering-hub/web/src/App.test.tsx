import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { NAV_ITEMS, ONE_CLICK } from './nav';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('AppShell navigation', () => {
  it('renders every primary nav link plus the One-Click Deployment pill', () => {
    renderAt('/');
    const nav = screen.getByRole('navigation', { name: /primary/i });
    for (const item of NAV_ITEMS) {
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument();
    }
    // The One-Click Deployment pill lives in the header/banner (there may be
    // other links to the same route elsewhere on the page, e.g. a capability tile).
    const banner = screen.getByRole('banner');
    expect(within(banner).getByRole('link', { name: ONE_CLICK.label })).toHaveAttribute(
      'href',
      ONE_CLICK.to,
    );
  });

  it('exposes semantic landmarks (banner, nav, main, contentinfo)', () => {
    renderAt('/');
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('does not link to the separate AICC Unified Center application', () => {
    renderAt('/');
    expect(screen.queryByRole('link', { name: /unified center/i })).not.toBeInTheDocument();
  });
});

describe('routing', () => {
  const cases: Array<{ path: string; heading: RegExp }> = [
    { path: '/', heading: /AICC Engineering Hub/i },
    { path: '/engagement-model', heading: /Engagement Framework/i },
    { path: '/agentic-engineering', heading: /Agentic Engineering & Factor AI/i },
    { path: '/architectures', heading: /Reference Architectures/i },
    { path: '/accelerators', heading: /Accelerators/i },
    { path: '/knowledge-base', heading: /Knowledge Base/i },
    { path: '/one-click-deployment', heading: /One-Click\s+Deployment/i },
    { path: '/ai-dlc-explorer', heading: /AI-DLC Evidence Explorer/i },
  ];

  for (const c of cases) {
    it(`renders the H1 for ${c.path}`, () => {
      renderAt(c.path);
      expect(screen.getByRole('heading', { level: 1, name: c.heading })).toBeInTheDocument();
    });
  }

  it('renders a not-found page for unknown routes', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1, name: /Page not found/i })).toBeInTheDocument();
  });
});

describe('active nav highlighting', () => {
  it('marks the current route link active', () => {
    renderAt('/architectures');
    const nav = screen.getByRole('navigation', { name: /primary/i });
    const link = within(nav).getByRole('link', { name: 'Architectures' });
    expect(link).toHaveClass('active');
    // The home link should not be active when on another route.
    expect(within(nav).getByRole('link', { name: 'Engineering Hub' })).not.toHaveClass('active');
  });
});
