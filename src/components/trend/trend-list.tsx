import { ListPagination } from "@/components/list/list-pagination";
import { MovieCard } from "@/components/movie/movie-card";
import { PersonCard } from "@/components/person/person-card";
import { TvCard } from "@/components/tv/tv-card";
import { BookCard } from "../book/book-card";
import { book } from "@/services/book/api";
import { tmdb } from "@/services/tmdb/api";
import { notFound } from "next/navigation";
import { Book } from "@/services/book/api/types";
import {
  MovieWithMediaType,
  PersonWithMediaType,
  TvShowWithMediaType,
} from "@/services/tmdb/models";

interface TrendListProps {
  type: "movie" | "tv" | "people" | "book" | "all";
  time?: "day" | "week";
  page: string;
  title?: string;
  description?: string;
}

export const TrendList: React.FC<TrendListProps> = async ({
  type,
  time = "day",
  page,
}) => {
  let trends: (
    | Book
    | MovieWithMediaType
    | TvShowWithMediaType
    | PersonWithMediaType
  )[] = [];
  let totalPages = 0;
  const currentPage = Number(page);

  if (type === "book") {
    const bookResponse = await book.trending("newest", currentPage);
    trends = bookResponse.items;
    totalPages = Math.ceil(bookResponse.totalItems / 20);
  } else {
    const tmdbResponse = await tmdb.trending[type]({ time, page });
    trends = tmdbResponse.results;
    totalPages = tmdbResponse.total_pages;
  }

  if (!trends?.length) {
    return notFound();
  }

  return (
    <div className="container space-y-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {trends.map((item) => (
          <div key={item.id} className="animate-fade-in">
            {"media_type" in item ? (
              item.media_type === "tv" ? (
                <TvCard {...item} />
              ) : item.media_type === "person" ? (
                <PersonCard {...item} />
              ) : (
                <MovieCard {...item} />
              )
            ) : (
              <BookCard {...(item as Book)} />
            )}
          </div>
        ))}
      </div>

      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
