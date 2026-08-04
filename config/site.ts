export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  mainNav: NavItem[];
  footerNav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: 'IntelliForceAI',
  description: 'Next-Generation Enterprise AI & Autonomous Systems',
  url: 'https://intelliforceai.ai',
  ogImage: 'https://intelliforceai.ai/og.png',
  links: {
    twitter: 'https://twitter.com/intelliforceai',
    github: 'https://github.com/intelliforceai',
    linkedin: 'https://linkedin.com/company/intelliforceai',
  },
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Products', href: '/products' },
    { title: 'Research', href: '/research' },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
  ],
  footerNav: [
    { title: 'FAQ', href: '/faq' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ],
};
