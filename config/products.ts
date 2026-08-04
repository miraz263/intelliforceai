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
    screenshot: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
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
    screenshot: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    demoUrl: '/products',
    detailsUrl: '/products',
  },
];
