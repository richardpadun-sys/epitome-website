import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "inverse"
  | "outline-inverse";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-8 rounded-md font-medium " +
  "transition-[background-color,color,box-shadow,border-color,transform] duration-150 " +
  "select-none whitespace-nowrap active:translate-y-[0.5px] " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper-white shadow-control hover:bg-[#2b1454] active:bg-[#12062a]",
  secondary:
    "bg-paper-white text-ink border border-cloud-gray shadow-subtle " +
    "hover:bg-mist-gray hover:border-[#cfcfcf]",
  ghost:
    "bg-transparent text-ink hover:bg-mist-gray",
  inverse:
    "bg-paper-white text-ink hover:bg-[#f0eef7] shadow-control",
  /* The secondary action on the dark hero — a hairline rather than a second
     filled button, so only one control reads as primary. */
  "outline-inverse":
    "bg-white/5 text-paper-white border border-white/25 backdrop-blur-[2px] " +
    "hover:bg-white/12 hover:border-white/40",
};

const sizes: Record<Size, string> = {
  sm: "text-caption px-12 py-6 h-32",
  md: "text-[15px] leading-[1.4] px-16 py-8 h-40",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Renders a trailing chevron for forward navigation. */
  trailingIcon?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

function classesFor(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="-mr-2 opacity-70"
    >
      <path
        d="M4.5 2.5L8 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    trailingIcon,
    ...rest
  } = props;

  const cls = classesFor(variant, size, className);
  const content = (
    <>
      {children}
      {trailingIcon ? <Chevron /> : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, external, ...linkRest } = rest as ButtonAsLink;
    if (external || /^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a
          href={href}
          className={cls}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={cls} {...buttonRest}>
      {content}
    </button>
  );
}

/**
 * A text-level forward link. Used instead of a third button variant so the
 * page never shows more than two competing buttons.
 */
export function ArrowLink({
  href,
  children,
  className = "",
  tone = "default",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <Link
      href={href}
      className={[
        "group/arrow inline-flex items-center gap-6 text-caption font-medium transition-colors",
        tone === "inverse"
          ? "text-paper-white/70 hover:text-paper-white"
          : "text-ink hover:text-violet-core",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      <svg
        aria-hidden="true"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="transition-transform duration-200 group-hover/arrow:translate-x-2"
      >
        <path
          d="M2.5 6h7M6.5 3l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
