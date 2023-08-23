"use client";

import React, { useMemo } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ColorPicker, Settings } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { isScreenSmallerThan } from "@/lib/theme";
import { CLIENT_URLS } from "@/config/urls";
import { useThemeContext } from "@/providers/theme-provider";

import { useSidebarStore } from "@/components/layout/sidebar/sidebar.store";
import SidebarItem, { SidebarItemData } from "./sidebar-item";

const SIDEBAR_ITEMS: SidebarItemData[] = [
  { label: "Dashboard", href: CLIENT_URLS.dashboard, icon: ColorPicker },
  { label: "Settings", href: CLIENT_URLS.settings, icon: Settings },
];

const Sidebar = () => {
  const { screenSize } = useThemeContext();
  const { sidebarState } = useSidebarStore((state) => state);
  const pathname = usePathname();

  const isOpen = sidebarState === "open";

  const isSmallScreen = useMemo(() => isScreenSmallerThan("md"), [screenSize]);

  return (
    <aside
      className={cn(
        "flex flex-col gap-8 w-80 max-w-[85%] h-full py-8 px-4 duration-75 bg-background",
        !isOpen && "max-md:hidden md:w-min",
        isSmallScreen && "absolute top-0 left-0 shadow"
      )}
    >
      <nav className="flex-1 space-y-4 mt-8">
        {SIDEBAR_ITEMS.map(({ label, href, icon: Icon }) => (
          <SidebarItem
            key={href}
            active={pathname === href}
            label={label}
            href={href}
            icon={<Icon height={24} width={24} />}
            compact={!isOpen}
          />
        ))}
      </nav>

      <div>
        <Separator className="my-4 bg-border-light" />
        <SignOutButton>
          <Button
            variant="outline"
            compact={!isOpen}
            icon={<LogOutIcon className={cn(isOpen && "mr-2")} size={18} />}
          >
            <span>Sign Out</span>
          </Button>
        </SignOutButton>
      </div>
    </aside>
  );
};

export default Sidebar;
