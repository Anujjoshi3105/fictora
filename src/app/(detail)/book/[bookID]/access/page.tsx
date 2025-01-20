import NotFound from "@/app/not-found";
import { formatValue } from "@/lib/utils";
import { book } from "@/services/book/api";

interface PageProps {
  params: Promise<{
    bookID: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { bookID } = await params;
  const { id, accessInfo } = await book.detail(bookID);

  if (!id) return <NotFound />;
  const overview = [
    {
      title: "Viewability",
      value: formatValue(accessInfo.viewability),
    },
    {
      title: "Embeddable",
      value: accessInfo.embeddable ? "Yes" : "No",
    },
    {
      title: "Text to Speech",
      value: accessInfo.textToSpeechPermission ? "Yes" : "No",
    },
    {
      title: "Public Domain",
      value: accessInfo.publicDomain ? "Yes" : "No",
    },
    {
      title: "EPUB Available",
      value: accessInfo.epub?.isAvailable ? "Yes" : "No",
    },
    {
      title: "PDF Available",
      value: accessInfo.pdf?.isAvailable ? "Yes" : "No",
    },
    {
      title: "Reader Link",
      value: accessInfo.webReaderLink ? (
        <a
          href={accessInfo.webReaderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 border-b-2 transition hover:text-foreground">
          Read Online
        </a>
      ) : (
        "Not available"
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
