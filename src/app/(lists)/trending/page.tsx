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
  title: pages.trending.all.title,
  description: pages.trending.all.description,
};

export default async function TrendingPage({
  searchParams,
}: TrendingPageProps) {
  const { interval = "day" } = await searchParams;
  const { page = "1" } = await searchParams;

  return <TrendList type="all" time={interval} page={page} />;
}
