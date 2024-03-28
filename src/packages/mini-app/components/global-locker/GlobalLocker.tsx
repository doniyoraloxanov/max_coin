"use client";

import {
  selectBackdropClickable,
  selectGlobalLockerVisible,
  selectHideGlobalLocker,
  useGlobalTheme,
} from "../../store/useGlobalTheme";
import GlobalLoader from "./GlobalLoader";

const GlobalLocker = () => {
  const globalLockerVisible = useGlobalTheme(selectGlobalLockerVisible);
  const backdropClickable = useGlobalTheme(selectBackdropClickable);
  const hideGlobalLocker = useGlobalTheme(selectHideGlobalLocker);

  if (!globalLockerVisible) {
    return null;
  }

  return (
    <GlobalLoader
      onBackdropClick={() => {
        if (backdropClickable) {
          hideGlobalLocker();
        }
      }}
    />
  );
};

export default GlobalLocker;
