import { MediaCastCard } from "@/components/media/media-cast-card";
import { MediaCrewCard } from "@/components/media/media-crew-card";
import { Separator } from "@/components/ui/separator";
import { tmdb } from "@/services/tmdb/api";

interface DetailCreditsProps {
  params: Promise<{
    movieID: string;
  }>;
}

export async function generateMetadata({ params }: DetailCreditsProps) {
  const { movieID } = await params;
  const { title } = await tmdb.movie.detail({
    id: movieID,
  });

  return {
    title: `Credits - ${title}`,
  };
}

export default async function DetailCredits({ params }: DetailCreditsProps) {
  const { movieID } = await params;
  const { cast, crew } = await tmdb.movie.credits({ id: movieID });

  return (
    <section className="space-y-12">
      {cast.length > 0 ? (
        <div className="grid-list">
          {cast.map((cast) => (
            <MediaCastCard key={cast.credit_id} {...cast} />
          ))}
        </div>
      ) : (
        <div className="empty-box">No cast</div>
      )}

      <Separator />

      {crew.length > 0 ? (
        <div className="grid-list">
          {crew.map((crew) => (
            <MediaCrewCard key={crew.credit_id} {...crew} />
          ))}
        </div>
      ) : (
        <div className="empty-box">No crew</div>
      )}
    </section>
  );
}
