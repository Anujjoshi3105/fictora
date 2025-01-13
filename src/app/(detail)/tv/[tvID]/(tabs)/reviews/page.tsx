import { ListPagination } from "@/components/list/list-pagination";
import { UserReviewCard } from "@/components/user/user-review-card";
import { tmdb } from "@/services/tmdb/api";

interface DetailReviewsProps {
  params: Promise<{
    tvID: string;
  }>;
  searchParams: Promise<{
    pages: string;
  }>;
}

export async function generateMetadata({ params }: DetailReviewsProps) {
  const { tvID } = await params;
  const { name } = await tmdb.tv.detail({
    id: tvID,
  });

  return {
    title: `Reviews - ${name}`,
  };
}
export default async function DetailReviews({
  params,
  searchParams,
}: DetailReviewsProps) {
  const { tvID } = await params;
  const { pages } = await searchParams;
  const { results, page, total_pages } = await tmdb.tv.reviews({
    id: tvID,
    page: pages,
  });

  if (!results.length) return <div className="empty-box">No reviews</div>;

  return (
    <section className="space-y-8">
      {results.map((review) => (
        <UserReviewCard key={review.id} review={review} />
      ))}

      <ListPagination currentPage={page} totalPages={total_pages} />
    </section>
  );
}
