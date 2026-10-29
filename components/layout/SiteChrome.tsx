"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Hides the shared site chrome on the /directions/* design previews, which
 * each carry their own header and footer so the three directions can be
 * compared without the current site's frame around them.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/directions")) return null;
  return <>{children}</>;
}
