'use client';

import React, { useState } from 'react';
import { DocCodeBlock } from './DocCodeBlock';

export interface TabItem {
  label: string;
  language: string;
  code: string;
}

export interface DocTabsProps {
  tabs: TabItem[];
}

export function DocTabs({ tabs }: DocTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="my-6">
      {/* Tab Switcher Header */}
      <div className="flex border-b border-border/60 gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`py-2 px-4 text-xs font-mono font-bold transition-all border-b-2 ${
              activeTab === idx
                ? 'border-primary text-primary font-bold'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Code */}
      <DocCodeBlock
        language={tabs[activeTab].language}
        code={tabs[activeTab].code}
      />
    </div>
  );
}
