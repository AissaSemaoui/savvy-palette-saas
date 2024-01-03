import React, { HTMLAttributes } from "react";
import { CopyIcon, Trash2Icon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import ColorBox from "./color-box";

type PaletteCardProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  colors: Record<string, string>;
};

const PaletteCard = ({ className, name, colors }: PaletteCardProps) => {
  const { DEFAULT, ...shades } = colors;
  const colorsHex = Object.values(shades);

  return (
    <Card className={cn("shadow-none", className)}>
      <CardHeader className="flex-row flex-wrap items-end gap-4 p-6">
        <ColorBox colorHex={DEFAULT} size="lg" />
        <div className="space-y-2">
          <h3 className="text-base md:text-xl text-secondary-foreground font-medium">
            {name}
          </h3>
          <Input placeholder="Color name" className="w-full text-lg" />
        </div>
        <div className="flex gap-2">
          <Button tooltipContent="Copy all shades" variant="ghost" size="icon">
            <CopyIcon />
          </Button>
          <Button
            tooltipContent="Delete this color"
            variant="ghost"
            size="icon"
          >
            <Trash2Icon />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-[repeat(auto-fit,minmax(36px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2 p-6 pt-0">
        {colorsHex.map((hex) => (
          <ColorBox tooltipContent="Red-100" colorHex={hex} />
        ))}
      </CardContent>
    </Card>
  );
};

export default PaletteCard;
