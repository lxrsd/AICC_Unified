// Shared top-nav definition for the AICC Engineering Hub.
// The "One-Click Deployment" link is rendered separately as a filled pill on
// the right side of the bar, so it is not part of this inline list.
export interface NavItem {
  label: string;
  to: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Engineering Hub', to: '/' },
  { label: 'Engagement Model', to: '/engagement-model' },
  { label: 'Agentic Engineering', to: '/agentic-engineering' },
  { label: 'Architectures', to: '/architectures' },
  { label: 'Accelerators', to: '/accelerators' },
  { label: 'Knowledge Base', to: '/knowledge-base' },
];

export const ONE_CLICK = { label: 'One-Click Deployment', to: '/one-click-deployment' };
