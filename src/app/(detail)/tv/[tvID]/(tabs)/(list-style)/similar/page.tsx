import { ListPagination } from "@/components/list/list-pagination";
import { TvCard } from "@/components/tv/tv-card";
import { tmdb } from "@/services/tmdb/api";

interface DetailSimilarProps {
  params: Promise<{
    tvID: string;
  }>;
  searchParams: Promise<{
    pages: string;
  }>;
}

export async function generateMetadata({ params }: DetailSimilarProps) {
  const { tvID } = await params;
  const { name } = await tmdb.tv.detail({
    id: tvID,
  });

  return {
    title: `Similar - ${name}`,
  };
}

export default async function DetailSimilar({
  params,
  searchParams,
}: DetailSimilarProps) {
  const { tvID } = await params;
  const { pages } = await searchParams;
  const {
    results: tvShows,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.tv.similar({
    id: tvID,
    page: pages,
  });

  if (!tvShows?.length) {
    return <div className="empty-box">No recommendations</div>;
  }

  return (
    <div className="space-y-4">
      <section className="grid-list">
        {tvShows.map((tv) => (
          <TvCard key={tv.id} {...tv} />
        ))}
      </section>
      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
