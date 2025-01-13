import { MediaCard } from "@/components/media/media-card";
import { MediaPoster } from "@/components/media/media-poster";
import { MediaRating } from "@/components/media/media-rating";
import { formatValue } from "@/lib/utils";
import { TvShow } from "@/services/tmdb/models";
import { format } from "@/services/tmdb/utils";
import Link from "next/link";
import React from "react";

export const TvCard: React.FC<TvShow> = ({
  id,
  poster_path,
  name,
  vote_average,
  vote_count,
  first_air_date,
}) => {
  return (
    <Link href={`/tv/${id}`} key={id} className="w-full" prefetch={false}>
      <MediaCard.Root>
        <MediaPoster image={poster_path} alt={name} />
        <MediaCard.Content>
          <MediaRating
            average={vote_average}
            count={vote_count}
            className="mb-2"
          />
          <MediaCard.Title>{name}</MediaCard.Title>
          <MediaCard.Excerpt>
            {formatValue(first_air_date, format.year)}
          </MediaCard.Excerpt>
        </MediaCard.Content>
      </MediaCard.Root>
    </Link>
  );
};
