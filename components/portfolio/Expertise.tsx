import { ChipDisclosure } from "@/components/ChipDisclosure";
import { Reveal } from "@/components/Reveal";
import { expertiseById, expertiseGroups, profile } from "@/data/profile";

export function PortfolioExpertise() {
  return (
    <Reveal as="section" id="expertise" className="lift col-span-1 rounded-theme bg-card p-6 shadow-card md:col-span-2">
      <h2 className="heading-accent text-[1.1rem] text-primary">{profile.copy.managementExpertise}</h2>
      <div className="mt-6 grid gap-6">
        {expertiseGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.ids.map((id) => {
                const item = expertiseById(id);
                return item ? <ChipDisclosure key={id} item={item} /> : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
