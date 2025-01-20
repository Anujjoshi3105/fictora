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
  metadataBase: new URL("https://fictora.netlify.app/"),
  applicationName: "Fictora",
  name: "Fictora - Explore Dream Discover.",
  description:
    "Fictora is your go-to platform for discovering curated recommendations, reviews, and the latest trends in anime, books, movies, and pop culture. Explore stories, stay inspired, and connect with enthusiasts worldwide.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/anujjoshi3105/fictora",
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
    "Fictora",
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
    url: "https://fictora.netlify.app/",
    title:
      "Fictora - Discover, Dream, and Immerse Yourself in the Best of Pop Culture",
    description:
      "Fictora is your go-to platform for discovering curated recommendations, reviews, and the latest trends in anime, books, movies, and pop culture. Explore stories, stay inspired, and connect with enthusiasts worldwide.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Fictora Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fictora - Discover, Dream, and Immerse Yourself in the Best of Pop Culture",
    description:
      "Fictora is your go-to platform for discovering curated recommendations, reviews, and the latest trends in anime, books, movies, and pop culture. Explore stories, stay inspired, and connect with enthusiasts worldwide.",
    images: "/logo.svg",
    creator: "@fictora",
    site: "@fictora",
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

const trending = {
  title: "Trending",
  icon: TrendingUpIcon,
  href: "/trending",
  description: pages.trending.root.description,
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      title: "Top Rated",
      href: "/book/top-rated",
      icon: StarIcon,
      description: pages.books.topRated.description,
    },
  ],
};

export const navigation = {
  items: [home, trending, movies, tvShows, books] as NavItem[],
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
