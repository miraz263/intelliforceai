export interface PartnerLogoItem {
  id: string;
  name: string;
  category: string;
  logoText: string;
  badgeText: string;
  tooltipDescription: string;
  svgIconName: string;
  websiteUrl: string;
}

export interface PartnersConfig {
  trustedBy: {
    badge: string;
    title: string;
    description: string;
    items: PartnerLogoItem[];
  };
  techPartners: {
    badge: string;
    title: string;
    description: string;
    items: PartnerLogoItem[];
  };
}

export const partnersConfig: PartnersConfig = {
  trustedBy: {
    badge: 'Enterprise Trust',
    title: 'Trusted by Leaders Across Key Global Sectors',
    description:
      'From Fortune 500 enterprises and federal government directorates to leading research universities and hyper-growth startups.',
    items: [
      {
        id: 'client-omnicorp',
        name: 'OmniCorp Logistics',
        category: 'Enterprise Clients',
        logoText: 'OMNICORP',
        badgeText: 'Enterprise',
        tooltipDescription: 'Global supply chain & distribution enterprise',
        svgIconName: 'Building2',
        websiteUrl: 'https://intelliforceai.ai',
      },
      {
        id: 'client-apex-fin',
        name: 'Apex Global Financial',
        category: 'Financial Institutions',
        logoText: 'APEX FIN',
        badgeText: 'Finance',
        tooltipDescription: 'High-frequency transactional banking leader',
        svgIconName: 'Landmark',
        websiteUrl: 'https://intelliforceai.ai',
      },
      {
        id: 'client-fed-cyber',
        name: 'Federal Cyber Defense',
        category: 'Government Organizations',
        logoText: 'FED CYBER',
        badgeText: 'Government',
        tooltipDescription: 'Federal zero-trust security directorate',
        svgIconName: 'Shield',
        websiteUrl: 'https://intelliforceai.ai',
      },
      {
        id: 'client-mit-labs',
        name: 'MIT AI Research Lab',
        category: 'Universities',
        logoText: 'MIT AI LAB',
        badgeText: 'University',
        tooltipDescription: 'Pioneering academic computer science center',
        svgIconName: 'GraduationCap',
        websiteUrl: 'https://intelliforceai.ai',
      },
      {
        id: 'client-quantum-ai',
        name: 'Quantum Leap Robotics',
        category: 'Startups',
        logoText: 'QUANTUM AI',
        badgeText: 'Startup',
        tooltipDescription: 'Autonomous robotics & hardware innovator',
        svgIconName: 'Zap',
        websiteUrl: 'https://intelliforceai.ai',
      },
      {
        id: 'client-veloce-telecom',
        name: 'Veloce Telecom',
        category: 'Technology Companies',
        logoText: 'VELOCE',
        badgeText: 'Tech',
        tooltipDescription: 'Global 5G communications provider',
        svgIconName: 'Radio',
        websiteUrl: 'https://intelliforceai.ai',
      },
    ],
  },
  techPartners: {
    badge: 'Technology Ecosystem',
    title: 'Integrated with Best-in-Class Platforms',
    description:
      'Seamlessly interoperable with leading cloud providers, AI frameworks, vector databases, and cybersecurity toolchains.',
    items: [
      {
        id: 'partner-aws',
        name: 'Amazon Web Services',
        category: 'Cloud Providers',
        logoText: 'AWS CLOUD',
        badgeText: 'Cloud',
        tooltipDescription: 'AWS Bedrock & GPU cluster infrastructure',
        svgIconName: 'Cloud',
        websiteUrl: 'https://aws.amazon.com',
      },
      {
        id: 'partner-nvidia',
        name: 'NVIDIA AI Ecosystem',
        category: 'AI Platforms',
        logoText: 'NVIDIA AI',
        badgeText: 'Hardware',
        tooltipDescription: 'TensorRT & CUDA acceleration engine',
        svgIconName: 'Cpu',
        websiteUrl: 'https://nvidia.com',
      },
      {
        id: 'partner-gcp',
        name: 'Google Cloud Platform',
        category: 'Cloud Providers',
        logoText: 'GCP CLOUD',
        badgeText: 'Cloud',
        tooltipDescription: 'Vertex AI & BigQuery integration',
        svgIconName: 'Globe',
        websiteUrl: 'https://cloud.google.com',
      },
      {
        id: 'partner-snowflake',
        name: 'Snowflake Data Cloud',
        category: 'Database',
        logoText: 'SNOWFLAKE',
        badgeText: 'Data',
        tooltipDescription: 'Enterprise data lakehouse synchronization',
        svgIconName: 'Database',
        websiteUrl: 'https://snowflake.com',
      },
      {
        id: 'partner-pytorch',
        name: 'PyTorch Foundation',
        category: 'Open Source',
        logoText: 'PYTORCH',
        badgeText: 'Open Source',
        tooltipDescription: 'Deep learning neural network framework',
        svgIconName: 'Code2',
        websiteUrl: 'https://pytorch.org',
      },
      {
        id: 'partner-paloalto',
        name: 'Palo Alto Networks',
        category: 'Cybersecurity',
        logoText: 'PALO ALTO',
        badgeText: 'Security',
        tooltipDescription: 'Zero-trust security & threat hunting',
        svgIconName: 'ShieldCheck',
        websiteUrl: 'https://paloaltonetworks.com',
      },
      {
        id: 'partner-docker',
        name: 'Docker Engine',
        category: 'DevOps',
        logoText: 'DOCKER',
        badgeText: 'DevOps',
        tooltipDescription: 'Containerized deployment & registry',
        svgIconName: 'Terminal',
        websiteUrl: 'https://docker.com',
      },
    ],
  },
};
