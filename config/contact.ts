export interface OfficeLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  mapEmbedUrl: string;
  isHeadquarters?: boolean;
}

export interface DepartmentContact {
  title: string;
  email: string;
  phone: string;
  description: string;
  iconName: string;
}

export interface ContactConfig {
  badge: string;
  title: string;
  description: string;
  businessHours: string;
  timezone: string;
  offices: OfficeLocation[];
  departments: DepartmentContact[];
}

export const contactConfig: ContactConfig = {
  badge: 'Get in Touch',
  title: 'Let\'s Discuss Your Enterprise AI Strategy',
  description:
    'Have questions about our multi-agent platforms, zero-trust VPC models, or custom AI deployments? Reach out to our engineering team.',
  businessHours: 'Monday - Friday: 8:00 AM - 6:00 PM EST',
  timezone: '24/7 Global Support Coverage for Mission-Critical SLAs',
  departments: [
    {
      title: 'Enterprise Sales',
      email: 'sales@intelliforceai.ai',
      phone: '+1 (800) 555-0199',
      description: 'Custom platform demos, pricing tiers, and SLA contracts.',
      iconName: 'Building2',
    },
    {
      title: 'Customer Support',
      email: 'support@intelliforceai.ai',
      phone: '+1 (800) 555-0198',
      description: '24/7 technical support and cloud incident handling.',
      iconName: 'LifeBuoy',
    },
    {
      title: 'Careers & Talent',
      email: 'careers@intelliforceai.ai',
      phone: '+1 (800) 555-0197',
      description: 'Join our research, engineering, and product teams.',
      iconName: 'Users',
    },
    {
      title: 'General Enquiries',
      email: 'hello@intelliforceai.ai',
      phone: '+1 (800) 555-0196',
      description: 'Media inquiries, research partnerships, and general questions.',
      iconName: 'Mail',
    },
  ],
  offices: [
    {
      id: 'sf-hq',
      city: 'San Francisco',
      name: 'Global Headquarters',
      address: '500 Howard Street, Suite 400, San Francisco, CA 94105, USA',
      phone: '+1 (415) 555-0100',
      email: 'sf@intelliforceai.ai',
      coordinates: { lat: 37.7886, lng: -122.3976 },
      mapEmbedUrl:
        'https://maps.google.com/maps?q=500%20Howard%20Street%20San%20Francisco%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed',
      isHeadquarters: true,
    },
    {
      id: 'boston-lab',
      city: 'Boston / Cambridge',
      name: 'AI Research & Systems Lab',
      address: '100 Technology Square, Cambridge, MA 02139, USA',
      phone: '+1 (617) 555-0120',
      email: 'boston@intelliforceai.ai',
      coordinates: { lat: 42.3636, lng: -71.0906 },
      mapEmbedUrl:
        'https://maps.google.com/maps?q=100%20Technology%20Square%20Cambridge%20MA&t=&z=14&ie=UTF8&iwloc=&output=embed',
    },
    {
      id: 'london-office',
      city: 'London',
      name: 'EMEA Enterprise Hub',
      address: '1 Canada Square, Canary Wharf, London E14 5AA, UK',
      phone: '+44 20 7946 0990',
      email: 'london@intelliforceai.ai',
      coordinates: { lat: 51.5048, lng: -0.0195 },
      mapEmbedUrl:
        'https://maps.google.com/maps?q=1%20Canada%20Square%20London&t=&z=14&ie=UTF8&iwloc=&output=embed',
    },
  ],
};
