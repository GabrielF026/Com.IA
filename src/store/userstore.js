import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,

  setUser: (user) => {
    console.log("🧠 UserStore setUser:", user);
    set({ user });
  },

  logout: () => {
    console.log("🚪 Logout");
    set({ user: null });
  },
}));
