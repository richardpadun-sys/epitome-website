import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { contact, footerColumns, site, social } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist-gray bg-paper-white">
      <Container className="py-64 md:py-80">
        <div className="grid gap-48 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-32">
          {/* Identity + contact ------------------------------------------- */}
          <div className="max-w-[340px]">
            <Logo />
            <p className="type-caption mt-16 text-ink-muted">{site.description}</p>

            <ul className="mt-24 space-y-8">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="type-caption text-ink transition-colors hover:text-violet-core"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="type-caption numeric text-ink transition-colors hover:text-violet-core"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption text-ink transition-colors hover:text-violet-core"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            <address className="type-caption mt-16 not-italic text-ink-subtle">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.postcode}
            </address>
          </div>

          {/* Link columns -------------------------------------------------- */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="type-label text-ink-subtle">{column.title}</h2>
              <ul className="mt-16 space-y-10">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="type-caption text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Baseline -------------------------------------------------------- */}
        <div className="mt-56 flex flex-col gap-16 border-t border-mist-gray pt-24 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-caption text-ink-subtle">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-24 gap-y-8">
            {social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption text-ink-subtle transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/policies"
                className="type-caption text-ink-subtle transition-colors hover:text-ink"
              >
                Legal
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
