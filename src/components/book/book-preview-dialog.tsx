"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Book, Ban, Loader2 } from "lucide-react";

interface BookPreviewDialogProps {
  bookID: string;
}

export function BookPreviewDialog({ bookID }: BookPreviewDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
          variant={bookID ? "default" : "secondary"}
          disabled={!bookID}
          className="gap-2">
          {bookID ? (
            <>
              <Book className="h-4 w-4" />
              <span>Preview Book</span>
            </>
          ) : (
            <>
              <Ban className="h-4 w-4" />
              <span>Preview Not Available</span>
            </>
          )}
        </Button>
      </DialogTrigger>
      {bookID && (
        <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
          <div className="relative w-full" style={{ height: "600px" }}>
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
              src={`https://books.google.com/books?id=${bookID}&lpg=PP1&pg=PP1&output=embed`}
              title="Book Preview"
              allow="encrypted-media"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
