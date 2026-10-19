import { ContactForm } from "@/components/ContactForm";
import { PortfolioFooter } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

/** Full-width contact card; footer sits in the same card. */
export function PortfolioContact() {
  return (
    <Reveal
      as="section"
      id="contact"
      className="lift col-span-1 rounded-theme bg-card p-6 shadow-card md:col-span-4 md:p-8"
    >
      <h2 className="heading-accent text-[1.1rem] text-primary">{profile.copy.contactTitle}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <p>{profile.personal.location}</p>
          <p>
            <a
              href={`tel:${profile.contact.phoneTel}`}
              className="text-primary underline-offset-4 transition-colors hover:underline"
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
        </div>
        <ContactForm
          inputClassName="rounded-theme border border-line bg-white px-3 py-2 text-fg transition-colors focus:border-accent"
          buttonClassName="btn btn-solid w-fit"
        />
      </div>
      <PortfolioFooter />
    </Reveal>
  );
}
