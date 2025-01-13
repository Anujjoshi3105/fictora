import { RegionSelect } from "@/components/region-select";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SettingsIcon } from "lucide-react";
import { cookies } from "next/headers";

export const SiteSettings = async () => {
  const region = (await cookies()).get("region")?.value ?? "US";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-full hidden lg:flex"
          aria-label="Settings">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex gap-4 items-center w-fit" align="end">
        <RegionSelect value={region} />
        <ThemeToggle />
      </PopoverContent>
    </Popover>
  );
};
