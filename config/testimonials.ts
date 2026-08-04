export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  highlight: string;
}

export interface TestimonialsConfig {
  badge: string;
  title: string;
  description: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  badge: 'Client Testimonials',
  title: 'Trusted by Fortune 500 Tech Leaders',
  description:
    'Hear directly from Chief Technology Officers and AI Research Directors running mission-critical workloads on IntelliForceAI.',
  testimonials: [
    {
      id: 't-1',
      name: 'Dr. Sarah Jenkins',
      role: 'Chief Technology Officer',
      company: 'Global Health Genomics',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote:
        'IntelliForceAI reduced our genomic variant processing time from days to under two hours. The multi-agent orchestration architecture is unlike anything else on the market.',
      highlight: 'Reduced processing time from days to hours',
    },
    {
      id: 't-2',
      name: 'Marcus Vance',
      role: 'VP of Infrastructure & Cloud',
      company: 'Apex Global Financial',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote:
        'Sub-2ms transaction fraud detection latency was our non-negotiable benchmark. IntelliForceAI Rust & CUDA pipeline delivered 1.8ms at peak load without a single dropped packet.',
      highlight: 'Sub-2ms transaction latency SLA',
    },
    {
      id: 't-3',
      name: 'Elena Rostova',
      role: 'Chief Information Security Officer',
      company: 'Sentinel Defense Directorate',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote:
        'Zero-trust model isolation and private VPC deployment gave us the military-grade security posture required for federal government data compliance.',
      highlight: 'Zero-trust federal compliance achieved',
    },
    {
      id: 't-4',
      name: 'David Sterling',
      role: 'Global Head of Supply Chain AI',
      company: 'OmniCorp Enterprise Systems',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote:
        'Integrating BlackMarlin OMS across our 350 warehouses slashed inventory holding costs by 38% in the first quarter alone. The ROI was virtually immediate.',
      highlight: '38% reduction in inventory costs',
    },
    {
      id: 't-5',
      name: 'Dr. Aris Thorne',
      role: 'Director of AI & Learning Research',
      company: 'EduTech Consortium',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote:
        'Scaling an interactive AI tutor to 2 million active students was seamless. The voice AI latency is sub-200ms and feels as natural as speaking with a human professor.',
      highlight: 'Sub-200ms conversational voice AI',
    },
  ],
};
