import { TrendList } from "@/components/trend/trend-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface TrendingPageProps {
  searchParams: Promise<{
    page?: string;
    interval?: "day" | "week";
    [key: string]: string | undefined;
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
  const { interval = "day" } = await searchParams;
  return (
    <TrendList
      type="tv"
      time={interval}
      title={pages.trending.tv.title}
      description={pages.trending.tv.description}
      page={page}
    />
  );
}
