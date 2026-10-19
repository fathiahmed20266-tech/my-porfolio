"use client";

import { useId, useState } from "react";
import type { ExpertiseItem } from "@/data/profile";

/** Accessible chip that reveals the full expertise description. */
export function ChipDisclosure({ item }: { item: ExpertiseItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        className="chip-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.title}
      </button>
      <div id={panelId} className={`chip-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <p className="pt-2 text-sm leading-7 text-muted">{item.description}</p>
      </div>
    </div>
  );
}
