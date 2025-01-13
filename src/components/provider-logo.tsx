import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { LogoSize, tmdbImage } from "@/services/tmdb/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface ProviderLogoProps extends ComponentProps<"div"> {
  image?: string;
  size?: LogoSize;
  alt: string;
  priority?: boolean;
}

export const ProviderLogo: React.FC<ProviderLogoProps> = ({
  image,
  size = "w154",
  alt,
  className,
  priority,
  ...props
}) => {
  const src = image ? tmdbImage.logo(image, size) : null;

  if (!src) {
    return (
      <div
        className={cn("size-full bg-muted text-muted-foreground", className)}
        {...props}>
        <div className="grid size-full place-items-center">
          <Icons.Logo className="size-6 fill-current text-primary" />
        </div>
      </div>
    );
  }

  return (
    <Image
      className={cn("size-full bg-muted object-cover", className)}
      src={src}
      alt={alt}
      priority={priority}
      unoptimized
      fill
    />
  );
};
