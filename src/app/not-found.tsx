import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background text-foreground">
      <h1 className="mb-2 text-7xl md:text-9xl font-bold tracking-tight">
        404
      </h1>
      <h2 className="mb-4 text-xl md:text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-8 md:text-xl text-muted-foreground max-w-md text-center">
        We&apos;re sorry, but the page you are looking for doesn&apos;t exist or
        has been moved.
      </p>
      <div className="flex">
        <Button asChild size="lg">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
