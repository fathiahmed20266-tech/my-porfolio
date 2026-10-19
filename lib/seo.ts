import type { Metadata } from "next";
import { profile } from "@/data/profile";

const description = profile.intro;

export function buildMetadata(path: string): Metadata {
  const title = `${profile.name} | ${profile.headline}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      locale: "ar_SA",
      type: "profile",
      url: path,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

/** Person schema — phone is intentionally omitted. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.seo.alumniOf,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.seo.addressLocality,
      addressCountry: profile.seo.addressCountry,
    },
  };
}
