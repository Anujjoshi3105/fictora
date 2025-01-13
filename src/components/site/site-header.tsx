import { SiteMenu } from "./site-menu";
import { SiteNav } from "./site-nav";
import { SiteSettings } from "./site-settings";
import { SearchInput } from "@/components/search-input";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
        <SiteNav />

        <div className="flex flex-1 justify-end gap-4">
          <Suspense
            fallback={<Skeleton className="hidden lg:block h-10 w-36" />}>
            <SearchInput />
          </Suspense>

          <SiteSettings />

          <div className="lg:hidden">
            <SiteMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
