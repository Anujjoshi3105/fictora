import { MovieList } from "@/components/movie/movie-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.movie.topRated.title,
  description: pages.movie.topRated.description,
};

export default async function TopRated({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <MovieList
      list="top_rated"
      page={page}
      title={pages.movie.topRated.title}
      description={pages.movie.topRated.description}
    />
  );
}
