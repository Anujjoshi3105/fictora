import { MovieList } from "@/components/movie/movie-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.movie.popular.title,
  description: pages.movie.popular.description,
};

export default async function Popular({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;

  return (
    <MovieList
      list="popular"
      page={page}
      title={pages.movie.popular.title}
      description={pages.movie.popular.description}
    />
  );
}
