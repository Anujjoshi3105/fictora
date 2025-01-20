import { TrendTime } from "@/components/trend/trend-time";
import { Tabs, TabsLink, TabsList } from "@/components/ui/tabs";
import { pages } from "@/config";
import { Metadata } from "next";

interface TrendingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: pages.trending.all.title,
  description: pages.trending.all.description,
};
export default async function TrendingPage({ children }: TrendingLayoutProps) {
  return (
    <div className="container space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {pages.trending.all.title}
        </h1>
        <p className="max-w-3xl text-muted-foreground">
          {pages.trending.all.description}
        </p>
      </div>

      <Tabs className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsLink href="/trending">All</TabsLink>
            <TabsLink href="/trending/movie">Movies</TabsLink>
            <TabsLink href="/trending/tv">TV Shows</TabsLink>
            <TabsLink href="/trending/people">People</TabsLink>
            <TabsLink href="/trending/book">Books</TabsLink>
          </TabsList>
          <TrendTime />
        </div>
      </Tabs>
      {children}
    </div>
  );
}
