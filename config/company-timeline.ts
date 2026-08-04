export type MilestoneCategory =
  | 'Company Founded'
  | 'First Product'
  | 'First Client'
  | 'Global Expansion'
  | 'Funding'
  | 'Awards'
  | 'Research'
  | 'Future Roadmap';

export interface CompanyMilestoneItem {
  id: string;
  year: string;
  quarter: string;
  title: string;
  category: MilestoneCategory;
  description: string;
  metrics: string[];
  iconName: string;
  status: 'Achieved' | 'In Progress' | 'Future';
}

export interface CompanyTimelineConfig {
  badge: string;
  title: string;
  description: string;
  milestones: CompanyMilestoneItem[];
}

export const companyTimelineConfig: CompanyTimelineConfig = {
  badge: 'Company History',
  title: 'IntelliForceAI Growth & Innovation Journey',
  description:
    'From our founding by former DeepMind researchers to powering Fortune 500 enterprise AI workloads globally.',
  milestones: [
    {
      id: 'm-founded',
      year: '2022',
      quarter: 'Q1',
      title: 'Company Founded',
      category: 'Company Founded',
      description:
        'IntelliForceAI established in Boston & San Francisco by former DeepMind & MIT AI researchers to engineer autonomous multi-agent systems.',
      metrics: ['Seed Capital Secured', 'Core Research Team Assembled'],
      iconName: 'Rocket',
      status: 'Achieved',
    },
    {
      id: 'm-first-product',
      year: '2022',
      quarter: 'Q4',
      title: 'IntelliForceAI 1.0 Release',
      category: 'First Product',
      description:
        'Launched the first commercial version of IntelliForceAI Agentic OS with sub-50ms inter-agent RPC protocols.',
      metrics: ['v1.0 Launch', 'Sub-50ms Latency SLA'],
      iconName: 'Cpu',
      status: 'Achieved',
    },
    {
      id: 'm-first-client',
      year: '2023',
      quarter: 'Q2',
      title: 'First Fortune 500 Enterprise Client',
      category: 'First Client',
      description:
        'Deployed high-frequency fraud detection engine for Apex Global Financial and genomic sequence calling for Global Health Inc.',
      metrics: ['10+ Enterprise Accounts', '$100M+ Transaction Volume'],
      iconName: 'Building2',
      status: 'Achieved',
    },
    {
      id: 'm-funding',
      year: '2023',
      quarter: 'Q4',
      title: '$50M Series A Financing',
      category: 'Funding',
      description:
        'Closed $50M Series A funding round led by top-tier venture capital partners to accelerate core model research and international growth.',
      metrics: ['$50M Raised', 'Top-Tier VC Partners'],
      iconName: 'DollarSign',
      status: 'Achieved',
    },
    {
      id: 'm-expansion',
      year: '2024',
      quarter: 'Q2',
      title: 'Global Enterprise Expansion',
      category: 'Global Expansion',
      description:
        'Expanded operational presence across 45+ international regions with regional data sovereignty and air-gapped enclaves.',
      metrics: ['45+ Countries', '24/7 Global Support SLA'],
      iconName: 'Globe',
      status: 'Achieved',
    },
    {
      id: 'm-awards',
      year: '2024',
      quarter: 'Q4',
      title: '#1 Enterprise AI Platform Award',
      category: 'Awards',
      description:
        'Recognized as Industry Leader in Multi-Agent AI Infrastructure by Enterprise Tech Review and Gartner Emerging Tech Guide.',
      metrics: ['Gartner Emerging Leader', '#1 AI Infrastructure'],
      iconName: 'Trophy',
      status: 'Achieved',
    },
    {
      id: 'm-research',
      year: '2025',
      quarter: 'Q3',
      title: 'Pioneering Research Papers',
      category: 'Research',
      description:
        'Published groundbreaking papers on LoRA-PEFT adapter routing, sub-200ms voice synthesis codecs, and eBPF kernel security.',
      metrics: ['10+ Peer-Reviewed Papers', '5 Patent Applications'],
      iconName: 'BookOpen',
      status: 'Achieved',
    },
    {
      id: 'm-future',
      year: '2026+',
      quarter: 'Q3',
      title: 'IntelliForceAI 2.0 & Quantum Readiness',
      category: 'Future Roadmap',
      description:
        'Engineering self-governing AI swarms, 100% static export web deployment, and quantum-resistant neural security models.',
      metrics: ['Self-Healing Swarms', 'Quantum Encryption'],
      iconName: 'Sparkles',
      status: 'In Progress',
    },
  ],
};
