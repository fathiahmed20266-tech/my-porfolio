import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function PortfolioProfile() {
  return (
    <Reveal
      as="section"
      id="profile"
      className="lift col-span-1 rounded-theme bg-card p-6 shadow-card md:col-span-4 md:p-8"
    >
      <h2 className="heading-accent text-[1.1rem] text-primary">{profile.copy.profileTitle}</h2>
      <p className="mt-4">{profile.summary}</p>
    </Reveal>
  );
}
