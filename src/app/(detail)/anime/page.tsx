import { MovieHero } from "@/components/movie/movie-hero";
import { TrendCarousel } from "@/components/trend/trend-carousel";
import { TvHero } from "@/components/tv/tv-hero";
import { pages } from "@/config";
import { tmdb } from "@/services/tmdb/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.anime.root.title,
  description: pages.anime.root.description,
};

export default async function Movies() {
  const { results: movies } = await tmdb.trending.movie({
    time: "day",
    page: "1",
  });

  const { results: tvShows } = await tmdb.trending.tv({
    time: "day",
    page: "1",
  });

  return (
    <section className="container space-y-8">
      <MovieHero movies={movies} label="Trending Now" />

      <TrendCarousel
        type="movie"
        title="Trending Movies"
        link="/trending/movie"
        items={movies}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <MovieHero
          movies={movies.slice(0, 10)}
          label="Trending Now"
          count={2}
        />
        <TvHero tvShows={tvShows.slice(0, 10)} label="Trending Now" count={2} />
      </div>

      <TrendCarousel
        type="tv"
        title="Trending TV Shows"
        link="/trending/tv"
        items={tvShows}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <MovieHero
          movies={movies.slice(10, 20)}
          label="Trending Now"
          count={2}
        />
        <TvHero
          tvShows={tvShows.slice(10, 20)}
          label="Trending Now"
          count={2}
        />
      </div>
    </section>
  );
}
