import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/data/services";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-80 md:py-96">
      <Container>
        <div className="max-w-[560px]">
          <Eyebrow>404</Eyebrow>
          <h1 className="type-heading mt-16">This page does not exist</h1>
          <p className="type-subheading mt-16 font-normal text-ink-muted">
            The link may be out of date, or the page may have moved. Everything
            we do is listed below.
          </p>
          <div className="mt-32 flex flex-wrap gap-10">
            <Button href="/" trailingIcon>
              Back to home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>

        <nav aria-label="All services" className="mt-56 border-t border-mist-gray">
          <ul className="grid gap-x-32 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug} className="border-b border-mist-gray">
                <Link
                  href={service.href}
                  className="type-body block py-16 font-medium transition-colors hover:text-violet-core"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
