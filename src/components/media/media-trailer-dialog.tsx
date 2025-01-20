"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Video } from "@/services/tmdb/models";
import { yt } from "@/services/tmdb/utils";
import { Ban, Loader2, Play } from "lucide-react";

interface MediaTrailerDialogProps {
  videos: Video[];
}

export const MediaTrailerDialog: React.FC<MediaTrailerDialogProps> = ({
  videos,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const trailer = videos?.find((video) => video.type === "Trailer");

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setIsLoading(true);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={trailer ? "default" : "secondary"}
          disabled={!trailer}
          className="gap-2">
          {trailer ? (
            <>
              <Play className="h-4 w-4" />
              <span>Watch Trailer</span>
            </>
          ) : (
            <>
              <Ban className="h-4 w-4" />
              <span>Trailer Not Available</span>
            </>
          )}
        </Button>
      </DialogTrigger>

      {trailer && (
        <DialogContent className="sm:max-w-[720px] md:max-w-[900px] lg:max-w-[1024px]">
          <div className="relative aspect-video w-full">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            )}
            <iframe
              className={cn(
                "h-full w-full rounded-md",
                isLoading && "invisible"
              )}
              src={yt.video(trailer.key, true)}
              allow="autoplay; encrypted-media"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};
