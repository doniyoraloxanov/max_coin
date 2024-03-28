import Telegram, { UserDataType } from "../types/telegram";
import { isBrowser, isEmpty } from "./helpers";

export const getTelegram = (): Telegram | undefined => {
  return isBrowser
    ? {
        ...window?.Telegram?.WebApp,
        showConfirm: isEmpty(window?.Telegram?.WebApp?.initDataUnsafe)
          ? (message, okCallback) => {
              const ok = confirm(message);

              okCallback?.(ok);
            }
          : window?.Telegram?.WebApp?.showConfirm,
        showAlert: isEmpty(window?.Telegram?.WebApp?.initDataUnsafe)
          ? (message) => {
              alert(message);
            }
          : window?.Telegram?.WebApp?.showAlert,
      }
    : undefined;
};

export const IS_DEV = process.env.NODE_ENV === "development";

export const getTgUser = (): UserDataType | undefined => {
  const Telegram = getTelegram();

  if (Telegram) {
    const tgQuery = window?.Telegram?.Utils?.urlParseQueryString(
      Telegram?.initData
    ) as any;

    return {
      query_id: tgQuery?.query_id,
      user: !IS_DEV
        ? JSON.parse(tgQuery?.user || "{}")
        : {
            id: "5604024916",
            first_name: "John",
            last_name: "Doe",
            username: "bch",
            photo_url: "https://t.me/i/userpic/320/3PvP9KwX1j4.jpg",
            query_id: "AAFUogZOAgAAAFSiBk5tq7Qy",
          },

      auth_date: IS_DEV ? 1628176411 : tgQuery?.auth_date,
      hash: IS_DEV
        ? "320905366db5fd4074d06065201bcefe7ca4fdaa9bc8f0adb163029244da4bb8"
        : tgQuery?.hash,
    };
  }

  return undefined;
};

export const getMainButton = () => {
  const Telegram = getTelegram();
  return Telegram?.MainButton;
};

export const getUsername = (user: any) =>
  user.first_name || user.last_name || user.username || "";
