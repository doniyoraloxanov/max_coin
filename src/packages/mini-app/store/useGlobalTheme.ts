"use client";

import { create } from "zustand";

export type GlobalThemeStore = {
  globalLockerVisible: boolean;
  backdropClickable: boolean;

  showGlobalLocker: () => void;
  hideGlobalLocker: () => void;
  toggleGlobalLocker: (visible?: boolean, backdropClickable?: boolean) => void;
};

export const useGlobalTheme = create<GlobalThemeStore>((set, get) => ({
  globalLockerVisible: false,
  backdropClickable: false,

  showGlobalLocker: (backdropClickable?: boolean) => {
    set({ globalLockerVisible: true, backdropClickable });
  },
  hideGlobalLocker: () => {
    set({ globalLockerVisible: false, backdropClickable: false });
  },
  toggleGlobalLocker: (visible, backdropClickable) => {
    const previousState = get().globalLockerVisible;

    set({
      globalLockerVisible:
        typeof visible === "boolean" ? visible : !previousState,
      backdropClickable: backdropClickable,
    });
  },
}));

export const selectGlobalLockerVisible = (state: GlobalThemeStore) =>
  state.globalLockerVisible;
export const selectBackdropClickable = (state: GlobalThemeStore) =>
  state.backdropClickable;
export const selectShowGlobalLocker = (state: GlobalThemeStore) =>
  state.showGlobalLocker;
export const selectHideGlobalLocker = (state: GlobalThemeStore) =>
  state.hideGlobalLocker;
export const selectToggleGlobalLocker = (state: GlobalThemeStore) =>
  state.toggleGlobalLocker;
