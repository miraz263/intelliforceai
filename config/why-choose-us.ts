export interface StrengthItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metric: string;
  metricLabel: string;
  highlights: string[];
}

export interface WhyChooseUsConfig {
  badge: string;
  title: string;
  description: string;
  strengths: StrengthItem[];
}

export const whyChooseUsConfig: WhyChooseUsConfig = {
  badge: 'Why IntelliForceAI',
  title: 'Built for Uncompromised Enterprise Scale',
  description:
    'Discover how our breakthrough AI research, zero-trust infrastructure, and elite global engineering teams drive transformation.',
  strengths: [
    {
      id: 'enterprise-quality',
      step: '01',
      title: 'Enterprise Quality',
      subtitle: 'Zero-compromise reliability & compliance',
      description:
        'Engineered to meet strict SOC 2 Type II, ISO 27001, and HIPAA compliance standards with rigorous automated testing pipelines.',
      iconName: 'Award',
      metric: '99.99%',
      metricLabel: 'Uptime SLA',
      highlights: ['SOC 2 Type II Certified', 'Automated QA Pipelines', 'ISO 27001 Compliant'],
    },
    {
      id: 'expert-team',
      step: '02',
      title: 'Expert Team',
      subtitle: 'World-class AI researchers & engineers',
      description:
        'Our engineering workforce includes 250+ PhD computer scientists, published AI researchers, and veteran cloud architects.',
      iconName: 'Users',
      metric: '250+',
      metricLabel: 'PhD Researchers',
      highlights: ['Top AI Lab Alumni', 'Dedicated Account Managers', 'Continuous R&D'],
    },
    {
      id: 'modern-technology',
      step: '03',
      title: 'Modern Technology',
      subtitle: 'Cutting-edge tech stack & frameworks',
      description:
        'Harnessing state-of-the-art neural architectures, PyTorch, Rust, CUDA, and static export web platforms for sub-second performance.',
      iconName: 'Cpu',
      metric: '10x',
      metricLabel: 'Faster Inference',
      highlights: ['Rust & CUDA Core', 'PyTorch 2.0 Engine', 'Static Export Web'],
    },
    {
      id: 'scalable-architecture',
      step: '04',
      title: 'Scalable Architecture',
      subtitle: 'High-concurrency distributed engine',
      description:
        'Designed for high throughput, effortlessly scaling from hundreds to 10M+ daily AI inferencing requests with zero bottleneck.',
      iconName: 'Server',
      metric: '10M+',
      metricLabel: 'Daily Inferences',
      highlights: ['Auto-scaling Clusters', 'Multi-region Failover', 'Sub-50ms Latency'],
    },
    {
      id: 'security-first',
      step: '05',
      title: 'Security First',
      subtitle: 'Zero-trust model & data isolation',
      description:
        'Private VPC model deployment ensures your proprietary data never leaks into public model training sets.',
      iconName: 'ShieldCheck',
      metric: '100%',
      metricLabel: 'Data Privacy',
      highlights: ['Zero-Leak Guarantee', 'Private VPC Isolation', 'Encrypted at Rest'],
    },
    {
      id: '247-support',
      step: '06',
      title: '24/7 Support',
      subtitle: 'Mission-critical response guarantees',
      description:
        'Around-the-clock technical support backed by a guaranteed 15-minute response SLA for production incidents.',
      iconName: 'Headphones',
      metric: '15m',
      metricLabel: 'Response SLA',
      highlights: ['24/7 Live Monitoring', 'Dedicated Escalation', 'Guaranteed SLA'],
    },
    {
      id: 'global-delivery',
      step: '07',
      title: 'Global Delivery',
      subtitle: 'Multi-region edge network deployment',
      description:
        'Deploy model endpoints across 45+ global edge data centers to deliver low latency to users anywhere on Earth.',
      iconName: 'Globe',
      metric: '45+',
      metricLabel: 'Global Data Centers',
      highlights: ['Edge Acceleration', 'Geo-distributed Routing', 'Compliance Localized'],
    },
    {
      id: 'innovation',
      step: '08',
      title: 'Continuous Innovation',
      subtitle: 'Breakthrough research to production',
      description:
        'Rapid R&D cycles bridge the gap between academic AI research papers and production-ready enterprise software.',
      iconName: 'Sparkles',
      metric: '50+',
      metricLabel: 'Patents Pending',
      highlights: ['Weekly Model Updates', 'Proprietary IP', 'Pioneering Research'],
    },
  ],
};
