import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** `wide` removes the 1200px cap for full-bleed rules and rails. */
  size?: "default" | "narrow";
  as?: "div" | "header" | "footer" | "nav";
};

/**
 * The single horizontal measure for the site: 1200px capped, with 20px
 * gutters on mobile stepping up to 32px from `sm`.
 */
export function Container({
  children,
  className = "",
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  const max = size === "narrow" ? "max-w-[760px]" : "max-w-[1200px]";
  return (
    <Tag className={`mx-auto w-full ${max} px-20 sm:px-32 ${className}`}>
      {children}
    </Tag>
  );
}
