import { create } from "zustand";

type AppState = {
    vat: string;
    setVat: (value: string) => void;
};

export const appStore = create<AppState>((set) => ({
    vat: "",
    setVat: (vat) => set({ vat }),
}));
