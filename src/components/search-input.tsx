"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks";
import { cn } from "@/lib/utils";
import { Search, XIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  auto?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  auto = true,
  value: propValue,
  onChange: propOnChange,
  onKeyDown: propOnKeyDown,
  name = "q",
  type = "text",
  placeholder = "Search...",
  className,
  ...props
}) => {
  const { term, handleChange, handleKeyDown, clearSearch } = useSearch(auto);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const value = propValue ?? term;
  const onChange = propOnChange ?? handleChange;
  const onKeyDown = propOnKeyDown ?? handleKeyDown;

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsExpanded(true);
        inputRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative hidden lg:flex items-center transition-all duration-300 ease-in-out",
        isExpanded ? "w-full max-w-xs" : "w-10"
      )}>
      {!isExpanded && (
        <Button
          size="icon"
          variant="ghost"
          className="w-10 h-10 rounded-full"
          onClick={handleExpand}
          aria-label="Expand search">
          <Search className="size-4" />
        </Button>
      )}
      {isExpanded && (
        <>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <Search className="size-4" />
          </div>
          <Input
            ref={inputRef}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={cn(
              "pl-10 pr-10 rounded-full transition-all duration-300 ease-in-out",
              "w-full",
              "bg-background hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          />
          {value && (
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full size-6"
              onClick={(e) => {
                e.stopPropagation();
                clearSearch();
              }}
              aria-label="Clear search">
              <XIcon className="size-4" />
            </Button>
          )}
        </>
      )}
    </div>
  );
};
