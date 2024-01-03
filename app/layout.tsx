import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import ThemeProvider from "@/components/providers/theme.provider";
import QueryClientProvider from "@/components/providers/query-client.provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savvy Palette",
  description: "AI color generator saas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <QueryClientProvider>
        <html lang="en" className={inter.className}>
          <body>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
            <ReactQueryDevtools />
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
