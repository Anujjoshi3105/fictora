import { MediaCard } from "@/components/media/media-card";
import { MediaPoster } from "@/components/media/media-poster";
import { MediaRating } from "@/components/media/media-rating";
import { TvSeasonDetails } from "@/components/tv/tv-season-details";
import { tmdb } from "@/services/tmdb/api";
import Link from "next/link";
import { Fragment } from "react";

interface DetailSeasonsProps {
  params: Promise<{
    tvID: string;
  }>;
  searchParams: Promise<{
    s: string;
  }>;
}

export async function generateMetadata({ params }: DetailSeasonsProps) {
  const { tvID } = await params;
  const { name } = await tmdb.tv.detail({
    id: tvID,
  });

  return {
    title: `Seasons - ${name}`,
  };
}

export default async function DetailSeasons({
  params,
  searchParams,
}: DetailSeasonsProps) {
  const { tvID } = await params;
  const { s } = await searchParams;
  const { seasons } = await tmdb.tv.detail({
    id: tvID,
  });

  if (!seasons) return <div className="empty-box">No seasons</div>;

  return (
    <section className="grid-list">
      {seasons.map((season) => (
        <Fragment key={season.id}>
          <Link
            href={`/tv/${tvID}/seasons?s=${season.season_number}`}
            prefetch={false}
            replace
            scroll={false}>
            <MediaCard.Root>
              <MediaPoster image={season.poster_path} alt={season.name} />
              <MediaCard.Content>
                <MediaRating average={season.vote_average} className="mb-2" />
                <MediaCard.Title>{season.name}</MediaCard.Title>
                <MediaCard.Excerpt>
                  {season.episode_count} Episodes
                </MediaCard.Excerpt>
              </MediaCard.Content>
            </MediaCard.Root>
          </Link>

          {parseInt(s) === season.season_number && (
            <TvSeasonDetails id={tvID} season={season.season_number} />
          )}
        </Fragment>
      ))}
    </section>
  );
}
