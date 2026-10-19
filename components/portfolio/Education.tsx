import { profile } from "@/data/profile";

export function PortfolioEducationApproach() {
  return (
    <div className="grid gap-8">
      <div id="education">
        <h3 className="heading-accent mb-3 text-sm font-semibold">{profile.copy.educationTitle}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.education.map((item) => (
            <li key={item} className="rounded-full bg-chip px-3 py-1 text-sm text-primary">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div id="approach">
        <h3 className="heading-accent mb-3 text-sm font-semibold">{profile.copy.approachTitle}</h3>
        <ol className="mt-4 flex flex-wrap gap-2">
          {profile.approach.map((step, index) => (
            <li key={step} className="rounded-full bg-chip px-3 py-1 text-sm text-primary">
              <span className="font-semibold">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
