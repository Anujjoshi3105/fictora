import { TvList } from "@/components/tv/tv-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.tv.topRated.title,
  description: pages.tv.topRated.description,
};

export default async function TopRated({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;

  return (
    <TvList
      list="top_rated"
      page={page}
      title={pages.tv.topRated.title}
      description={pages.tv.topRated.description}
    />
  );
}
