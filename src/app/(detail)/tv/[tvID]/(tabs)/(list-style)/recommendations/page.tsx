import { ListPagination } from "@/components/list/list-pagination";
import { TvCard } from "@/components/tv/tv-card";
import { tmdb } from "@/services/tmdb/api";

interface DetailRecommendationsProps {
  params: Promise<{
    tvID: string;
  }>;
  searchParams: Promise<{
    page: string;
  }>;
}

export async function generateMetadata({ params }: DetailRecommendationsProps) {
  const { tvID } = await params;
  const { name } = await tmdb.tv.detail({
    id: tvID,
  });

  return {
    title: `Recommendations - ${name}`,
  };
}

export default async function DetailRecommendations({
  params,
  searchParams,
}: DetailRecommendationsProps) {
  const { tvID } = await params;
  const { page } = await searchParams;
  const {
    results: tvShows,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.tv.recommendations({
    id: tvID,
    page: page,
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
