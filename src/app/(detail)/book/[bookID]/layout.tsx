import NotFound from "@/app/not-found";
import { format } from "@/services/tmdb/utils";
import { BookPoster } from "@/components/book/book-poster";
import { BookPreviewDialog } from "@/components/book/book-preview-dialog";
import { MediaDetailView } from "@/components/media/media-detail-view";
import { Button } from "@/components/ui/button";
import { Tabs, TabsLink, TabsList } from "@/components/ui/tabs";
import { book } from "@/services/book/api";
import { Download, ShoppingCart } from "lucide-react";

interface DetailLayoutProps {
  params: Promise<{
    bookID: string;
  }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: DetailLayoutProps) {
  const { bookID } = await params;
  const {
    volumeInfo: { title },
  } = await book.detail(bookID);
  return {
    title: title,
  };
}

export default async function DetailLayout({
  params,
  children,
}: DetailLayoutProps) {
  const { bookID } = await params;
  const {
    id,
    volumeInfo: {
      title,
      subtitle,
      imageLinks,
      authors,
      averageRating,
      categories,
      description,
    },
    saleInfo,
  } = await book.detail(bookID);

  if (!id) return <NotFound />;

  const isEbook = saleInfo.isEbook;

  return (
    <MediaDetailView.Root>
      <MediaDetailView.Backdrop>
        <BookPoster
          imageLinks={imageLinks}
          alt={title}
          className="object-cover"
        />
      </MediaDetailView.Backdrop>

      <MediaDetailView.Hero>
        <div className="flex flex-col space-y-2">
          <MediaDetailView.Poster>
            <BookPoster imageLinks={imageLinks} alt={title} />
          </MediaDetailView.Poster>
          {/* Purchase Options */}
          {saleInfo.saleability === "FOR_SALE" && saleInfo.listPrice && (
            <>
              <Button size="lg" asChild>
                <a
                  href={saleInfo.buyLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ShoppingCart className="h-4 w-4" />
                  Buy for {saleInfo.listPrice.amount}{" "}
                  {saleInfo.listPrice.currencyCode}
                </a>
              </Button>
              {isEbook && (
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={saleInfo.buyLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download EPUB
                  </a>
                </Button>
              )}
            </>
          )}
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <MediaDetailView.Categories>
              {averageRating && (
                <MediaDetailView.Category
                  variant="default"
                  className="flex items-center gap-2"
                  aria-label={`Rating: ${averageRating || "N/A"} out of 5 stars`}>
                  {averageRating || "N/A"}
                </MediaDetailView.Category>
              )}
              {categories?.map((category, index) => (
                <MediaDetailView.Category key={index}>
                  {category}
                </MediaDetailView.Category>
              ))}
            </MediaDetailView.Categories>
            <MediaDetailView.Title>{title}</MediaDetailView.Title>
            {subtitle && (
              <MediaDetailView.Subtitle>{subtitle}</MediaDetailView.Subtitle>
            )}
            <MediaDetailView.Author>
              {authors?.join(", ")}
            </MediaDetailView.Author>
            <MediaDetailView.Overview
              dangerouslySetInnerHTML={{
                __html: format.content(description || "Not available"),
              }}
            />
            <BookPreviewDialog bookID={id} />
          </div>
        </div>
      </MediaDetailView.Hero>

      <MediaDetailView.Content>
        <Tabs className="mt-12 w-full">
          <div className="max-w-screen scrollbar-hidden -mx-8 overflow-x-scroll px-8 lg:m-0 lg:p-0">
            <TabsList>
              <TabsLink href={`/book/${id}`}>Details</TabsLink>
              <TabsLink href={`/book/${id}/sales`}>Sales</TabsLink>
              <TabsLink href={`/book/${id}/access`}>Access</TabsLink>
              <TabsLink href={`/book/${id}/similar`}>Similar</TabsLink>
            </TabsList>
          </div>
        </Tabs>
        <div className="my-4">{children}</div>
      </MediaDetailView.Content>
    </MediaDetailView.Root>
  );
}
