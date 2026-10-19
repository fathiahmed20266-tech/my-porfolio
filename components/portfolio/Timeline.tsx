import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { TimelineTrack } from "@/components/TimelineTrack";
import {
  datedExperienceNewestFirst,
  privateBusinessItem,
  profile,
} from "@/data/profile";

export function PortfolioTimeline() {
  const roles = datedExperienceNewestFirst();
  const note = privateBusinessItem();

  return (
    <Reveal
      as="section"
      id="experience"
      className="lift col-span-1 rounded-theme bg-card p-6 shadow-card md:col-span-4 md:p-8"
    >
      <h2 className="heading-accent text-[1.1rem] text-primary">{profile.copy.experienceTitle}</h2>
      <TimelineTrack className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {roles.map((item, index) => (
          <li
            key={`${item.title}-${item.dates}`}
            data-timeline-item
            className="stagger-item rounded-theme border-t-[3px] border-accent px-2 pb-2 pt-4"
            style={{ "--i": index } as CSSProperties}
          >
            <h3 className="font-semibold">{item.title}</h3>
            {item.organization ? <p>{item.organization}</p> : null}
            {item.dates ? <p className="text-sm text-muted">{item.dates}</p> : null}
          </li>
        ))}
      </TimelineTrack>
      {note ? (
        <p className="mt-6 text-sm text-muted">
          <span className="font-semibold text-fg">{profile.copy.privateNoteLabel}: </span>
          {note.title}
        </p>
      ) : null}
    </Reveal>
  );
}
