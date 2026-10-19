import { profile } from "@/data/profile";

export function ExecutiveApproach() {
  return (
    <div id="approach">
      <h2 className="heading-accent text-[1.4rem] font-normal text-accent">
        {profile.copy.approachTitle}
      </h2>
      <ol className="mt-6 space-y-4">
        {profile.approach.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="text-[1.5rem] font-light leading-none text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
