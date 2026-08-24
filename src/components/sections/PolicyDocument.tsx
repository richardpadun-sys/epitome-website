import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contact } from "@/data/site";
import type { PolicyDoc } from "@/data/policy-documents";

/**
 * Long-form legal template.
 *
 * Legal documents get their own measure (760px) and a tighter type scale than
 * the marketing pages — these are read in sequence, not scanned, and the
 * design's job is legibility rather than emphasis. Section headings are
 * anchored so a clause can be linked to directly.
 */
export function PolicyDocument({ doc }: { doc: PolicyDoc }) {
  return (
    <>
      <section className="border-b border-mist-gray pt-40 pb-40 md:pt-56 md:pb-48">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className="type-caption text-ink-subtle">
            <ol className="flex flex-wrap items-center gap-8">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/policies"
                  className="transition-colors hover:text-ink"
                >
                  Policies
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink">{doc.title}</li>
            </ol>
          </nav>

          <div className="mt-24">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="type-heading mt-16">{doc.title}</h1>
            <p className="type-caption mt-16 text-ink-subtle">
              {doc.effective ? `${doc.effective} · ` : ""}
              Last updated: {doc.lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <article className="py-56 md:py-72">
        <Container size="narrow">
          {doc.intro ? (
            <p className="type-subheading font-normal text-ink-muted">
              {doc.intro}
            </p>
          ) : null}

          <div className={doc.intro ? "mt-40" : ""}>
            {doc.blocks.map((block, i) => {
              if ("h" in block) {
                const id = slugify(block.h);
                return (
                  <h2
                    key={i}
                    id={id}
                    className="type-heading-sm mt-40 scroll-mt-80 first:mt-0"
                  >
                    {block.h}
                  </h2>
                );
              }
              if ("p" in block) {
                return (
                  <p key={i} className="type-body mt-16 text-ink-muted">
                    {block.p}
                  </p>
                );
              }
              if ("ul" in block) {
                return (
                  <ul key={i} className="mt-16 space-y-10">
                    {block.ul.map((item) => (
                      <li key={item} className="flex gap-12">
                        <span
                          aria-hidden="true"
                          className="mt-8 h-4 w-4 shrink-0 rounded-[1px] bg-cloud-gray"
                        />
                        <span className="type-body text-ink-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <div key={i} className="mt-24 overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-cloud-gray">
                        {block.table.head.map((cell) => (
                          <th
                            key={cell}
                            scope="col"
                            className="type-label py-12 pr-24 text-ink-subtle last:pr-0"
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-mist-gray">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`type-caption py-16 pr-24 align-top last:pr-0 ${
                                ci === 0
                                  ? "font-medium text-ink"
                                  : "text-ink-muted"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>

          <div className="mt-56 rounded-2xl border border-mist-gray bg-mist-gray/60 p-24">
            <h2 className="type-subheading font-semibold">Contact</h2>
            <p className="type-body mt-8 text-ink-muted">
              For questions about this policy, contact The Epitome Group at{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core"
              >
                {contact.email}
              </a>{" "}
              or{" "}
              <a
                href={contact.phoneHref}
                className="numeric font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core"
              >
                {contact.phone}
              </a>
              .
            </p>
            <p className="mt-16">
              <Link
                href="/policies"
                className="type-caption font-medium text-ink transition-colors hover:text-violet-core"
              >
                ← Back to all policies
              </Link>
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
