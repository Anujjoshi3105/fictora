"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTime, TimeRange } from "@/hooks/useTime";
import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TrendTimeProps {
  onTimeRangeChange?: (range: TimeRange) => void;
}

export const TrendTime: React.FC<TrendTimeProps> = ({ onTimeRangeChange }) => {
  const { options, getTimeRange, setTimeRange } = useTime();
  const [isOpen, setIsOpen] = useState(false);

  const handleTimeChange = (value: TimeRange) => {
    setTimeRange(value);
    onTimeRangeChange?.(value);
    setIsOpen(false);
  };

  const currentOption = options.find(
    (option) => option.value === getTimeRange()
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[140px] justify-between gap-2 px-3 py-2 h-9"
          aria-label="Select time range">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{currentOption?.label}</span>
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[140px]">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleTimeChange(option.value as TimeRange)}
            className="flex items-center justify-between">
            <span>{option.label}</span>
            {option.value === getTimeRange() && (
              <div className="h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
