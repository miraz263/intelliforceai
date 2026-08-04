'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { analyticsConfig } from '@/config/analytics';
import { CookieConsent, ConsentState } from './CookieConsent';

export function AnalyticsManager() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  const isAnalyticsAllowed = consent?.analytics && analyticsConfig.enabled;

  return (
    <>
      {/* Search Console Verification Tag */}
      {analyticsConfig.googleSiteVerification && (
        <meta
          name="google-site-verification"
          content={analyticsConfig.googleSiteVerification}
        />
      )}

      {/* GA4 Conditional Script */}
      {isAnalyticsAllowed && analyticsConfig.gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Cookie Consent Banner */}
      <CookieConsent onConsentChange={setConsent} />
    </>
  );
}
