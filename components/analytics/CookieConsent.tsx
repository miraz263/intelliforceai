'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, Settings, Check, X } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export interface ConsentState {
  essential: boolean;
  analytics: boolean;
  performance: boolean;
  hasResponded: boolean;
}

export function CookieConsent({ onConsentChange }: { onConsentChange?: (consent: ConsentState) => void }) {
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
    performance: false,
    hasResponded: false,
  });

  const [showPreferences, setShowPreferences] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('intelliforceai_cookie_consent');
      if (saved) {
        const parsed = JSON.parse(saved);
        setConsent(parsed);
        if (onConsentChange) onConsentChange(parsed);
      } else {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, [onConsentChange]);

  const saveConsent = (analytics: boolean, performance: boolean) => {
    const updated: ConsentState = {
      essential: true,
      analytics,
      performance,
      hasResponded: true,
    };
    setConsent(updated);
    setIsVisible(false);
    setShowPreferences(false);
    try {
      localStorage.setItem('intelliforceai_cookie_consent', JSON.stringify(updated));
    } catch {
      // Ignore
    }
    if (onConsentChange) onConsentChange(updated);
  };

  if (!isVisible && !showPreferences) return null;

  return (
    <>
      {/* Floating Cookie Banner */}
      {isVisible && !showPreferences && (
        <div
          role="dialog"
          aria-label="Cookie Consent Banner"
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 animate-in slide-in-from-bottom duration-300"
        >
          <GlassCard intensity="high" className="p-6 space-y-4 border-primary/40 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Cookie className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Privacy & Cookie Choices</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to analyze site traffic, optimize performance, and enhance user experience under strict GDPR compliance.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
              <Button
                variant="gradient"
                size="sm"
                className="w-full sm:w-auto flex-1"
                onClick={() => saveConsent(true, true)}
              >
                Accept All
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => saveConsent(false, false)}
              >
                Reject Optional
              </Button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="p-2 text-xs text-muted-foreground hover:text-foreground underline"
              >
                Preferences
              </button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie Preferences"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        >
          <div className="w-full max-w-lg">
            <GlassCard intensity="high" className="p-6 sm:p-8 space-y-6 border-primary/40 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-foreground">Cookie Preferences</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl border border-border/50 bg-surface/50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-foreground">Essential Cookies</span>
                      <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">
                        Required
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Necessary for basic website security, navigation, and theme persistence.
                    </p>
                  </div>
                  <input type="checkbox" disabled checked className="mt-1 accent-primary" />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl border border-border/50 bg-surface/50">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-foreground">Analytics & Telemetry</span>
                    <p className="text-xs text-muted-foreground">
                      Helps us measure visitor traffic and technical page performance.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                    className="mt-1 accent-primary h-4 w-4 cursor-pointer"
                  />
                </div>

                {/* Performance Cookies */}
                <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl border border-border/50 bg-surface/50">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-foreground">Performance & Personalization</span>
                    <p className="text-xs text-muted-foreground">
                      Enables advanced UI state memory and experimental feature previews.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.performance}
                    onChange={(e) => setConsent({ ...consent, performance: e.target.checked })}
                    className="mt-1 accent-primary h-4 w-4 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  variant="gradient"
                  size="md"
                  leftIcon={<Check className="h-4 w-4" />}
                  onClick={() => saveConsent(consent.analytics, consent.performance)}
                >
                  Save Preferences
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      )}
    </>
  );
}
