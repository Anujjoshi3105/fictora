import { DiscoverFilters } from "@/components/discover/discover-filters";
import { DiscoverSort } from "@/components/discover/discover-sort";
import { ListPagination } from "@/components/list/list-pagination";
import { TvCard } from "@/components/tv/tv-card";
import { pages } from "@/config";
import { filterDiscoverParams } from "@/lib/utils";
import { tmdb } from "@/services/tmdb/api";
import { SortByType } from "@/services/tmdb/api/types";
import type { Metadata } from "next";
import { cookies } from "next/headers";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
    sort_by?: string;
    [key: string]: string | undefined;
  }>;
}

export const metadata: Metadata = {
  title: pages.tv.discover.title,
  description: pages.tv.discover.description,
};

export default async function Discover({ searchParams }: ListPageProps) {
  const params = await searchParams;
  const region = (await cookies()).get("region")?.value ?? "US";

  const {
    results: tvShows,
    page: currentPage,
    total_pages: totalPages,
  } = await tmdb.discover.tv({
    watch_region: region,
    page: params?.page,
    sort_by: params?.sort_by as SortByType,
    ...filterDiscoverParams(params as Record<string, string>),
  });

  const { results: providers } = await tmdb.watchProviders.tv({
    region,
  });

  const { genres } = await tmdb.genres.tv();

  return (
    <div className="container space-y-8">
      <div className="md:mb-12 md:mt-6">
        <h1 className="mb-2 text-2xl font-medium">{pages.tv.discover.title}</h1>
        <p className="max-w-3xl text-muted-foreground">
          {pages.tv.discover.description}
        </p>
      </div>

      <div className="flex justify-end gap-2">
        <DiscoverFilters type="tv" genres={genres} providers={providers} />
        <DiscoverSort type="tv" />
      </div>

      {tvShows.length ? (
        <div className="grid-list">
          {tvShows.map((tv) => (
            <TvCard key={tv.id} {...tv} />
          ))}
        </div>
      ) : (
        <div className="container flex justify-center pb-[30dvh]">
          <div className="text-center">
            <h1 className="text-2xl">
              No TV Shows found for the selected filters.
            </h1>
            <p className="text-muted-foreground">
              Try removing some of the filters to get more results.
            </p>
          </div>
        </div>
      )}

      {tvShows?.length > 0 && (
        <ListPagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
