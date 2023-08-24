"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGenerator } from "@/lib/generator/generator.store";

type PromptCardProps = React.HTMLAttributes<HTMLDivElement> & {};

const PromptCard = ({ className, ...props }: PromptCardProps) => {
  const { onSubmitPrompt, isLoading } = useGenerator();
  const [prompt, setPrompt] = useState("");

  console.log("loading is here... ", isLoading);

  const submitPrompt = () => {
    if (!!prompt) onSubmitPrompt(prompt);
  };

  return (
    <Card className={cn(className, "flex")} {...props}>
      <div className="flex-1">
        <CardHeader>
          <CardTitle>Hi John,</CardTitle>
          <CardDescription>What do you wanna build today!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 items-end">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here!"
          />
          <Button onClick={submitPrompt} disabled={isLoading} className="w-max">
            Generate
          </Button>
        </CardContent>
      </div>
      <div className="max-lg:hidden flex items-center p-6 pl-0">
        <Image
          src="/illustrations/designer.png"
          height={250}
          width={250}
          alt="designer"
        />
      </div>
    </Card>
  );
};

export default PromptCard;
