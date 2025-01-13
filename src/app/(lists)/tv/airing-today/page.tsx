import { TvList } from "@/components/tv/tv-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.tv.airingToday.title,
  description: pages.tv.airingToday.description,
};

export default async function AiringToday({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <TvList
      list="airing_today"
      page={page}
      title={pages.tv.airingToday.title}
      description={pages.tv.airingToday.description}
    />
  );
}
