import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Settings,
  Bot,
  ShieldCheck,
  Target,
  Cloud,
  CheckCircle2,
  GitPullRequest,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-agentic.png';

interface MainCard {
  title: string;
  label: string;
  body: string;
  icon: typeof Settings;
}

/** Three pillars of Agentic Engineering & the AI Factory. */
const mainCards: MainCard[] = [
  {
    title: 'AI-DLC Methodology',
    label: 'How we build',
    body: 'Standardize requirements, design, approvals, code, testing, and engineering evidence.',
    icon: Settings,
  },
  {
    title: 'Factor AI Execution',
    label: 'Where and how we execute',
    body: 'Execute engineering tasks through agents, managed workspaces, and automated validation.',
    icon: Bot,
  },
  {
    title: 'Governance & Quality',
    label: 'How we maintain control',
    body: 'Apply human review, isolation, security controls, and traceable delivery evidence.',
    icon: ShieldCheck,
  },
];

interface Stage {
  label: string;
  body: string;
  icon: typeof Target;
}

/** Target operating model — five-stage execution flow. */
const stages: Stage[] = [
  { label: 'Engineering Intent', body: 'Define requirements, goals, and success criteria.', icon: Target },
  { label: 'Cloud Workspace', body: 'Provision secure, isolated development environments with approved tools.', icon: Cloud },
  { label: 'AI Agents', body: 'Execute development tasks with human oversight.', icon: Bot },
  { label: 'Quality Gates', body: 'Automated testing, security scans, and validation.', icon: CheckCircle2 },
  { label: 'Reviewed PR', body: 'Human review and merge to main with traceable evidence.', icon: GitPullRequest },
];

interface Phase {
  status: string;
  statusClass: string;
  title: string;
  body: string;
}

/** Phased roadmap — current foundation, proposed next step, future target. */
const phases: Phase[] = [
  {
    status: 'Current',
    statusClass: 'phase-card__status--current',
    title: 'Foundation — Standardized Development',
    body: 'AI-DLC methodology, existing harness integrations, approved workflows, and engineer-guided development.',
  },
  {
    status: 'Proposed next step',
    statusClass: 'phase-card__status--next',
    title: 'Next Step — Cloud Execution & Verification',
    body: 'Shared environment definitions, on-demand cloud workspaces, short-lived credentials, and automated CI quality gates.',
  },
  {
    status: 'Future target',
    statusClass: 'phase-card__status--target',
    title: 'Target — Scalable Autonomous Engineering Factory',
    body: 'Isolated agent fleets executing parallel engineering tasks, subject to measurable cost, quality, and productivity thresholds.',
  },
];

export function AgenticEngineeringPage() {
  return (
    <>
      <Hero
        eyebrow="Agentic Engineering"
        title="Agentic Engineering & Factor AI"
        subhead="A unified engineering approach combining AI-DLC methodology, AI agents, cloud-based development environments, and governed execution to accelerate software delivery with human oversight."
        image={heroImg}
        variant="agentic"
      >
        <div className="hero__meta">
          <span className="dotlist">
            <span>Methodology</span>
            <span>Agents</span>
            <span>Reviews</span>
            <span>Evidence</span>
          </span>
        </div>
        <div className="hero__cta">
          <Link to="/one-click-deployment" className="btn btn--primary">
            Launch an Agentic Solution <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Hero>

      <div className="container">
        {/* Three main pillars */}
        <section className="section section--overlap" id="methodology">
          <div className="grid grid-3">
            {mainCards.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card tile">
                  <span className="chip chip--round chip--lilac">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <p className="section-label" style={{ margin: 0 }}>{c.label}</p>
                  <h3 className="text-navy" style={{ fontSize: 22, margin: 0 }}>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Factory Operating Model */}
        <section className="section">
          <div className="section__head">
            <p className="eyebrow">Engineering Factory Operating Model</p>
            <h2>From Engineering Intent to Verified Delivery</h2>
            <p className="subhead">
              A proposed execution model combining engineer-directed development, isolated agent
              environments, and quality gates.
            </p>
          </div>

          <div className="lifecycle">
            <div className="stepper">
              {stages.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} style={{ display: 'contents' }}>
                    <div className="stepper__item">
                      <span className="stepper__icon">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <span className="stepper__label">{s.label}</span>
                      <span className="stepper__caption">{s.body}</span>
                    </div>
                    {i < stages.length - 1 && (
                      <ArrowRight className="stepper__arrow" size={20} aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="disclaimer-note">
            Target operating model — not a claim that the autonomous factory has already been deployed.
          </p>
        </section>

        {/* AI Factory Roadmap */}
        <section className="section">
          <div className="section__head">
            <p className="eyebrow">Engineering Factory Roadmap</p>
            <h2>A Phased Path to Scalable Execution</h2>
            <p className="subhead">Building on proven practices and measured outcomes.</p>
          </div>

          <div className="grid grid-3">
            {phases.map((p) => (
              <div key={p.title} className="card tile phase-card">
                <span className={`phase-card__status ${p.statusClass}`}>{p.status}</span>
                <h3 className="text-navy" style={{ fontSize: 20, margin: 0 }}>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
