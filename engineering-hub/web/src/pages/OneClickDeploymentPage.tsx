import {
  ArrowRight,
  BarChart3,
  MessageSquare,
  FileText,
  Share2,
  Zap,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-one-click.png';

/** Simple, recognizable inline brand marks (no binary logo assets added). */
function AwsLogo() {
  return (
    <svg viewBox="0 0 80 48" width="46" height="28" role="img" aria-label="AWS" focusable="false">
      <text
        x="40"
        y="26"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#232f3e"
      >
        aws
      </text>
      <path
        d="M18 36 Q40 44 62 36"
        stroke="#ff9900"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AzureLogo() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" role="img" aria-label="Microsoft Azure" focusable="false">
      <defs>
        <linearGradient id="azgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2075d6" />
        </linearGradient>
      </defs>
      <path d="M20 6 L10 42 L20 42 L24 30 L31 38 L18 38 L15 46 L44 46 L26 6 Z" fill="url(#azgrad)" />
    </svg>
  );
}

interface Cloud {
  name: string;
  heading: string;
  body: string;
  action: string;
  variant: string;
  logo: () => JSX.Element;
}

const clouds: Cloud[] = [
  {
    name: 'AWS',
    heading: 'Deploy on AWS',
    body: 'Launch solution templates configured for approved AWS environments.',
    action: 'Explore AWS Solutions',
    variant: 'cloud-card--aws',
    logo: AwsLogo,
  },
  {
    name: 'Azure',
    heading: 'Deploy on Azure',
    body: 'Launch solution templates configured for approved Azure environments.',
    action: 'Explore Azure Solutions',
    variant: 'cloud-card--azure',
    logo: AzureLogo,
  },
];

interface Solution {
  title: string;
  body: string;
  icon: typeof MessageSquare;
  wave: string;
}

const solutions: Solution[] = [
  {
    title: 'Enterprise RAG Assistant',
    body: 'Deploy a secure, enterprise-grade RAG solution for internal knowledge and Q&A.',
    icon: MessageSquare,
    wave: 'wave--lilac',
  },
  {
    title: 'Document Intelligence',
    body: 'Extract, understand, and structure information from documents using multimodal AI.',
    icon: FileText,
    wave: 'wave--pink',
  },
  {
    title: 'Data Analysis Copilot',
    body: 'Enable natural language data analysis with secure enterprise connectors.',
    icon: BarChart3,
    wave: 'wave--mint',
  },
  {
    title: 'Workflow Agent',
    body: 'Automate business processes with AI agents and enterprise integrations.',
    icon: Share2,
    wave: 'wave--blue',
  },
];

interface Velocity {
  title: string;
  body: string;
  icon: typeof Zap;
}

const velocity: Velocity[] = [
  {
    title: 'Faster Time to Launch',
    body: 'Deploy pre-approved solutions with reusable templates and automated configuration.',
    icon: Zap,
  },
  {
    title: 'Consistent & Reliable',
    body: 'Use validated architectures and best practices across AWS and Azure.',
    icon: Layers,
  },
  {
    title: 'Governed Deployment',
    body: 'Built-in security, compliance checks, and traceable configurations.',
    icon: ShieldCheck,
  },
];

export function OneClickDeploymentPage() {
  return (
    <>
      <Hero
        eyebrow="One-Click Deployment"
        title={
          <>
            <span className="text-maroon">One-Click</span>
            <br />
            <span className="text-navy">Deployment</span>
          </>
        }
        subhead="Deploy approved AICC AI solutions to the cloud in minutes using reusable assets, validated configurations, and guided deployment."
        image={heroImg}
        variant="one-click"
      >
        <div className="hero__cta">
          <button className="btn btn--primary" aria-label="Launch a Solution">
            Launch a Solution <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </Hero>

      <div className="container">
        {/* Choose Your Cloud Environment — directly below hero, overlapping its
            lower edge for a seamless transition. */}
        <section className="section section--overlap" id="cloud">
          <div className="card cloud-panel">
            <p className="section-label">Deploy Your Way</p>
            <h2 style={{ margin: '0 0 8px' }}>Choose Your Cloud Environment</h2>
            <p className="subhead" style={{ margin: '0 0 24px' }}>
              Launch approved solutions with pre-configured templates for AWS or Azure.
            </p>
            <div className="grid grid-2">
              {clouds.map((c) => {
                const Logo = c.logo;
                return (
                  <div key={c.name} className={`cloud-card ${c.variant}`}>
                    <span className="cloud-card__logo" aria-hidden="true">
                      <Logo />
                    </span>
                    <div className="cloud-card__body">
                      <h3 className="text-navy" style={{ fontSize: 20, margin: '0 0 6px' }}>
                        {c.heading}
                      </h3>
                      <p style={{ margin: '0 0 14px' }}>{c.body}</p>
                      <button className="link-action" aria-label={c.action}>
                        {c.action} <ArrowRight size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Solutions — four across, small circular-arrow actions. */}
        <section className="section" id="solutions">
          <p className="section-label">Featured Solutions</p>
          <div className="grid grid-4">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="card card--hover tile">
                  <span className="chip chip--round chip--lilac">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="text-navy" style={{ fontSize: 21 }}>{s.title}</h3>
                  <p>{s.body}</p>
                  <div className="tile__foot">
                    <button className="round-arrow" aria-label={`Deploy ${s.title}`}>
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                  <span className={`card__wave ${s.wave}`} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Built for Deployment Velocity — compact horizontal cards. */}
        <section className="section">
          <p className="section-label">Built for Deployment Velocity</p>
          <div className="grid grid-3">
            {velocity.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card benefit-row">
                  <span className="chip chip--round chip--lilac">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-navy" style={{ fontSize: 18, margin: '0 0 4px' }}>
                      {v.title}
                    </h3>
                    <p style={{ margin: 0 }}>{v.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
