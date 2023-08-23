"use client";

import React from "react";

import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { useClient } from "@/hooks/useClient";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isClient = useClient();

  if (!isClient) return null;

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="relative flex flex-1 w-full">
        <Sidebar />
        <div className="flex-1 bg-secondary text-secondary-foreground rounded-tl-3xl px-4 py-8 shadow-inner overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
