import { create } from "zustand";
import { persist } from "zustand/middleware";

const STORAGE_KEY = "elevacredi-theme";

export function applyTheme(theme) {
  if (typeof document === "undefined") return;

  document.documentElement.setAttribute("data-theme", theme);
  document.body.dataset.theme = theme;
}

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
      toggleTheme: () => {
        const nextTheme = get().theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        set({ theme: nextTheme });
      },
    }),
    {
      name: STORAGE_KEY,
      onRehydrateStorage: () => (state) => {
        applyTheme(state?.theme || "light");
      },
    }
  )
);
