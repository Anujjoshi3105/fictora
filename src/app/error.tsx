"use client";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background text-foreground">
      <AlertTriangle
        className="mb-8 h-16 w-16 text-primary"
        aria-hidden="true"
      />
      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        Something went wrong
      </h1>
      <p className="mb-8 text-xl text-muted-foreground max-w-md text-center">
        We&apos;re sorry, but an unexpected error occurred while loading the
        page.
      </p>
      <div className="flex">
        <Button asChild size="lg">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
