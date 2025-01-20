import { MediaCard } from "@/components/media/media-card";
import { Book } from "@/services/book/api/types";
import Link from "next/link";
import React from "react";
import { BookPoster } from "./book-poster";

export const BookCard: React.FC<Book> = ({
  id,
  volumeInfo: { title, authors, imageLinks },
}) => {
  return (
    <Link href={`/book/${id}`} key={id} prefetch={false}>
      <MediaCard.Root>
        <BookPoster imageLinks={imageLinks} alt={title} />
        <MediaCard.Content>
          <MediaCard.Title>{title}</MediaCard.Title>
          <MediaCard.Excerpt>{authors?.join(",")}</MediaCard.Excerpt>
        </MediaCard.Content>
      </MediaCard.Root>
    </Link>
  );
};
