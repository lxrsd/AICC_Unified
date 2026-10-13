import { useState } from 'react';
import {
  Github,
  Wrench,
  Settings,
  Play,
  FileText,
  Lightbulb,
  Users,
  Code2,
  ChevronRight,
  CheckCircle2,
  Terminal,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

// Repository URL shown in the clone command. Configurable at build time via the
// VITE_AICC_REPO_URL environment variable so each deployment (corporate or
// otherwise) points engineers at the correct repository. The default is a
// neutral placeholder — no personal account.
const REPO_URL = import.meta.env.VITE_AICC_REPO_URL ?? 'https://github.com/your-org/AICC_Unified.git';
const CLONE_CMD = `git clone ${REPO_URL}`;

const quickStart = [
  { n: '1', title: 'Clone Repository', body: 'Get the AI-DLC standard', icon: Wrench },
  { n: '2', title: 'Configure Your Tool', body: 'Kiro or Claude', icon: Settings },
  { n: '3', title: 'Start Building', body: 'Follow the same methodology', icon: Play },
];

const phases = [
  { label: 'Requirements', icon: FileText, active: true },
  { label: 'Design', icon: Lightbulb },
  { label: 'Approval', icon: Users },
  { label: 'Code', icon: Code2 },
  { label: 'Tests', icon: Settings },
  { label: 'Evidence', icon: FileText },
];

interface RunCard {
  tool: string;
  run: string;
  iconClass: string;
  icon: typeof Terminal;
  ago: string;
  fileSize: string;
  fileTime: string;
  bullets: string[];
  tags: string[];
}

const runs: RunCard[] = [
  {
    tool: 'Kiro CLI',
    run: 'Run A · Accelerator Catalog',
    iconClass: 'run-icon--kiro',
    icon: Terminal,
    ago: 'Apr 3, 2025 · 8 min ago',
    fileSize: '2.4 KB',
    fileTime: 'Apr 3, 2025, 10:14 AM',
    bullets: [
      'Captures functional and non-functional requirements',
      'Includes stakeholder needs and success criteria',
      'Structured using the AI-DLC requirements template',
      'Ready for design phase with clear acceptance criteria',
    ],
    tags: ['ai-dlc:requirements', 'tool:kiro', 'phase:1', 'v1.0'],
  },
  {
    tool: 'Claude Code',
    run: 'Run B · Accelerator Catalog',
    iconClass: 'run-icon--claude',
    icon: Sparkles,
    ago: 'Apr 3, 2025 · 6 min ago',
    fileSize: '2.6 KB',
    fileTime: 'Apr 3, 2025, 10:18 AM',
    bullets: [
      'Defines user stories and functional requirements',
      'Captures non-functional requirements and constraints',
      'Aligned to the AI-DLC requirements structure',
      'Includes traceability to business goals',
    ],
    tags: ['ai-dlc:requirements', 'tool:claude', 'phase:1', 'v1.0'],
  },
];

export function EvidenceExplorerPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CLONE_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable (e.g. non-secure context) — no-op */
    }
  };

  return (
    <div className="container">
      <div className="explorer-head">
        <div>
          <h1>
            <span className="text-purple">AI-DLC</span> Evidence Explorer
          </h1>
          <p className="subhead" style={{ marginTop: 10 }}>
            One GitHub standard. Two AI development tools.
          </p>
        </div>
        <div className="repo-badge">
          <Github size={28} aria-hidden="true" style={{ color: 'var(--navy)' }} />
          <div className="repo-badge__meta">
            <strong>AICC_Unified</strong>
            <span>GitHub Standard</span>
          </div>
          <span className="version-pill">v2.10.0</span>
        </div>
      </div>

      {/* Quick start */}
      <div className="quickstart">
        <div>
          <div className="quickstart__left">
            <span className="chip chip--round chip--lilac" style={{ width: 68, height: 68 }}>
              <Github size={34} aria-hidden="true" />
            </span>
            <div>
              <h3 style={{ fontSize: 24 }}>Engineering Quick Start</h3>
              <p style={{ color: 'var(--slate)', margin: '6px 0 0', fontSize: 15 }}>
                Clone the shared standard, configure your tool, and start a governed project.
              </p>
            </div>
          </div>
          <div className="codebox">
            <code>{CLONE_CMD}</code>
            <button className="copy-btn" onClick={copy} aria-label="Copy clone command">
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <div className="quickstart__steps">
          {quickStart.map((s) => {
            const Icon = s.icon;
            return (
              <div className="qs-step" key={s.n}>
                <span className="qs-step__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <strong>
                  {s.n}. {s.title}
                </strong>
                <span>{s.body}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase tabs */}
      <div className="phase-tabs">
        {phases.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={p.label} style={{ display: 'contents' }}>
              <span className={`phase-tab${p.active ? ' active' : ''}`}>
                <Icon size={16} aria-hidden="true" /> {p.label}
              </span>
              {i < phases.length - 1 && (
                <ChevronRight className="phase-tab__sep" size={18} aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>

      {/* Run comparison */}
      <div className="grid grid-2 run-compare" style={{ marginBottom: 24 }}>
        {runs.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.tool} className="card">
              <div className="run-card__head">
                <span className={`run-icon ${r.iconClass}`}>
                  <Icon size={28} aria-hidden="true" />
                </span>
                <div className="run-card__title">
                  <strong>{r.tool}</strong>
                  <span>{r.run}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="badge-done">
                    <CheckCircle2 size={15} aria-hidden="true" /> Completed
                  </span>
                  <div className="run-time">{r.ago}</div>
                </div>
              </div>

              <h3 className="evidence-title">Requirements Evidence</h3>
              <p className="evidence-sub">
                Product and technical requirements generated for the Accelerator Catalog.
              </p>

              <div className="file-card">
                <span className="chip chip--lilac chip--sm">
                  <FileText size={20} aria-hidden="true" />
                </span>
                <div className="file-card__meta">
                  <strong>requirements.md</strong>
                  <span>
                    Markdown | {r.fileSize} | {r.fileTime}
                  </span>
                </div>
                <button className="btn btn--ghost" aria-label={`Open evidence for ${r.tool}`}>
                  <ExternalLink size={16} aria-hidden="true" /> Open evidence
                </button>
              </div>

              <ul className="evidence-list">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="tagrow">
                {r.tags.map((t) => (
                  <span key={t} className="tag tag--mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
