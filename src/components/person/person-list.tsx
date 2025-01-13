import { ListPagination } from "@/components/list/list-pagination";
import { PersonCard } from "@/components/person/person-card";
import { tmdb } from "@/services/tmdb/api";
import { PersonListType } from "@/services/tmdb/api/types";
import { notFound } from "next/navigation";

interface PersonListProps {
  list: PersonListType;
  page: string;
  title?: string;
  description?: string;
}

export const PersonList: React.FC<PersonListProps> = async ({
  list,
  page,
  title,
  description,
}) => {
  const {
    results: people,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.person.list({
    list,
    page,
  });

  if (!people?.length) {
    return notFound();
  }

  return (
    <div className="container space-y-8">
      <div className="md:mb-24 md:mt-12">
        <h1 className="mb-2 text-2xl font-medium">{title}</h1>
        <p className="max-w-3xl text-muted-foreground">{description}</p>
      </div>

      <div className="grid-list">
        {people.map((movie) => (
          <PersonCard key={movie.id} {...movie} />
        ))}
      </div>

      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
