"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { contact, primaryNav } from "@/data/site";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Scroll state ----------------------------------------------------------
     Driven by an IntersectionObserver on an 8px sentinel at the top of the
     document rather than by a scroll listener: the observer fires off the
     main thread, costs nothing per frame, and does not care which element
     ends up being the scrolling box. The scroll listener is kept only as a
     fallback for the initial state on restore.
     --------------------------------------------------------------------- */
  useEffect(() => {
    const readPosition = () =>
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 8);
    readPosition();

    const sentinel = document.getElementById("epi-top-sentinel");
    if (!sentinel) {
      window.addEventListener("scroll", readPosition, { passive: true });
      return () => window.removeEventListener("scroll", readPosition);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  /* Close everything on navigation ---------------------------------------- */
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* Lock body scroll while the mobile panel is open ----------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Escape + outside click ------------------------------------------------ */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }, []);

  const servicesItem = primaryNav.find((i) => i.groups);
  const flatNav = primaryNav.filter((i) => !i.groups);
  const isServiceRoute =
    servicesItem?.groups?.some((g) =>
      g.items.some((it) => pathname === it.href),
    ) ?? false;

  /**
   * The homepage opens on the dark video band, so the bar starts inverted and
   * resolves to the standard white treatment as soon as the page scrolls. The
   * mobile panel is always light, so it forces the light treatment too.
   */
  const overDarkHero = pathname === "/" && !scrolled && !menuOpen;

  const linkIdle = overDarkHero
    ? "text-paper-white/70 hover:text-paper-white"
    : "text-ink-muted hover:text-ink";
  const linkActive = overDarkHero ? "text-paper-white" : "text-ink";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-12 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-16 focus:py-8 focus:text-caption focus:text-paper-white"
      >
        Skip to content
      </a>

      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-b border-mist-gray bg-paper-white/85 shadow-subtle backdrop-blur-[12px] backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <Container as="nav" className="flex h-64 items-center justify-between gap-32">
          <Logo tone={overDarkHero ? "inverse" : "default"} />

          {/* ---------------- Desktop navigation ---------------- */}
          <div className="hidden items-center gap-2 lg:flex">
            {servicesItem ? (
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={[
                    "flex h-32 items-center gap-6 rounded-md px-12 text-[14px] font-medium transition-colors",
                    isServiceRoute || servicesOpen ? linkActive : linkIdle,
                  ].join(" ")}
                >
                  {servicesItem.label}
                  <svg
                    aria-hidden="true"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2.5 4L5 6.5 7.5 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  // `inert` keeps the closed menu's links out of the tab
                  // order and the accessibility tree; opacity alone would
                  // leave eight invisible focus stops in the header.
                  inert={!servicesOpen}
                  className={[
                    "absolute top-40 left-1/2 w-[680px] -translate-x-1/2 origin-top transition-[opacity,transform] duration-200",
                    servicesOpen
                      ? "pointer-events-auto scale-100 opacity-100"
                      : "pointer-events-none scale-[0.98] opacity-0",
                  ].join(" ")}
                >
                  <div className="grid grid-cols-3 gap-24 rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-[0_8px_28px_rgba(27,11,58,0.09)]">
                    {servicesItem.groups?.map((group) => (
                      <div key={group.title}>
                        <p className="type-label mb-12 text-ink-subtle">{group.title}</p>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block rounded-lg px-10 py-8 transition-colors hover:bg-mist-gray"
                              >
                                <span className="block text-[14px] font-medium text-ink">
                                  {item.label}
                                </span>
                                <span className="mt-2 block text-[12px] leading-[1.45] text-ink-subtle">
                                  {item.summary}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {flatNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex h-32 items-center rounded-md px-12 text-[14px] font-medium transition-colors",
                    active ? linkActive : linkIdle,
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ---------------- Desktop actions ---------------- */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/contact"
              className={`flex h-32 items-center rounded-md px-12 text-[14px] font-medium transition-colors ${linkIdle}`}
            >
              Contact
            </Link>
            <Button
              href="/contact"
              size="sm"
              variant={overDarkHero ? "inverse" : "primary"}
            >
              Book free consultation
            </Button>
          </div>

          {/* ---------------- Mobile toggle ---------------- */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`relative -mr-8 flex h-40 w-40 items-center justify-center rounded-md transition-colors lg:hidden ${
              overDarkHero
                ? "text-paper-white hover:bg-white/10"
                : "text-ink hover:bg-mist-gray"
            }`}
          >
            <span className="relative block h-16 w-18">
              <span
                className={`absolute left-0 block h-[1.5px] w-18 rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "top-7 rotate-45" : "top-3"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-18 rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "top-7 -rotate-45" : "top-12"
                }`}
              />
            </span>
          </button>
        </Container>
      </header>

      {/* ---------------- Mobile panel ---------------- */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-0 top-64 z-40 overflow-y-auto bg-paper-white transition-[opacity,transform] duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-8 opacity-0",
        ].join(" ")}
      >
        <Container className="pt-24 pb-48">
          {servicesItem?.groups?.map((group) => (
            <div key={group.title} className="mb-32">
              <p className="type-label mb-12 text-ink-subtle">{group.title}</p>
              <ul className="border-t border-mist-gray">
                {group.items.map((item) => (
                  <li key={item.href} className="border-b border-mist-gray">
                    <Link
                      href={item.href}
                      tabIndex={menuOpen ? 0 : -1}
                      className="block py-14 text-[17px] font-medium tracking-[-0.01em]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <ul className="mb-32 border-t border-mist-gray">
            {[...flatNav, { label: "Contact", href: "/contact" }].map((item) => (
              <li key={item.href} className="border-b border-mist-gray">
                <Link
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  className="block py-14 text-[17px] font-medium tracking-[-0.01em]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-10">
            <Button href="/contact" className="w-full" tabIndex={menuOpen ? 0 : -1}>
              Book free consultation
            </Button>
            <Button
              href={`mailto:${contact.email}`}
              variant="secondary"
              className="w-full"
            >
              {contact.email}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
