/**
 * Creatathon workshop — content reproduced from theepitome.co.uk/ai-prototyping-workshop.
 *
 * `workshopDates` is deliberately empty rather than filled with scraped
 * values: the live page's location/date list is operational scheduling data
 * that changes constantly, so hardcoding today's snapshot would just ship
 * stale dates. The client fills this array in as workshops are scheduled —
 * see the note on the page itself.
 */

export const creatathonPricePerSeat = 95; // GBP, ex VAT
export const creatathonVatRate = 0.2;

export type WorkshopDate = {
  id: string;
  location: string;
  date: string; // e.g. "14 October 2026"
  seatsRemaining?: number;
};

/** Populate with real upcoming sessions before launch. */
export const workshopDates: WorkshopDate[] = [];

export const testimonials = [
  {
    quote:
      "I came with a vague idea and left with a working app I could demo to my team the next day. The structure of the three waves really helped me focus.",
    attribution: "Marketing Director, Tech Startup",
  },
  {
    quote:
      "Finally, a workshop that doesn't just talk about AI but lets you build with it. My prototype is now in pilot with two clients.",
    attribution: "Business Development Manager",
  },
  {
    quote:
      "No coding background needed - they weren't kidding. I built something genuinely useful for my team in just a few hours.",
    attribution: "Operations Manager, SME",
  },
] as const;

export const audiences = [
  { title: "Business Owners & Founders", body: "Validate ideas without hiring developers" },
  { title: "Marketing & Sales Professionals", body: "Build tools to automate and accelerate" },
  { title: "Operations Managers", body: "Create efficiency solutions for your team" },
  { title: "Anyone Curious About AI", body: "No technical background required" },
] as const;

export const waves = [
  {
    n: 1,
    title: "Morning Foundation",
    time: "09:00 – 12:00",
    items: ["Problem Discovery & Framing", "AI Tool Selection", "Architecture Planning"],
  },
  {
    n: 2,
    title: "Creative & Design",
    time: "12:00 – 15:00",
    items: ["UI/UX Design Sprint", "User Flow Mapping", "Brand & Visual Identity"],
  },
  {
    n: 3,
    title: "Build & Wrap-Up",
    time: "15:00 – 17:30",
    items: ["Guided Build Session", "Testing & Refinement", "Demo Presentations"],
  },
] as const;

export const whyItWorks = [
  { title: "No Coding Required", body: "Use powerful no-code tools anyone can learn" },
  { title: "Leave with a Working App", body: "Not slides, not mockups – a real prototype" },
  { title: "Expert Facilitation", body: "Guided support throughout the entire day" },
  { title: "Networking & Collaboration", body: "Connect with like-minded builders" },
] as const;

export const included = [
  "Full-day hands-on workshop with expert facilitators",
  "Working AI-powered prototype built by you",
  "All templates, worksheets and resources",
  "Lunch and refreshments throughout the day",
  "Certificate of completion",
  "Post-workshop community access",
] as const;

export const courseFormat = [
  { label: "Duration", value: "Full day (9:00 AM – 5:30 PM)" },
  { label: "Group size", value: "Limited to 12–25 participants" },
  { label: "Level", value: "No coding experience required" },
  { label: "Format", value: "Hands-on, practical build session" },
] as const;

export const faqs = [
  {
    question: "Do I need any coding experience?",
    answer:
      "No coding experience is required. We use no-code tools that are designed to be accessible to everyone, regardless of technical background. Our facilitators will guide you through every step of the process.",
  },
  {
    question: "What will I actually build?",
    answer:
      "You'll build a working AI-powered application tailored to your specific business needs. This could be anything from a customer service chatbot, to a data analysis tool, to a content generation system. The exact project depends on your goals, and our facilitators will help you scope something achievable in one day.",
  },
  {
    question: "What tools will we use?",
    answer:
      "We primarily use modern no-code platforms like Lovable, Make, and various AI APIs. All tools are web-based, so you just need to bring a laptop with an internet connection. We'll provide all the accounts and resources you need during the workshop.",
  },
  {
    question: "Is lunch included?",
    answer:
      "Yes! Lunch and refreshments throughout the day are included in your ticket price. Please let us know about any dietary requirements or allergies in the notes field when registering.",
  },
  {
    question: "What happens after the workshop?",
    answer:
      "After the workshop, you'll have access to our online community where you can ask questions, share progress, and connect with other participants. We also offer optional follow-up clinics where you can get additional guidance as you continue to develop your prototype.",
  },
  {
    question: "Can I bring multiple people from my company?",
    answer:
      "Absolutely! We encourage teams to attend together. Simply list all attendee names in the registration form (one per line), and you'll be charged per person. Team attendance often leads to better outcomes as you can collaborate on projects relevant to your organisation.",
  },
] as const;
