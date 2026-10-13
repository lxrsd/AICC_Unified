import { Link } from 'react-router-dom';
import {
  Users,
  Brain,
  Network,
  Rocket,
  BookOpen,
  Zap,
  Settings,
  Layers,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-engineering-hub.png';

interface Feature {
  title: string;
  body: string;
  icon: typeof Rocket;
  to: string;
}

/**
 * Primary Engineering Hub entry points. Five equal, fully-clickable cards in a
 * single row on wide desktop (grid-5), each linking to an existing route. The
 * row overlaps the bottom of the hero (section--overlap) so the cards integrate
 * with the hero artwork, matching the reference.
 */
const features: Feature[] = [
  {
    title: 'Engagement Model',
    body: 'How we engage business teams, define opportunities, and guide solutions from idea to delivery.',
    icon: Users,
    to: '/engagement-model',
  },
  {
    title: 'Agentic Engineering',
    body: 'Use AI-DLC, Factor AI, specialized agents, and human oversight to standardize AI-assisted development.',
    icon: Brain,
    to: '/agentic-engineering',
  },
  {
    title: 'Architectures',
    body: 'Access approved architectural patterns, cloud guidance, and best practices across AWS and Azure.',
    icon: Network,
    to: '/architectures',
  },
  {
    title: 'Accelerators',
    body: 'Find reusable solution foundations, templates, and components that reduce repetitive work and speed delivery.',
    icon: Rocket,
    to: '/accelerators',
  },
  {
    title: 'Knowledge Base',
    body: 'A central source for engineering standards, documentation, implementation guides, and lessons learned.',
    icon: BookOpen,
    to: '/knowledge-base',
  },
];

interface Advantage {
  title: string;
  body: string;
  icon: typeof Rocket;
}

/**
 * "The AICC Engineering Advantage" — an informational benefits section (not a
 * second nav). Five compact, lightly-tinted tiles on a single row on wide
 * desktop, sharing the continuous page background with the cards above (no
 * divider or seam between the two sections).
 */
const advantages: Advantage[] = [
  {
    title: 'Accelerated Delivery',
    body: 'Reduce repetitive work and move from idea to implementation faster.',
    icon: Zap,
  },
  {
    title: 'Consistent Engineering',
    body: 'Align teams around shared methodologies, standards, and proven practices.',
    icon: Settings,
  },
  {
    title: 'Reuse at Scale',
    body: 'Build on existing assets and solutions instead of starting from scratch.',
    icon: Layers,
  },
  {
    title: 'Quality by Design',
    body: 'Integrate review, security, and validation throughout the delivery process.',
    icon: ShieldCheck,
  },
  {
    title: 'Connected Teams',
    body: 'Bring together business, architecture, engineering, and knowledge for better outcomes.',
    icon: Users,
  },
];

export function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Engineering Hub"
        title={
          <>
            <span className="text-maroon">AICC</span> Engineering Hub
          </>
        }
        subhead="Build faster with proven solutions, reusable assets, and one-click deployment. A unified engineering ecosystem for consistent, secure, and scalable delivery."
        image={heroImg}
        variant="engineering-hub"
      >
        <div className="hero__cta">
          <Link to="/one-click-deployment" className="btn btn--primary">
            Launch a Solution <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Hero>

      <div className="container">
        {/* Five primary cards, overlapping the hero's lower edge. */}
        <section className="section section--overlap">
          <div className="grid grid-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link
                  key={f.title}
                  to={f.to}
                  aria-label={f.title}
                  className="card card--hover tile tile--link"
                >
                  <span className="chip chip--round chip--lilac">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <div className="tile__foot">
                    <span className="round-arrow" aria-hidden="true">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* The AICC Engineering Advantage — informational benefits section. */}
        <section className="section advantage">
          <div className="advantage__head">
            <p className="eyebrow">Why the AICC Engineering Hub</p>
            <h2>The AICC Engineering Advantage</h2>
            <p className="subhead">
              Everything you need to deliver high-quality solutions faster and at scale.
            </p>
          </div>
          <div className="grid grid-5">
            {advantages.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="benefit">
                  <span className="chip chip--round chip--lilac chip--sm">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
