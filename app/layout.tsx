import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "./components/query-provider";

export const metadata: Metadata = {
  title: "Ergastirio Manager",
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
          "bg-background text-foreground antialiased",
          "flex flex-col"
        )}
      >
        <QueryProvider>
          {children} <h1>test</h1>
        </QueryProvider>
      </body>
    </html>
  );
}
