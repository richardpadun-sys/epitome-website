import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVideo } from "@/components/visuals/HeroVideo";
import { OperationsCanvas } from "@/components/visuals/OperationsCanvas";
import { headlineStats } from "@/data/content";
import { contact } from "@/data/site";

/**
 * The hero is the page's one expressive moment — drone footage of the
 * Kingston riverside where Epitome works, held under an Indigo Ink wash so it
 * reads as brand surface rather than as stock video. Everything below the
 * fold reverts to white.
 *
 * The Operations Canvas straddles the boundary: it starts on the dark band
 * and finishes on the white page, which is what carries the eye from the
 * place Epitome works to the work itself.
 */
export function Hero() {
  return (
    <section className="relative">
      {/* ---------------- Dark band ----------------
          `-mt-64 pt-64` pulls the band up under the fixed header so the
          footage runs edge to edge behind it, without disturbing the top
          padding every other page relies on. */}
      <div className="relative -mt-64 bg-ink pt-112 pb-160 md:pt-136 md:pb-201">
        <HeroVideo />

        {/* Colour treatment in three passes rather than one flat scrim, so
            the footage stays readable while the type stays safe:
            1. a brand wash that pulls the grey riverside into indigo,
            2. a vertical gradient anchoring the header and the lower edge,
            3. a lateral gradient weighting the side the headline sits on. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-indigo-ink/48 mix-blend-multiply"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,11,58,0.9)_0%,rgba(27,11,58,0.42)_26%,rgba(27,11,58,0.62)_70%,#1b0b3a_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,11,58,0.8)_0%,rgba(27,11,58,0.22)_52%,rgba(27,11,58,0.04)_100%)]"
        />

        <Container className="relative">
          <div className="grid items-end gap-32 xl:grid-cols-12 xl:gap-48">
            <div className="xl:col-span-7">
              <div className="epi-rise" style={{ animationDelay: "40ms" }}>
                <Eyebrow tone="inverse">AI for UK small businesses</Eyebrow>
              </div>
              <h1
                className="type-display epi-rise mt-20 text-paper-white"
                style={{ animationDelay: "120ms" }}
              >
                Build your business
                <br className="hidden sm:block" /> with AI precision
              </h1>
            </div>

            <div className="epi-rise xl:col-span-5" style={{ animationDelay: "220ms" }}>
              <p className="type-subheading max-w-[520px] font-normal text-ink-on-dark">
                We enable UK small businesses to achieve more with less —
                reducing costs, freeing up valuable time, and driving measurable
                growth by embedding AI into the heart of their operations.
              </p>
              <div className="mt-28 flex flex-wrap items-center gap-10">
                <Button href="/contact" variant="inverse" trailingIcon>
                  Start your AI journey
                </Button>
                <Button href="#approach" variant="outline-inverse">
                  See how we work
                </Button>
              </div>
            </div>
          </div>

          {/* Proof strip — kept on a hairline rather than in cards so it does
              not compete with the canvas below. */}
          <dl
            className="epi-fade mt-48 grid grid-cols-1 border-t border-white/15 sm:grid-cols-3"
            style={{ animationDelay: "520ms" }}
          >
            {headlineStats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-white/10 py-24 sm:border-b-0 sm:border-r sm:pr-24 sm:last:border-r-0"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="type-heading numeric block text-paper-white">
                    {stat.value}
                  </span>
                  <span className="type-caption mt-6 block text-ink-on-dark">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <p
            className="epi-fade type-caption mt-24 text-ink-on-dark"
            style={{ animationDelay: "620ms" }}
          >
            Above {contact.address.line1}, {contact.address.line2} — where we work.
          </p>
        </Container>
      </div>

      {/* ---------------- Canvas, bridging the two bands ---------------- */}
      <Container className="relative -mt-128 md:-mt-160">
        <div className="epi-rise" style={{ animationDelay: "320ms" }}>
          <OperationsCanvas />
        </div>
      </Container>
    </section>
  );
}
