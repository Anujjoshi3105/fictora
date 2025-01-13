import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { BackdropSize, tmdbImage } from "@/services/tmdb/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface MediaBackdropProps extends ComponentProps<"div"> {
  image?: string;
  size?: BackdropSize;
  alt: string;
  priority?: boolean;
}

export const MediaBackdrop: React.FC<MediaBackdropProps> = ({
  image,
  size = "original",
  alt,
  className,
  priority,
  ...props
}) => {
  const src = image ? tmdbImage.backdrop(image, size) : null;

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
