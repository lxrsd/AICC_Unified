import { ArrowRight, Boxes, MessageSquare, FileText, BarChart3, Share2, Database } from 'lucide-react';
import { Hero } from '../components/Hero';
import heroImg from '../assets/plain-accelerators.png';

/**
 * There is no dedicated reference image for the Accelerators screen. This page
 * is built in the same visual family as the other Engineering Hub pages and
 * points to the existing Accelerator Catalog app
 * (engineering-hub/accelerator-catalog-claude). The catalog grid below is a
 * representative placeholder until the catalog is embedded/linked for real.
 */
const accelerators = [
  { title: 'Enterprise RAG Assistant', body: 'Secure, enterprise-grade retrieval-augmented generation for internal knowledge and Q&A.', icon: MessageSquare, wave: 'wave--lilac' },
  { title: 'Document Intelligence', body: 'Extract, understand, and structure information from documents using multimodal AI.', icon: FileText, wave: 'wave--pink' },
  { title: 'Data Analysis Copilot', body: 'Natural-language data analysis with secure enterprise connectors.', icon: BarChart3, wave: 'wave--mint' },
  { title: 'Workflow Agent', body: 'Automate business processes with AI agents and enterprise integrations.', icon: Share2, wave: 'wave--blue' },
  { title: 'Knowledge Graph Builder', body: 'Build and query knowledge graphs over structured and unstructured sources.', icon: Database, wave: 'wave--lilac' },
  { title: 'Accelerator Catalog', body: 'Browse the full library of reusable AI accelerator patterns and starting points.', icon: Boxes, wave: 'wave--amber' },
];

export function AcceleratorsPage() {
  return (
    <>
      <Hero
        eyebrow="Engineering Hub"
        title={
          <>
            <span className="text-maroon">Accelerators</span> &amp; Reusable Assets
          </>
        }
        subhead="Start from proven, reusable AI accelerator patterns and move from idea to a working foundation faster."
        image={heroImg}
        variant="accelerators"
      >
        <div className="hero__cta">
          <a href="#catalog" className="btn btn--primary">
            Browse the Accelerator Catalog <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Hero>

      <div className="container">
        <section className="section" id="catalog">
          <p className="section-label section-label--dark">Accelerator Catalog</p>
          <div className="grid grid-3">
            {accelerators.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="card card--hover tile">
                  <span className="chip chip--round chip--lilac">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 style={{ fontSize: 21 }}>{a.title}</h3>
                  <p>{a.body}</p>
                  <div className="tile__foot">
                    <button className="round-arrow" aria-label={`Open ${a.title}`}>
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                  <span className={`card__wave ${a.wave}`} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
