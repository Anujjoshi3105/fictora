import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/config";
import { Bug, Github } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

export const SiteFooter: React.FC<ComponentProps<"footer">> = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20 py-6 md:py-12">
      <div className="container px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid justify-between grid-cols-1 gap-12 lg:grid-cols-4 text-center">
          {/* Logo and description section */}
          <div className="flex flex-col items-center lg:items-start lg:text-left space-y-4">
            <Link href="/" className="flex items-center space-x-4 group">
              <Icons.Logo className="size-12 fill-current text-primary group-hover:scale-125 duration-200" />
              <h4 className="text-lg md:text-xl font-bold text-primary">
                {siteConfig.name.split(" ")[0]}
              </h4>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md md:max-w-lg lg:max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation sections */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {navigation.items.map(
                (item) =>
                  item.items &&
                  item.items?.length > 0 && (
                    <div key={item.title} className="space-y-3">
                      <h5 className="text-base font-semibold">{item.title}</h5>
                      <ul className="space-y-1">
                        {item.items.slice(1).map((subitem) => (
                          <li key={subitem.href}>
                            <Link
                              href={subitem.href}
                              prefetch={false}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                              {subitem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm text-muted-foreground">
              &copy; {year}{" "}
              <Link
                href={siteConfig.author.web}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline">
                {siteConfig.author.name}
              </Link>{" "}
              &mdash; All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Data provided by{" "}
              <Link
                href={siteConfig.links.tmdb}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline">
                TMDB
              </Link>
              .
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank">
              <Button size="icon" variant="ghost">
                <Github />
                <span className="sr-only">GitHub repository</span>
              </Button>
            </Link>
            <Link
              href={siteConfig.links.github + "/issues"}
              rel="noopener noreferrer"
              target="_blank">
              <Button size="icon" variant="ghost">
                <Bug />
                <span className="sr-only">Report an issue</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
