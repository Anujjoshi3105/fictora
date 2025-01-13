import { ListPagination } from "@/components/list/list-pagination";
import { MovieCard } from "@/components/movie/movie-card";
import { tmdb } from "@/services/tmdb/api";

interface DetailSimilarProps {
  params: Promise<{
    movieID: string;
  }>;
  searchParams: Promise<{
    page: string;
  }>;
}

export async function generateMetadata({ params }: DetailSimilarProps) {
  const { movieID } = await params;
  const { title } = await tmdb.movie.detail({
    id: movieID,
  });

  return {
    title: `Similar - ${title}`,
  };
}

export default async function DetailSimilar({
  params,
  searchParams,
}: DetailSimilarProps) {
  const { movieID } = await params;
  const { page } = await searchParams;
  const {
    results: movies,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.movie.similar({
    id: movieID,
    page: page,
  });

  if (!movies?.length) {
    return <div className="empty-box">No recommendations</div>;
  }

  return (
    <div className="space-y-4">
      <section className="grid-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </section>
      <ListPagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
