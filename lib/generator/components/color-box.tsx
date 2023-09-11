"use client";

import React from "react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

type ColorBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof TSizes;
  tooltipContent?: string;
  colorHex: string;
};

type TSizes = {
  sm: string;
  lg: string;
};

const ColorBox = ({
  size = "sm",
  className,
  tooltipContent,
  color,
  colorHex,
  ...props
}: ColorBoxProps) => {
  const SIZES: TSizes = {
    sm: "h-12 md:h-20 min-w-[36px] md:min-w-[80px]",
    lg: "h-16 md:h-28 w-16 md:w-28",
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn("min-w-max", className)} {...props}>
          <div
            className={cn(
              "group max-h-full rounded-md overflow-hidden",
              SIZES[size]
            )}
            style={{
              backgroundColor: colorHex,
            }}
          >
            <div className="invisible group-hover:visible flex items-center justify-center w-full h-full bg-gradient-to-b from-black to-gray-700 opacity-30 duration-75">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => console.log("HEX copied succesfully")}
              >
                <CopyIcon />
              </Button>
            </div>
          </div>
          {size === "sm" && (
            <p className="text-sm font-medium text-center mt-1">100</p>
          )}
        </div>
      </TooltipTrigger>
      {tooltipContent && <TooltipContent>{tooltipContent}</TooltipContent>}
    </Tooltip>
  );
};

export default ColorBox;
