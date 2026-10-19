import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function ExecutiveContact() {
  return (
    <Reveal as="section" id="contact" className="px-[5%] py-16">
      <h2 className="heading-accent text-[1.4rem] font-normal text-accent">
        {profile.copy.contactTitle}
      </h2>
      <div className="mt-8 grid max-w-xl gap-6">
        <p>{profile.personal.location}</p>
        <p>
          <a
            href={`tel:${profile.contact.phoneTel}`}
            className="text-accent underline-offset-4 transition-colors hover:underline"
          >
            {profile.contact.phoneDisplay}
          </a>
        </p>
        <a
          href={profile.contact.whatsapp}
          className="btn btn-solid w-fit"
          rel="noopener noreferrer"
          target="_blank"
        >
          {profile.copy.whatsappCta}
        </a>
        <ContactForm
          inputClassName="rounded-theme border border-line bg-transparent px-3 py-2 text-fg transition-colors focus:border-accent"
          buttonClassName="btn btn-solid w-fit"
        />
      </div>
    </Reveal>
  );
}
