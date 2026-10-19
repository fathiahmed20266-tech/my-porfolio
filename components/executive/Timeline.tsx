import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { TimelineTrack } from "@/components/TimelineTrack";
import {
  datedExperienceNewestFirst,
  privateBusinessItem,
  profile,
} from "@/data/profile";

export function ExecutiveTimeline() {
  const items = [
    ...datedExperienceNewestFirst(),
    ...(privateBusinessItem() ? [privateBusinessItem()!] : []),
  ];

  return (
    <Reveal as="section" id="experience" className="px-[5%] py-16">
      <h2 className="heading-accent text-[1.4rem] font-normal text-accent">
        {profile.copy.experienceTitle}
      </h2>
      <TimelineTrack className="relative mt-10 ms-3 border-s-2 border-accent ps-8">
        {items.map((item, index) => (
          <li
            key={`${item.title}-${item.dates ?? "private"}`}
            data-timeline-item
            className="stagger-item relative pb-10 last:pb-0"
            style={{ "--i": index } as CSSProperties}
          >
            <span
              className="timeline-dot absolute top-1.5 h-[11px] w-[11px] rounded-full bg-accent [inset-inline-start:calc(-2rem-5.5px)]"
              aria-hidden="true"
            />
            <h3 className="font-semibold">{item.title}</h3>
            {item.organization ? <p>{item.organization}</p> : null}
            {item.dates ? <p className="text-sm text-muted">{item.dates}</p> : null}
          </li>
        ))}
      </TimelineTrack>
    </Reveal>
  );
}
