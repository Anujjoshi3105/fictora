import { Badge } from "@/components/ui/badge";
import { Genre } from "@/services/tmdb/models/commons";
import Link from "next/link";

export default async function Genres({ genres }: { genres: Genre[] }) {
  return (
    <div className="w-full h-full rounded-xl bg-muted/40 p-6 border">
      <div className="flex flex-wrap gap-2">
        {genres?.map((genre) => (
          <Link key={genre.id} href={`/movie/discover?with_genres=${genre.id}`}>
            <Badge key={genre.id} size="md">
              {genre.name}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
