import { MediaCard } from "@/components/media/media-card";
import { MediaPoster } from "@/components/media/media-poster";
import { Person } from "@/services/tmdb/models";
import Link from "next/link";
import React from "react";

export const PersonCard: React.FC<Person> = ({
  id,
  name,
  profile_path,
  known_for_department,
}) => {
  return (
    <Link href={`/person/${id}`} key={id} className="w-full" prefetch={false}>
      <MediaCard.Root>
        <MediaPoster image={profile_path} alt={name} />
        <MediaCard.Content>
          <MediaCard.Title className="mt-2">{name}</MediaCard.Title>

          <MediaCard.Excerpt>
            Known for {known_for_department}
          </MediaCard.Excerpt>
        </MediaCard.Content>
      </MediaCard.Root>
    </Link>
  );
};
