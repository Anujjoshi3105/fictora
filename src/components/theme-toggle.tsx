"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { toast } from "sonner";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleClick = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toast.success("Theme changed", {
      description: `Theme set to ${newTheme} mode`,
    });
  }, [setTheme, theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={handleClick}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
