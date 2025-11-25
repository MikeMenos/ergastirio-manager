import { ClientResponse } from "@/lib/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  clientData?: ClientResponse;
  setVat: (value: ClientResponse) => void;
  hydrated: boolean;
  setHydrated: () => void;
};

export const appStore = create<AppState>()(
  persist(
    (set) => ({
      clientData: undefined,
      setVat: (clientData) => set({ clientData }),
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "app-storage",
      skipHydration: true,
    }
  )
);
