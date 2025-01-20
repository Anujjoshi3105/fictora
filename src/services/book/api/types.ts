export interface BookList {
  kind: string; // Identifier for the type of resource, typically "books#volumes"
  totalItems: number; // Total number of items found
  items: Book[]; // Array of Book objects
}

export interface Book {
  kind: string; // The type of resource, typically "books#volume"
  id: string; // Unique identifier for the book
  etag: string; // ETag for the resource
  selfLink: string; // API link to access this specific book
  volumeInfo: VolumeInfo; // Metadata about the volume
  saleInfo: SaleInfo; // Information about the sale of the volume
  accessInfo: AccessInfo; // Access restrictions and information
  searchInfo?: SearchInfo; // Search result information (optional)
}

// Contains metadata about the volume
export interface VolumeInfo {
  title: string; // The title of the book
  subtitle?: string; // Subtitle of the book, if any
  authors?: string[]; // List of authors
  publisher?: string; // Publisher of the book
  publishedDate?: string; // Publication date in ISO format (e.g., "2000-01-01")
  description?: string; // A description or summary of the book
  industryIdentifiers?: IndustryIdentifier[]; // Identifiers like ISBN
  readingModes?: ReadingModes; // Available reading modes
  pageCount?: number; // Number of pages in the book
  printType?: string; // Type of printed material ("BOOK" or "MAGAZINE")
  categories?: string[]; // Categories or genres of the book
  averageRating?: number; // Average user rating (1 to 5)
  ratingsCount?: number; // Number of user ratings
  maturityRating?: string; // Content rating ("NOT_MATURE" or "MATURE")
  allowAnonLogging?: boolean; // Whether anonymous logging is allowed
  contentVersion?: string; // Version identifier for the content
  imageLinks?: ImageLinks; // Links to images of the book
  language?: string; // Language code (e.g., "en" for English)
  previewLink?: string; // URL to preview the book
  infoLink?: string; // URL to more information about the book
  canonicalVolumeLink?: string; // Canonical URL for the volume
}

// Represents industry standard identifiers like ISBN
export interface IndustryIdentifier {
  type: string; // Identifier type (e.g., "ISBN_10", "ISBN_13")
  identifier: string; // The actual identifier value
}

// Indicates available reading modes for the volume
export interface ReadingModes {
  text: boolean; // Whether text mode is available
  image: boolean; // Whether image mode is available
}

// Contains links to images of different sizes
export interface ImageLinks {
  smallThumbnail?: string; // URL of a small thumbnail image
  thumbnail?: string; // URL of a larger thumbnail image
  small?: string; // URL of a small-sized image
  medium?: string; // URL of a medium-sized image
  large?: string; // URL of a large-sized image
  extraLarge?: string; // URL of an extra-large-sized image
}

// Provides information about the sale of the volume
export interface SaleInfo {
  country: string; // ISO 3166-1 code of the sale region
  saleability: string; // Saleability status ("FOR_SALE", "NOT_FOR_SALE", etc.)
  isEbook?: boolean; // Whether the book is an eBook
  listPrice?: Price; // Suggested retail price
  retailPrice?: Price; // Actual selling price
  buyLink?: string; // Link to purchase the book
  offers?: Offer[]; // List of offers available for the book
}

// Represents pricing information
export interface Price {
  amount: number; // Price amount
  currencyCode: string; // Currency code (e.g., "USD")
}

// Details an offer available for the book
export interface Offer {
  finskyOfferType: number; // Type of offer
  listPrice: PriceInMicros; // List price in micros
  retailPrice: PriceInMicros; // Retail price in micros
  giftable: boolean; // Whether the offer is giftable
}

// Represents price information in micros
export interface PriceInMicros {
  amountInMicros: number; // Price amount in micros
  currencyCode: string; // Currency code (e.g., "USD")
}

// Provides access restrictions and information
export interface AccessInfo {
  country: string; // ISO 3166-1 code of the access region
  viewability: string; // Viewability status ("PARTIAL", "ALL_PAGES", etc.)
  embeddable: boolean; // Whether the book is embeddable
  publicDomain: boolean; // Whether the book is in the public domain
  textToSpeechPermission: string; // TTS permission ("ALLOWED" or "NOT_ALLOWED")
  epub?: FormatAccess; // EPUB format access information
  pdf?: FormatAccess; // PDF format access information
  webReaderLink?: string; // Link to read the book online
  accessViewStatus?: string; // Access view status
  quoteSharingAllowed?: boolean; // Whether quote sharing is allowed
}

// Indicates availability and download link for a format
export interface FormatAccess {
  isAvailable: boolean; // Whether the format is available
  downloadLink?: string; // Link to download the format
}

// Contains search result information
export interface SearchInfo {
  textSnippet: string; // A snippet of text matching the search query
}

export enum PrintType {
  ALL = "all",
  BOOKS = "books",
  MAGAZINES = "magazines",
}

export enum OrderBy {
  RELEVANCE = "relevance",
  NEWEST = "newest",
}

export enum Filter {
  PARTIAL = "partial",
  FULL = "full",
  FREE_EBOOKS = "free-ebooks",
  PAID_EBOOKS = "paid-ebooks",
  EBOOKS = "ebooks",
}

export enum Projection {
  FULL = "full",
  LITE = "lite",
}

export interface SearchParams {
  q: string;
  download?: "epub";
  filter?: Filter;
  langRestrict?: string;
  maxResults?: string;
  orderBy?: OrderBy;
  printType?: PrintType;
  projection?: Projection;
  startIndex?: string;
}

export interface AdvancedSearchQuery {
  title?: string;
  author?: string;
  publisher?: string;
  subject?: string;
  isbn?: string;
  lccn?: string;
  oclc?: string;
  excludeTerms?: string[];
  exactPhrases?: string[];
  generalTerms?: string[];
}

export const BOOK_GENRES = [
  "mystery",
  "thriller",
  "romance",
  "fantasy",
  "science-fiction",
  "horror",
  "adventure",
  "young-adult",
  "childrens",
  "comics",
  "humor",
  "crime",
];
