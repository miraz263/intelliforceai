export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultOgImage: string;
  twitterHandle: string;
  publisher: string;
  themeColor: string;
}

export const defaultSeoConfig: SEOConfig = {
  siteName: 'IntelliForceAI',
  siteUrl: 'https://intelliforceai.ai',
  defaultTitle: 'IntelliForceAI — Enterprise Multi-Agent OS & Zero-Trust AI',
  titleTemplate: '%s | IntelliForceAI',
  defaultDescription:
    'IntelliForceAI builds next-generation multi-agent operating systems, lock-free Rust IPC engines, eBPF zero-trust security agents, and static web platforms.',
  defaultOgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  twitterHandle: '@intelliforceai',
  publisher: 'IntelliForceAI Inc.',
  themeColor: '#090d16',
};

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}) {
  const metaTitle = title
    ? `${title} | ${defaultSeoConfig.siteName}`
    : defaultSeoConfig.defaultTitle;
  const metaDescription = description || defaultSeoConfig.defaultDescription;
  const metaImage = image || defaultSeoConfig.defaultOgImage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      'IntelliForceAI',
      'Multi-Agent OS',
      'Rust IPC Engine',
      'Zero-Trust Security',
      'eBPF Kernel Protection',
      'Enterprise AI Platform',
      'CUDA Acceleration',
      'Static Export Web',
      'cPanel Shared Hosting',
    ],
    metadataBase: new URL(defaultSeoConfig.siteUrl),
    alternates: {
      canonical: canonicalUrl || defaultSeoConfig.siteUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl || defaultSeoConfig.siteUrl,
      siteName: defaultSeoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: defaultSeoConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
