"use client";

import { QueryClient } from "@tanstack/react-query";

let browserQueryClient: QueryClient | null = null;

export function getQueryClient() {
  const defaultOptions = {
    queries: {
      refetchOnWindowFocus: false,
    },
  };

  if (typeof window === "undefined") {
    return new QueryClient({ defaultOptions });
  }

  if (!browserQueryClient) {
    browserQueryClient = new QueryClient({ defaultOptions });
  }

  return browserQueryClient;
}
