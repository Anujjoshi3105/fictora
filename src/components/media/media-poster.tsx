import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { PosterSize, tmdbImage } from "@/services/tmdb/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface MediaPosterProps extends ComponentProps<"div"> {
  image?: string;
  size?: PosterSize;
  alt: string;
  priority?: boolean;
}

export const MediaPoster: React.FC<MediaPosterProps> = ({
  image,
  size = "w500",
  alt,
  className,
  priority,
  ...props
}) => {
  const src = image ? tmdbImage.poster(image, size) : null;

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
      unoptimized
      fill
    />
  );
};
