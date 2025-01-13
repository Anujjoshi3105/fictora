import { MediaCard } from "@/components/media/media-card";
import { MediaPoster } from "@/components/media/media-poster";
import { Cast } from "@/services/tmdb/models";
import Link from "next/link";

export const MediaCastCard: React.FC<Cast> = ({
  id,
  name,
  profile_path,
  character,
}) => (
  <Link href={`/person/${id}`} prefetch={false}>
    <MediaCard.Root>
      <MediaPoster image={profile_path} alt={name} />
      <MediaCard.Content>
        <MediaCard.Title>{name}</MediaCard.Title>
        <MediaCard.Excerpt>{character}</MediaCard.Excerpt>
      </MediaCard.Content>
    </MediaCard.Root>
  </Link>
);
