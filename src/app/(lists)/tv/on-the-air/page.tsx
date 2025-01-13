import { TvList } from "@/components/tv/tv-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.tv.onTheAir.title,
  description: pages.tv.onTheAir.description,
};

export default async function OnTheAir({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;

  return (
    <TvList
      list="on_the_air"
      page={page}
      title={pages.tv.onTheAir.title}
      description={pages.tv.onTheAir.description}
    />
  );
}
