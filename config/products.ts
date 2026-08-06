export type ProductStatus = 'Released' | 'Beta' | 'Coming Soon' | 'Enterprise';

export type ProductCategory =
  | 'All'
  | 'AI'
  | 'Security'
  | 'Cloud'
  | 'Enterprise'
  | 'Developer Tools';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  description: string;
  iconName: string;
  technologies: string[];
  tags: string[];
  highlights: string[];
  screenshot: string;
  demoUrl: string;
  detailsUrl: string;
  featured?: boolean;
}

export const productCategories: ProductCategory[] = [
  'All',
  'AI',
  'Security',
  'Cloud',
  'Enterprise',
  'Developer Tools',
];

export const productsData: ProductItem[] = [
  {
    id: 'intelliforceai',
    name: 'IntelliForceAI Platform',
    category: 'AI',
    status: 'Released',
    description:
      'Autonomous multi-agent orchestration engine & enterprise AI foundation with real-time telemetry.',
    iconName: 'Cpu',
    technologies: ['PyTorch', 'Next.js', 'Rust', 'CUDA', 'TypeScript'],
    tags: ['Autonomous', 'Agents', 'LLM Engine', 'Scale'],
    highlights: [
      'Dispatches specialized agents for retrieval, reasoning, tool use, safety, and memory under one control plane.',
      'Real-time telemetry and tracing across every agent decision, not just the final output.',
      'Deploys across multi-region enterprise infrastructure with sub-200ms orchestration latency.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/intelliforceai',
    featured: true,
  },
  {
    id: 'thunder-downloader',
    name: 'Thunder Download Manager',
    category: 'Developer Tools',
    status: 'Released',
    description:
      'High-velocity multi-threaded asset distribution & parallel chunk downloader for developer workforces.',
    iconName: 'Download',
    technologies: ['Go', 'Tauri', 'C++', 'WebAssembly'],
    tags: ['Developer Tool', 'Multi-thread', 'P2P', 'High Velocity'],
    highlights: [
      'Multi-threaded chunked downloads with automatic resume on interrupted connections.',
      'Peer-assisted distribution reduces central bandwidth load for large asset rollouts.',
      'Cross-platform desktop client built on Tauri for a lightweight native footprint.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/thunder-downloader',
  },
  {
    id: 'blackmarlin-oms',
    name: 'BlackMarlin OMS',
    category: 'Enterprise',
    status: 'Enterprise',
    description:
      'AI-integrated order management & predictive inventory routing system engineered for global supply chains.',
    iconName: 'Boxes',
    technologies: ['Node.js', 'PostgreSQL', 'GraphQL', 'Kafka'],
    tags: ['OMS', 'Supply Chain', 'Predictive AI', 'ERP Sync'],
    highlights: [
      'Predictive inventory routing balances stock across warehouses before shortages happen.',
      'Bi-directional ERP sync keeps order status consistent across legacy and modern systems.',
      'Event-driven architecture on Kafka handles high-volume order spikes without backpressure.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/blackmarlin-oms',
    featured: true,
  },
  {
    id: 'sentinel-cyber',
    name: 'Sentinel Cyber Shield',
    category: 'Security',
    status: 'Beta',
    description:
      'Zero-trust vulnerability mitigation & automated AI threat hunting scanner for multi-cloud workloads.',
    iconName: 'ShieldAlert',
    technologies: ['eBPF', 'Python', 'Docker', 'Kubernetes'],
    tags: ['Security', 'Zero Trust', 'Threat Hunting', 'Beta'],
    highlights: [
      'Continuous eBPF-based kernel-level monitoring with no workload instrumentation required.',
      'Automated threat hunting correlates signals across containers, hosts, and cloud APIs.',
      'Zero-trust policy enforcement blocks lateral movement before it reaches production.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/sentinel-cyber',
  },
  {
    id: 'vision-ai-suite',
    name: 'Vision AI Suite',
    category: 'AI',
    status: 'Released',
    description:
      'Real-time multi-camera video stream analytics, spatial tracking, and visual anomaly detection.',
    iconName: 'Eye',
    technologies: ['YOLOv8', 'TensorRT', 'OpenCV', 'React'],
    tags: ['Computer Vision', 'Video Analytics', 'Real-time', 'Edge'],
    highlights: [
      'Real-time inference across multi-camera feeds with sub-frame spatial tracking.',
      'Visual anomaly detection flags deviations without hand-labeled training examples.',
      'Edge-optimized with TensorRT for on-device inference at the camera.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/vision-ai-suite',
  },
  {
    id: 'document-ai',
    name: 'Document AI Engine',
    category: 'Enterprise',
    status: 'Released',
    description:
      'Automated OCR & unstructured document processing engine extracting structured JSON from PDFs and scans.',
    iconName: 'FileText',
    technologies: ['Transformer', 'Tesseract', 'Python', 'FastAPI'],
    tags: ['OCR', 'Document Processing', 'NLP', 'JSON Export'],
    highlights: [
      'Extracts structured JSON from scanned PDFs, forms, and mixed-format documents.',
      'Transformer-based OCR handles low-quality scans and handwritten fields.',
      'FastAPI backend integrates directly into existing document pipelines.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/document-ai',
  },
  {
    id: 'voice-ai-orchestrator',
    name: 'Voice AI Orchestrator',
    category: 'AI',
    status: 'Beta',
    description:
      'Sub-200ms conversational voice synthesis & neural speech agent for automated customer operations.',
    iconName: 'Mic',
    technologies: ['Whisper', 'WebSockets', 'PyTorch', 'C++'],
    tags: ['Speech Synthesis', 'Conversational AI', 'Voice', 'Beta'],
    highlights: [
      'Sub-200ms round-trip conversational latency over WebSockets.',
      'Neural speech synthesis tuned for natural-sounding customer operations dialogue.',
      'Whisper-based transcription pipeline handles noisy call-center audio.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/voice-ai-orchestrator',
  },
  {
    id: 'enterprise-erp',
    name: 'Enterprise ERP Suite',
    category: 'Cloud',
    status: 'Coming Soon',
    description:
      'Next-generation cloud resource planning engine uniting finance, human capital, and operational AI analytics.',
    iconName: 'Building2',
    technologies: ['Go', 'React', 'Kubernetes', 'Redis'],
    tags: ['Cloud ERP', 'Finance AI', 'Coming Soon', 'Global'],
    highlights: [
      'Unifies finance, human capital, and operations under one cloud resource-planning core.',
      'Operational AI analytics surface variance and forecasts directly in each module.',
      'Kubernetes-native deployment scales per-tenant as the organization grows.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/enterprise-erp',
  },
  {
    id: 'tradeflow-lite',
    name: 'TradeFlow Lite',
    category: 'Enterprise',
    status: 'Released',
    description:
      'Cloud-based Trading ERP for import-export businesses — multi-warehouse inventory, double-entry accounting, CRM, and manufacturing in one system.',
    iconName: 'Warehouse',
    technologies: ['Go', 'Fiber', 'Next.js', 'PostgreSQL'],
    tags: ['Trading ERP', 'Multi-Warehouse', 'Accounting', 'SaaS'],
    highlights: [
      'Started as a 13-module trading/inventory tool and grew, module by module, into a full double-entry Trading ERP without a rewrite.',
      'General ledger, bank reconciliation, FX revaluation, and VAT export run alongside day-to-day purchases and sales.',
      'Multi-warehouse stock, landed cost, and partial receiving track goods from a Bangladesh supplier through to a Dubai/GCC customer.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/tradeflow-lite',
  },
  {
    id: 'ocs',
    name: 'OCS — Capital Markets Platform',
    category: 'Enterprise',
    status: 'Beta',
    description:
      'Back-office platform for Bangladeshi brokerages — client KYC, DSE-rule order management, trade settlement, and CDBL reconciliation.',
    iconName: 'LineChart',
    technologies: ['Go', 'Gin', 'PostgreSQL', 'React'],
    tags: ['Capital Markets', 'DSE/CSE', 'Compliance', 'Beta'],
    highlights: [
      'Sixteen back-office domains — client KYC, DSE-rule order management, trade settlement, compliance, CDBL reconciliation — wired end-to-end in one Go service.',
      'Built deliberately as a single cohesive platform first, with a 32-service architecture on the roadmap as transaction volume grows.',
      'Matches real DSE/CSE market mechanics: T+2 settlement, maker-checker approvals, and BEFTN payment processing.',
    ],
    screenshot: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products/ocs',
  },
];
