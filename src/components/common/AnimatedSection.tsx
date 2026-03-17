"use client";

import { useIntersection } from "@/lib/hooks/useIntersection";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`animate ${isVisible ? "visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
