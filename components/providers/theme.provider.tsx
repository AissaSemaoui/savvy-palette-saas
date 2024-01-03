"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { TBreakpoint, getSizeBreakpoint } from "@/lib/theme";

type ThemeContextTypes = {
  screenSize: TBreakpoint;
};

const ThemeContext = React.createContext<ThemeContextTypes>({
  screenSize: "xl",
});

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [screenSize, setScreenSize] = useState<TBreakpoint>("xl");

  useEffect(() => {
    const getScreenWidth = () => {
      const breakpoint = getSizeBreakpoint();
      setScreenSize(breakpoint);
    };

    window.addEventListener("resize", getScreenWidth);

    return () => window.removeEventListener("resize", getScreenWidth);
  }, []);

  return (
    <NextThemeProvider {...props}>
      <ThemeContext.Provider value={{ screenSize }}>
        {children}
      </ThemeContext.Provider>
    </NextThemeProvider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      "Theme Context can't be used outside of Theme context provider"
    );

  return context;
};

export default ThemeProvider;
