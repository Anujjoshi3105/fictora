import { pages } from "@/config/pages";
import {
  Atom,
  Book,
  CalendarIcon,
  ClapperboardIcon,
  HeartIcon,
  HomeIcon,
  LucideIcon,
  PlayIcon,
  RadioTowerIcon,
  StarIcon,
  TelescopeIcon,
  TrendingUpIcon,
  TvIcon,
} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  metadataBase: new URL("https://fictionix.netlify.app/"),
  applicationName: "Fictionix",
  name: "FICTIONIX - Explore Dream Discover.",
  description:
    "Fictionix is your go-to platform for discovering curated recommendations, reviews, and the latest trends in anime, books, movies, and pop culture. Explore stories, stay inspired, and connect with enthusiasts worldwide.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/anujjoshi3105/fictionix",
    next: "https://nextjs.org",
    vercel: "https://vercel.com",
    shadcn: "https://ui.shadcn.com/",
    creatorSite: "https://anujjoshi.netlify.app",
    tmdb: "https://www.themoviedb.org",
    spotify: "https://spotify.com",
    goodreads: "https://goodreads.com",
  },
  author: {
    name: "Anuj Joshi",
    web: "https://anujjoshi.netlify.app",
  },
  keywords: [
    "Fictionix",
    "Entertainment Recommendations",
    "Anime News",
    "Book Reviews",
    "Novel Insights",
    "Escapism Culture",
    "Pop Culture Trends",
    "Entertainment Hub",
    "Movie Reviews",
    "TV Show Reviews",
    "Anime Highlights",
    "Pop Culture News",
    "Fantasy & Sci-Fi Books",
    "Music Suggestions",
    "Escapism Experiences",
    "Entertainment Platform",
    "Global Pop Culture",
    "Anime Culture",
    "Cultural Trends",
    "Movie Analysis",
    "Storytelling Across Mediums",
  ],
  openGraph: {
    type: "website",
    url: "https://fictionix.netlify.app/",
    title:
      "Fictionix - Discover, Dream, and Immerse Yourself in the Best of Pop Culture",
    description:
      "Fictionix is your go-to platform for discovering curated recommendations, reviews, and the latest trends in anime, books, movies, and pop culture. Explore stories, stay inspired, and connect with enthusiasts worldwide.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Fictionix Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fictionix - Discover, Dream, and Immerse Yourself in the Best of Pop Culture",
    description:
      "Fictionix is your go-to platform for discovering curated recommendations, reviews, and the latest trends in anime, books, movies, and pop culture. Explore stories, stay inspired, and connect with enthusiasts worldwide.",
    images: "/logo.svg",
    creator: "@fictionix",
    site: "@fictionix",
  },
};

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  items?: NavItem[];
};

const home = {
  title: "Home",
  href: "/",
  icon: HomeIcon,
};

const movies = {
  title: "Movies",
  href: "/movies",
  icon: ClapperboardIcon,
  description: pages.movie.root.description,
  items: [
    {
      title: "Movies",
      href: "/movie",
      icon: ClapperboardIcon,
      description: pages.movie.root.description,
    },
    {
      title: "Discover",
      href: "/movie/discover",
      icon: TelescopeIcon,
      description: pages.movie.discover.description,
    },
    {
      title: "Popular",
      href: "/movie/popular",
      icon: HeartIcon,
      description: pages.movie.popular.description,
    },
    {
      title: "Now Playing",
      href: "/movie/now-playing",
      icon: PlayIcon,
      description: pages.movie.nowPlaying.description,
    },
    {
      title: "Upcoming",
      href: "/movie/upcoming",
      icon: CalendarIcon,
      description: pages.movie.upcoming.description,
    },
    {
      title: "Top Rated",
      href: "/movie/top-rated",
      icon: StarIcon,
      description: pages.movie.topRated.description,
    },
  ],
};

const tvShows = {
  title: "TV Shows",
  href: "/tv",
  icon: TvIcon,
  description: pages.tv.root.description,
  items: [
    {
      title: "TV Shows",
      href: "/tv",
      icon: TvIcon,
      description: pages.tv.root.description,
    },
    {
      title: "Discover",
      href: "/tv/discover",
      icon: TelescopeIcon,
      description: pages.tv.discover.description,
    },
    {
      title: "Popular",
      href: "/tv/popular",
      icon: HeartIcon,
      description: pages.tv.popular.description,
    },
    {
      title: "Airing Today",
      href: "/tv/airing-today",
      icon: PlayIcon,
      description: pages.tv.airingToday.description,
    },
    {
      title: "On The Air",
      href: "/tv/on-the-air",
      icon: RadioTowerIcon,
      description: pages.tv.onTheAir.description,
    },
    {
      title: "Top Rated",
      href: "/tv/top-rated",
      icon: StarIcon,
      description: pages.tv.topRated.description,
    },
  ],
};

const anime = {
  title: "Anime",
  href: "/anime",
  icon: Atom,
  description: pages.anime.root.description,
  items: [
    {
      title: "Anime",
      href: "/anime",
      icon: TvIcon,
      description: pages.anime.root.description,
    },
    {
      title: "Discover",
      href: "/anime/discover",
      icon: TelescopeIcon,
      description: pages.anime.discover.description,
    },
    {
      title: "Popular",
      href: "/anime/popular",
      icon: HeartIcon,
      description: pages.anime.popular.description,
    },
    {
      title: "Top Rated",
      href: "/anime/top-rated",
      icon: StarIcon,
      description: pages.anime.topRated.description,
    },
    {
      title: "Upcoming",
      href: "/anime/upcoming",
      icon: CalendarIcon,
      description: pages.anime.upcoming.description,
    },
  ],
};

const books = {
  title: "Books",
  href: "/book",
  icon: Book,
  description: pages.books.root.description,
  items: [
    {
      title: "Books",
      href: "/book",
      icon: Book,
      description: pages.books.root.description,
    },
    {
      title: "Discover",
      href: "/movie/discover",
      icon: TelescopeIcon,
      description: pages.movie.discover.description,
    },
    {
      title: "Trending",
      href: "/book/trending",
      icon: TrendingUpIcon,
      description: pages.books.trending.description,
    },
    {
      title: "Popular",
      href: "/books/popular",
      icon: HeartIcon,
      description: pages.books.popular.description,
    },
    {
      title: "Top Rated",
      href: "/books/top-rated",
      icon: StarIcon,
      description: pages.books.topRated.description,
    },
  ],
};

const trending = {
  title: "Trending",
  icon: TrendingUpIcon,
  href: "/trending",
  description: pages.trending.root.description,
  items: [
    {
      title: "Movies",
      href: "/trending/movie",
      icon: ClapperboardIcon,
      description: pages.trending.movie.description,
    },
    {
      title: "TV Shows",
      href: "/trending/tv",
      icon: TvIcon,
      description: pages.trending.tv.description,
    },
    {
      title: "Anime",
      href: "/trending/anime",
      icon: Atom,
      description: pages.trending.anime.description,
    },
    {
      title: "Books",
      href: "/trending/book",
      icon: Book,
      description: pages.trending.book.description,
    },
  ],
};

export const navigation = {
  items: [home, movies, tvShows, anime, books, trending] as NavItem[],
};

export const availableParams = [
  "with_genres",
  "with_original_language",
  "with_watch_providers",
  "with_companies",
  "with_networks",
  "primary_release_date.gte",
  "primary_release_date.lte",
  "first_air_date.gte",
  "first_air_date.lte",
  "vote_average.gte",
  "vote_average.lte",
  "vote_count.gte",
  "vote_count.lte",
];
