import Genres from "@/components/Genres";
import { TrendCarousel } from "@/components/trend/trend-carousel";
import { TvHero } from "@/components/tv/tv-hero";
import { pages } from "@/config";
import { tmdb } from "@/services/tmdb/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.tv.root.title,
  description: pages.tv.root.description,
};

export default async function Movies() {
  const { results: tvShows } = await tmdb.trending.tv({
    time: "day",
    page: "1",
  });
  const { genres } = await tmdb.genres.tv();

  return (
    <>
      <TvHero tvShows={tvShows} label="Trending Now" />
      <section className="container space-y-8 py-12">
        <TrendCarousel
          title="Trending TV Shows"
          link="/trending/tv"
          items={tvShows}
        />
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="grid gap-4 md:grid-cols-2 col-span-3">
            <TvHero
              tvShows={tvShows.slice(0, 10)}
              label="Trending Now"
              count={2}
            />
          </div>
          <Genres genres={genres} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <TvHero
            tvShows={tvShows.slice(10, 20)}
            label="Trending Now"
            count={2}
          />
        </div>
      </section>
    </>
  );
}
