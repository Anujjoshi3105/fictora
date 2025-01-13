import { PersonList } from "@/components/person/person-list";
import { pages } from "@/config";
import type { Metadata } from "next";

interface ListPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: pages.people.popular.title,
  description: pages.people.popular.description,
};

export default async function Popular({ searchParams }: ListPageProps) {
  const { page = "1" } = await searchParams;
  return (
    <PersonList
      list="popular"
      page={page}
      title={pages.people.popular.title}
      description={pages.people.popular.description}
    />
  );
}
