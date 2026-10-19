import type { CSSProperties } from "react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function PortfolioHero() {
  return (
    <>
      <Reveal
        as="article"
        delay={0}
        className="lift col-span-1 rounded-theme bg-primary p-6 text-white shadow-card md:col-span-2 md:p-8"
      >
        <p className="hero-item text-sm text-white/80" style={{ "--i": 0 } as CSSProperties}>
          {profile.copy.executiveLabel}
        </p>
        <h1
          className="hero-item mt-2 font-semibold leading-tight [font-size:clamp(1.7rem,4vw,2.6rem)]"
          style={{ "--i": 1 } as CSSProperties}
        >
          {profile.name}
        </h1>
        <p className="hero-item mt-3 text-[1.1rem]" style={{ "--i": 2 } as CSSProperties}>
          {profile.headline}
        </p>
        <p className="hero-item mt-4 text-white/90" style={{ "--i": 3 } as CSSProperties}>
          {profile.intro}
        </p>
        <div className="hero-item mt-6 flex flex-wrap gap-3" style={{ "--i": 4 } as CSSProperties}>
          <a href="#experience" className="btn btn-hero-solid">
            {profile.copy.heroExperienceCta}
          </a>
          <a href={profile.assets.cvHref} download className="btn btn-hero-outline">
            {profile.copy.heroCvCta}
          </a>
        </div>
      </Reveal>

      <Reveal as="article" delay={80} className="lift col-span-1 rounded-theme bg-card p-4 shadow-card">
        <ProfilePhoto frameClassName="aspect-square rounded-theme" className="mx-auto w-full" />
      </Reveal>

      <Reveal as="article" delay={160} className="lift col-span-1 rounded-theme bg-card p-6 shadow-card">
        <h2 className="heading-accent text-[1.1rem] text-primary">{profile.copy.quickFacts}</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>الجنسية {profile.personal.nationality}</li>
          <li>مواليد {profile.personal.birthYear}</li>
          <li>{profile.personal.location}</li>
          <li>{profile.copy.documentedRoles}</li>
        </ul>
      </Reveal>
    </>
  );
}
