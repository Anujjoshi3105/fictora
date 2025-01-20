import type React from "react";
import type { PropsWithChildren } from "react";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import ShareBtn from "../ShareBtn";
import { ComponentProps } from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";

type DivProps = React.ComponentProps<"div">;
type H1Props = React.ComponentProps<"h1">;

const Root: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("overflow-hidden", className)} {...props} />
);

const Backdrop: React.FC<PropsWithChildren<DivProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className={className} {...props}>
    <div className="md:h-hero relative hidden aspect-poster w-full md:block">
      {children}
    </div>
  </div>
);

const Hero: React.FC<PropsWithChildren<DivProps>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn("container md:mt-8 md:px-16 xl:mt-12 xl:px-32", className)}
    {...props}>
    <div className="grid gap-4 md:grid-cols-[auto,1fr] md:gap-10 xl:gap-16">
      {children}
    </div>
  </div>
);

const Poster: React.FC<PropsWithChildren<DivProps>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn(
      "relative aspect-poster w-full place-self-start md:-mt-32 md:block md:w-56 lg:w-64 xl:-mt-64 xl:w-80",
      className
    )}
    {...props}>
    {children}
  </div>
);

const Content: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "container mt-4 md:mt-8 md:px-16 xl:mt-12 xl:px-32",
      className
    )}
    {...props}
  />
);

const Genres: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={cn("flex flex-wrap gap-2", className)} {...props} />
);

const Genre: React.FC<BadgeProps> = ({ variant = "secondary", ...props }) => (
  <Badge variant={variant} {...props} />
);

const Categories: React.FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return <div className={cn("flex flex-wrap gap-2", className)} {...props} />;
};

const Category: React.FC<BadgeProps> = ({
  variant = "secondary",
  ...props
}) => {
  return <Badge variant={variant} {...props} />;
};
type TitleProps = H1Props & {
  showShareBtn?: boolean;
};

const Title: React.FC<TitleProps> = ({
  className,
  showShareBtn = true,
  ...props
}) => (
  <h1
    className={cn("text-2xl font-medium xl:text-4xl flex gap-4", className)}
    {...props}>
    {props.children}
    {showShareBtn && (
      <div className="flex gap-2">
        <ShareBtn />
        <Button variant="outline" size="icon" className="rounded-full">
          <Bookmark className="h-4 w-4" />
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>
    )}
  </h1>
);

const Subtitle: React.FC<ComponentProps<"h2">> = ({ className, ...props }) => {
  return (
    <h2
      className={cn(
        "text-xl font-medium text-muted-foreground xl:text-2xl",
        className
      )}
      {...props}
    />
  );
};

const Author: React.FC<ComponentProps<"p">> = ({ className, ...props }) => {
  return (
    <p className={cn("text-lg font-medium xl:text-xl", className)} {...props} />
  );
};

const Overview: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn("space-y-4 text-muted-foreground xl:text-lg", className)}
    {...props}
  />
);

export const SkeletonMediaDetail: React.FC = () => (
  <MediaDetailView.Root>
    <MediaDetailView.Backdrop>
      <Skeleton className="size-full rounded-md" />
    </MediaDetailView.Backdrop>

    <MediaDetailView.Hero>
      <MediaDetailView.Poster>
        <Skeleton className="size-full rounded-md" />
      </MediaDetailView.Poster>

      <div className="space-y-4">
        <Skeleton className="h-6 w-40 rounded-md" />
        <Skeleton className="h-4 w-60 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
      </div>
    </MediaDetailView.Hero>

    <MediaDetailView.Content>
      <Skeleton className="mt-4 h-[30vh] w-full rounded-md" />
    </MediaDetailView.Content>
  </MediaDetailView.Root>
);

export const MediaDetailView = {
  Root,
  Backdrop,
  Hero,
  Content,
  Poster,
  Genres,
  Genre,
  Categories,
  Category,
  Title,
  Subtitle,
  Author,
  Overview,
};
