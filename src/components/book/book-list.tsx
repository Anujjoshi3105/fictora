import { ListPagination } from "@/components/list/list-pagination";
import { book } from "@/services/book/api";
import { notFound } from "next/navigation";
import { BookCard } from "./book-card";

interface BookListProps {
  page: string;
  title?: string;
  description?: string;
}

export const BookList: React.FC<BookListProps> = async ({
  page,
  title,
  description,
}) => {
  const currentPage = Number(page);
  const { items: results, totalItems: totalPages } = await book.trending(
    "relevance",
    currentPage
  );
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
          <BookCard key={movie.id} {...movie} />
        ))}
      </div>

      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
