export type CaseStudyIndustry =
  | 'All'
  | 'AI'
  | 'Healthcare'
  | 'Finance'
  | 'Government'
  | 'Education'
  | 'Enterprise';

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: CaseStudyIndustry;
  coverImage: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: string[];
  technology: string[];
  href: string;
  featured?: boolean;
}

export const caseStudyIndustries: CaseStudyIndustry[] = [
  'All',
  'AI',
  'Healthcare',
  'Finance',
  'Government',
  'Education',
  'Enterprise',
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'healthcare-genomics',
    title: 'Accelerating Genomic Variant Analysis with Deep Learning',
    client: 'Global Health Genomics Inc.',
    industry: 'Healthcare',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    timeline: '12 Weeks',
    challenge: 'Sequencing 50,000+ patient genomes daily required days of manual bioinformatician review per sample.',
    solution: 'Deployed IntelliForceAI Vision & Fine-tuned LLM pipelines to automate variant calling and clinical scoring in real-time.',
    results: ['99.8% Diagnostic Accuracy', '85% Processing Speedup', '$14M Annual Ops Savings'],
    technology: ['PyTorch', 'AlphaFold API', 'CUDA', 'FastAPI'],
    href: '/research',
    featured: true,
  },
  {
    id: 'finance-fraud',
    title: 'Sub-Millisecond High-Frequency Fraud Detection Platform',
    client: 'Apex Global Financial Group',
    industry: 'Finance',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    timeline: '8 Weeks',
    challenge: 'Processing 100M+ daily card transactions while maintaining sub-5ms SLA latency for fraudulent pattern detection.',
    solution: 'Engineered a Rust & CUDA accelerated neural stream processing engine integrated into their core transaction gateway.',
    results: ['< 2ms Latency SLA', '94% Reduction in False Positives', '$45M Prevented Fraud'],
    technology: ['Rust', 'CUDA', 'Kafka', 'PostgreSQL'],
    href: '/research',
    featured: true,
  },
  {
    id: 'government-threat',
    title: 'Zero-Trust AI Threat Mitigation & Cyber Infrastructure Defense',
    client: 'Federal Cyber Defense Directorate',
    industry: 'Government',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    timeline: '16 Weeks',
    challenge: 'Securing multi-agency cloud networks against zero-day nation-state automated cyber intrusion attacks.',
    solution: 'Implemented IntelliForceAI Sentinel Cyber Shield for autonomous zero-trust anomaly detection and automated isolation.',
    results: ['Zero Security Breaches', '100% Threat Isolation', 'Air-Gapped Compliance'],
    technology: ['eBPF', 'Go', 'Kubernetes', 'Python'],
    href: '/research',
  },
  {
    id: 'education-adaptive',
    title: 'Personalized AI Tutoring Engine for 2 Million Students',
    client: 'EduTech Global Learning Consortium',
    industry: 'Education',
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    timeline: '10 Weeks',
    challenge: 'Scaling 1-on-1 personalized STEM tutoring to millions of students with different learning paces.',
    solution: 'Built an adaptive LLM conversational tutor with real-time concept mastery tracking and multimodal feedback.',
    results: ['2.4x Higher Exam Pass Rate', '88% Student Engagement', '2M+ Active Learners'],
    technology: ['Next.js', 'LLM Fine-Tuning', 'WebSockets', 'Vector Database'],
    href: '/research',
  },
  {
    id: 'enterprise-supply-chain',
    title: 'Autonomous Supply Chain Inventory & Demand Forecasting',
    client: 'OmniCorp Global Logistics',
    industry: 'Enterprise',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    timeline: '14 Weeks',
    challenge: 'Volatile global supply chains caused over $80M in annual inventory holding costs and stockout losses.',
    solution: 'Deployed BlackMarlin OMS AI prediction models across 350 global distribution warehouses.',
    results: ['38% Lower Holding Cost', '99.4% Stock Availability', '$28M Annual Savings'],
    technology: ['Python', 'GraphQL', 'Kafka', 'Docker'],
    href: '/research',
    featured: true,
  },
  {
    id: 'ai-voice-customer',
    title: 'Conversational Voice AI Engine for Global Telecom Support',
    client: 'Veloce Telecommunications',
    industry: 'AI',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    timeline: '6 Weeks',
    challenge: 'Call centers experienced 45-minute average wait times during peak network maintenance outages.',
    solution: 'Deployed ultra-low latency Voice AI agents capable of resolving 75% of customer inquiries autonomously.',
    results: ['Sub-200ms Latency', '75% Call Deflection', '96% CSAT Rating'],
    technology: ['Whisper', 'WebSockets', 'PyTorch', 'TypeScript'],
    href: '/research',
  },
];
