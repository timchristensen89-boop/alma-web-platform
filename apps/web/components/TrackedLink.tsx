"use client";

import Link from "next/link";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { trackEvent } from "../lib/trackEvent";

type TrackedLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
  eventName: string;
  eventParams?: Record<string, string>;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventParams,
  target,
  rel,
  onClick,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={(event) => {
        trackEvent(eventName, eventParams);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
