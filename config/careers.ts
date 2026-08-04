export type Department =
  | 'Engineering'
  | 'AI Research'
  | 'Product'
  | 'Design'
  | 'Security'
  | 'Operations';

export type JobLocation =
  | 'Remote - Worldwide'
  | 'San Francisco, CA'
  | 'Boston, MA'
  | 'London, UK';

export type JobType = 'Full-Time' | 'Contract' | 'Internship';

export type ExperienceLevel = 'Senior' | 'Staff' | 'Lead' | 'Entry / Intern';

export interface JobPosition {
  id: string;
  title: string;
  department: Department;
  location: JobLocation;
  type: JobType;
  experience: ExperienceLevel;
  description: string;
  requirements: string[];
  applyUrl: string;
  featured?: boolean;
}

export interface CareerBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface HiringStep {
  step: string;
  title: string;
  description: string;
}

export interface CareersConfig {
  badge: string;
  title: string;
  description: string;
  benefits: CareerBenefit[];
  culturePillars: string[];
  hiringProcess: HiringStep[];
  positions: JobPosition[];
}

export const departments: Department[] = [
  'Engineering',
  'AI Research',
  'Product',
  'Design',
  'Security',
  'Operations',
];

export const locations: JobLocation[] = [
  'Remote - Worldwide',
  'San Francisco, CA',
  'Boston, MA',
  'London, UK',
];

export const experiences: ExperienceLevel[] = ['Senior', 'Staff', 'Lead', 'Entry / Intern'];

export const careersConfig: CareersConfig = {
  badge: 'Join IntelliForceAI',
  title: 'Shape the Future of Autonomous Enterprise AI',
  description:
    'Work alongside world-class AI researchers and distributed systems engineers building self-governing multi-agent platforms.',
  benefits: [
    {
      title: 'Top-Tier Health & Wellness',
      description: 'Comprehensive 100% employer-covered medical, dental, and vision insurance for employees and dependents.',
      iconName: 'HeartPulse',
    },
    {
      title: 'Competitive Equity & Salary',
      description: 'Generous equity packages with early exercise options and top-percentile global benchmark compensation.',
      iconName: 'DollarSign',
    },
    {
      title: '100% Remote-First Flexibility',
      description: 'Work from anywhere in the world with flexible hours, home office stipends, and co-working allowances.',
      iconName: 'Globe',
    },
    {
      title: 'Unlimited Hardware Budget',
      description: 'Access to dedicated NVIDIA H100/A100 GPU clusters, top-spec MacBooks, and hardware customization.',
      iconName: 'Cpu',
    },
    {
      title: 'Learning & Conference Fund',
      description: '$5,000 annual budget for attending global AI conferences (NeurIPS, ICML, CVPR) and academic courses.',
      iconName: 'GraduationCap',
    },
    {
      title: 'Unlimited Paid Time Off',
      description: 'Flexible time off with a mandatory 4-week annual minimum to ensure sustainable peak performance.',
      iconName: 'Palmtree',
    },
  ],
  culturePillars: [
    'Autonomous Ownership & Zero Micromanagement',
    'Peer-Driven Research Excellence',
    'Open-Source First Philosophy',
    'Zero Server & Static Web Engineering',
  ],
  hiringProcess: [
    {
      step: '01',
      title: 'Application & Resume Review',
      description: 'Submit your portfolio or GitHub profile. Our team reviews submissions within 48 hours.',
    },
    {
      step: '02',
      title: 'Technical Deep Dive',
      description: 'A 60-minute technical discussion with a senior engineer focused on real-world system architecture.',
    },
    {
      step: '03',
      title: 'System Design & Code Challenge',
      description: 'Collaborative coding session building a distributed channel or model quantization pipeline.',
    },
    {
      step: '04',
      title: 'Founder Call & Offer',
      description: 'Final alignment chat with our co-founders followed by a transparent, competitive offer package.',
    },
  ],
  positions: [
    {
      id: 'job-staff-rust',
      title: 'Staff Rust & CUDA Systems Engineer',
      department: 'Engineering',
      location: 'Remote - Worldwide',
      type: 'Full-Time',
      experience: 'Staff',
      description:
        'Architect high-throughput multi-agent IPC channels and custom CUDA kernels for zero-copy memory pipelines.',
      requirements: ['5+ years Rust experience', 'CUDA C/C++ kernel optimization', 'Lock-free concurrency patterns'],
      applyUrl: 'mailto:careers@intelliforceai.ai?subject=Application:%20Staff%20Rust%20%26%20CUDA%20Engineer',
      featured: true,
    },
    {
      id: 'job-lead-agent-researcher',
      title: 'Lead Multi-Agent AI Research Scientist',
      department: 'AI Research',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      experience: 'Lead',
      description:
        'Pioneer emergent cooperation algorithms, reinforcement learning swarms, and autonomous agent reasoning frameworks.',
      requirements: ['Ph.D. in CS/AI or equivalent', 'Track record of NeurIPS/ICML publications', 'PyTorch / JAX mastery'],
      applyUrl: 'mailto:careers@intelliforceai.ai?subject=Application:%20Lead%20AI%20Research%20Scientist',
      featured: true,
    },
    {
      id: 'job-senior-frontend',
      title: 'Senior Static Web & Next.js Engineer',
      department: 'Engineering',
      location: 'Remote - Worldwide',
      type: 'Full-Time',
      experience: 'Senior',
      description:
        'Engineer static export Next.js App Router platforms with zero-flicker theme engines and Framer Motion UI systems.',
      requirements: ['4+ years Next.js & React', 'Tailwind CSS & Design Tokens', 'Static Export (`output: export`) experience'],
      applyUrl: 'mailto:careers@intelliforceai.ai?subject=Application:%20Senior%20Frontend%20Engineer',
      featured: true,
    },
    {
      id: 'job-ciso-security-engineer',
      title: 'Senior eBPF Cybersecurity Engineer',
      department: 'Security',
      location: 'Boston, MA',
      type: 'Full-Time',
      experience: 'Senior',
      description:
        'Build Linux kernel eBPF probes for real-time model isolation and zero-trust threat mitigation.',
      requirements: ['eBPF / C kernel programming', 'Zero-trust network architecture', 'Linux kernel internals'],
      applyUrl: 'mailto:careers@intelliforceai.ai?subject=Application:%20Senior%20eBPF%20Security%20Engineer',
    },
    {
      id: 'job-ai-product-manager',
      title: 'Principal Product Manager - AI Platform',
      department: 'Product',
      location: 'London, UK',
      type: 'Full-Time',
      experience: 'Staff',
      description:
        'Define product roadmap for enterprise multi-agent OS, SDK tools, and developer documentation ecosystems.',
      requirements: ['5+ years AI/Cloud PM', 'Developer SDK product experience', 'Strong technical background'],
      applyUrl: 'mailto:careers@intelliforceai.ai?subject=Application:%20Principal%20Product%20Manager',
    },
    {
      id: 'job-ai-research-intern',
      title: 'AI Research Fellow / PhD Intern (Fall 2026)',
      department: 'AI Research',
      location: 'Remote - Worldwide',
      type: 'Internship',
      experience: 'Entry / Intern',
      description:
        '3-to-6 month paid research fellowship focusing on neural voice synthesis, INT4 quantization, or LoRA-PEFT tuning.',
      requirements: ['Enrolled in Ph.D. or Master program in CS/AI', 'Strong PyTorch coding skills'],
      applyUrl: 'mailto:careers@intelliforceai.ai?subject=Application:%20AI%20Research%20Fellowship%20Intern',
      featured: true,
    },
  ],
};
