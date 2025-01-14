"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Flex } from "../flex/Flex";
import clsx from "clsx";
import { Text } from "../text/Text";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  className?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setShouldRender(true);
      document.body.style.overflow = "hidden";
    } else if (shouldRender) {
      console.log("close");
      setIsClosing(true);
      document.body.style.overflow = "";
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className={clsx(
          "absolute inset-0 bg-black/50",
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        )}
        onClick={onClose}
      />

      <Flex
        vertical
        className={clsx(
          "absolute bottom-0 left-0 right-0",
          "bg-white",
          isClosing ? "animate-slideDown" : "animate-slideUp",
          className
        )}
      >
        {title && (
          <div className="sticky top-0 z-10 bg-white pb-4">
            <Text variant="subtitle-2">{title}</Text>
          </div>
        )}
        <div className="overflow-y-auto max-h-[70vh]">{children}</div>
      </Flex>
    </div>,
    document.body
  );
};
