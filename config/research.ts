export type ResearchStatus = 'Published' | 'In Review' | 'Preprint' | 'Patent Pending';

export type ResearchCategory =
  | 'AI Research'
  | 'Computer Vision'
  | 'Voice AI'
  | 'Large Language Models'
  | 'Agentic AI'
  | 'Cybersecurity'
  | 'Cloud Native'
  | 'Distributed Systems'
  | 'Edge Computing'
  | 'Robotics';

export interface ResearchPaperItem {
  id: string;
  title: string;
  category: ResearchCategory;
  status: ResearchStatus;
  date: string;
  authors: string[];
  abstract: string;
  illustration: string;
  technology: string[];
  publicationUrl: string;
  pdfUrl: string;
  featured?: boolean;
}

export interface RoadmapMilestone {
  year: string;
  quarter: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  tags: string[];
}

export interface ResearchConfig {
  badge: string;
  title: string;
  description: string;
  papers: ResearchPaperItem[];
  roadmap: RoadmapMilestone[];
}

export const researchConfig: ResearchConfig = {
  badge: 'Research & Innovation',
  title: 'Pioneering AI Papers & Technology Roadmap',
  description:
    'Explore our breakthroughs in multi-agent orchestration, ultra-low latency voice synthesis, zero-trust cybersecurity, and edge quantization.',
  papers: [
    {
      id: 'paper-agentic-ai',
      title: 'Emergent Multi-Agent Cooperation in Constrained Enterprise Environments',
      category: 'Agentic AI',
      status: 'Published',
      date: 'May 2026',
      authors: ['Dr. Sarah Jenkins', 'Dr. Aris Thorne', 'IntelliForceAI Research Team'],
      abstract:
        'We present IntelliForceAI 2.0, a decentralized framework for autonomous agent swarms capable of self-healing task execution with zero human intervention.',
      illustration: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      technology: ['PyTorch', 'Rust', 'Multi-Agent Systems', 'Reinforcement Learning'],
      publicationUrl: '/research',
      pdfUrl: '/research',
      featured: true,
    },
    {
      id: 'paper-llm-tuning',
      title: 'LoRA-PEFT: Parameter Efficient Fine-Tuning for Private Domain LLMs',
      category: 'Large Language Models',
      status: 'Published',
      date: 'March 2026',
      authors: ['Marcus Vance', 'Dr. Elena Rostova'],
      abstract:
        'A novel quantization and adapter routing strategy reducing memory footprint by 75% while matching full parameter fine-tuning performance.',
      illustration: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
      technology: ['LLM', 'LoRA', 'PEFT', 'Transformer'],
      publicationUrl: '/research',
      pdfUrl: '/research',
      featured: true,
    },
    {
      id: 'paper-vision-tracking',
      title: 'Sub-Millisecond Spatial Object Tracking via Optical Tensor Pipeline',
      category: 'Computer Vision',
      status: 'In Review',
      date: 'April 2026',
      authors: ['David Sterling', 'IntelliForceAI Vision Group'],
      abstract:
        'Accelerating multi-camera spatial video streams on edge TensorRT hardware with sub-millisecond bounding box prediction SLA.',
      illustration: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop',
      technology: ['YOLOv8', 'TensorRT', 'CUDA', 'OpenCV'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
    {
      id: 'paper-voice-latency',
      title: 'Sub-200ms Conversational Voice Synthesis using Streamed Neural Codecs',
      category: 'Voice AI',
      status: 'Preprint',
      date: 'February 2026',
      authors: ['Dr. Aris Thorne', 'Veloce Research Team'],
      abstract:
        'Zero-shot speaker cloning and streaming acoustic token generation enabling natural low-latency voice interactions.',
      illustration: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
      technology: ['Whisper', 'Neural Codec', 'WebSockets', 'C++'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
    {
      id: 'paper-cyber-ebpf',
      title: 'Autonomous Threat Hunting via eBPF Kernel Probe Analytics',
      category: 'Cybersecurity',
      status: 'Patent Pending',
      date: 'January 2026',
      authors: ['Elena Rostova', 'Federal Cyber Defense Team'],
      abstract:
        'Deep packet and syscall inspection at the Linux kernel layer using automated AI classifier models for zero-day breach prevention.',
      illustration: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
      technology: ['eBPF', 'Linux Kernel', 'Go', 'Machine Learning'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
    {
      id: 'paper-cloud-static',
      title: 'Zero-Server Architecture for Static Export Enterprise Web Apps',
      category: 'Cloud Native',
      status: 'Published',
      date: 'June 2026',
      authors: ['IntelliForceAI Core Engineering'],
      abstract:
        'Designing Next.js 15 App Router applications for 100% static HTML export deployable directly on shared cPanel hosting.',
      illustration: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      technology: ['Next.js', 'Static Export', 'TypeScript', 'Tailwind'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
    {
      id: 'paper-distributed-gpu',
      title: 'Tensor Parallelism Across Geo-Distributed GPU Clusters',
      category: 'Distributed Systems',
      status: 'Preprint',
      date: 'March 2026',
      authors: ['IntelliForceAI Systems Lab'],
      abstract:
        'High-throughput model training routing algorithms over lossy wide-area networks using pipelined gradient compression.',
      illustration: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
      technology: ['Distributed GPU', 'NCCL', 'CUDA', 'Go'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
    {
      id: 'paper-edge-quant',
      title: 'INT4 Model Quantization for On-Device Mobile AI Inference',
      category: 'Edge Computing',
      status: 'Published',
      date: 'April 2026',
      authors: ['Mobile Edge AI Team'],
      abstract:
        'Extremely lightweight neural quantization algorithms enabling 3B parameter models to run natively on mobile NPUs.',
      illustration: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      technology: ['INT4 Quantization', 'NPU', 'Tauri', 'Swift'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
    {
      id: 'paper-robotics-kinematics',
      title: 'Real-Time Neural Motion Planning for High-DOF Industrial Robots',
      category: 'Robotics',
      status: 'In Review',
      date: 'May 2026',
      authors: ['Quantum Robotics Lab'],
      abstract:
        'Combining predictive neural trajectory collision avoidance with real-time kinematic control loops for industrial automation.',
      illustration: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
      technology: ['ROS 2', 'Neural Kinematics', 'C++', 'PyTorch'],
      publicationUrl: '/research',
      pdfUrl: '/research',
    },
  ],
  roadmap: [
    {
      year: '2024',
      quarter: 'Q4',
      title: 'IntelliForceAI 1.0 Core Engine Release',
      description: 'First commercial deployment of multi-agent orchestration core with sub-50ms RPC framework.',
      status: 'Completed',
      tags: ['Core Engine', 'Agents', 'RPC'],
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'Zero-Trust Model Isolation VPC',
      description: 'Military-grade private VPC model sandbox ensuring zero enterprise data leaks.',
      status: 'Completed',
      tags: ['Security', 'VPC', 'Zero-Trust'],
    },
    {
      year: '2026',
      quarter: 'Q3',
      title: 'IntelliForceAI 2.0 Autonomous Platform',
      description: 'Self-healing AI swarms, sub-200ms voice agents, and static export Web deployment.',
      status: 'In Progress',
      tags: ['Autonomous AI', 'Voice AI', 'Static Export'],
    },
    {
      year: '2027',
      quarter: 'Q1',
      title: 'Quantum Neural Hardware Integration',
      description: 'Next-generation quantum-resistant encryption & hybrid optical neural processor support.',
      status: 'Planned',
      tags: ['Quantum AI', 'Optical Computing', 'Next-Gen'],
    },
  ],
};
