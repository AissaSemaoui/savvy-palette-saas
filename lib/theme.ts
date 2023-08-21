"use client";

const BREAKPOINTS = {
  xl: 1280,
  lg: 992,
  md: 768,
  sm: 578,
  xs: 0,
};

export type TBreakpoint = keyof typeof BREAKPOINTS;

const getSizeBreakpoint = (screenWidth = window?.innerWidth): TBreakpoint => {
  for (let breakpoint in BREAKPOINTS) {
    if (screenWidth > BREAKPOINTS[breakpoint as TBreakpoint])
      return breakpoint as TBreakpoint;
  }
  return "xs";
};

const isScreenSmallerThan = (breakpoint: TBreakpoint | number) => {
  const screenWidth = window.innerWidth;

  if (typeof breakpoint === "number") return screenWidth < breakpoint;

  return screenWidth < BREAKPOINTS[breakpoint];
};

export { getSizeBreakpoint, isScreenSmallerThan };
