"use client";

import { useEffect } from "react";
import { getTelegram } from "../../utils";

const Initial = () => {
  const Telegram = getTelegram();

  useEffect(() => {
    if (Telegram) {
      console.log("ready", Telegram);
      Telegram.ready?.();
      Telegram.expand?.();
    }
  }, [Telegram]);

  // useEffect(() => {
  //   if (!Telegram?.isClosingConfirmationEnabled) {
  //     Telegram?.enableClosingConfirmation?.();
  //   }
  // }, [Telegram]);

  useEffect(() => {
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        initData: Telegram?.initData,
      }),
    });
  }, []);

  return null;
};

export default Initial;
