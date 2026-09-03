"use client";

import { ProgressProvider } from "@bprogress/next/app";

// Top-of-page progress bar for client-side navigation. Colored with the
// workspace's configurable accent (--accent, set inline on <html> from system
// settings in app/layout.tsx), so it re-tints automatically with the theme —
// no separate color prop to keep in sync.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      height="3px"
      color="var(--accent)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
