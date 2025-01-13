import { MediaWatchProviders } from "@/components/media/media-watch-providers";

interface DetailWatchProps {
  params: Promise<{
    movieID: string;
  }>;
}

export default async function DetailWatch({ params }: DetailWatchProps) {
  const { movieID } = await params;
  return <MediaWatchProviders id={movieID} type="movie" />;
}
