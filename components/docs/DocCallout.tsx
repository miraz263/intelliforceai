import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertOctagon } from 'lucide-react';

export type CalloutType = 'note' | 'tip' | 'warning' | 'caution';

export interface DocCalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: React.ReactNode;
    title: string;
    containerClass: string;
    titleClass: string;
  }
> = {
  note: {
    icon: <Info className="h-5 w-5 text-sky-400 shrink-0" />,
    title: 'NOTE',
    containerClass: 'bg-sky-500/10 border-sky-500/30 text-sky-200',
    titleClass: 'text-sky-400',
  },
  tip: {
    icon: <Lightbulb className="h-5 w-5 text-emerald-400 shrink-0" />,
    title: 'TIP',
    containerClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200',
    titleClass: 'text-emerald-400',
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />,
    title: 'WARNING',
    containerClass: 'bg-amber-500/10 border-amber-500/30 text-amber-200',
    titleClass: 'text-amber-400',
  },
  caution: {
    icon: <AlertOctagon className="h-5 w-5 text-rose-400 shrink-0" />,
    title: 'CAUTION',
    containerClass: 'bg-rose-500/10 border-rose-500/30 text-rose-200',
    titleClass: 'text-rose-400',
  },
};

export function DocCallout({ type = 'note', title, children }: DocCalloutProps) {
  const config = calloutConfig[type];

  return (
    <div
      role="note"
      className={`my-6 flex items-start gap-3 rounded-2xl border p-4 sm:p-5 text-xs sm:text-sm leading-relaxed backdrop-blur-md ${config.containerClass}`}
    >
      {config.icon}
      <div className="space-y-1">
        <div className={`font-mono text-xs font-bold uppercase tracking-wider ${config.titleClass}`}>
          {title || config.title}
        </div>
        <div className="text-foreground/90">{children}</div>
      </div>
    </div>
  );
}
