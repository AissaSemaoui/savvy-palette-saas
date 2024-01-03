import { create } from "zustand";

type TGenerator = {
  prompt: string;
  playground: TPlayground;
  isLoading: boolean;
  onSubmitPrompt: (prompt: string) => void;
};

type TPlayground = {
  paletteId: string;
  paletteName: string;
  colors: TColor[];
} | null;

type TColor = {
  name: string;
  shades: Record<string, string[]>;
};

const useGenerator = create<TGenerator>((set) => ({
  prompt: "",
  playground: null,
  isLoading: false,
  onSubmitPrompt: (prompt) => {
    set({ prompt });
  },
}));

export { useGenerator };
