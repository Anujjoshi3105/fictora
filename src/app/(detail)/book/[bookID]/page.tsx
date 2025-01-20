import NotFound from "@/app/not-found";
import { formatValue } from "@/lib/utils";
import { format } from "@/services/tmdb/utils";
import { book } from "@/services/book/api";
import { languages } from "@/lib";

interface DetailLayoutProps {
  params: Promise<{
    bookID: string;
  }>;
}

export async function generateMetadata({ params }: DetailLayoutProps) {
  const { bookID } = await params;
  const { volumeInfo } = await book.detail(bookID);
  return {
    title: volumeInfo.title,
  };
}

export default async function DetailLayout({ params }: DetailLayoutProps) {
  const { bookID } = await params;
  const { id, volumeInfo } = await book.detail(bookID);

  if (!id) return <NotFound />;
  const overview = [
    {
      title: "Published Date",
      value: formatValue(volumeInfo.publishedDate, format.date),
    },
    {
      title: "Publisher",
      value: formatValue(volumeInfo.publisher),
    },
    {
      title: "Page Count",
      value: formatValue(volumeInfo.pageCount),
    },
    {
      title: "Maturity Rating",
      value: formatValue(volumeInfo.maturityRating),
    },
    {
      title: "Language",
      value: formatValue(
        languages.find(
          (lang) => lang.iso_639_1 === (volumeInfo.language || "en")
        )?.english_name || "Unknown"
      ),
    },
  ];

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-2 gap-y-12 rounded border p-6 md:grid-cols-4">
        {overview.map((item) => (
          <div key={item.title}>
            <h2 className="font-medium md:text-xl">{item.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground md:text-base">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
