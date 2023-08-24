import React from "react";

import PromptCard from "@/lib/generator/components/prompt-card";
import Playground from "@/lib/generator/components/playground";

const DashboardPage = () => {
  return (
    <main className="sm:container space-y-8" id="generator-page">
      <PromptCard className="w-full !rounded-xl shadow" />
      <Playground />
    </main>
  );
};

export default DashboardPage;
