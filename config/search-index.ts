import { productsData } from './products';
import { servicesData } from './services';
import { researchConfig } from './research';
import { blogPostsData } from './blog';
import { docsConfig } from './docs';
import { careersConfig } from './careers';
import { faqConfig } from './faq';

export type SearchCategory =
  | 'Products'
  | 'Services'
  | 'Research'
  | 'Blog'
  | 'Documentation'
  | 'Careers'
  | 'FAQ';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  href: string;
  tags: string[];
}

export function buildGlobalSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // 1. Products
  productsData.forEach((prod) => {
    items.push({
      id: `prod-${prod.id}`,
      title: prod.name,
      description: prod.description,
      category: 'Products',
      href: '/products',
      tags: [prod.category, ...prod.technologies, ...prod.tags],
    });
  });

  // 2. Services
  servicesData.forEach((srv) => {
    items.push({
      id: `srv-${srv.id}`,
      title: srv.title,
      description: srv.description,
      category: 'Services',
      href: '/services',
      tags: [srv.category, ...srv.features],
    });
  });

  // 3. Research
  researchConfig.papers.forEach((res) => {
    items.push({
      id: `res-${res.id}`,
      title: res.title,
      description: res.abstract,
      category: 'Research',
      href: '/research',
      tags: [res.category, ...res.technology],
    });
  });

  // 4. Blog Posts
  blogPostsData.forEach((post) => {
    items.push({
      id: `blog-${post.id}`,
      title: post.title,
      description: post.excerpt,
      category: 'Blog',
      href: `/blog/${post.slug}`,
      tags: [post.category, ...post.tags],
    });
  });

  // 5. Documentation Articles
  docsConfig.articles.forEach((doc) => {
    items.push({
      id: `doc-${doc.id}`,
      title: doc.title,
      description: doc.description,
      category: 'Documentation',
      href: `/docs/${doc.slug}`,
      tags: [doc.product, doc.category],
    });
  });

  // 6. Careers
  careersConfig.positions.forEach((job) => {
    items.push({
      id: `job-${job.id}`,
      title: job.title,
      description: job.description,
      category: 'Careers',
      href: '/careers',
      tags: [job.department, job.location, job.experience],
    });
  });

  // 7. FAQ Questions
  faqConfig.faqs.forEach((faq) => {
    items.push({
      id: `faq-${faq.id}`,
      title: faq.question,
      description: faq.answer,
      category: 'FAQ',
      href: '/faq',
      tags: [faq.category, ...faq.tags],
    });
  });

  return items;
}

export const globalSearchIndex: SearchItem[] = buildGlobalSearchIndex();

export const popularSearches: string[] = [
  'IntelliForceAI 2.0',
  'Rust SDK',
  'cPanel Deployment',
  'Zero-Trust Security',
  'Careers',
  'Sub-200ms Voice AI',
];
