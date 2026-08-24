/**
 * Supporting content: proof points, differentiators, methodology, people,
 * testimonials, platforms and FAQs.
 *
 * Source: theepitome.co.uk (home, about, and the individual service pages).
 */

/* -------------------------------------------------------------------------- */
/*  Proof                                                                     */
/* -------------------------------------------------------------------------- */

export const headlineStats = [
  { value: "745+", label: "Businesses transformed" },
  { value: "70%", label: "Average process improvement" },
  { value: "24/7", label: "AI support available" },
] as const;

export const companyStats = [
  { value: "745+", label: "Businesses transformed" },
  { value: "£2.5M+", label: "Cost savings generated" },
  { value: "99%", label: "Client satisfaction" },
  { value: "24/7", label: "Support available" },
] as const;

export const consultancyCredentials = [
  { value: "12+", label: "Years of AI implementation experience" },
  { value: "150+", label: "Successful projects completed" },
  { value: "150+", label: "UK businesses served" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Positioning                                                               */
/* -------------------------------------------------------------------------- */

export const differentiators = [
  {
    index: "01",
    title: "AI & automation specialists",
    body: "We combine AI, digital tools and process automation so your business runs smarter — not on a stack of expensive subscriptions.",
  },
  {
    index: "02",
    title: "Custom AI agent development",
    body: "AI agents trained on your business data to handle sales, support and operations — no recurring SaaS fees, you own it.",
  },
  {
    index: "03",
    title: "Own your software",
    body: "We build bespoke applications and automations so you replace monthly SaaS subscriptions with tools you own and control.",
  },
  {
    index: "04",
    title: "Secure & compliant",
    body: "Enterprise-grade security and full UK data protection compliance — built in from day one, not bolted on.",
  },
] as const;

/** Framed from the source site's own positioning: what SaaS sprawl costs SMEs. */
export const problems = [
  {
    label: "Cost",
    title: "Subscriptions that never stop compounding",
    body: "Every tool adds another monthly line item. None of it is yours, and the bill only moves in one direction.",
  },
  {
    label: "Time",
    title: "Manual handoffs between systems",
    body: "Work is re-keyed between CRM, finance, HR and marketing platforms because nothing was built to talk to anything else.",
  },
  {
    label: "Clarity",
    title: "No single view of the business",
    body: "Data sits in departments. Answering a simple question about performance takes a day and three spreadsheets.",
  },
  {
    label: "Risk",
    title: "AI adopted without governance",
    body: "Teams start using AI tools informally, with no policy, no data controls and no view of the exposure that creates.",
  },
] as const;

export const approachPillars = [
  {
    title: "Seamless integration with existing systems",
    body: "We work with the platforms you already run rather than asking you to replace them.",
  },
  {
    title: "UK GDPR compliant solutions",
    body: "Data protection, residency and access control are design constraints, not an afterthought.",
  },
  {
    title: "Ongoing support and optimisation",
    body: "We stay involved after launch — monitoring, retraining and refining as the business changes.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Method                                                                    */
/* -------------------------------------------------------------------------- */

export const methodology = [
  {
    step: "01",
    title: "Discovery & assessment",
    body: "We start by understanding how the business actually runs — data, systems, people and process — before proposing anything.",
  },
  {
    step: "02",
    title: "Custom solution design",
    body: "Opportunities are prioritised by return and sequenced into a plan, then designed around your workflow rather than a product's.",
  },
  {
    step: "03",
    title: "Implementation & training",
    body: "We build and integrate, then train the teams who will use it so adoption does not stall after handover.",
  },
  {
    step: "04",
    title: "Optimisation & support",
    body: "We monitor KPIs, retrain models and fine-tune workflows as the business and the technology move on.",
  },
] as const;

export const values = [
  {
    title: "Results-driven",
    body: "We focus on measurable outcomes that directly impact your business growth and efficiency.",
  },
  {
    title: "Secure & compliant",
    body: "Enterprise-grade security with full UK data protection and industry compliance.",
  },
  {
    title: "Partnership approach",
    body: "We work alongside your team as trusted partners, not just consultants.",
  },
  {
    title: "Innovation first",
    body: "Cutting-edge AI solutions tailored specifically for UK small business needs.",
  },
] as const;

export const mission =
  "We are AI integrators for businesses who are bridging the gap between traditional business operations and AI automation.";

/* -------------------------------------------------------------------------- */
/*  People                                                                    */
/* -------------------------------------------------------------------------- */

export const leadership = [
  { name: "Richard Padun", role: "AI Strategy Director", experience: "10+ years" },
  { name: "Martin Keene", role: "GTM Officer", experience: "15+ years" },
  { name: "Ed Gardner", role: "Training & Development Lead", experience: "8+ years" },
  { name: "Terriann Hughes", role: "Security & Compliance Head", experience: "10+ years" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Clients                                                                   */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    quote:
      "We have recently faced significant challenges in acquiring and retaining members. The Epitome team demonstrated a deep understanding of our industry and developed a comprehensive AI strategy curated to our needs.",
    name: "David Randall",
    company: "Canbury Works",
  },
  {
    quote:
      "I am more than happy to share my experience. The comprehensive analysis of our operation by Epitome has certainly been transformative for our business growth.",
    name: "Bruce Rutland",
    company: "Rutland Productions",
  },
  {
    quote:
      "When we decided to launch Teach Pro, we believed we knew how to navigate the AI complexities of starting the business. However, partnering with Epitome has been invaluable.",
    name: "John Gardner",
    company: "Teach Pro Ltd",
  },
] as const;

export const caseStudy = {
  client: "Rugby Engineering",
  eyebrow: "Case study",
  challenge:
    "The business needed job tracking and financial reporting it could actually trust, without adding another subscription it did not control.",
  solution:
    "A custom operational dashboard delivered in six weeks, with real-time profitability tracking per job and full mobile access for the team on site.",
  duration: "6 weeks",
  deliverable: "Custom operational dashboard",
  highlights: [
    "Real-time profitability tracking",
    "Job-level visibility",
    "Mobile access",
  ],
  quote:
    "I can now see at a glance which jobs are making money and which need attention. It's transformed how I run the business.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Platforms Epitome integrates with                                         */
/* -------------------------------------------------------------------------- */

export const platformCategories = [
  { category: "CRM", platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"] },
  { category: "Finance", platforms: ["QuickBooks", "Xero", "Sage", "FreshBooks"] },
  { category: "HR", platforms: ["BambooHR", "Workday", "ADP", "Personio"] },
  { category: "Marketing", platforms: ["Mailchimp", "Marketo", "ActiveCampaign", "Pardot"] },
] as const;

export const securityStandards = [
  "UK GDPR compliance and data residency",
  "End-to-end encryption",
  "Role-based access controls",
  "Regular audits",
  "Disaster recovery protocols",
] as const;

/* -------------------------------------------------------------------------- */
/*  Industries                                                                */
/* -------------------------------------------------------------------------- */

export const industries = [
  "Retail",
  "Professional services",
  "Healthcare",
  "Finance",
  "Manufacturing",
] as const;

/* -------------------------------------------------------------------------- */
/*  AI Agents                                                                 */
/* -------------------------------------------------------------------------- */

export const agentTypes = [
  {
    name: "Sales AI Agents",
    description:
      "Intelligent sales assistants that qualify leads, schedule meetings, and nurture prospects 24/7.",
    capabilities: [
      "Lead qualification",
      "Meeting scheduling",
      "Follow-up automation",
      "Sales pipeline management",
    ],
  },
  {
    name: "Customer Support Agents",
    description:
      "AI-powered customer service that handles inquiries, resolves issues, and escalates when needed.",
    capabilities: [
      "Instant response",
      "Issue resolution",
      "Ticket routing",
      "Knowledge base integration",
    ],
  },
  {
    name: "HR AI Assistants",
    description:
      "Streamline recruitment, onboarding, and employee support with intelligent HR automation.",
    capabilities: [
      "Resume screening",
      "Interview scheduling",
      "Onboarding automation",
      "Employee queries",
    ],
  },
  {
    name: "Operations Agents",
    description:
      "Automate routine tasks, manage workflows, and optimise business processes intelligently.",
    capabilities: [
      "Task automation",
      "Workflow optimisation",
      "Process monitoring",
      "Performance reporting",
    ],
  },
] as const;

export const agentCapabilities = [
  "Natural language understanding",
  "CRM integration",
  "Custom business data training",
  "Multi-channel support",
  "Sentiment analysis",
  "Human escalation",
  "Continuous learning",
  "Real-time analytics",
] as const;

/** Reported outcomes by sector, as published on the AI Agents page. */
export const agentUseCases = [
  { sector: "E-commerce", metric: "40%", outcome: "increase in average order value" },
  { sector: "Professional services", metric: "60%", outcome: "reduction in response time" },
  { sector: "SaaS", metric: "75%", outcome: "reduction in support tickets" },
  { sector: "Healthcare", metric: "50%", outcome: "improvement in patient satisfaction" },
] as const;

/* -------------------------------------------------------------------------- */
/*  AI Training                                                               */
/* -------------------------------------------------------------------------- */

export const trainingDepartments = [
  "Marketing & Sales",
  "Finance & Accounting",
  "Human Resources & People",
  "Operations & Supply Chain",
  "Customer Service & Support",
  "IT & Technology",
  "Legal & Compliance",
  "Leadership & Executive",
  "Product, R&D & Innovation",
  "Procurement & Administration",
] as const;

export const trainingLevels = [
  {
    name: "Essentials",
    audience: "Team members",
    body: "Builds practical AI literacy for daily tasks.",
  },
  {
    name: "Intermediate",
    audience: "Leaders",
    body: "Drives strategy, governance, and department-level AI implementation.",
  },
] as const;

export const trainingDelivery = [
  {
    name: "Virtual live sessions",
    body: "Live, instructor-led delivery for distributed teams.",
  },
  {
    name: "1-2-1 coaching",
    body: "Focused sessions for individuals with specific objectives.",
  },
  {
    name: "In-house bespoke",
    body: "Programmes delivered at your site, shaped around your operation.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Custom Applications                                                       */
/* -------------------------------------------------------------------------- */

export const applicationTypes = [
  {
    name: "Operational dashboards",
    body: "A single view of how the business is performing, built around the numbers you actually manage to.",
  },
  {
    name: "Customer portals & client management",
    body: "Give clients a place to self-serve, and your team one place to manage the relationship.",
  },
  {
    name: "Internal process automation",
    body: "Replace the manual steps that sit between your existing systems.",
  },
  {
    name: "AI-powered assistants & agents",
    body: "Agents embedded directly into the tools your team already opens every morning.",
  },
  {
    name: "Data & analytics platforms",
    body: "Bring dispersed data together so reporting stops being a monthly exercise.",
  },
  {
    name: "Member management & community platforms",
    body: "Membership, access and communication handled in one owned system.",
  },
] as const;

export const platformClaims = [
  "10x faster development than traditional coding",
  "Enterprise-grade security",
  "AI-powered assistance",
  "Scales to millions of users",
  "Full customisation",
] as const;

export const mvpTiers = [
  {
    name: "Validation MVP",
    timeline: "2–4 weeks",
    price: "£5,000–£10,000",
    features: ["One core flow", "Basic authentication", "Simple landing page"],
  },
  {
    name: "Standard MVP",
    timeline: "4–8 weeks",
    price: "£10,000–£20,000",
    features: ["Multiple flows", "Integrations", "Admin panel", "Launch-ready"],
    featured: true,
  },
  {
    name: "Advanced / SaaS MVP",
    timeline: "8–12 weeks",
    price: "£20,000–£30,000+",
    features: ["Multi-tenant", "AI / ML", "Complex integrations", "Scale-ready"],
  },
] as const;

export const engagementModels = [
  {
    name: "Discovery consultation",
    detail: "Free 60-minute session",
  },
  {
    name: "Scoped project",
    detail: "£8,000–£35,000, typically 4–8 weeks",
  },
  {
    name: "Strategic retainer",
    detail: "Flexible ongoing partnership",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  AI Policy                                                                 */
/* -------------------------------------------------------------------------- */

export const complianceOptions = [
  "UK GDPR",
  "Financial Services (FCA)",
  "Healthcare (NHS)",
  "General Business",
] as const;

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    question: "What AI services does The Epitome offer?",
    answer:
      "We provide comprehensive AI solutions including AI training, consultancy, integration services, AI agents development, policy creation, and insurance guidance for small and medium businesses.",
  },
  {
    question: "How can AI benefit my small business?",
    answer:
      "AI can automate repetitive tasks, improve customer service, enhance data analysis, streamline operations, and provide competitive advantages through intelligent automation and decision-making support.",
  },
  {
    question: "Do you offer training for non-technical staff?",
    answer:
      "Yes, our AI training programmes are designed for business leaders and staff at all technical levels. We focus on practical applications and business outcomes rather than technical complexity.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across various industries including retail, professional services, healthcare, finance, manufacturing, and more. Our solutions are tailored to specific industry needs and challenges.",
  },
  {
    question: "How long does AI implementation typically take?",
    answer:
      "Implementation timelines vary based on project complexity. Simple AI tools can be deployed in weeks, whilst comprehensive AI strategies may take several months. We provide realistic timelines during our consultation process.",
  },
  {
    question: "What support do you provide after implementation?",
    answer:
      "We offer ongoing support including training updates, technical assistance, performance monitoring, and continuous optimisation to ensure your AI solutions deliver maximum value.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "We implement robust security measures including data encryption, access controls, and compliance with GDPR and industry-specific regulations. Data protection is integral to all our AI solutions.",
  },
  {
    question: "Can you integrate AI with our existing systems?",
    answer:
      "Yes, we specialise in seamless integration with existing business systems including CRMs, ERPs, and other software platforms to ensure minimal disruption to your operations.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Legal                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * The legal index. Paths match the live site exactly so existing inbound
 * links and search results keep resolving.
 */
export const policies = [
  {
    slug: "terms-and-conditions-of-sale",
    href: "/terms-and-conditions-of-sale",
    title: "Terms & Conditions of Sale",
    summary: "Complete terms governing all service purchases.",
  },
  {
    slug: "aios-and-ai-integration-terms",
    href: "/aios-and-ai-integration-terms",
    title: "AIOS & AI Integration Terms",
    summary:
      "Terms for AIOS, AI agents, automations, integrations, and live systems.",
  },
  {
    slug: "cancellation-and-refund-policy",
    href: "/cancellation-and-refund-policy",
    title: "Cancellation & Refund Policy",
    summary: "Cancellation, refund, and project terms.",
  },
  {
    slug: "ai-training-disclaimer",
    href: "/ai-training-disclaimer",
    title: "AI Training, AIOS & Integration Disclaimer",
    summary: "Limitations regarding AI training, AIOS, and live AI outputs.",
  },
  {
    slug: "intellectual-property-notice",
    href: "/intellectual-property-notice",
    title: "Intellectual Property Notice",
    summary: "Ownership of background IP, client data, and deliverables.",
  },
  {
    slug: "acceptable-use-policy",
    href: "/acceptable-use-policy",
    title: "Acceptable Use Policy",
    summary:
      "Expected conduct for training delegates and client system users.",
  },
  {
    slug: "cookie-policy",
    href: "/cookie-policy",
    title: "Cookie Policy",
    summary: "How we use cookies on our website.",
  },
  {
    slug: "privacy",
    href: "/privacy",
    title: "Privacy Policy",
    summary: "How we collect, use, and protect your data.",
  },
  {
    slug: "contractor-terms",
    href: "/contractor-terms",
    title: "Contractor Terms",
    summary:
      "For external contractors, subcontractors and freelancers delivering work on our behalf.",
  },
] as const;

export const policiesIntro =
  "All policies governing The Epitome Group's services are listed below. They apply across our AI training, consultancy, AIOS and business operating system design, AI agents, integrations, audits, automations, support, and related services. Please review each before engaging our services.";
