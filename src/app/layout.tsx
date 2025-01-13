import "@/styles/globals.css";
import CookieBanner from "@/components/CookieBanner";
import { ScrollTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";
import HolyLoader from "holy-loader";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Mono", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: siteConfig.metadataBase,
  applicationName: siteConfig.applicationName,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svsg",
  },
  openGraph: {
    type: "website",
    url: siteConfig.openGraph.url,
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    images: siteConfig.openGraph.images,
    locale: siteConfig.openGraph.locale,
  },
  twitter: {
    card: "summary",
    title: siteConfig.twitter.title,
    description: siteConfig.twitter.description,
    images: siteConfig.twitter.images,
    creator: siteConfig.twitter.creator,
    site: siteConfig.twitter.site,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <HolyLoader color="#d63371" />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div
            className="relative flex min-h-screen flex-col bg-background"
            vaul-drawer-wrapper="">
            <SiteHeader />
            <div className="relative flex-1 py-4">{children}</div>
            <SiteFooter />
          </div>
          <TailwindIndicator />
          <ScrollTop />
          <CookieBanner />
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
