import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  user: string | null;
  token: string | null;
  login: (userData: string, token: string) => void;
};

export const useLoginStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (userData, token) =>
        set({
          user: userData,
          token: token,
        }),
    }),
    { name: "auth-storage" },
  ),
);
