"use client";

import classNames from "classnames/bind";
import React, { FC } from "react";
import styles from "./modal.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { Box } from "../Box";
import { useRipple } from "../Ripple/Ripple";

const cn = classNames.bind(styles);

export interface ModalProps {
  open: boolean;
  onToggle: (open: boolean) => void;
  title: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  actions?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  defaultOpen?: boolean;
  description?: string;
}

const Modal: FC<ModalProps> = ({
  open,
  onToggle,
  title,
  children,
  className,
  style,
  actions,
  size = "md",
  defaultOpen,
  description,
}) => {
  const onClick = useRipple();

  return (
    <Dialog.Root open={open} onOpenChange={onToggle} defaultOpen={defaultOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={cn("modal__overlay")} />
        <Dialog.Content className={cn("modal__content", className)}>
          <Dialog.Title className={cn("modal__title")}>{title}</Dialog.Title>
          <Dialog.Description className={cn("modal__description")}>
            {description}
          </Dialog.Description>
          {children}
          <Box className={cn("modal__actions")}>
            <Dialog.Close onClick={onClick} className={cn("modal__cancel")}>
              Cancel
            </Dialog.Close>
          </Box>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
