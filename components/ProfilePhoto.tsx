import Image from "next/image";
import { profile } from "@/data/profile";
import { hasProfilePhoto } from "@/lib/has-profile-photo";

type Props = {
  className?: string;
  /** Inner frame (arch vs rounded card). */
  frameClassName?: string;
};

/**
 * Renders /public/profile.jpg when present; otherwise initials + caption.
 */
export function ProfilePhoto({ className = "", frameClassName = "" }: Props) {
  const exists = hasProfilePhoto();

  return (
    <figure className={`photo-enter ${className}`.trim()}>
      <div className={`photo-frame relative overflow-hidden ${frameClassName}`.trim()}>
        {exists ? (
          <Image
            src={profile.assets.photoSrc}
            alt={profile.name}
            fill
            sizes="(max-width: 768px) 80vw, 360px"
            className="object-cover"
            priority
          />
        ) : (
          <div
            className="flex h-full min-h-[280px] w-full items-center justify-center bg-card text-[2.4rem] font-light text-accent"
            aria-hidden="true"
          >
            {profile.assets.photoInitials}
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">
        {profile.assets.photoCaption}
      </figcaption>
    </figure>
  );
}
