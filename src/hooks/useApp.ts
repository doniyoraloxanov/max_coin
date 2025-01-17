"use client";

import { create, persist } from "@/external/zustand";

type AppStore = {
  isVerified: boolean;
  setIsVerified: (isVerified: boolean) => void;
};

export const useApp = create(
  persist<AppStore>(
    (set, get) => ({
      isVerified: false,

      setIsVerified: (isVerified) => {
        set({ isVerified });
      },
    }),
    {
      name: "Max-app",
    }
  )
);

export const selectIsVerified = (state: AppStore) => state.isVerified;
export const selectSetIsVerfied = (state: AppStore) => state.setIsVerified;
