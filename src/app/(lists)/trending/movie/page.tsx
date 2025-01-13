import { TrendList } from "@/components/trend/trend-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface TrendingPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.trending.movie.title,
  description: pages.trending.movie.description,
};

export default async function TrendingPage({
  searchParams,
}: TrendingPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <TrendList
      type="movie"
      time="day"
      title="Trending Movies"
      description={pages.trending.movie.description}
      page={page}
    />
  );
}
