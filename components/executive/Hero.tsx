import type { CSSProperties } from "react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { profile } from "@/data/profile";

export function ExecutiveHero() {
  return (
    <header className="px-[5%] py-14 md:py-[56px]">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="hero-item text-sm text-muted" style={{ "--i": 0 } as CSSProperties}>
            {profile.copy.executiveLabel}
          </p>
          <h1
            className="hero-item mt-2 font-semibold leading-tight [font-size:clamp(2rem,5vw,3.4rem)]"
            style={{ "--i": 1 } as CSSProperties}
          >
            {profile.name}
          </h1>
          <p
            className="hero-item mt-3 text-2xl text-accent"
            style={{ "--i": 2 } as CSSProperties}
          >
            {profile.headline}
          </p>
          <p className="hero-item mt-6 max-w-[62ch] text-fg" style={{ "--i": 3 } as CSSProperties}>
            {profile.intro}
          </p>
          <div className="hero-item mt-8 flex flex-wrap gap-3" style={{ "--i": 4 } as CSSProperties}>
            <a href="#experience" className="btn btn-solid">
              {profile.copy.heroExperienceCta}
            </a>
            {/* public/cv.pdf is present — download is the real file, not a fabricated asset */}
            <a href={profile.assets.cvHref} download className="btn btn-outline">
              {profile.copy.heroCvCta}
            </a>
          </div>
        </div>

        <ProfilePhoto
          className="order-first mx-auto w-full max-w-sm md:order-none"
          frameClassName="aspect-[3/4] rounded-[999px_999px_8px_8px] border-2 border-accent"
        />
      </div>
    </header>
  );
}
