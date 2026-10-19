import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { ExecutiveContact } from "@/components/executive/Contact";
import { ExecutiveEducationApproach } from "@/components/executive/EducationApproach";
import { ExecutiveExpertise } from "@/components/executive/Expertise";
import { ExecutiveFooter } from "@/components/executive/Footer";
import { ExecutiveHero } from "@/components/executive/Hero";
import { ExecutiveProfile } from "@/components/executive/Profile";
import { ExecutiveTimeline } from "@/components/executive/Timeline";

/** Canonical Premium Executive landing — used by `/`. */
export function ExecutivePage() {
  return (
    <div id="top" data-theme="executive" className="min-h-screen bg-bg text-fg">
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:end-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
      >
        الانتقال إلى المحتوى
      </a>
      <SiteNav />
      <main id="main">
        <ExecutiveHero />
        <ExecutiveProfile />
        <ExecutiveTimeline />
        <ExecutiveExpertise />
        <ExecutiveEducationApproach />
        <ExecutiveContact />
      </main>
      <ExecutiveFooter />
      <BackToTop />
    </div>
  );
}
