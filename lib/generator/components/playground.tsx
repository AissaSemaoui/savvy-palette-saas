import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PaletteCard from "./palette-card";

type PlaygroundProps = React.HTMLAttributes<HTMLDivElement> & {};

const Playground = ({ className, ...props }: PlaygroundProps) => {
  return (
    <section className={cn("rounded-lg", className)} {...props}>
      <CardHeader className="px-0">
        <CardTitle className="mb-4">Explore your Generations</CardTitle>
        <CardDescription>
          <Card className="p-4">Our Filter bar goes here</Card>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <PaletteCard />
      </CardContent>
    </section>
  );
};

export default Playground;
