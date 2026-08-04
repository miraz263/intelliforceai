export type LeadershipCategory =
  | 'Founders'
  | 'Executives'
  | 'Engineering'
  | 'Research'
  | 'Advisors';

export interface LeaderProfile {
  id: string;
  name: string;
  position: string;
  category: LeadershipCategory;
  photo: string;
  biography: string;
  experience: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  featured?: boolean;
}

export interface LeadershipConfig {
  badge: string;
  title: string;
  description: string;
  team: LeaderProfile[];
}

export const leadershipCategories: LeadershipCategory[] = [
  'Founders',
  'Executives',
  'Engineering',
  'Research',
  'Advisors',
];

export const leadershipConfig: LeadershipConfig = {
  badge: 'World-Class Team',
  title: 'Meet Our Executive Leadership & AI Pioneers',
  description:
    'Engineers, researchers, and tech visionaries building the next frontier of autonomous multi-agent systems.',
  team: [
    {
      id: 'leader-alexander-vance',
      name: 'Dr. Alexander Vance',
      position: 'Co-Founder & Chief Executive Officer',
      category: 'Founders',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      biography:
        'Pioneer in distributed neural systems and multi-agent reinforcement learning. Former Principal AI Scientist leading autonomous agent initiatives.',
      experience: 'Ex-Google DeepMind • Ph.D. MIT CS',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'alexander@intelliforceai.ai',
      featured: true,
    },
    {
      id: 'leader-elena-rostova',
      name: 'Dr. Elena Rostova',
      position: 'Co-Founder & Chief AI Architect',
      category: 'Founders',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      biography:
        'Architect of IntelliForceAI core engine. Specialist in constrained LLM reasoning, CUDA tensor optimization, and zero-trust enclaves.',
      experience: 'Ex-OpenAI Research • Ph.D. Stanford AI',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'elena@intelliforceai.ai',
      featured: true,
    },
    {
      id: 'leader-marcus-sterling',
      name: 'Marcus Sterling',
      position: 'Chief Operating Officer',
      category: 'Executives',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
      biography:
        'Scaled high-growth enterprise software companies from series A to global IPO. Oversees worldwide business operations and strategic client partnerships.',
      experience: 'Ex-Snowflake VP Ops • MBA Harvard',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'marcus@intelliforceai.ai',
      featured: true,
    },
    {
      id: 'leader-sarah-jenkins',
      name: 'Dr. Sarah Jenkins',
      position: 'Director of AI & Genomic Research',
      category: 'Research',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      biography:
        'Leads deep learning biology research. Author of 25+ published papers in AlphaFold structural prediction and variant calling automation.',
      experience: 'Ex-Broad Institute • Ph.D. Harvard Medical',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'sarah@intelliforceai.ai',
      featured: true,
    },
    {
      id: 'leader-david-chen',
      name: 'David Chen',
      position: 'VP of Engineering & Distributed Infrastructure',
      category: 'Engineering',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
      biography:
        'Built sub-millisecond trading gateways and geo-distributed GPU cluster schedulers handling millions of concurrent requests.',
      experience: 'Ex-AWS Infrastructure • M.S. Berkeley',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'david@intelliforceai.ai',
    },
    {
      id: 'leader-aris-thorne',
      name: 'Dr. Aris Thorne',
      position: 'Head of Voice AI & Multimodal Models',
      category: 'Research',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      biography:
        'Expert in neural audio codec synthesis and streaming speech models enabling sub-200ms real-time voice interactions.',
      experience: 'Ex-Meta AI Research • Ph.D. CMU Speech',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'aris@intelliforceai.ai',
    },
    {
      id: 'leader-victoria-palmer',
      name: 'Victoria Palmer',
      position: 'Chief Information Security Officer',
      category: 'Executives',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
      biography:
        'Leads air-gapped zero-trust model compliance, threat mitigation, and federal SOC2 Type II certifications.',
      experience: 'Ex-Palo Alto Networks • M.S. Johns Hopkins',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'victoria@intelliforceai.ai',
    },
    {
      id: 'leader-prof-richard-feynman',
      name: 'Prof. Richard Vance',
      position: 'Senior Scientific Advisor',
      category: 'Advisors',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
      biography:
        'Renowned theoretical physicist and AI ethics scholar advising IntelliForceAI on quantum-resistant neural security models.',
      experience: 'Professor Chair at Caltech',
      linkedinUrl: 'https://linkedin.com',
      githubUrl: 'https://github.com',
      email: 'richard@intelliforceai.ai',
    },
  ],
};
