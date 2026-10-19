import { profile } from "@/data/profile";

export function PortfolioFooter() {
  return (
    <footer className="mt-8 border-t border-line pt-6 text-center text-sm text-muted">
      {profile.copy.footer}
    </footer>
  );
}
