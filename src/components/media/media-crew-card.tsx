import { MediaCard } from "@/components/media/media-card";
import { MediaPoster } from "@/components/media/media-poster";
import { Crew } from "@/services/tmdb/models";
import Link from "next/link";

export const MediaCrewCard: React.FC<Crew> = ({
  id,
  name,
  profile_path,
  job,
}) => (
  <Link href={`/person/${id}`} prefetch={false}>
    <MediaCard.Root>
      <MediaPoster image={profile_path} alt={name} />
      <MediaCard.Content>
        <MediaCard.Title>{name}</MediaCard.Title>
        <MediaCard.Excerpt>{job}</MediaCard.Excerpt>
      </MediaCard.Content>
    </MediaCard.Root>
  </Link>
);
