import { Badge, BadgeProps } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

interface MediaRatingProps extends BadgeProps {
  average: number;
  count?: number;
}

export const MediaRating: React.FC<MediaRatingProps> = ({
  average,
  count,
  className,
  ...props
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge
            className={cn("flex items-center gap-1", className)}
            {...props}>
            {average ? average.toFixed(1) : "N/A"}
          </Badge>
        </TooltipTrigger>

        {!!count && (
          <TooltipContent className="flex items-center gap-1 bg-foreground text-xs text-background">
            <User className="size-3" /> {count}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
