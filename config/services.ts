export type ServiceCategory =
  | 'All'
  | 'Artificial Intelligence'
  | 'Machine Learning'
  | 'LLM Solutions'
  | 'Automation'
  | 'Cloud'
  | 'Cybersecurity'
  | 'DevOps'
  | 'Data Engineering'
  | 'Software Development'
  | 'Mobile Apps'
  | 'Web Applications'
  | 'UI UX';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  href: string;
  popular?: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  'All',
  'Artificial Intelligence',
  'Machine Learning',
  'LLM Solutions',
  'Automation',
  'Cloud',
  'Cybersecurity',
  'DevOps',
  'Data Engineering',
  'Software Development',
  'Mobile Apps',
  'Web Applications',
  'UI UX',
];

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-autonomous',
    category: 'Artificial Intelligence',
    title: 'Autonomous AI Agents',
    description: 'Self-governing multi-agent systems designed for complex enterprise decision orchestration.',
    iconName: 'Cpu',
    features: ['Multi-agent orchestration', 'Goal-driven reasoning', 'Continuous learning', 'Real-time telemetry'],
    href: '/services#ai',
    popular: true,
  },
  {
    id: 'ml-predictive',
    category: 'Machine Learning',
    title: 'Predictive Analytics Models',
    description: 'Enterprise deep learning architectures for high-precision time-series forecasting and anomaly detection.',
    iconName: 'Brain',
    features: ['Custom neural networks', 'Automated ML pipelines', 'Sub-millisecond inference', 'Model drift monitoring'],
    href: '/services#ml',
  },
  {
    id: 'llm-custom',
    category: 'LLM Solutions',
    title: 'Custom LLM Fine-Tuning',
    description: 'Domain-adapted large language models optimized for proprietary enterprise data and strict privacy.',
    iconName: 'Sparkles',
    features: ['LoRA & PEFT tuning', 'RAG vector knowledgebase', 'Zero-data leak guarantee', 'Latency optimization'],
    href: '/services#llm',
    popular: true,
  },
  {
    id: 'automation-rpa',
    category: 'Automation',
    title: 'Self-Healing Robotic Automation',
    description: 'Next-generation intelligent RPA that dynamically adapts to UI changes and business logic updates.',
    iconName: 'Zap',
    features: ['Dynamic DOM parsing', 'Automated exception handling', 'API & legacy integration', 'End-to-end audit trails'],
    href: '/services#automation',
  },
  {
    id: 'cloud-gpu',
    category: 'Cloud',
    title: 'Distributed GPU Cloud Infrastructure',
    description: 'High-throughput cluster orchestration built for large-scale model training and edge inference.',
    iconName: 'Cloud',
    features: ['Auto-scaling GPU clusters', 'Multi-cloud federation', 'Cost-optimized routing', '99.99% SLA uptime'],
    href: '/services#cloud',
  },
  {
    id: 'security-zero-trust',
    category: 'Cybersecurity',
    title: 'AI Cyber Threat Defense',
    description: 'Autonomous threat hunting and real-time zero-trust security monitoring powered by predictive AI.',
    iconName: 'ShieldCheck',
    features: ['Real-time breach prevention', 'AI model guardrails', 'Automated patch deployment', 'Compliance auditing'],
    href: '/services#cybersecurity',
    popular: true,
  },
  {
    id: 'devops-mlops',
    category: 'DevOps',
    title: 'Enterprise MLOps & CI/CD',
    description: 'Automated CI/CD pipelines tailored for machine learning models, artifact registries, and zero-downtime deployment.',
    iconName: 'Terminal',
    features: ['Automated model retraining', 'Canary deployments', 'Infrastructure as Code', 'Kubernetes management'],
    href: '/services#devops',
  },
  {
    id: 'data-engineering',
    category: 'Data Engineering',
    title: 'Real-Time Data Lakehouse',
    description: 'Ultra-low latency data pipelines connecting streaming sources to enterprise AI vector databases.',
    iconName: 'Database',
    features: ['Streaming ETL pipelines', 'Iceberg & Delta Lake', 'Vector search indexing', 'Automated data cleaning'],
    href: '/services#data',
  },
  {
    id: 'software-enterprise',
    category: 'Software Development',
    title: 'Enterprise Core Systems',
    description: 'Scalable backend architectures and microservices engineered for high concurrency and zero downtime.',
    iconName: 'Code2',
    features: ['Microservices architecture', 'High-throughput APIs', 'Strict type safety', 'Decoupled domain logic'],
    href: '/services#software',
  },
  {
    id: 'mobile-cross-platform',
    category: 'Mobile Apps',
    title: 'AI-Powered Mobile Apps',
    description: 'Native & cross-platform mobile applications integrated with on-device machine learning models.',
    iconName: 'Smartphone',
    features: ['On-device AI inference', 'Offline-first sync', 'iOS & Android native', 'Smooth 120fps motion'],
    href: '/services#mobile',
  },
  {
    id: 'web-applications',
    category: 'Web Applications',
    title: 'Static Export Web Platforms',
    description: 'World-class Web applications built on Next.js App Router, engineered for static export and cPanel hosting.',
    iconName: 'Globe',
    features: ['Static HTML export', 'Zero-server architecture', 'Sub-second page loads', '100+ page scalability'],
    href: '/services#web',
    popular: true,
  },
  {
    id: 'ui-ux-design',
    category: 'UI UX',
    title: 'Enterprise Design Systems',
    description: 'State-of-the-art visual identity, component libraries, and interactive prototype systems.',
    iconName: 'Layout',
    features: ['Design token architecture', 'WCAG 2.1 AA accessibility', 'Glassmorphism aesthetics', 'Framer Motion presets'],
    href: '/services#uiux',
  },
];
