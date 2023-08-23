import React from "react";

import PromptCard from "@/lib/generator/components/prompt-card";
import Playground from "@/lib/generator/components/playground";

const DashboardPage = () => {
  return (
    <main className="sm:container h-full space-y-8">
      <PromptCard className="w-full !rounded-xl shadow" />
      <Playground />
    </main>
  );
};

export default DashboardPage;
