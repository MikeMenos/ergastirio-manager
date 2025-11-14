import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "./components/query-provider";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Next.js + TypeScript + shadcn + React Query + Tailwind + Axios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          "flex flex-col"
        )}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
