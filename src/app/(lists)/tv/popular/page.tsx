import { TvList } from "@/components/tv/tv-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.tv.popular.title,
  description: pages.tv.popular.description,
};

export default async function Popular({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;

  return (
    <TvList
      list="popular"
      page={page}
      title={pages.tv.popular.title}
      description={pages.tv.popular.description}
    />
  );
}
