import { Reveal } from "@/components/Reveal";
import { PortfolioEducationApproach } from "@/components/portfolio/Education";
import { profile } from "@/data/profile";

export function PortfolioQualifications() {
  return (
    <Reveal as="section" className="lift col-span-1 rounded-theme bg-card p-6 shadow-card md:col-span-2">
      <h2 className="heading-accent text-[1.1rem] text-primary">{profile.copy.qualificationsMethod}</h2>
      <div className="mt-6">
        <PortfolioEducationApproach />
      </div>
    </Reveal>
  );
}
