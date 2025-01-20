import { TrendCarousel } from "@/components/trend/trend-carousel";
import { pages } from "@/config";
import { book } from "@/services/book/api";
import { BOOK_GENRES } from "@/services/book/api/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.books.root.title,
  description: pages.books.root.description,
};

export default async function Books() {
  const genreBooks = await Promise.all(
    BOOK_GENRES.map(async (genre) => ({
      genre,
      items: (await book.search(genre)).items,
    }))
  );

  return (
    <section className="container space-y-8">
      {genreBooks.map(({ genre, items }) => (
        <TrendCarousel key={genre} title={genre} items={items} />
      ))}
    </section>
  );
}
