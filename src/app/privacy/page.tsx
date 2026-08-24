import type { Metadata } from "next";

import { PolicyDocument } from "@/components/sections/PolicyDocument";
import { policyDocBySlug } from "@/data/policy-documents";

const doc = policyDocBySlug("privacy");

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PolicyDocument doc={doc} />;
}
