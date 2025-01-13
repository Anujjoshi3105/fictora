import { ListPagination } from "@/components/list/list-pagination";
import { UserReviewCard } from "@/components/user/user-review-card";
import { tmdb } from "@/services/tmdb/api";

interface DetailReviewsProps {
  params: Promise<{
    movieID: string;
  }>;
  searchParams: Promise<{
    pages: string;
  }>;
}

export async function generateMetadata({ params }: DetailReviewsProps) {
  const { movieID } = await params;
  const { title } = await tmdb.movie.detail({
    id: movieID,
  });

  return {
    title: `Reviews - ${title}`,
  };
}
export default async function DetailReviews({
  params,
  searchParams,
}: DetailReviewsProps) {
  const { movieID } = await params;
  const { pages } = await searchParams;
  const { results, page, total_pages } = await tmdb.movie.reviews({
    id: movieID,
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
