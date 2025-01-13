import { TrendList } from "@/components/trend/trend-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface TrendingPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.trending.tv.title,
  description: pages.trending.tv.description,
};

export default async function TrendingPage({
  searchParams,
}: TrendingPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <TrendList
      type="people"
      time="day"
      title="Trending People"
      description={pages.trending.people.description}
      page={page}
    />
  );
}
