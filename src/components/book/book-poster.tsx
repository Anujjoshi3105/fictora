import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ImageLinks } from "@/services/book/api/types";
import Image from "next/image";
import { ComponentProps } from "react";

interface BookPosterProps extends ComponentProps<"div"> {
  imageLinks?: ImageLinks;
  alt: string;
  priority?: boolean;
}

export const BookPoster: React.FC<BookPosterProps> = ({
  imageLinks,
  alt,
  className,
  priority = false,
  ...props
}) => {
  const src =
    imageLinks?.extraLarge ||
    imageLinks?.large ||
    imageLinks?.medium ||
    imageLinks?.small ||
    imageLinks?.thumbnail ||
    imageLinks?.smallThumbnail;

  if (!src) {
    return (
      <div
        className={cn(
          "size-full rounded-md border bg-muted text-muted-foreground",
          className
        )}
        {...props}>
        <div className="grid size-full place-items-center">
          <Icons.Logo className="size-12 fill-current hover:text-primary" />
        </div>
      </div>
    );
  }

  return (
    <Image
      className={cn(
        "size-full rounded-md border bg-muted object-cover",
        className
      )}
      src={src}
      alt={alt}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
    />
  );
};
