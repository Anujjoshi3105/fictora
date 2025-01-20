import { api } from "./api";
import { Book, BOOK_GENRES, BookList } from "./types";

const detail = (id: string) =>
  api.fetcher<Book>({
    endpoint: `volumes/${id}`,
  });

const search = (
  q: string = `subject:${BOOK_GENRES[Math.floor(Math.random() * BOOK_GENRES.length)]}`,
  page: number = 1,
  size: number = 20,
  orderBy: "relevance" | "newest" = "relevance"
) =>
  api.fetcher<BookList>({
    endpoint: "volumes",
    params: {
      q: q,
      startIndex: ((page - 1) * size).toString(),
      orderBy: orderBy,
    },
  });

const trending = (
  orderBy: "relevance" | "newest" = "relevance",
  page: number,
  size: number = 20
) =>
  api.fetcher<BookList>({
    endpoint: "volumes",
    params: {
      q: `subject:${BOOK_GENRES[Math.floor(Math.random() * BOOK_GENRES.length)]}`,
      startIndex: ((page - 1) * size).toString(),
      orderBy: orderBy,
    },
  });

export const book = { detail, search, trending };
