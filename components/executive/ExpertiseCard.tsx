import type { CSSProperties } from "react";
import type { ExpertiseItem } from "@/data/profile";

/** Card: light-gold numeral, title, and the full description from the profile. */
export function ExpertiseCard({
  item,
  index,
}: {
  item: ExpertiseItem;
  index: number;
}) {
  return (
    <li
      className="expertise-card lift rounded-theme bg-card p-6 stagger-item"
      style={{ "--i": index } as CSSProperties}
    >
      <span className="block text-[1.5rem] font-light text-accent-soft" aria-hidden="true">
        {index + 1}
      </span>
      <h3 className="mt-2 font-semibold">{item.title}</h3>
      <p className="mt-2 text-muted">{item.description}</p>
    </li>
  );
}
