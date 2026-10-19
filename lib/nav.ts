import { profile } from "@/data/profile";

/** In-page sections shared by both designs. */
export const navItems = [
  { href: "#profile", label: profile.copy.profileTitle },
  { href: "#experience", label: profile.copy.experienceTitle },
  { href: "#expertise", label: profile.copy.managementExpertise },
  { href: "#education", label: profile.copy.educationTitle },
  { href: "#approach", label: profile.copy.approachTitle },
  { href: "#contact", label: profile.copy.contactTitle },
] as const;
