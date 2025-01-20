import { BookList } from "@/components/book/book-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.books.topRated.title,
  description: pages.books.topRated.description,
};

export default async function TopRated({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <BookList
      page={page}
      title={pages.books.topRated.title}
      description={pages.books.topRated.description}
    />
  );
}
