"use client";

import { MediaBackdrop } from "@/components/media/media-backdrop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getRandomItems } from "@/lib/utils";
import { Movie } from "@/services/tmdb/models";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MovieHeroProps {
  movies: Movie[];
  label: string;
  count?: number;
}

export const MovieHero: React.FC<MovieHeroProps> = ({
  movies,
  label,
  count = 1,
}) => {
  const [mounted, setMounted] = useState(false);
  const items = getRandomItems(movies, count);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="h-hero relative w-full" />;

  return items.map((item) => (
    <div className="h-hero relative" key={item.id}>
      <MediaBackdrop image={item.backdrop_path} alt={item.title} />

      <div className="overlay">
        <div className="mx-auto max-w-3xl space-y-4 p-4 pb-8 text-center md:p-14">
          <Badge className="select-none">{label}</Badge>

          <h1 className="line-clamp-2 text-xl font-medium leading-tight tracking-tighter md:text-4xl">
            {item.title}
          </h1>
          <p className="line-clamp-3 text-sm text-muted-foreground md:text-lg">
            {item.overview}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link href={`/movie/${item.id}`} className="group">
              <Button variant="default" size="rounded">
                Details
                <ArrowRight className="ransition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={`/movie/${item.id}`} className="group">
              <Button variant="outline" size="rounded">
                Watch Now
                <Play className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
};
