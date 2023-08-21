import { cn } from "@/lib/utils";
import Link from "next/link";

import { Sofia_Sans } from "next/font/google";

const sofia_Sans = Sofia_Sans({ weight: "800", subsets: ["latin"] });

type LogoProps = {
  className?: string;
  size?: "md" | "lg";
  compact?: boolean;
};

const Logo = ({ className, size = "md", compact = false }: LogoProps) => {
  const fontSizes = {
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/">
      <h2
        className={cn(
          "w-full text-3xl !leading-5 text-purple-800 dark:text-purple-300 text-center",
          sofia_Sans.className,
          fontSizes[size],
          className
        )}
      >
        Savvy {compact && <br />}Palette
      </h2>
    </Link>
  );
};

export default Logo;
