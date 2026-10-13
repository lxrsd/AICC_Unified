import {
  ArrowRight,
  Cloud,
  Cpu,
  ShieldCheck,
  Share2,
  User,
  MonitorDot,
  Settings,
  FileText,
  CheckSquare,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-architecture.png';

interface Domain {
  title: string;
  body: string;
  icon: typeof Cloud;
  chip: string;
  selected?: boolean;
}

const domains: Domain[] = [
  {
    title: 'AWS Patterns',
    body: 'Explore reusable architectures for AWS, aligned to best practices and well-architected principles.',
    icon: Cloud,
    chip: 'chip--lilac',
    selected: true,
  },
  {
    title: 'Azure Patterns',
    body: 'Access reference architectures for Azure, with proven designs and implementation guidance.',
    icon: Cloud,
    chip: 'chip--blue',
  },
  {
    title: 'AI & Data Platforms',
    body: 'Reference architectures for generative AI, data platforms, and analytics workloads.',
    icon: Cpu,
    chip: 'chip--pink',
  },
  {
    title: 'Security & Integration',
    body: 'Architectures for security, identity, integration, and cross-platform connectivity.',
    icon: ShieldCheck,
    chip: 'chip--lilac',
  },
];

const bestPractices = [
  {
    title: 'Landing Zones & Networking',
    body: 'Guidance for multi-account landing zones, network design, and connectivity.',
    icon: Share2,
  },
  {
    title: 'Identity & Access',
    body: 'Best practices for identity management, access control, and zero trust.',
    icon: User,
  },
  {
    title: 'Observability & Operations',
    body: 'Patterns for monitoring, logging, incident response, and operational excellence.',
    icon: MonitorDot,
  },
  {
    title: 'CI/CD & DevSecOps',
    body: 'Reference patterns for secure delivery pipelines, automation, and compliance.',
    icon: Settings,
  },
  {
    title: 'Reference Diagrams',
    body: 'View and download architecture diagrams and component templates.',
    icon: FileText,
  },
  {
    title: 'Architecture Review Checklist',
    body: 'Use checklists to validate designs against cloud and security best practices.',
    icon: CheckSquare,
  },
];

export function ArchitecturesPage() {
  return (
    <>
      <Hero
        eyebrow="Architectures"
        title={
          <>
            Reference Architectures
            <br />
            <span className="text-maroon">&amp; Best Practices</span>
          </>
        }
        subhead="Access reusable architecture patterns, cloud best practices, and implementation guidance across AWS and Azure."
        image={heroImg}
        variant="architecture"
      >
        <div className="hero__cta">
          <a href="#domains" className="btn btn--primary">
            Browse Architectures <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Hero>

      <div className="container">
        <section className="section" id="domains">
          <p className="section-label section-label--dark">Architecture Domains</p>
          <div className="grid grid-4">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className={`card card--hover tile${d.selected ? ' card--selected' : ''}`}>
                  <span className={`chip chip--round ${d.chip}`}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <div className="tile__foot">
                    <button className="round-arrow" aria-label={`Open ${d.title}`}>
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section" id="best-practices">
          <p className="section-label">Best Practice Library</p>
          <div className="grid grid-3">
            {bestPractices.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="card card--hover">
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span className="chip chip--round chip--lilac chip--sm">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div style={{ flex: '1 1 auto' }}>
                      <h3 style={{ fontSize: 19 }}>{b.title}</h3>
                      <p style={{ margin: '8px 0 0', color: 'var(--slate)', fontSize: 14 }}>{b.body}</p>
                    </div>
                    <button className="round-arrow" aria-label={`Open ${b.title}`}>
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
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
