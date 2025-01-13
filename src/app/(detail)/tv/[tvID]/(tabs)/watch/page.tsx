import { MediaWatchProviders } from "@/components/media/media-watch-providers";

interface DetailWatchProps {
  params: Promise<{
    tvID: string;
  }>;
}

export default async function DetailWatch({ params }: DetailWatchProps) {
  const { tvID } = await params;
  return <MediaWatchProviders id={tvID} type="tv" />;
}
