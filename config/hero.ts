export interface HeroStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TrustItem {
  name: string;
  category: string;
  logoText: string;
}

export interface HeroConfig {
  badge: {
    text: string;
    link: string;
  };
  headline: {
    prefix: string;
    middle: string;
    highlight: string;
  };
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  stats: HeroStat[];
  trust: TrustItem[];
}

export const heroConfig: HeroConfig = {
  badge: {
    text: 'Introducing IntelliForceAI 2.0 Autonomous Engine',
    link: '/products',
  },
  headline: {
    prefix: 'Enterprise AI',
    middle: 'Built for',
    highlight: 'Tomorrow.',
  },
  description:
    'Architecting autonomous intelligence, fine-tuned LLMs, and self-healing cloud infrastructure for global enterprise digital transformation.',
  primaryCta: {
    text: 'Explore Products',
    href: '/products',
  },
  secondaryCta: {
    text: 'Book Consultation',
    href: '/contact',
  },
  stats: [
    {
      id: 'projects',
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Enterprise deployments worldwide',
    },
    {
      id: 'clients',
      value: 120,
      suffix: '+',
      label: 'Fortune 500 Clients',
      description: 'Trusted by global industry leaders',
    },
    {
      id: 'countries',
      value: 45,
      suffix: '+',
      label: 'Countries Active',
      description: 'Global multi-region footprint',
    },
    {
      id: 'engineers',
      value: 250,
      suffix: '+',
      label: 'AI Engineers',
      description: 'World-class researchers & engineers',
    },
    {
      id: 'accuracy',
      value: 99.9,
      suffix: '%',
      label: 'Success Rate',
      description: 'Uptime & accuracy guarantee',
    },
  ],
  trust: [
    { name: 'NVIDIA AI Ecosystem', category: 'Hardware Partner', logoText: 'NVIDIA' },
    { name: 'Google Cloud Platform', category: 'Cloud Infrastructure', logoText: 'GCP' },
    { name: 'Microsoft Azure', category: 'Enterprise Integration', logoText: 'AZURE' },
    { name: 'Amazon Web Services', category: 'Cloud Architecture', logoText: 'AWS' },
    { name: 'Snowflake Data', category: 'Data Infrastructure', logoText: 'SNOWFLAKE' },
    { name: 'Databricks AI', category: 'Lakehouse Partner', logoText: 'DATABRICKS' },
    { name: 'OpenAI Enterprise', category: 'Model Partner', logoText: 'OPENAI' },
    { name: 'Anthropic Claude', category: 'Safety Research', logoText: 'ANTHROPIC' },
  ],
};
