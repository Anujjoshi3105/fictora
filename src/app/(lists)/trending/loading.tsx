import { Skeleton } from "@/components/ui/skeleton";

export default function TrendListSkeleton() {
  return (
    <div className="container space-y-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} className="h-64 w-full" />
          ))}
      </div>

      <Skeleton className="h-10 w-full max-w-sm mx-auto" />
    </div>
  );
}
