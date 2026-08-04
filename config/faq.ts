export type FAQCategory =
  | 'General & Architecture'
  | 'Security & Compliance'
  | 'Products & Multi-Agent OS'
  | 'Deployment & cPanel Hosting'
  | 'Pricing & Enterprise Support';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  tags: string[];
  isPopular?: boolean;
  relatedQuestionIds?: string[];
}

export interface FAQConfig {
  badge: string;
  title: string;
  description: string;
  faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  'General & Architecture',
  'Security & Compliance',
  'Products & Multi-Agent OS',
  'Deployment & cPanel Hosting',
  'Pricing & Enterprise Support',
];

export const faqConfig: FAQConfig = {
  badge: 'Frequently Asked Questions',
  title: 'Enterprise FAQ & Technical Knowledge Base',
  description:
    'Everything you need to know about IntelliForceAI multi-agent architecture, static export deployment, zero-trust security, and SLA contracts.',
  faqs: [
    {
      id: 'faq-static-export',
      question: 'How does Next.js Static Export work with standard cPanel shared hosting?',
      answer:
        'IntelliForceAI is compiled using Next.js 15 App Router configured with `output: "export"`. This generates 100% pre-rendered HTML, CSS, and JavaScript bundles inside the `out/` directory. You can upload the contents of `out/` directly to any cPanel shared hosting environment (public_html) with zero Node.js server requirements or backend runtime dependencies.',
      category: 'Deployment & cPanel Hosting',
      tags: ['Static Export', 'cPanel', 'Next.js', 'Hosting'],
      isPopular: true,
      relatedQuestionIds: ['faq-backend-php', 'faq-performance'],
    },
    {
      id: 'faq-backend-php',
      question: 'How are dynamic features like contact form emails processed without Node.js?',
      answer:
        'For client inquiries, our static export includes a standalone PHP backend script (`public/contact.php`) that compiles directly into `out/contact.php`. When users submit forms, client-side JS posts data to `contact.php`, which executes natively on Apache/Nginx in cPanel using PHP mail() or SMTP.',
      category: 'Deployment & cPanel Hosting',
      tags: ['PHP', 'cPanel', 'Forms', 'Backend'],
      isPopular: true,
    },
    {
      id: 'faq-multi-agent-architecture',
      question: 'What makes IntelliForceAI multi-agent swarms different from standard LLM APIs?',
      answer:
        'Standard LLMs execute linear single-prompt completions. IntelliForceAI 2.0 uses a decentralized multi-agent swarm architecture where specialized micro-agents cooperate over a high-throughput, lock-free Rust IPC bus. Agents autonomously self-heal, divide complex tasks, and run specialized tools concurrently.',
      category: 'Products & Multi-Agent OS',
      tags: ['Multi-Agent', 'Rust', 'Swarm', 'Architecture'],
      isPopular: true,
    },
    {
      id: 'faq-zero-trust-security',
      question: 'Is my company data used to train public AI models?',
      answer:
        'No. Never. IntelliForceAI operates under a strict zero-trust model isolation policy. Enterprise workloads run inside private VPC enclaves or air-gapped customer hardware. Your data, prompts, and fine-tuned weights remain 100% confidential and are never stored or used for model pre-training.',
      category: 'Security & Compliance',
      tags: ['Zero-Trust', 'Privacy', 'Compliance', 'VPC'],
      isPopular: true,
    },
    {
      id: 'faq-compliance-certifications',
      question: 'What security certifications and compliance standards do you support?',
      answer:
        'IntelliForceAI platforms comply with SOC2 Type II, ISO 27001, HIPAA (for healthcare variant analysis), and GDPR data sovereignty mandates. We support full air-gapped deployments for government and military defense directorates.',
      category: 'Security & Compliance',
      tags: ['SOC2', 'HIPAA', 'ISO27001', 'Government'],
    },
    {
      id: 'faq-performance',
      question: 'What kind of latency SLAs can enterprise clients expect?',
      answer:
        'Our high-frequency Rust & CUDA stream processing engine delivers sub-2ms latency for financial fraud detection, sub-50ms inter-agent IPC, and sub-200ms end-to-end voice synthesis.',
      category: 'General & Architecture',
      tags: ['Latency', 'CUDA', 'Rust', 'SLA'],
    },
    {
      id: 'faq-pricing-tiers',
      question: 'How are enterprise licenses and SLA contracts structured?',
      answer:
        'We offer flexible enterprise licensing models including Dedicated Single-Tenant VPC, Hybrid Cloud, and Air-Gapped On-Premises. All enterprise tier contracts include guaranteed 99.99% uptime SLAs and 24/7 dedicated support engineers.',
      category: 'Pricing & Enterprise Support',
      tags: ['Pricing', 'SLA', 'Enterprise', 'Support'],
    },
    {
      id: 'faq-support-channels',
      question: 'What support channels are provided for enterprise accounts?',
      answer:
        'Enterprise customers receive a dedicated Slack/Teams channel with senior AI engineers, 24/7 emergency phone escalation, 15-minute response SLAs, and quarterly architecture reviews.',
      category: 'Pricing & Enterprise Support',
      tags: ['Support', 'SLA', 'Slack', 'Enterprise'],
    },
  ],
};
