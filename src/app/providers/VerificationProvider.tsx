"use client";

import { Box } from "@/components/Box";
import Snackbar from "@/packages/mini-app/components/snackbar/Snackbar";
import { getTelegram, getTgUser } from "@/utils";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const VerificationThemeProvider: FC<Props> = ({ children }) => {
  const telegram = getTelegram();
  const tgUser = getTgUser();

  return (
    <Box>
      <Snackbar />
      {children}
    </Box>
  );
};

export default VerificationThemeProvider;
