import { ClientResponse } from "@/lib/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  clientData?: ClientResponse;
  setClientData: (value: ClientResponse) => void;
  isStoreSelected?: boolean;
  setIsStoreSelected: (value: boolean) => void;
  hydrated: boolean;
  setHydrated: () => void;
};

export const appStore = create<AppState>()(
  persist(
    (set) => ({
      clientData: undefined,
      setClientData: (clientData) => set({ clientData }),
      isStoreSelected: false,
      setIsStoreSelected: (isStoreSelected) => set({ isStoreSelected }),
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "app-storage",
      skipHydration: true,
    }
  )
);
