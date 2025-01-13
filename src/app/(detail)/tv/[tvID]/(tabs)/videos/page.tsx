import { VideoList } from "@/components/video/video-list";
import { tmdb } from "@/services/tmdb/api";

interface VideosProps {
  params: Promise<{
    tvID: string;
  }>;
}

export async function generateMetadata({ params }: VideosProps) {
  const { tvID } = await params;
  const { name } = await tmdb.tv.detail({
    id: tvID,
  });

  return {
    title: `Videos - ${name}`,
  };
}

export default async function DetailVideos({ params }: VideosProps) {
  const { tvID } = await params;
  return <VideoList type="tv" id={tvID} />;
}
