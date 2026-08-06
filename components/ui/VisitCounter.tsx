'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch('/visits.php', { method: 'GET' })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (isMounted && data?.success && typeof data.count === 'number') {
          setCount(data.count);
        }
      })
      .catch(() => {
        // PHP backend unavailable (e.g. local dev) — fail silently, render nothing.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      Total Visits: {count.toLocaleString('en-US')}
    </span>
  );
}
