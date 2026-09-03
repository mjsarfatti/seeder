"use client";

import { ProgressProvider } from "@bprogress/next/app";

// Top-of-page progress bar for client-side navigation. Colored with the
// workspace's configurable accent (--accent, a globals.css alias for --brand,
// which is set inline on <html> from system settings in app/layout.tsx), so
// it re-tints automatically with the theme — no separate color prop to keep
// in sync. shallowRouting is intentionally left off: several pages (project
// filters, the daily planner's date nav) do a full server re-fetch on a
// search-param-only navigation, and shallowRouting would skip the bar for
// those.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider height="3px" color="var(--accent)" options={{ showSpinner: false }}>
      {children}
    </ProgressProvider>
  );
}
