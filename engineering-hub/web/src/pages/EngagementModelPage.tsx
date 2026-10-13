import {
  Users,
  Share2,
  Crosshair,
  FileText,
  Lightbulb,
  Settings,
  Send,
  BarChart3,
  ArrowRight,
  Check,
  User,
  Layers,
  ListChecks,
  CheckSquare,
  ChevronRight,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-engagement.png';

const journey = [
  { title: 'Intake', caption: 'Capture opportunity', icon: Crosshair, wave: 'wave--lilac' },
  { title: 'Define', caption: 'Understand the problem', icon: FileText, wave: 'wave--pink' },
  { title: 'Shape', caption: 'Design the approach', icon: Lightbulb, wave: 'wave--mint' },
  { title: 'Build', caption: 'Deliver working increments', icon: Settings, wave: 'wave--lilac' },
  { title: 'Transition', caption: 'Prepare handoff', icon: Send, wave: 'wave--blue' },
  { title: 'Harvest', caption: 'Capture reusable learnings', icon: BarChart3, wave: 'wave--amber' },
];

const practices = [
  { title: 'Clarify the real problem', body: 'Go beyond the initial request to understand the true need.' },
  { title: 'Identify stakeholders', body: 'Include business, technical, and operational partners.' },
  { title: 'Set expectations', body: 'Align on scope, timeline, and success criteria early.' },
  {
    title: 'Know when to bring in an architect',
    body: 'Engage an FDA for complex, cross-cutting, or platform decisions.',
  },
];

const fde = [
  'Embedded with the business unit',
  'Problem shaping and requirements',
  'Iterative build and validation',
  'Customer coordination and communication',
];

const fda = [
  'Architecture guidance and design',
  'Standards alignment',
  'Technical review and risk assessment',
  'Shared expertise across engagements',
];

const toolkit = [
  { title: 'First Meeting Guide', body: 'Agenda, discussion points, and tips', icon: FileText },
  { title: 'Problem Definition Template', body: 'Capture context, goals, and success criteria', icon: FileText },
  { title: 'Architecture Checklist', body: 'Key considerations and review points', icon: ListChecks },
  { title: 'Handoff Checklist', body: 'Ensure a smooth transition to BAU', icon: CheckSquare },
  { title: 'Decision Log', body: 'Track key decisions and rationale', icon: FileText },
];

export function EngagementModelPage() {
  return (
    <>
      <Hero
        eyebrow="Engagement Model"
        title={
          <>
            The <span className="text-maroon">AICC</span> Engagement Framework
          </>
        }
        subhead="A practical guide to how AICC teams engage, shape, and deliver work with business units."
        image={heroImg}
        variant="engagement"
      >
        <div className="hero__meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Users size={18} aria-hidden="true" /> FDEs · FDAs · Engineering Teams
          </span>
          <span className="brand__divider" aria-hidden="true" />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Share2 size={18} aria-hidden="true" /> Intake → Define → Shape → Build → Transition → Harvest
          </span>
        </div>
      </Hero>

      <div className="container">
        <section className="section">
          <div className="section__head">
            <h2>The Engagement Journey</h2>
            <p className="subhead">A structured, end-to-end method to go from opportunity to measurable impact.</p>
          </div>
          <div className="journey">
            {journey.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} style={{ display: 'contents' }}>
                  <div className="journey__card">
                    <span className="chip chip--round chip--lilac chip--sm">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="text-maroon">{s.title}</h3>
                    <p>{s.caption}</p>
                    <span className={`card__wave ${s.wave}`} aria-hidden="true" />
                  </div>
                  {i < journey.length - 1 && (
                    <ArrowRight className="journey__arrow" size={20} aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="grid grid-3" style={{ alignItems: 'start' }}>
            {/* Working with business units */}
            <div className="card">
              <div style={{ display: 'flex', gap: 14, marginBottom: 6 }}>
                <span className="chip chip--round chip--lilac chip--sm">
                  <Users size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-navy" style={{ fontSize: 24 }}>Working with Business Units</h3>
                  <p style={{ margin: '4px 0 0', color: 'var(--slate)', fontSize: 14 }}>
                    Key practices for successful engagements.
                  </p>
                </div>
              </div>
              <div className="checklist" style={{ marginTop: 18 }}>
                {practices.map((p) => (
                  <div className="checklist__item" key={p.title}>
                    <span className="checklist__mark">
                      <Check size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{p.title}</strong>
                      <span>{p.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles & responsibilities */}
            <div className="card">
              <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                <span className="chip chip--round chip--lilac chip--sm">
                  <Users size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-maroon" style={{ fontSize: 24 }}>Roles &amp; Responsibilities</h3>
                  <p style={{ margin: '4px 0 0', color: 'var(--slate)', fontSize: 14 }}>
                    Clear roles, shared ownership, better outcomes.
                  </p>
                </div>
              </div>
              <div className="role-panels">
                <div className="role-panel role-panel--fde">
                  <span className="chip chip--round chip--lilac chip--sm">
                    <User size={20} aria-hidden="true" />
                  </span>
                  <h4>FDE</h4>
                  <p className="role-sub">Focuses on delivery</p>
                  <ul>
                    {fde.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="role-panel role-panel--fda">
                  <span className="chip chip--round chip--mint chip--sm">
                    <Layers size={20} aria-hidden="true" />
                  </span>
                  <h4>FDA</h4>
                  <p className="role-sub">Focuses on architecture</p>
                  <ul>
                    {fda.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Engagement toolkit */}
            <div className="card">
              <div style={{ display: 'flex', gap: 14, marginBottom: 10 }}>
                <span className="chip chip--round chip--lilac chip--sm">
                  <CheckSquare size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-maroon" style={{ fontSize: 24 }}>Engagement Toolkit</h3>
                  <p style={{ margin: '4px 0 0', color: 'var(--slate)', fontSize: 14 }}>
                    Templates, guides, and checklists to help you move faster.
                  </p>
                </div>
              </div>
              <div>
                {toolkit.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div className="listrow" key={t.title}>
                      <span className="chip chip--round chip--lilac chip--sm">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <div className="listrow__text">
                        <strong>{t.title}</strong>
                        <span>{t.body}</span>
                      </div>
                      <ChevronRight size={18} aria-hidden="true" style={{ color: 'var(--slate-light)' }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
