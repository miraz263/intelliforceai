export interface AnalyticsConfig {
  gaId?: string; // Google Analytics 4 ID (e.g. G-XXXXXXXXXX)
  googleSiteVerification?: string; // Google Search Console verification meta tag
  clarityId?: string; // Microsoft Clarity Project ID
  plausibleDomain?: string; // Plausible Analytics domain
  cloudflareToken?: string; // Cloudflare Web Analytics Token
  enabled: boolean;
}

export const analyticsConfig: AnalyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || 'G-INTELLIFORCEAI01',
  googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'intelliforceai-gsc-verify-token',
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'intelliforceai.ai',
  cloudflareToken: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN || '',
  enabled: true,
};
