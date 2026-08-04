import React from 'react';

export interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IntelliForceAI',
    url: 'https://intelliforceai.ai',
    logo: 'https://intelliforceai.ai/logo.png',
    description:
      'IntelliForceAI builds next-generation multi-agent operating systems, lock-free Rust IPC engines, and zero-trust security platforms.',
    sameAs: [
      'https://github.com/intelliforceai',
      'https://linkedin.com/company/intelliforceai',
      'https://twitter.com/intelliforceai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-415-555-0100',
      contactType: 'customer service',
      email: 'sales@intelliforceai.ai',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '500 Howard Street, Suite 400',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
  };

  return <JsonLd data={schema} />;
}
