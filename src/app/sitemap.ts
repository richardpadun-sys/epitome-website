import type { MetadataRoute } from "next";

import { policies } from "@/data/content";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/policies", priority: 0.3 },
    { path: "/ai-assessment", priority: 0.8 },
    { path: "/ai-prototyping-workshop", priority: 0.7 },
    { path: "/outsourced-business-solutions", priority: 0.7 },
  ];

  return [
    ...core.map((entry) => ({
      url: `${site.url}${entry.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: entry.priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}${service.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...policies.map((policy) => ({
      url: `${site.url}${policy.href}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
