import fs from "node:fs";
import path from "node:path";

/** True when the owner has placed a photo at /public/profile.jpg. */
export function hasProfilePhoto(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "profile.jpg"));
}
