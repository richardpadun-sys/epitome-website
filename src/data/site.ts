/**
 * Company facts, navigation and footer structure.
 *
 * Every value here is taken from the live Epitome website
 * (theepitome.co.uk). Nothing in this file is invented — if a claim is not
 * on the source site, it does not belong here.
 */

export const site = {
  name: "The Epitome",
  legalName: "The Epitome Group Ltd",
  url: "https://theepitome.co.uk",
  tagline: "AI Integration Specialists for UK Small Businesses",
  description:
    "AI integration specialists helping UK small businesses transform their operations with intelligent automation and strategic AI implementation.",
} as const;

export const contact = {
  email: "info@theepitome.co.uk",
  phone: "+44 (0) 207 665 0783",
  phoneHref: "tel:+442076650783",
  whatsappNumber: "+447444263059",
  whatsappHref:
    "https://wa.me/447444263059?text=can%20we%20talk%2C%20I%20have%20a%20need%20for%20AI%20Integration%20or%20something%20similar",
  address: {
    line1: "TownSq Kingston",
    line2: "3 Bucklands Wharf, Thameside",
    postcode: "KT1 1TF",
    full: "TownSq Kingston, 3 Bucklands Wharf, Thameside, KT1 1TF",
  },
  offices: "Offices in London & Birmingham",
  /** The live Google Appointments page used on the source site. */
  bookingUrl:
    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ39ne1GRjOyM52AzZFovSI_Ye8wzmqZRFk9DVQ=",
} as const;

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-epitome-group/" },
  { label: "Facebook", href: "https://www.facebook.com/TheEp1tomeGroup/" },
  { label: "Instagram", href: "https://www.instagram.com/theepitomegroup" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export type NavChild = {
  label: string;
  href: string;
  summary: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  groups?: { title: string; items: NavChild[] }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        title: "Plan",
        items: [
          {
            label: "AI Audit",
            href: "/ai-audit",
            summary: "Assess readiness across data, systems, people and process.",
          },
          {
            label: "AI Consultancy",
            href: "/ai-consultancy",
            summary: "Strategy, prioritised use cases and an implementation roadmap.",
          },
          {
            label: "AI Policy",
            href: "/ai-policy",
            summary: "Governance, usage, privacy and ethics frameworks.",
          },
          {
            label: "Free AI Assessment",
            href: "/ai-assessment",
            summary: "23 questions, instant score, no email required.",
          },
        ],
      },
      {
        title: "Build",
        items: [
          {
            label: "AI Integration",
            href: "/ai-integration",
            summary: "Embed AI across the platforms you already run.",
          },
          {
            label: "AI Agents",
            href: "/ai-agents",
            summary: "Bespoke agents for sales, support, HR and operations.",
          },
          {
            label: "Custom Applications",
            href: "/services/custom-applications",
            summary: "Software you own, delivered in weeks rather than months.",
          },
        ],
      },
      {
        title: "Adopt",
        items: [
          {
            label: "AI Training",
            href: "/ai-training",
            summary: "Department-specific programmes at two levels.",
          },
          {
            label: "AI Insurance",
            href: "/ai-insurance",
            summary: "Specialised cover and risk management for AI adoption.",
          },
          {
            label: "Creatathon Workshop",
            href: "/ai-prototyping-workshop",
            summary: "Build a working AI app in one day, no coding required.",
          },
        ],
      },
    ],
  },
  { label: "Outsourced Solutions", href: "/outsourced-business-solutions" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Consultancy", href: "/ai-consultancy" },
      { label: "AI Audit", href: "/ai-audit" },
      { label: "AI Integration", href: "/ai-integration" },
      { label: "AI Agents", href: "/ai-agents" },
      { label: "AI Training", href: "/ai-training" },
      { label: "Custom Applications", href: "/services/custom-applications" },
      { label: "AI Policy", href: "/ai-policy" },
      { label: "AI Insurance", href: "/ai-insurance" },
      { label: "Free AI Assessment", href: "/ai-assessment" },
      { label: "Creatathon Workshop", href: "/ai-prototyping-workshop" },
      { label: "Outsourced Business Solutions", href: "/outsourced-business-solutions" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "All Policies", href: "/policies" },
      { label: "Terms & Conditions of Sale", href: "/terms-and-conditions-of-sale" },
      { label: "AIOS & AI Integration Terms", href: "/aios-and-ai-integration-terms" },
      { label: "Cancellation & Refund Policy", href: "/cancellation-and-refund-policy" },
      { label: "AI Training Disclaimer", href: "/ai-training-disclaimer" },
      { label: "Intellectual Property Notice", href: "/intellectual-property-notice" },
      { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;
