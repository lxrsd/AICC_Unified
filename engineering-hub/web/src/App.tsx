import { Routes, Route } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { HomePage } from './pages/HomePage';
import { EngagementModelPage } from './pages/EngagementModelPage';
import { AgenticEngineeringPage } from './pages/AgenticEngineeringPage';
import { ArchitecturesPage } from './pages/ArchitecturesPage';
import { AcceleratorsPage } from './pages/AcceleratorsPage';
import { KnowledgeBasePage } from './pages/KnowledgeBasePage';
import { OneClickDeploymentPage } from './pages/OneClickDeploymentPage';
import { EvidenceExplorerPage } from './pages/EvidenceExplorerPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/engagement-model" element={<EngagementModelPage />} />
        <Route path="/agentic-engineering" element={<AgenticEngineeringPage />} />
        <Route path="/architectures" element={<ArchitecturesPage />} />
        <Route path="/accelerators" element={<AcceleratorsPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/one-click-deployment" element={<OneClickDeploymentPage />} />
        <Route path="/ai-dlc-explorer" element={<EvidenceExplorerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  );
}
