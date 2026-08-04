export interface StatMetric {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
  percentage: number; // 0 - 100 for radial chart
  progressLabel: string;
}

export interface StatsConfig {
  badge: string;
  title: string;
  description: string;
  metrics: StatMetric[];
}

export const statsConfig: StatsConfig = {
  badge: 'Proven Global Achievements',
  title: 'Quantifiable Enterprise Impact at Scale',
  description:
    'Our breakthrough autonomous AI engine and developer platforms deliver measurable results across global enterprise workloads.',
  metrics: [
    {
      id: 'projects',
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Enterprise AI & cloud deployments',
      iconName: 'FolderCheck',
      percentage: 95,
      progressLabel: 'On-time delivery rate',
    },
    {
      id: 'clients',
      value: 120,
      suffix: '+',
      label: 'Fortune 500 Clients',
      description: 'Trusted enterprise partners',
      iconName: 'Building',
      percentage: 88,
      progressLabel: 'Global market penetration',
    },
    {
      id: 'countries',
      value: 45,
      suffix: '+',
      label: 'Countries Active',
      description: 'Global multi-region footprint',
      iconName: 'Globe',
      percentage: 82,
      progressLabel: 'International coverage',
    },
    {
      id: 'developers',
      value: 350,
      suffix: '+',
      label: 'AI Developers',
      description: 'Expert research & dev team',
      iconName: 'Code2',
      percentage: 92,
      progressLabel: 'Certified AI engineers',
    },
    {
      id: 'experience',
      value: 12,
      suffix: '+ Yrs',
      label: 'Years Experience',
      description: 'AI & machine learning research',
      iconName: 'Award',
      percentage: 96,
      progressLabel: 'Industry leadership',
    },
    {
      id: 'support-hours',
      value: 24,
      suffix: '/7',
      label: 'Support Hours',
      description: 'Mission-critical coverage',
      iconName: 'Clock',
      percentage: 99.99,
      progressLabel: 'Infrastructure SLA',
    },
    {
      id: 'downloads',
      value: 2.5,
      suffix: 'M+',
      label: 'SDK Downloads',
      description: 'Global developer adoption',
      iconName: 'Download',
      percentage: 90,
      progressLabel: 'Community engagement',
    },
    {
      id: 'github-stars',
      value: 48.5,
      suffix: 'K+',
      label: 'GitHub Stars',
      description: 'Open source recognition',
      iconName: 'Star',
      percentage: 94,
      progressLabel: 'Repository rating',
    },
  ],
};
