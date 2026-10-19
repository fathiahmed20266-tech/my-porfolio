import { Reveal } from "@/components/Reveal";
import { ExecutiveApproach } from "@/components/executive/Approach";
import { ExecutiveEducation } from "@/components/executive/Education";

export function ExecutiveEducationApproach() {
  return (
    <Reveal as="section" className="grid grid-cols-1 gap-12 px-[5%] py-16 md:grid-cols-2">
      <ExecutiveEducation />
      <ExecutiveApproach />
    </Reveal>
  );
}
