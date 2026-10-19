import { profile } from "@/data/profile";

export function ExecutiveEducation() {
  return (
    <div id="education">
      <h2 className="heading-accent text-[1.4rem] font-normal text-accent">
        {profile.copy.educationTitle}
      </h2>
      <ul className="mt-6 list-disc ps-5">
        {profile.education.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
