import { useState } from 'react';
import {
  Search,
  ArrowRight,
  BookOpen,
  Rocket,
  Layers,
  CheckSquare,
  ShieldCheck,
  Calendar,
  Clock,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-knowledge.png';

const articles = [
  {
    title: 'Getting Started with the Engineering Hub',
    body: 'An introduction to the Engineering Hub, its key capabilities, and how to get started on your first project.',
    icon: BookOpen,
    date: 'Apr 3, 2025',
    read: '8 min read',
  },
  {
    title: 'One-Click Deployment Overview',
    body: 'Learn how to deploy approved solutions using the AICC platform, from templates to automated provisioning.',
    icon: Rocket,
    date: 'Apr 3, 2025',
    read: '6 min read',
  },
  {
    title: 'AI-DLC Lifecycle Overview',
    body: 'Understand the end-to-end AI-DLC lifecycle, from ideation and development to deployment and operations.',
    icon: Layers,
    date: 'Apr 2, 2025',
    read: '7 min read',
  },
  {
    title: 'Solution Review Checklist',
    body: 'Checklist for architecture, security, and operational readiness reviews.',
    icon: CheckSquare,
    date: 'Apr 1, 2025',
    read: '5 min read',
  },
  {
    title: 'Knowledge Search Best Practices',
    body: 'Tips and techniques to find the right information quickly and get the most out of the Knowledge Base.',
    icon: Search,
    date: 'Mar 28, 2025',
    read: '4 min read',
  },
  {
    title: 'Security Review Guide',
    body: 'Policies, controls, and best practices for building secure and compliant solutions on the Engineering Hub.',
    icon: ShieldCheck,
    date: 'Mar 26, 2025',
    read: '6 min read',
  },
];

export function KnowledgeBasePage() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Hero
        eyebrow="Engineering Hub"
        title={
          <>
            <span className="text-maroon">Knowledge</span> Base
          </>
        }
        subhead="Centralized documentation and engineering knowledge for the entire Engineering Hub."
        image={heroImg}
        variant="knowledge"
      >
        <form
          className="searchbar"
          style={{ marginTop: 28 }}
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <Search size={22} aria-hidden="true" style={{ color: 'var(--maroon)' }} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for guides, standards, templates, and more..."
            aria-label="Search the Knowledge Base"
          />
          <button type="submit" className="searchbar__submit" aria-label="Search">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </form>
      </Hero>

      <div className="container">
        <section className="section">
          <div className="row-head">
            <div>
              <h2 style={{ fontSize: 38 }}>Latest Knowledge</h2>
              <p className="subhead" style={{ marginTop: 8 }}>
                Explore the latest guides, best practices, and engineering insights.
              </p>
            </div>
            <a href="#all" className="text-purple" style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
              View All Knowledge <ArrowRight size={16} aria-hidden="true" style={{ verticalAlign: 'middle' }} />
            </a>
          </div>

          <div className="grid grid-3">
            {articles.map((a) => {
              const Icon = a.icon;
              return (
                <a key={a.title} href="#article" className="card card--hover article" style={{ textDecoration: 'none' }}>
                  <span className="chip chip--lilac" style={{ marginBottom: 16 }}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <div className="article__foot">
                    <span className="meta">
                      <Calendar size={15} aria-hidden="true" /> {a.date}
                    </span>
                    <span aria-hidden="true">|</span>
                    <span className="meta">
                      <Clock size={15} aria-hidden="true" /> {a.read}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
