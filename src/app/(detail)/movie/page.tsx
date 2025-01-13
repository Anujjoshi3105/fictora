import Genres from "@/components/Genres";
import { MovieHero } from "@/components/movie/movie-hero";
import { TrendCarousel } from "@/components/trend/trend-carousel";
import { pages } from "@/config";
import { tmdb } from "@/services/tmdb/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.movie.root.title,
  description: pages.movie.root.description,
};

export default async function Movies() {
  const { results: movies } = await tmdb.trending.movie({
    time: "day",
    page: "1",
  });
  const { genres } = await tmdb.genres.movie();

  return (
    <>
      <MovieHero movies={movies} label="Trending Now" />

      <section className="container space-y-8 py-12">
        <TrendCarousel
          type="movie"
          title="Trending Movies"
          link="/trending/movie"
          items={movies}
        />
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="grid gap-4 md:grid-cols-2 col-span-3">
            <MovieHero
              movies={movies.slice(0, 10)}
              label="Trending Now"
              count={2}
            />
          </div>
          <Genres genres={genres} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <MovieHero
            movies={movies.slice(10, 20)}
            label="Trending Now"
            count={2}
          />
        </div>
      </section>
    </>
  );
}
