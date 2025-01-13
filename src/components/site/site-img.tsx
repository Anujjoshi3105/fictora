import { MediaBackdrop } from "../media/media-backdrop";
import Link from "next/link";

export default function SiteImg() {
  return (
    <Link href="/" className="relative w-1/2">
      <MediaBackdrop alt="Logo" size="w300" />
    </Link>
  );
}
