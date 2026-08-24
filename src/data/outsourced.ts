/**
 * Outsourced Business Solutions — content reproduced from
 * theepitome.co.uk/outsourced-business-solutions.
 *
 * The nine "Discover more" detail pages linked from this overview
 * (both the /outsourced/obs-* sitemap paths and the in-page
 * /outsourced-business-solutions/* links) are broken on the live site
 * itself — confirmed by direct request, all return a client-rendered
 * "Page not found" despite HTTP 200. There is no content to migrate for
 * them, so the tiles below link to /contact rather than to a page that
 * would just be recreating a dead end.
 */

export const outsourcedIntro =
  "To complement our AI integration services we provide a full suite of outsourced business functions. This distinctive combination of AI integration and hands-on operational support enables micro, small and medium sized businesses to access expertise and resources to rapidly overcome obstacles and thrive amongst the 5 million+ other businesses in the UK SME community.";

export const outsourcedServices = [
  { name: "Marketing", body: "Digital and traditional marketing to propel growth." },
  {
    name: "Business Development",
    body: "Strategy, market research and partnerships to expand reach.",
  },
  { name: "Sales", body: "Lead gen, outbound and CRM to drive revenue." },
  { name: "Operations", body: "Process, logistics and data to boost efficiency." },
  { name: "Technology", body: "IT strategy, support, cloud and cybersecurity." },
  { name: "Customer Service", body: "Strategy, outsourcing and tooling for CX." },
  { name: "Recruitment", body: "Ads, fixed-fee hiring and headhunting." },
  { name: "Human Resources", body: "Policies, payroll, performance and training." },
  { name: "Finance", body: "Bookkeeping, reporting, payroll and tax." },
] as const;
