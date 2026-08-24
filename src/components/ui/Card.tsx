import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Interactive cards get the border + lift treatment; static ones do not. */
  interactive?: boolean;
  href?: string;
  padding?: "default" | "roomy" | "flush";
  tone?: "paper" | "mist" | "ink";
};

const paddings = {
  default: "p-24",
  roomy: "p-24 md:p-32",
  flush: "p-0",
};

const tones = {
  paper: "bg-paper-white border-mist-gray",
  mist: "bg-mist-gray border-transparent",
  ink: "bg-ink border-white/10 text-paper-white",
};

export function Card({
  children,
  className = "",
  interactive = false,
  href,
  padding = "default",
  tone = "paper",
}: CardProps) {
  const cls = [
    "relative rounded-2xl border shadow-subtle",
    tones[tone],
    paddings[padding],
    interactive
      ? "transition-[border-color,box-shadow,transform] duration-200 " +
        "hover:-translate-y-2 hover:border-cloud-gray hover:shadow-raised"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={`${cls} block`}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}
