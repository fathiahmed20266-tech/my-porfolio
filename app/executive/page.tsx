import { redirect } from "next/navigation";

/** Canonical URL is `/`. */
export default function ExecutiveRedirect() {
  redirect("/");
}
