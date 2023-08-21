import { create } from "zustand";

type SidebarState = "open" | "hidden";

type SidebarStore = {
  sidebarState: SidebarState;
  updateSidebarState: (sidebarState: SidebarState) => void;
  toggleSidebar: () => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  sidebarState: "open",
  updateSidebarState: (sidebarState) => set({ sidebarState }),
  toggleSidebar: () =>
    set((prev) => ({
      sidebarState: prev.sidebarState === "open" ? "hidden" : "open",
    })),
}));

export { useSidebarStore };
