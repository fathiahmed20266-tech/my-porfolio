import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function ExecutiveProfile() {
  return (
    <Reveal as="section" id="profile" className="px-[5%] py-16">
      <h2 className="heading-accent text-[1.4rem] font-normal text-accent">
        {profile.copy.profileTitle}
      </h2>
      <p className="mt-6 max-w-[70ch]">{profile.summary}</p>
    </Reveal>
  );
}
