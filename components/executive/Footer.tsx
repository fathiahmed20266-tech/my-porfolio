import { profile } from "@/data/profile";

export function ExecutiveFooter() {
  return (
    <footer className="border-t border-line px-[5%] py-8 text-center text-sm text-muted">
      {profile.copy.footer}
    </footer>
  );
}
