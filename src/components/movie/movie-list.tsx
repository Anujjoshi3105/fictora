import { ListPagination } from "@/components/list/list-pagination";
import { MovieCard } from "@/components/movie/movie-card";
import { tmdb } from "@/services/tmdb/api";
import { MovieListType } from "@/services/tmdb/api/types";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

interface MovieListProps {
  list: MovieListType;
  page: string;
  title?: string;
  description?: string;
}

export const MovieList: React.FC<MovieListProps> = async ({
  list,
  page,
  title,
  description,
}) => {
  const region = (await cookies()).get("region")?.value ?? "US";

  const {
    results,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.movie.list({
    region,
    list,
    page,
  });
  if (!results?.length) {
    return notFound();
  }

  return (
    <div className="container space-y-8">
      <div className="md:mb-12 md:mt-6">
        <h1 className="mb-2 text-2xl font-medium">{title}</h1>
        <p className="max-w-3xl text-muted-foreground">{description}</p>
      </div>

      <div className="grid-list">
        {results.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
