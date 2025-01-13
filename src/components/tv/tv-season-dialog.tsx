"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogProps } from "@radix-ui/react-dialog";
import { usePathname, useRouter } from "next/navigation";

interface TvSeasonDialogProps extends DialogProps {
  name?: string;
  overview?: string;
}

export const TvSeasonDialog: React.FC<TvSeasonDialogProps> = ({
  name,
  overview,
  children,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();

  function handleOpenChange(open: boolean) {
    if (!open) {
      router.replace(pathname, { scroll: false });
    }
  }

  function onOpenAutoFocus(e: Event) {
    e.preventDefault();
  }

  return (
    <Dialog modal open onOpenChange={handleOpenChange} {...props}>
      <DialogContent
        onOpenAutoFocus={onOpenAutoFocus}
        className="max-w-screen-lg">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="line-clamp-3 md:line-clamp-none">
            {overview}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[75dvh] md:pr-4">{children}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
