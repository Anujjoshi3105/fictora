import { MediaImages } from "@/components/media/media-images";
import { tmdb } from "@/services/tmdb/api";

interface DetailImagesProps {
  params: Promise<{
    movieID: string;
  }>;
}

export async function generateMetadata({ params }: DetailImagesProps) {
  const { movieID } = await params;
  const { title } = await tmdb.movie.detail({
    id: movieID,
  });

  return {
    title: `Images - ${title}`,
  };
}

export default async function DetailImages({ params }: DetailImagesProps) {
  const { movieID } = await params;
  const { posters, backdrops } = await tmdb.movie.images({
    id: movieID,
    langs: "en",
  });

  return <MediaImages posters={posters} backdrops={backdrops} />;
}
