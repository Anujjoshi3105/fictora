import { DiscoverFilters } from "@/components/discover/discover-filters";
import { DiscoverSort } from "@/components/discover/discover-sort";
import { ListPagination } from "@/components/list/list-pagination";
import { MovieCard } from "@/components/movie/movie-card";
import { pages } from "@/config";
import { filterDiscoverParams } from "@/lib/utils";
import { tmdb } from "@/services/tmdb/api";
import type { SortByType } from "@/services/tmdb/api/types";
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
  title: pages.movie.discover.title,
  description: pages.movie.discover.description,
};

export default async function Discover({ searchParams }: ListPageProps) {
  const params = await searchParams;
  const region = (await cookies()).get("region")?.value ?? "US";

  // Fetch all data in parallel for better performance
  const [movieResponse, providersResponse, genresResponse] = await Promise.all([
    tmdb.discover.movie({
      watch_region: region,
      page: params?.page,
      sort_by: params?.sort_by as SortByType,
      ...filterDiscoverParams(params as Record<string, string>),
    }),
    tmdb.watchProviders.movie({ region }),
    tmdb.genres.movie(),
  ]);

  const {
    results: movies,
    page: currentPage,
    total_pages: totalPages,
  } = movieResponse;
  const { results: providers } = providersResponse;
  const { genres } = genresResponse;

  return (
    <div className="container space-y-8">
      <header className="md:mb-12 md:mt-6">
        <h1 className="mb-2 text-2xl font-medium">
          {pages.movie.discover.title}
        </h1>
        <p className="max-w-3xl text-muted-foreground">
          {pages.movie.discover.description}
        </p>
      </header>

      <div className="flex justify-end gap-2">
        <DiscoverFilters type="movie" genres={genres} providers={providers} />
        <DiscoverSort type="movie" />
      </div>

      {movies.length > 0 ? (
        <>
          <div className="grid-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <ListPagination currentPage={currentPage} totalPages={totalPages} />
        </>
      ) : (
        <div className="container flex justify-center pb-[30dvh]">
          <div className="text-center">
            <h1 className="text-2xl">
              No movies found for the selected filters.
            </h1>
            <p className="text-muted-foreground">
              Try removing some of the filters to get more results.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
