import NotFound from "@/app/not-found";
import { formatValue } from "@/lib/utils";
import { book } from "@/services/book/api";

interface PageProps {
  params: Promise<{
    bookID: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { bookID } = await params;

  try {
    const bookDetail = await book.detail(bookID);

    if (!bookDetail || !bookDetail.id) {
      return <NotFound />;
    }

    const { saleInfo } = bookDetail;

    const overview = [
      {
        title: "Saleability",
        value: formatValue(saleInfo.saleability || "Unknown"),
      },
      {
        title: "Price",
        value: saleInfo.listPrice
          ? `${saleInfo.listPrice.amount.toFixed(2)} ${saleInfo.listPrice.currencyCode}`
          : "Not for sale",
      },
      {
        title: "Retail Price",
        value: saleInfo.retailPrice
          ? `${saleInfo.retailPrice.amount.toFixed(2)} ${saleInfo.retailPrice.currencyCode}`
          : "Not available",
      },
      {
        title: "Country",
        value: formatValue(saleInfo.country || "Unknown"),
      },
      {
        title: "eBook Availability",
        value: saleInfo.isEbook ? "Available" : "Not available",
      },
      {
        title: "Buy Link",
        value: saleInfo.buyLink ? (
          <a
            href={saleInfo.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1 border-b-2 transition hover:text-foreground">
            Purchase here
          </a>
        ) : (
          "Not available"
        ),
      },
      {
        title: "Offers",
        value: saleInfo.offers ? (
          <ul>
            {saleInfo.offers.map((offer, index) => (
              <li key={index}>
                Price:{" "}
                {offer.listPrice
                  ? `${(offer.listPrice.amountInMicros / 1_000_000).toFixed(
                      2
                    )} ${offer.listPrice.currencyCode}`
                  : "N/A"}
              </li>
            ))}
          </ul>
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
  } catch (error) {
    console.error("Error fetching book details:", error);
    return <NotFound />;
  }
}
