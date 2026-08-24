/**
 * Epitome's service catalogue.
 *
 * Headlines, descriptions, deliverables, phases and timelines are taken from
 * the corresponding pages on theepitome.co.uk. Copy has been tightened and
 * restructured for presentation; no capability, timeline or price has been
 * added that the source does not state.
 */

export type ServicePhase = {
  title: string;
  duration: string;
  description: string;
};

export type Service = {
  slug: string;
  href: string;
  /** Index label used in the capability grid — 01…08 */
  index: string;
  name: string;
  /** Short line used in navigation and cards */
  summary: string;
  /** Which stage of the engagement this sits in */
  stage: "Plan" | "Build" | "Adopt";
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Present on service pages as the "what you get" list */
  deliverables?: { title: string; description: string }[];
  phases?: ServicePhase[];
  /** Short outcome bullets used on cards and overview strips */
  outcomes?: string[];
  meta: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "ai-audit",
    href: "/ai-audit",
    index: "01",
    name: "AI Audit",
    stage: "Plan",
    summary:
      "A structured assessment of your data, systems, people and processes — and where AI actually pays back.",
    eyebrow: "AI Audit",
    headline: "Unlock your business AI potential",
    subheadline:
      "A comprehensive analysis of your AI readiness that replaces guesswork with a costed, sequenced plan.",
    outcomes: [
      "Strategic AI planning",
      "Risk assessment",
      "ROI analysis",
      "Implementation roadmap",
    ],
    deliverables: [
      {
        title: "Business readiness evaluation",
        description:
          "Where the organisation genuinely stands against AI adoption, not where it believes it stands.",
      },
      {
        title: "Technology infrastructure assessment",
        description:
          "The systems, integrations and constraints that will shape what can realistically be built.",
      },
      {
        title: "Data quality review",
        description:
          "Whether your data can support the outcomes you want, and what needs fixing before it can.",
      },
      {
        title: "Team skills analysis",
        description:
          "Capability by department, so training is targeted rather than blanket.",
      },
      {
        title: "Compliance evaluation",
        description:
          "Obligations and exposure, assessed against UK data protection requirements.",
      },
      {
        title: "ROI projections",
        description:
          "Expected return per opportunity, so investment can be defended internally.",
      },
      {
        title: "Implementation roadmap",
        description:
          "A phased adoption sequence with dependencies made explicit.",
      },
      {
        title: "Risk strategies",
        description:
          "Mitigation for the failure modes that matter in your operating context.",
      },
      {
        title: "Ongoing support",
        description:
          "Continued input as the roadmap moves from decision into delivery.",
      },
    ],
    phases: [
      {
        title: "Initial consultation",
        duration: "30 minutes",
        description:
          "A free discovery call to understand the business, its pressures and its objectives.",
      },
      {
        title: "Comprehensive assessment",
        duration: "Structured review",
        description:
          "Assessment across data, systems, people and processes.",
      },
      {
        title: "Expert analysis",
        duration: "Customised roadmap",
        description:
          "Findings translated into a prioritised, phased adoption plan.",
      },
      {
        title: "Report delivery",
        duration: "Detailed report",
        description:
          "A written report you own, walked through with the team who produced it.",
      },
    ],
    meta: {
      title: "AI Audit for UK Small Businesses",
      description:
        "A comprehensive AI readiness audit covering data, systems, people and processes — with ROI projections, risk strategies and a phased implementation roadmap.",
    },
  },
  {
    slug: "ai-consultancy",
    href: "/ai-consultancy",
    index: "02",
    name: "AI Consultancy",
    stage: "Plan",
    summary:
      "Strategy, prioritised use cases and an implementation roadmap tailored to how your business actually runs.",
    eyebrow: "AI Consultancy",
    headline: "Strategic AI consultancy for UK small businesses",
    subheadline:
      "We combine years of human technology integration expertise with AI and machine learning to develop smart, forward-thinking strategies that drive real business outcomes.",
    outcomes: [
      "ROI-focused solutions",
      "Risk mitigation and governance",
      "Industry-specific expertise",
      "Competitive advantage",
    ],
    deliverables: [
      {
        title: "AI Audit",
        description:
          "Assessment of data, systems, people and processes, producing a readiness report, phased adoption roadmap, compliance guidance, use case identification and infrastructure recommendations.",
      },
      {
        title: "AI Strategy Development",
        description:
          "A strategic roadmap with prioritised use cases, technology recommendations and an implementation timeline.",
      },
      {
        title: "AI Implementation Planning",
        description:
          "Implementation blueprints, technical specifications, risk mitigation and a success metrics framework.",
      },
    ],
    phases: [
      {
        title: "Discovery call",
        duration: "30 minutes, free",
        description:
          "A short conversation to establish fit, context and the outcomes that matter.",
      },
      {
        title: "Business assessment",
        duration: "2–3 weeks",
        description:
          "Assessment of data, systems, people and processes against your objectives.",
      },
      {
        title: "Strategy development",
        duration: "2–4 weeks",
        description:
          "Your vision translated into an actionable AI plan with prioritised use cases.",
      },
      {
        title: "Implementation support",
        duration: "1–3 weeks",
        description:
          "Bridging strategy and execution with blueprints, specifications and success metrics.",
      },
    ],
    meta: {
      title: "AI Consultancy for UK Small Businesses",
      description:
        "Strategic AI consultancy combining technology integration expertise with AI and machine learning — audits, strategy development and implementation planning.",
    },
  },
  {
    slug: "ai-policy",
    href: "/ai-policy",
    index: "03",
    name: "AI Policy",
    stage: "Plan",
    summary:
      "Governance, usage, privacy and ethics frameworks written for your organisation, not downloaded from a template.",
    eyebrow: "AI Policy & Governance",
    headline: "Customised AI policies for compliant and responsible AI",
    subheadline:
      "Fully customised AI policies ensuring regulatory compliance, risk management, and ethical AI adoption across your organisation.",
    outcomes: [
      "Risk mitigation",
      "Regulatory compliance",
      "Operational clarity",
      "Stakeholder trust",
    ],
    deliverables: [
      {
        title: "AI Governance Framework",
        description:
          "Executive oversight structure, decision-making processes, risk management protocols and compliance monitoring — delivered as a governance charter with roles, responsibilities and escalation procedures.",
      },
      {
        title: "AI Usage Policy",
        description:
          "Acceptable use guidelines, tool-specific policies, security requirements and training requirements, including an employee handbook and usage guidelines.",
      },
      {
        title: "Data & Privacy Policy",
        description:
          "Data handling protocols, privacy impact assessments, consent management and retention policies aligned with UK GDPR.",
      },
      {
        title: "AI Ethics Framework",
        description:
          "Bias prevention measures, fairness criteria, transparency requirements and accountability measures.",
      },
    ],
    phases: [
      {
        title: "Current state assessment",
        duration: "1 week",
        description:
          "Where policy exists today, where it does not, and where exposure sits.",
      },
      {
        title: "Framework design",
        duration: "2–3 weeks",
        description:
          "Governance structure and decision rights designed around your organisation.",
      },
      {
        title: "Policy documentation",
        duration: "2–4 weeks",
        description:
          "The written policies themselves, drafted for the people who have to follow them.",
      },
      {
        title: "Training & implementation",
        duration: "1–2 weeks",
        description:
          "Rolling the framework out so it is understood and used, not filed.",
      },
    ],
    meta: {
      title: "AI Policy & Governance",
      description:
        "Customised AI governance, usage, data privacy and ethics frameworks for UK organisations — with compliance options for UK GDPR, financial services, healthcare and general business.",
    },
  },
  {
    slug: "ai-integration",
    href: "/ai-integration",
    index: "04",
    name: "AI Integration",
    stage: "Build",
    summary:
      "AI embedded across the CRM, finance, HR and marketing platforms you already run.",
    eyebrow: "AI Integration",
    headline: "Seamless AI integration, sustainable results",
    subheadline:
      "We embed AI capabilities across your existing platforms so every system works more productively for your business.",
    outcomes: [
      "Unified data view across departments",
      "24/7 predictive insights",
      "Reduced manual handoffs",
      "Seamless system integration",
    ],
    phases: [
      {
        title: "Discovery & architecture",
        duration: "1–2 weeks",
        description:
          "Audit data flows, security and objectives, and design the integration blueprint.",
      },
      {
        title: "Implementation",
        duration: "2–6 weeks",
        description:
          "Connect AI services via APIs, middleware and custom adapters.",
      },
      {
        title: "Optimisation",
        duration: "Ongoing",
        description:
          "Monitor KPIs, retrain models and fine-tune workflows.",
      },
    ],
    meta: {
      title: "AI Integration Services",
      description:
        "Embed AI across your existing CRM, finance, HR and marketing platforms — with UK GDPR compliance, end-to-end encryption and role-based access controls.",
    },
  },
  {
    slug: "ai-agents",
    href: "/ai-agents",
    index: "05",
    name: "AI Agents",
    stage: "Build",
    summary:
      "Bespoke agents trained on your data, workflows and brand voice — working across sales, support, HR and operations.",
    eyebrow: "AI Agents",
    headline: "Custom AI agents for business automation",
    subheadline:
      "We design, build and integrate bespoke AI agents trained on your business data, workflows and brand voice to handle tasks across sales, customer support, HR, marketing and operations.",
    outcomes: [
      "Natural language understanding",
      "CRM integration",
      "Multi-channel support",
      "Human escalation",
    ],
    phases: [
      {
        title: "Business analysis",
        duration: "Phase one",
        description:
          "Understand the workflow the agent will actually take on, and where it must hand back to a person.",
      },
      {
        title: "Agent design",
        duration: "Phase two",
        description:
          "Define scope, tone of voice, integrations and escalation paths.",
      },
      {
        title: "Training & testing",
        duration: "Phase three",
        description:
          "Train on your business data and test against real cases before anything goes live.",
      },
      {
        title: "Deployment & optimisation",
        duration: "Phase four",
        description:
          "Deploy into your channels, then monitor and refine with real usage.",
      },
    ],
    meta: {
      title: "Custom AI Agents for Business Automation",
      description:
        "Bespoke AI agents trained on your business data, workflows and brand voice — for sales, customer support, HR, marketing and operations.",
    },
  },
  {
    slug: "custom-applications",
    href: "/services/custom-applications",
    index: "06",
    name: "Custom Applications",
    stage: "Build",
    summary:
      "Bespoke business applications delivered in weeks, not months — and owned by you, not rented.",
    eyebrow: "Custom Applications",
    headline: "From strategy to execution",
    subheadline:
      "Custom business applications delivered in weeks, not months. Off-the-shelf software forces you to adapt your business to the tool. Custom applications adapt to your business.",
    outcomes: [
      "Built for your workflow",
      "Proprietary competitive advantage",
      "Ownership without vendor lock-in",
    ],
    phases: [
      {
        title: "Understand your challenge",
        duration: "Step one",
        description:
          "A deep dive into your processes and objectives before anything is designed.",
      },
      {
        title: "Design the solution",
        duration: "Step two",
        description:
          "Wireframes and prototypes agreed before development begins.",
      },
      {
        title: "Build with precision",
        duration: "Step three",
        description:
          "Built on Lovable's no-code platform for speed without compromising quality.",
      },
      {
        title: "Deploy & optimise",
        duration: "Step four",
        description:
          "Launch, train your team, then refine against real use.",
      },
    ],
    meta: {
      title: "Custom Business Applications Built Fast",
      description:
        "Custom AI-powered web applications for UK businesses — operational dashboards, customer portals, internal automation and AI assistants. Delivered in weeks, not months.",
    },
  },
  {
    slug: "ai-training",
    href: "/ai-training",
    index: "07",
    name: "AI Training",
    stage: "Adopt",
    summary:
      "Department-specific AI training at two levels, delivered by a UK-based team.",
    eyebrow: "AI Training",
    headline: "AI training, built for every department",
    subheadline:
      "Equip every team in your business with AI skills that are directly relevant to their daily work — not generic theory, but department-specific capability.",
    outcomes: [
      "100% department-specific",
      "Two levels per department",
      "UK-based delivery team",
      "Practical, not theoretical",
    ],
    phases: [
      {
        title: "Choose your department",
        duration: "Step one",
        description:
          "Select the business function the programme is built around.",
      },
      {
        title: "Pick your level",
        duration: "Step two",
        description:
          "Essentials for team members, Intermediate for leaders.",
      },
      {
        title: "Train your team",
        duration: "Step three",
        description:
          "Delivered virtually, one-to-one, or in-house at your site.",
      },
    ],
    meta: {
      title: "AI Training for Every Department",
      description:
        "Department-specific AI training across ten business functions, at Essentials and Intermediate levels — delivered virtually, one-to-one or in-house by a UK-based team.",
    },
  },
  {
    slug: "ai-insurance",
    href: "/ai-insurance",
    index: "08",
    name: "AI Insurance",
    stage: "Adopt",
    summary:
      "Specialised AI insurance cover and risk management strategies for businesses adopting AI.",
    eyebrow: "AI Insurance & Risk Management",
    headline: "Comprehensive AI insurance solutions",
    subheadline:
      "Protect your business with specialised AI insurance coverage and risk management strategies.",
    meta: {
      title: "AI Insurance & Risk Management",
      description:
        "Specialised AI insurance coverage and risk management strategies for UK businesses adopting artificial intelligence.",
    },
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** The five services surfaced on the homepage, in the source site's order. */
export const featuredServiceSlugs = [
  "ai-consultancy",
  "ai-audit",
  "ai-integration",
  "ai-training",
  "custom-applications",
] as const;
