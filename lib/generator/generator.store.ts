import { create } from "zustand";

type TPlayground = {
  id: string;
  title: string;
  colors: Record<string, string[]>;
} | null;

type TGenerator = {
  prompt: string;
  playground: TPlayground;
  isLoading: boolean;
  onSubmitPrompt: (prompt: string) => void;
};

const useGenerator = create<TGenerator>((set) => ({
  prompt: "",
  playground: null,
  isLoading: false,
  onSubmitPrompt: (prompt) => {},
}));

export { useGenerator };
