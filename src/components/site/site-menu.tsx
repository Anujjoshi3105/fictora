"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { NavItem, navigation, siteConfig } from "@/config";
import { useDialog } from "@/hooks";
import { cn } from "@/lib/utils";
import { Bug, Github, MenuIcon } from "lucide-react";
import Link from "next/link";

export const SiteMenu = () => {
  const [open, setOpen] = useDialog();

  return (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>

        <Accordion type="multiple" className="px-2">
          {navigation.items.map((item) =>
            item.items ? (
              <MultipleMenuItem key={item.title} {...item} />
            ) : (
              <MenuItem key={item.title} {...item} />
            )
          )}
        </Accordion>

        <Separator className="mt-4" />

        <DrawerFooter>
          <nav className="flex gap-2">
            <Link
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank">
              <Button size="iconx" variant="outline" className="rounded-full">
                <Github className="size-4" />
              </Button>
              <span className="sr-only">Source code</span>
            </Link>

            <Link
              href={siteConfig.links.github + "/issues"}
              rel="noopener noreferrer"
              target="_blank">
              <Button size="iconx" variant="outline" className="rounded-full">
                <Bug className="size-4" />
              </Button>
              <span className="sr-only">Submit a bug</span>
            </Link>
          </nav>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const MenuItem = ({ title, href, icon: Icon }: NavItem) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-between hover:no-underline"
      )}>
      <div className={cn("flex items-center justify-start")}>
        <Icon className="mr-2 size-4" />
        {title}
      </div>
    </Link>
  );
};

const MultipleMenuItem = ({ title, items, icon: Icon }: NavItem) => {
  return (
    <AccordionItem className="border-b-0" value={title}>
      <AccordionTrigger
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-between hover:no-underline"
        )}>
        <div className={cn("flex items-center justify-start")}>
          <Icon className="mr-2 size-4" />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        {items?.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
