"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Bell, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/components/layout/sidebar/sidebar.store";
import { cn } from "@/lib/utils";
import { CLIENT_URLS } from "@/config/urls";

const Navbar = ({ className }: { className?: string }) => {
  const { sidebarState, toggleSidebar } = useSidebarStore((state) => state);
  const { setTheme, theme } = useTheme();

  const isSidebarOpen = sidebarState === "open";
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header>
      <div
        className={cn(
          "flex items-center justify-between gap-2 py-4 px-4 md:px-8",
          className
        )}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <Logo size="lg" />

          <Button
            size="icon"
            radius="full"
            variant={isSidebarOpen ? "secondary" : "outline"}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>

          <Button
            size="icon"
            radius="full"
            variant="secondary"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button className="max-sm:hidden">Start Generating</Button>

          <Button size="icon" radius="full" variant="outline">
            <Bell />
          </Button>

          <UserButton showName={false} afterSignOutUrl={CLIENT_URLS.landing} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
