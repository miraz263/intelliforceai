export type IndustryName =
  | 'Healthcare'
  | 'Finance'
  | 'Banking'
  | 'Capital Market'
  | 'Manufacturing'
  | 'Retail'
  | 'Government'
  | 'Education'
  | 'Telecommunications'
  | 'Energy'
  | 'Logistics'
  | 'Insurance';

export interface IndustryItem {
  id: string;
  name: IndustryName;
  iconName: string;
  illustration: string;
  description: string;
  solutions: string[];
  products: string[];
  benefits: string[];
  href: string;
}

export const industryNames: IndustryName[] = [
  'Healthcare',
  'Finance',
  'Banking',
  'Capital Market',
  'Manufacturing',
  'Retail',
  'Government',
  'Education',
  'Telecommunications',
  'Energy',
  'Logistics',
  'Insurance',
];

export const industriesData: IndustryItem[] = [
  {
    id: 'industry-healthcare',
    name: 'Healthcare',
    iconName: 'Activity',
    illustration: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    description: 'Transforming patient care, genomic sequencing, and medical diagnosis with private AI models.',
    solutions: ['Automated Genomic Variant Calling', 'Clinical NLP Chart Summarization', 'Real-Time ICU Diagnostic Alerts'],
    products: ['Vision AI', 'IntelliForceAI LLM', 'Document AI'],
    benefits: ['99.8% Diagnostic Accuracy', '85% Faster Lab Review', '$14M Annual Ops Savings'],
    href: '/industries',
  },
  {
    id: 'industry-finance',
    name: 'Finance',
    iconName: 'TrendingUp',
    illustration: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-low latency transactional fraud prevention and automated regulatory compliance pipelines.',
    solutions: ['Sub-2ms High-Frequency Fraud Scoring', 'AML Transaction Graph Analytics', 'Automated SEC Filing Audit'],
    products: ['Sentinel Shield', 'IntelliForceAI LLM', 'BlackMarlin OMS'],
    benefits: ['< 2ms SLA Latency', '94% Lower False Positives', '$45M Prevented Fraud'],
    href: '/industries',
  },
  {
    id: 'industry-banking',
    name: 'Banking',
    iconName: 'Landmark',
    illustration: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop',
    description: 'Next-generation digital banking experience, credit risk scoring, and automated KYC processing.',
    solutions: ['Instant AI Credit Decisioning', 'Document AI KYC Extraction', '24/7 Voice Support Assistant'],
    products: ['Voice AI', 'Document AI', 'Enterprise ERP'],
    benefits: ['10x Faster Account Opening', '92% Automated KYC', '98% Customer Satisfaction'],
    href: '/industries',
  },
  {
    id: 'industry-capital-market',
    name: 'Capital Market',
    iconName: 'LineChart',
    illustration: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    description: 'Algorithmic market signal extraction, real-time risk modeling, and portfolio intelligence.',
    solutions: ['Multimodal Unstructured News Sentiment', 'Real-Time Portfolio VaR Simulation', 'Automated Trade Recon'],
    products: ['IntelliForceAI LLM', 'Vision AI', 'Sentinel Shield'],
    benefits: ['Sub-50ms Signal Latency', '4.2x Alpha Generation', 'Zero Execution Slippage'],
    href: '/industries',
  },
  {
    id: 'industry-manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    illustration: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    description: 'Predictive equipment maintenance, visual quality control, and automated assembly inspection.',
    solutions: ['Computer Vision Optical Quality Control', 'IoT Sensor Anomaly Detection', 'Robotic Path Kinematics'],
    products: ['Vision AI', 'Automation Suite', 'Sentinel Shield'],
    benefits: ['80% Reduced Unplanned Downtime', '99.9% Defect Detection Rate', '35% Higher Throughput'],
    href: '/industries',
  },
  {
    id: 'industry-retail',
    name: 'Retail',
    iconName: 'ShoppingCart',
    illustration: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    description: 'Hyper-personalized recommendation engines, automated inventory forecasting, and visual search.',
    solutions: ['Real-Time Shopper Persona Recommendation', 'Store Shelf Vision Inventory Monitoring', 'Dynamic Price Elasticity'],
    products: ['Vision AI', 'BlackMarlin OMS', 'Voice AI'],
    benefits: ['28% Higher Conversion Rate', '45% Lower Stockouts', '3.5x Customer LTV'],
    href: '/industries',
  },
  {
    id: 'industry-government',
    name: 'Government',
    iconName: 'Shield',
    illustration: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    description: 'Air-gapped zero-trust cybersecurity, multi-agency intelligence synthesis, and public service AI.',
    solutions: ['Zero-Trust Private Model Enclaves', 'Automated Freedom of Information Redaction', 'Civil Infrastructure Monitoring'],
    products: ['Sentinel Shield', 'Document AI', 'IntelliForceAI LLM'],
    benefits: ['100% Air-Gapped Compliance', '95% Processing Automation', 'Zero Security Breaches'],
    href: '/industries',
  },
  {
    id: 'industry-education',
    name: 'Education',
    iconName: 'GraduationCap',
    illustration: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    description: 'Empowering millions of students with personalized 1-on-1 AI tutors and automated STEM grading.',
    solutions: ['Multimodal Conversational STEM Tutor', 'Automated Code & Math Grading Engine', 'Student Learning Mastery Tracker'],
    products: ['Voice AI', 'IntelliForceAI LLM', 'Automation Suite'],
    benefits: ['2.4x Exam Pass Improvement', '88% Student Engagement', '2M+ Active Students'],
    href: '/industries',
  },
  {
    id: 'industry-telecommunications',
    name: 'Telecommunications',
    iconName: 'Radio',
    illustration: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    description: '5G network traffic optimization, autonomous outage resolution, and low-latency voice support.',
    solutions: ['Self-Healing Network Routing Swarms', 'Voice AI Outage Customer Deflection', 'Tower Vision Infrastructure Inspection'],
    products: ['Voice AI', 'Sentinel Shield', 'Automation Suite'],
    benefits: ['Sub-200ms Voice Latency', '75% Call Deflection', '99.999% Network Uptime'],
    href: '/industries',
  },
  {
    id: 'industry-energy',
    name: 'Energy',
    iconName: 'Zap',
    illustration: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    description: 'Smart grid load balancing, renewable solar/wind prediction, and pipeline integrity monitoring.',
    solutions: ['Grid Load Forecasting & Dynamic Routing', 'Drone Thermal Vision Inspection', 'Turbine Anomaly Detection'],
    products: ['Vision AI', 'Automation Suite', 'Sentinel Shield'],
    benefits: ['40% Reduced Energy Waste', '99.2% Outage Prediction Rate', '$22M Annual Savings'],
    href: '/industries',
  },
  {
    id: 'industry-logistics',
    name: 'Logistics',
    iconName: 'Truck',
    illustration: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    description: 'Autonomous fleet route optimization, warehouse inventory robotics, and multi-node order management.',
    solutions: ['Real-Time Route Optimization Engine', 'Warehouse Robotic Motion Kinematics', 'Cross-Border Customs Document AI'],
    products: ['BlackMarlin OMS', 'Document AI', 'Automation Suite'],
    benefits: ['38% Lower Inventory Holding Cost', '99.4% On-Time Delivery Rate', '30% Fleet Fuel Reduction'],
    href: '/industries',
  },
  {
    id: 'industry-insurance',
    name: 'Insurance',
    iconName: 'FileCheck',
    illustration: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
    description: 'Automated claim processing, vehicle damage computer vision, and underwriting risk prediction.',
    solutions: ['Automated Auto Claim Vision Inspection', 'Property Underwriting Satellite Analysis', 'Fraudulent Claim Detection Graph'],
    products: ['Vision AI', 'Document AI', 'Sentinel Shield'],
    benefits: ['5x Faster Claim Settlement', '90% Straight-Through Processing', '25% Loss Ratio Reduction'],
    href: '/industries',
  },
];
