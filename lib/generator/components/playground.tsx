"use client";

import React, { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PaletteCard from "./palette-card";
import { useGenerator } from "../generator.store";

type PlaygroundProps = React.HTMLAttributes<HTMLDivElement> & {};

const Playground = ({ className, ...props }: PlaygroundProps) => {
  const { prompt } = useGenerator();

  const { mutate, data, isError, isLoading, isSuccess } = useMutation({
    mutationKey: ["test"],
    mutationFn: async (prompt: string) => {
      console.log("we are submitting");

      const response = await fetch("/api/generator", {
        method: "POST",
        body: JSON.stringify({
          prompt,
        }),
      });

      return response.json();
    },
  });

  useEffect(() => {
    if (!!prompt) mutate(prompt);
  }, [prompt]);

  console.log("Yayy we got the data : ", data?.palette);

  if (isLoading) return <h1>It's loading...</h1>;

  if (isError) return <h1>Ops we got an error</h1>;

  if (!isSuccess) return <h1>No Palette Exist</h1>;

  const colorPalette = data?.palette && JSON.parse(data.palette);
  const { background, foreground, ...purePalette } = colorPalette;
  const paletteArray = Object.entries(purePalette);
  console.log("here is the color palette : ", colorPalette);

  return (
    <section className={cn("rounded-lg", className)} {...props}>
      <CardHeader className="px-0">
        <CardTitle className="mb-4">Explore your Generations</CardTitle>
        <Card className="p-4">Our Filter bar goes here</Card>
      </CardHeader>
      <CardContent className="px-0">
        {paletteArray.map(([name, colors]) => (
          <PaletteCard name={name} colors={colors as Record<string, string>} />
        ))}
      </CardContent>
    </section>
  );
};

export default Playground;
