import { MovieList } from "@/components/movie/movie-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.movie.nowPlaying.title,
  description: pages.movie.nowPlaying.description,
};

export default async function NowPlaying({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;

  return (
    <MovieList
      list="now_playing"
      page={page}
      title={pages.movie.nowPlaying.title}
      description={pages.movie.nowPlaying.description}
    />
  );
}
