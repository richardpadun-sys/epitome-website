/**
 * Operations Canvas — the hero's product demonstration.
 *
 * It is a literal picture of the service Epitome sells: an inbound business
 * signal is picked up by an agent trained on the client's data, routed into
 * the platforms the client already runs (the CRM / finance / HR / marketing
 * categories named on the AI Integration page), and turned into an outcome.
 *
 * Drawn entirely in SVG so it scales to any breakpoint without reflow, and
 * animated with CSS only — connectors draw themselves once, then a single
 * accent pulse travels each path. No animation runtime is shipped for it.
 *
 * Geometry: a 900×360 field. Three columns at x = 0 / 340 / 680, each 220
 * wide, all centred on y = 138, with the outcome bar closing the frame.
 */

const COL_A = 0;
const COL_B = 340;
const COL_C = 680;
const COL_W = 220;

const SIGNALS = [
  { title: "New enquiry", source: "Website form", y: 34 },
  { title: "Invoice received", source: "Supplier email", y: 108 },
  { title: "Candidate applied", source: "Job board", y: 182 },
] as const;

const SYSTEMS = [
  { category: "CRM", platform: "HubSpot", y: 29 },
  { category: "Finance", platform: "Xero", y: 87 },
  { category: "HR", platform: "BambooHR", y: 145 },
  { category: "Marketing", platform: "Mailchimp", y: 203 },
] as const;

const AGENT_TAGS = [
  { label: "Qualify", w: 52, x: 0 },
  { label: "Route", w: 44, x: 58 },
  { label: "Escalate", w: 56, x: 110 },
] as const;

const OUTCOMES = [
  { label: "Unified data view", x: 24 },
  { label: "Reduced manual handoffs", x: 330 },
  { label: "24/7 predictive insights", x: 636 },
] as const;

/** Inbound signal → agent: fans in from three heights to the node edge. */
const INBOUND_PATHS = SIGNALS.map((s, i) => {
  const y1 = s.y + 30;
  const y2 = 108 + i * 30;
  return `M${COL_A + COL_W} ${y1} C ${COL_A + COL_W + 46} ${y1}, ${COL_B - 46} ${y2}, ${COL_B} ${y2}`;
});

/** Agent → each connected system: fans out to four heights. */
const OUTBOUND_PATHS = SYSTEMS.map((s, i) => {
  const y1 = 108 + i * 20;
  const y2 = s.y + 22;
  return `M${COL_B + COL_W} ${y1} C ${COL_B + COL_W + 46} ${y1}, ${COL_C - 46} ${y2}, ${COL_C} ${y2}`;
});

function Connector({
  d,
  drawDelay,
  flowDelay,
}: {
  d: string;
  drawDelay: number;
  flowDelay: number;
}) {
  return (
    <g fill="none">
      <path
        d={d}
        stroke="var(--color-cloud-gray)"
        strokeWidth={1}
        pathLength={100}
        className="epi-line"
        style={{ animationDelay: `${drawDelay}ms` }}
      />
      <path
        d={d}
        stroke="var(--color-violet-core)"
        strokeWidth={1.5}
        strokeLinecap="round"
        pathLength={100}
        className="epi-flow"
        style={{ animationDelay: `${flowDelay}ms` }}
      />
    </g>
  );
}

/** A short vertical connector with the same travelling accent pulse. */
function FlowLink() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-24 w-1 overflow-hidden bg-cloud-gray"
    >
      <span className="epi-flow-y absolute inset-x-0 top-0 block h-8 bg-violet-core" />
    </div>
  );
}

function StackedCanvas() {
  return (
    <div className="p-16 sm:p-20 lg:hidden">
      <p className="type-label text-ink-subtle">Inbound</p>
      <ul className="mt-10 space-y-8">
        {SIGNALS.map((signal) => (
          <li
            key={signal.title}
            className="flex items-center gap-10 rounded-lg border border-mist-gray px-12 py-10"
          >
            <span
              aria-hidden="true"
              className="h-6 w-6 shrink-0 rounded-full bg-cloud-gray"
            />
            <span className="min-w-0">
              <span className="block truncate text-[13px] leading-[1.3] font-medium">
                {signal.title}
              </span>
              <span className="block truncate text-[11px] leading-[1.3] text-ink-subtle">
                {signal.source}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <FlowLink />

      <div className="rounded-lg bg-ink px-14 py-14">
        <p className="type-label text-white/40">Epitome agent</p>
        <p className="mt-8 text-[15px] leading-[1.3] font-semibold text-paper-white">
          AI agent
        </p>
        <p className="mt-4 text-[12px] leading-[1.4] text-ink-on-dark-subtle">
          Trained on your data, workflow and brand voice
        </p>
        <ul className="mt-12 flex flex-wrap gap-6">
          {AGENT_TAGS.map((tag) => (
            <li
              key={tag.label}
              className="rounded-md bg-white/8 px-8 py-4 text-[11px] leading-[1.3] font-medium text-ink-on-dark"
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </div>

      <FlowLink />

      <p className="type-label text-ink-subtle">Your systems</p>
      <ul className="mt-10 grid grid-cols-2 gap-8">
        {SYSTEMS.map((system, i) => (
          <li
            key={system.category}
            className="flex items-center justify-between gap-8 rounded-lg border border-mist-gray px-12 py-10"
          >
            <span className="min-w-0">
              <span className="block text-[10px] leading-[1.3] font-medium tracking-[0.06em] text-ink-subtle uppercase">
                {system.category}
              </span>
              <span className="block truncate text-[13px] leading-[1.3] font-medium">
                {system.platform}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="epi-dot h-6 w-6 shrink-0 rounded-full bg-violet-core"
              style={{ animationDelay: `${i * 400}ms` }}
            />
          </li>
        ))}
      </ul>

      <FlowLink />

      <ul className="rounded-lg bg-mist-gray px-14 py-12">
        {OUTCOMES.map((outcome) => (
          <li
            key={outcome.label}
            className="flex items-center gap-10 py-6 text-[13px] leading-[1.3] font-medium"
          >
            <span
              aria-hidden="true"
              className="h-12 w-2 shrink-0 rounded-full bg-violet-core"
            />
            {outcome.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OperationsCanvas() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-2xl border border-mist-gray bg-paper-white shadow-raised">
        {/* Chrome ---------------------------------------------------------- */}
        <div className="flex h-40 items-center justify-between border-b border-mist-gray px-16">
          <span className="type-label text-ink-subtle">Operations canvas</span>
          <span className="flex items-center gap-6 text-[11px] font-medium tracking-[0.05em] text-ink-subtle uppercase">
            <span
              aria-hidden="true"
              className="epi-dot inline-block h-6 w-6 rounded-full bg-violet-core"
            />
            Running
          </span>
        </div>

        {/* Stacked diagram — below `lg` the three-column SVG would scale its
            labels down to single-digit pixel sizes, so the same workflow is
            rebuilt vertically in real text instead of being shrunk. */}
        <StackedCanvas />

        {/* Diagram --------------------------------------------------------- */}
        <div className="hidden p-16 sm:p-24 lg:block">
          <svg
            viewBox="0 0 900 360"
            className="font-sans h-auto w-full"
            role="img"
            aria-labelledby="canvas-title canvas-desc"
          >
            <title id="canvas-title">
              How an Epitome workflow runs end to end
            </title>
            <desc id="canvas-desc">
              Inbound business signals — a website enquiry, a supplier invoice
              and a job application — are handled by an AI agent trained on the
              client&rsquo;s own data, then routed into their existing CRM,
              finance, HR and marketing platforms, producing a unified data
              view, fewer manual handoffs and round-the-clock insight.
            </desc>

            {/* Column labels */}
            <g
              fill="var(--color-ink-subtle)"
              fontSize={10}
              fontWeight={500}
              letterSpacing="0.06em"
            >
              <text x={COL_A} y="12" className="epi-fade" style={{ animationDelay: "80ms" }}>
                INBOUND
              </text>
              <text x={COL_B} y="12" className="epi-fade" style={{ animationDelay: "260ms" }}>
                EPITOME AGENT
              </text>
              <text x={COL_C} y="12" className="epi-fade" style={{ animationDelay: "440ms" }}>
                YOUR SYSTEMS
              </text>
            </g>

            {/* Connectors sit beneath the nodes */}
            {INBOUND_PATHS.map((d, i) => (
              <Connector
                key={`in-${i}`}
                d={d}
                drawDelay={420 + i * 90}
                flowDelay={i * 420}
              />
            ))}
            {OUTBOUND_PATHS.map((d, i) => (
              <Connector
                key={`out-${i}`}
                d={d}
                drawDelay={640 + i * 80}
                flowDelay={900 + i * 260}
              />
            ))}
            <Connector
              d={`M${COL_B + COL_W / 2} 208 L${COL_B + COL_W / 2} 288`}
              drawDelay={900}
              flowDelay={1700}
            />

            {/* Inbound signal cards */}
            {SIGNALS.map((signal, i) => (
              <g
                key={signal.title}
                className="epi-rise"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <rect
                  x={COL_A}
                  y={signal.y}
                  width={COL_W}
                  height="60"
                  rx="10"
                  fill="var(--color-paper-white)"
                  stroke="var(--color-mist-gray)"
                />
                <circle
                  cx={COL_A + 20}
                  cy={signal.y + 30}
                  r="3"
                  fill="var(--color-cloud-gray)"
                />
                <text
                  x={COL_A + 34}
                  y={signal.y + 26}
                  fontSize={12.5}
                  fontWeight={500}
                  fill="var(--color-ink)"
                  letterSpacing="-0.01em"
                >
                  {signal.title}
                </text>
                <text
                  x={COL_A + 34}
                  y={signal.y + 43}
                  fontSize={11}
                  fill="var(--color-ink-subtle)"
                >
                  {signal.source}
                </text>
              </g>
            ))}

            {/* Agent node */}
            <g className="epi-rise" style={{ animationDelay: "300ms" }}>
              <rect
                x={COL_B}
                y="68"
                width={COL_W}
                height="140"
                rx="14"
                fill="var(--color-ink)"
              />
              {/* The Epitome mark on its ink ground, carrying Rise · 45°
                  because it is roughly square. Uses the shared summit mask. */}
              <g transform={`translate(${COL_B + 20}, 86) scale(0.3125)`}>
                <rect
                  width="64"
                  height="64"
                  fill="url(#epi-rise)"
                  mask="url(#epi-summit)"
                />
              </g>
              <text
                x={COL_B + 20}
                y="134"
                fontSize={13}
                fontWeight={600}
                fill="var(--color-paper-white)"
                letterSpacing="-0.01em"
              >
                AI agent
              </text>
              <text x={COL_B + 20} y="152" fontSize={10.5} fill="var(--color-ink-on-dark-subtle)">
                Trained on your data,
              </text>
              <text x={COL_B + 20} y="166" fontSize={10.5} fill="var(--color-ink-on-dark-subtle)">
                workflow and brand voice
              </text>

              {AGENT_TAGS.map((tag, i) => (
                <g
                  key={tag.label}
                  className="epi-fade"
                  style={{ animationDelay: `${560 + i * 110}ms` }}
                >
                  <rect
                    x={COL_B + 20 + tag.x}
                    y="180"
                    width={tag.w}
                    height="18"
                    rx="4"
                    fill="rgba(255,255,255,0.08)"
                  />
                  <text
                    x={COL_B + 20 + tag.x + tag.w / 2}
                    y="192"
                    fontSize={9.5}
                    fontWeight={500}
                    fill="var(--color-ink-on-dark)"
                    textAnchor="middle"
                  >
                    {tag.label}
                  </text>
                </g>
              ))}
            </g>

            {/* Connected systems */}
            {SYSTEMS.map((system, i) => (
              <g
                key={system.category}
                className="epi-rise"
                style={{ animationDelay: `${520 + i * 80}ms` }}
              >
                <rect
                  x={COL_C}
                  y={system.y}
                  width={COL_W}
                  height="44"
                  rx="10"
                  fill="var(--color-paper-white)"
                  stroke="var(--color-mist-gray)"
                />
                <text
                  x={COL_C + 18}
                  y={system.y + 19}
                  fontSize={9.5}
                  fontWeight={500}
                  letterSpacing="0.06em"
                  fill="var(--color-ink-subtle)"
                >
                  {system.category.toUpperCase()}
                </text>
                <text
                  x={COL_C + 18}
                  y={system.y + 34}
                  fontSize={12}
                  fontWeight={500}
                  fill="var(--color-ink)"
                  letterSpacing="-0.01em"
                >
                  {system.platform}
                </text>
                <circle
                  cx={COL_C + COL_W - 18}
                  cy={system.y + 22}
                  r="3"
                  fill="var(--color-violet-core)"
                  className="epi-dot"
                  style={{ animationDelay: `${i * 400}ms` }}
                />
              </g>
            ))}

            {/* Outcome bar */}
            <g className="epi-rise" style={{ animationDelay: "820ms" }}>
              <rect
                x="0"
                y="288"
                width="900"
                height="72"
                rx="12"
                fill="var(--color-mist-gray)"
              />
              {OUTCOMES.map((item) => (
                <g key={item.label}>
                  <rect
                    x={item.x}
                    y="312"
                    width="2"
                    height="24"
                    rx="1"
                    fill="var(--color-violet-core)"
                  />
                  <text
                    x={item.x + 14}
                    y="322"
                    fontSize={12}
                    fontWeight={500}
                    fill="var(--color-ink)"
                    letterSpacing="-0.01em"
                  >
                    {item.label}
                  </text>
                  <text
                    x={item.x + 14}
                    y="337"
                    fontSize={10.5}
                    fill="var(--color-ink-subtle)"
                  >
                    across every department
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </figure>
  );
}
