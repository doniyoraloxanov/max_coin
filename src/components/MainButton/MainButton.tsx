"use client";

import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { messages } from "../../locale";
import { genuid, getTelegram } from "../../utils";
import Button from "../Button";

export type MainButtonProps = {
  onClick: () => void;
  text: keyof (typeof messages)["en"];
  disabled?: boolean;
  processing?: boolean;
  showProgress?: boolean;
  values?: Record<string, any>;
  color?: string;
  text_color?: string;
};

const MainButton: React.FC<MainButtonProps> = ({
  onClick,
  text,
  disabled,
  processing,
  showProgress,
  values,
  color,
  text_color,
}) => {
  const [mainButtonUpdated, setMainButtonUpdated] = useState<boolean | string>(
    false
  );
  const colorChangedRef = useRef<boolean>(false);

  const intl = useIntl();

  const Telegram = getTelegram();
  const mainButton = Telegram?.MainButton;

  const message = intl.formatMessage({ id: text }, values);

  if (showProgress) {
    mainButton?.showProgress();
  } else if (mainButton?.isProgressVisible) {
    mainButton.hideProgress();
  }

  if (processing) {
    mainButton?.setParams({
      text: message,
      is_active: false,
      is_visible: true,
      color: "#e0e0e0",
      text_color: "#9e9e9e",
    });
  } else {
    if (color && !colorChangedRef.current) {
      colorChangedRef.current = true;

      mainButton?.hide?.();
    }

    mainButton?.setParams({
      text: message,
      is_active: !disabled && !processing,
      is_visible: true,
      color: color ?? "#fbba00",
      text_color: text_color || undefined,
    });
  }

  const handleMainButtonClick = () => setMainButtonUpdated(genuid());

  useEffect(() => {
    if (mainButtonUpdated) onClick();
    else mainButton?.onClick(handleMainButtonClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainButtonUpdated]);

  if (process.env.NODE_ENV !== "production") {
    return (
      <button
        onClick={handleMainButtonClick}
        disabled={disabled}
        style={{
          width: "calc(100% - 40px)",
          position: "fixed",
          bottom: 0,
          left: 0,
          margin: "20px",
          zIndex: 100,
          padding: "20px",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: "12px",
          background: "linear-gradient(90deg, #ffa900 0%, #f47f3c 100%)",
        }}
      >
        {message}
      </button>
    );
  } else return null;
};

export default MainButton;
