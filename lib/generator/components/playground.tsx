"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PaletteCard from "./palette-card";

type PlaygroundProps = React.HTMLAttributes<HTMLDivElement> & {};

const Playground = ({ className, ...props }: PlaygroundProps) => {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["playground"],
    queryFn: async () => {
      const res = await fetch("/api/generator");
      console.log("did you run a request");
      return res.json();
    },
    staleTime: 1000000,
  });

  if (isLoading) return <h1>loading...</h1>;

  if (isError) return <h1>error...</h1>;

  if (isSuccess) {
    console.log(data);
  }

  return (
    <section className={cn("rounded-lg", className)} {...props}>
      <CardHeader className="px-0">
        <CardTitle className="mb-4">Explore your Generations</CardTitle>
        <Card className="p-4">Our Filter bar goes here</Card>
      </CardHeader>
      <CardContent className="px-0">
        <PaletteCard />
      </CardContent>
    </section>
  );
};

export default Playground;
