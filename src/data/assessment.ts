/**
 * AI Integration Assessment — content and scoring model.
 *
 * The 23 questions, their four answer options, the six domains and their
 * weights are reproduced verbatim from the live tool at
 * theepitome.co.uk/ai-assessment (captured by completing the assessment
 * twice — once picking every lowest option, once every highest — to read
 * off the exact question text, options, and the score/label pairs at both
 * ends of the scale).
 *
 * Two result tiers (0% "AI Unaware" and 100% "AI Advanced") are the live
 * tool's own copy. The two middle tiers below are authored to match that
 * voice — they were not observed directly, since the tool did not expose
 * its internal band boundaries. If the client has the original threshold
 * values, swap them in; the ones here (25/50/75) split the range evenly.
 */

export type AssessmentQuestion = {
  n: number;
  domain: string;
  question: string;
  options: string[];
};

export type Domain = {
  name: string;
  questionCount: number;
  weightPct: number;
  description: string;
};

export const domains: Domain[] = [
  {
    name: "Strategic Foundation",
    questionCount: 4,
    weightPct: 20,
    description: "Leadership commitment, AI strategy alignment, and business case clarity",
  },
  {
    name: "Data & Infrastructure",
    questionCount: 5,
    weightPct: 25,
    description: "Data quality, accessibility, infrastructure scalability, and technical readiness",
  },
  {
    name: "Organisational Intelligence",
    questionCount: 4,
    weightPct: 20,
    description: "Team skills, AI literacy, culture of innovation, and talent development",
  },
  {
    name: "Operational Excellence",
    questionCount: 4,
    weightPct: 15,
    description: "Process optimisation, automation readiness, and workflow integration potential",
  },
  {
    name: "Risk & Governance",
    questionCount: 3,
    weightPct: 10,
    description: "AI ethics, compliance readiness, security frameworks, and risk management",
  },
  {
    name: "Innovation Velocity",
    questionCount: 3,
    weightPct: 10,
    description: "Speed of adoption, experimentation culture, and market responsiveness",
  },
];

export const questions: AssessmentQuestion[] = [
  {
    n: 1,
    domain: "Strategic Foundation",
    question: "How would you describe your organisation's current AI strategy and leadership commitment?",
    options: [
      "No formal AI strategy exists; leadership shows minimal interest",
      "Informal discussions about AI, but no clear direction or commitment",
      "Basic AI strategy drafted with moderate leadership buy-in",
      "Comprehensive AI strategy with strong leadership commitment and clear goals",
    ],
  },
  {
    n: 2,
    domain: "Strategic Foundation",
    question: "How well aligned is AI adoption with your overall business objectives?",
    options: [
      "AI initiatives have no clear connection to business goals",
      "Loose connection between AI projects and business objectives",
      "AI initiatives generally support business goals but alignment could be stronger",
      "AI strategy is tightly integrated with business objectives and KPIs",
    ],
  },
  {
    n: 3,
    domain: "Strategic Foundation",
    question: "What level of budget and resources has been allocated for AI initiatives?",
    options: [
      "No dedicated budget or resources for AI",
      "Minimal budget allocated, mostly for exploration",
      "Moderate budget with some dedicated resources",
      "Substantial budget and dedicated team for AI initiatives",
    ],
  },
  {
    n: 4,
    domain: "Strategic Foundation",
    question: "How clear is your organisation's business case for AI implementation?",
    options: [
      "No clear business case; AI seen as 'nice to have'",
      "Vague understanding of potential benefits",
      "Solid business case with identified use cases and expected ROI",
      "Detailed business case with quantified benefits and risk mitigation",
    ],
  },
  {
    n: 5,
    domain: "Data & Infrastructure",
    question: "How would you rate the quality and accessibility of your organisation's data?",
    options: [
      "Poor data quality with significant silos and accessibility issues",
      "Basic data management with some quality and access challenges",
      "Good data quality with generally accessible, well-organised data",
      "Excellent data quality with comprehensive governance and easy access",
    ],
  },
  {
    n: 6,
    domain: "Data & Infrastructure",
    question: "What is the current state of your IT infrastructure for supporting AI workloads?",
    options: [
      "Legacy systems with no cloud or modern infrastructure",
      "Basic infrastructure with limited scalability",
      "Hybrid infrastructure with some cloud capabilities",
      "Modern, scalable infrastructure optimised for AI/ML workloads",
    ],
  },
  {
    n: 7,
    domain: "Data & Infrastructure",
    question: "How mature are your data integration and pipeline capabilities?",
    options: [
      "Manual, ad-hoc data processes with no automated pipelines",
      "Some automated processes but mostly manual integration",
      "Moderate automation with established data pipelines",
      "Fully automated, real-time data integration and processing",
    ],
  },
  {
    n: 8,
    domain: "Data & Infrastructure",
    question: "What level of data security and compliance measures are in place?",
    options: [
      "Basic security with minimal compliance considerations",
      "Standard security measures with some compliance awareness",
      "Good security practices with established compliance procedures",
      "Advanced security framework with comprehensive compliance management",
    ],
  },
  {
    n: 9,
    domain: "Data & Infrastructure",
    question: "How prepared is your technical architecture for AI integration?",
    options: [
      "No consideration for AI requirements in current architecture",
      "Limited preparation with basic technical capabilities",
      "Moderate readiness with some AI-compatible infrastructure",
      "Purpose-built architecture designed for AI and machine learning",
    ],
  },
  {
    n: 10,
    domain: "Organisational Intelligence",
    question: "What is the current level of AI literacy and skills within your team?",
    options: [
      "Very low AI awareness and no relevant technical skills",
      "Basic awareness but limited practical AI knowledge",
      "Moderate AI literacy with some team members having relevant skills",
      "High AI literacy across teams with strong technical capabilities",
    ],
  },
  {
    n: 11,
    domain: "Organisational Intelligence",
    question: "How does your organisation approach learning and skill development?",
    options: [
      "Minimal investment in training or skill development",
      "Ad-hoc training with no structured development program",
      "Regular training programs with some focus on emerging technologies",
      "Comprehensive learning culture with dedicated AI/tech skill development",
    ],
  },
  {
    n: 12,
    domain: "Organisational Intelligence",
    question: "How receptive is your organisational culture to technological change?",
    options: [
      "Resistant to change with preference for traditional methods",
      "Cautious about change but open to proven solutions",
      "Generally embraces change with moderate innovation appetite",
      "Highly adaptable culture that actively seeks innovation opportunities",
    ],
  },
  {
    n: 13,
    domain: "Organisational Intelligence",
    question: "What is your organisation's capacity for managing AI-related talent?",
    options: [
      "No specific plans or capabilities for AI talent acquisition",
      "Basic understanding of AI talent needs with limited recruitment capability",
      "Clear talent strategy with moderate success in attracting AI skills",
      "Strong talent acquisition and retention program for AI expertise",
    ],
  },
  {
    n: 14,
    domain: "Operational Excellence",
    question: "How well-documented and optimised are your current business processes?",
    options: [
      "Processes are ad-hoc with minimal documentation",
      "Basic process documentation but limited optimisation",
      "Well-documented processes with regular review and improvement",
      "Highly optimised, documented processes with continuous improvement culture",
    ],
  },
  {
    n: 15,
    domain: "Operational Excellence",
    question: "What is your organisation's experience with automation technologies?",
    options: [
      "No experience with business process automation",
      "Limited automation in isolated areas",
      "Moderate automation across several business functions",
      "Extensive automation experience with proven ROI",
    ],
  },
  {
    n: 16,
    domain: "Operational Excellence",
    question: "How mature is your approach to measuring and monitoring operational performance?",
    options: [
      "Basic or no performance measurement systems",
      "Simple metrics tracking with manual reporting",
      "Established KPIs with regular monitoring and reporting",
      "Advanced analytics and real-time performance dashboards",
    ],
  },
  {
    n: 17,
    domain: "Operational Excellence",
    question: "How prepared are your workflows for AI integration?",
    options: [
      "Workflows would require complete redesign for AI integration",
      "Current workflows have some potential for AI enhancement",
      "Workflows are generally compatible with AI integration",
      "Workflows are designed with AI integration points already identified",
    ],
  },
  {
    n: 18,
    domain: "Risk & Governance",
    question: "What framework exists for AI ethics and responsible AI usage?",
    options: [
      "No consideration of AI ethics or responsible usage policies",
      "Basic awareness but no formal framework",
      "Developing framework with some policies in place",
      "Comprehensive AI ethics framework with clear governance",
    ],
  },
  {
    n: 19,
    domain: "Risk & Governance",
    question: "How prepared is your organisation for AI-related regulatory compliance?",
    options: [
      "Unaware of AI regulatory requirements",
      "Basic understanding but no compliance measures",
      "Good awareness with developing compliance procedures",
      "Comprehensive compliance framework ready for AI regulations",
    ],
  },
  {
    n: 20,
    domain: "Risk & Governance",
    question: "What risk management processes exist for AI implementation?",
    options: [
      "No specific risk assessment for AI initiatives",
      "Basic risk identification but no formal management process",
      "Established risk assessment with mitigation strategies",
      "Comprehensive AI risk management with ongoing monitoring",
    ],
  },
  {
    n: 21,
    domain: "Innovation Velocity",
    question: "How quickly can your organisation typically implement new technologies?",
    options: [
      "Very slow adoption, often years behind industry standards",
      "Cautious adoption, typically 1-2 years behind early adopters",
      "Moderate pace, usually within 6-12 months of market maturity",
      "Fast adoption, often among early adopters of new technologies",
    ],
  },
  {
    n: 22,
    domain: "Innovation Velocity",
    question: "What is your organisation's approach to piloting and experimentation?",
    options: [
      "No formal approach to piloting or experimentation",
      "Occasional pilots but no systematic experimentation process",
      "Regular pilot programs with structured evaluation",
      "Culture of continuous experimentation with rapid iteration",
    ],
  },
  {
    n: 23,
    domain: "Innovation Velocity",
    question: "How responsive is your organisation to market changes and opportunities?",
    options: [
      "Slow to recognise or respond to market changes",
      "Aware of changes but slow to adapt strategies",
      "Generally responsive with planned adaptation cycles",
      "Highly agile with rapid response to market opportunities",
    ],
  },
];

export type ResultTier = {
  /** Inclusive lower bound of the score percentage this tier covers. */
  minScore: number;
  label: string;
  summary: string;
  recommendations: string[];
};

export const resultTiers: ResultTier[] = [
  {
    minScore: 0,
    label: "AI Unaware",
    summary: "Organisation has minimal AI awareness and significant gaps across all domains",
    recommendations: [
      "Focus on digital transformation fundamentals",
      "Invest in AI education and awareness programs",
      "Establish basic data governance and quality practices",
      "Create a technology modernisation roadmap",
    ],
  },
  {
    minScore: 25,
    label: "AI Aware",
    summary: "Organisation recognises the opportunity but has not yet moved from awareness to action",
    recommendations: [
      "Turn early interest into a costed, sequenced adoption plan",
      "Run a structured audit to find the highest-impact starting point",
      "Close the biggest data and infrastructure gaps first",
      "Build AI literacy in the teams closest to the work",
    ],
  },
  {
    minScore: 50,
    label: "AI Adopter",
    summary: "Organisation has real AI capability in places and is ready to scale it deliberately",
    recommendations: [
      "Formalise governance so scaling doesn't outrun control",
      "Extend automation from isolated wins to core workflows",
      "Invest in the team skills that unlock the next tier of use cases",
      "Set measurable KPIs for every live AI initiative",
    ],
  },
  {
    minScore: 75,
    label: "AI Advanced",
    summary: "Organisation is well-positioned for comprehensive AI integration",
    recommendations: [
      "Implement enterprise-wide AI solutions",
      "Lead market innovation and competitive advantage",
      "Establish AI centers of excellence",
      "Focus on continuous innovation and optimisation",
    ],
  },
];

export function tierForScore(scorePct: number): ResultTier {
  const sorted = [...resultTiers].sort((a, b) => b.minScore - a.minScore);
  return sorted.find((t) => scorePct >= t.minScore) ?? resultTiers[0];
}

/** Weighted score: each answer index (0-3) maps to 0/33.3/66.7/100 within
 *  its question, questions average per domain, domains combine by weight. */
export function scoreAssessment(answers: Record<number, number>): {
  overall: number;
  byDomain: { domain: string; score: number; weightPct: number }[];
} {
  const byDomain = domains.map((d) => {
    const qs = questions.filter((q) => q.domain === d.name);
    const answered = qs.filter((q) => answers[q.n] !== undefined);
    const score =
      answered.length === 0
        ? 0
        : (answered.reduce((sum, q) => sum + (answers[q.n] / 3) * 100, 0) / answered.length);
    return { domain: d.name, score, weightPct: d.weightPct };
  });

  const overall = byDomain.reduce((sum, d) => sum + d.score * (d.weightPct / 100), 0);

  return { overall, byDomain };
}
