/**
 * View Transitions Utility for Next.js
 *
 * Usage:
 * 1. In next.config.ts, enable: experimental: { viewTransitions: true }
 * 2. Use the ViewTransitionLink component instead of Link for smooth transitions
 * 3. Or wrap startTransition() calls manually for programmatic navigation
 *
 * Example:
 * import { ViewTransitionLink } from '@/src/lib/view-transitions'
 *
 * <ViewTransitionLink href="/about">
 *   Go to About
 * </ViewTransitionLink>
 */

"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface ViewTransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ViewTransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
}: ViewTransitionLinkProps) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

/**
 * Hook to use view transitions with programmatic navigation
 *
 * Example:
 * const { push } = useRouter()
 * const startNavigation = useViewTransition()
 *
 * const handleClick = () => {
 *   startNavigation(() => {
 *     push('/path')
 *   })
 * }
 */
export function useViewTransition() {
  const { useTransition } = require("react");
  const [isPending, startTransition] = useTransition();

  return (callback: () => void) => {
    startTransition(callback);
  };
}
