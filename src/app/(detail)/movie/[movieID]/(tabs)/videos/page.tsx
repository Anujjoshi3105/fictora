import { VideoList } from "@/components/video/video-list";
import { tmdb } from "@/services/tmdb/api";

interface DetailVideosProps {
  params: Promise<{
    movieID: string;
  }>;
}

export async function generateMetadata({ params }: DetailVideosProps) {
  const { movieID } = await params;
  const { title } = await tmdb.movie.detail({
    id: movieID,
  });

  return {
    title: `Videos - ${title}`,
  };
}

export default async function DetailVideos({ params }: DetailVideosProps) {
  const { movieID } = await params;
  return <VideoList type="movie" id={movieID} />;
}
