"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollTop: React.FC<ButtonProps> = ({
  variant = "outline",
  size = "icon",
  className,
  ...props
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      variant={variant}
      className={cn(
        "fixed rounded-full bottom-4 right-4 bg-background transition",
        show ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}>
      <ChevronUpIcon className="size-4" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  );
};
