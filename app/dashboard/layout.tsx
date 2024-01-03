"use client";

import React from "react";

import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { useClient } from "@/hooks/useClient";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isClient = useClient();

  if (!isClient) return null;

  return (
    <main className="flex flex-col h-screen ">
      <Navbar className="h-full" />
      <div className="relative flex flex-1 w-full">
        <Sidebar />
        <ScrollArea className="flex-1 bg-secondary text-secondary-foreground rounded-tl-3xl px-4 py-8 shadow-inner overflow-hidden">
          {children}
        </ScrollArea>
      </div>
    </main>
  );
};

export default DashboardLayout;
