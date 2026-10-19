import { redirect } from "next/navigation";

/** Unselected design is not publicly accessible. */
export default function PortfolioRedirect() {
  redirect("/");
}
