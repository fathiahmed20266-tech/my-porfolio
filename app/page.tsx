import { ExecutivePage } from "@/components/executive/ExecutivePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

export default function HomePage() {
  return <ExecutivePage />;
}
