import { MovieList } from "@/components/movie/movie-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.movie.upcoming.title,
  description: pages.movie.upcoming.description,
};

export default async function Upcoming({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <MovieList
      list="upcoming"
      page={page}
      title={pages.movie.upcoming.title}
      description={pages.movie.upcoming.description}
    />
  );
}
