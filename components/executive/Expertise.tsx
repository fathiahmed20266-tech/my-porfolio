import { ExpertiseCard } from "@/components/executive/ExpertiseCard";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function ExecutiveExpertise() {
  return (
    <Reveal as="section" id="expertise" className="px-[5%] py-16">
      <h2 className="heading-accent text-[1.4rem] font-normal text-accent">
        {profile.copy.expertiseTitle}
      </h2>
      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {profile.expertise.map((item, index) => (
          <ExpertiseCard key={item.id} item={item} index={index} />
        ))}
      </ul>
    </Reveal>
  );
}
