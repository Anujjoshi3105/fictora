import { MediaImages } from "@/components/media/media-images";
import { tmdb } from "@/services/tmdb/api";

interface DetailImagesProps {
  params: Promise<{
    tvID: string;
  }>;
}

export async function generateMetadata({ params }: DetailImagesProps) {
  const { tvID } = await params;
  const { name } = await tmdb.tv.detail({
    id: tvID,
  });

  return {
    title: `Images - ${name}`,
  };
}

export default async function DetailImages({ params }: DetailImagesProps) {
  const { tvID } = await params;
  const { posters, backdrops } = await tmdb.tv.images({
    id: tvID,
    langs: "en",
  });
  return <MediaImages posters={posters} backdrops={backdrops} />;
}
