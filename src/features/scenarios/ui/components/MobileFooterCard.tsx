"use client";

import { Button, Modal, Text } from "@/shared";
import { useBoolean } from "usehooks-ts";
import { tw } from "@/shared/lib/formatTailwindClasses";
import { ReactNode } from "react";
import clsx from "clsx";

export type FooterCardProps = {
  title: string;
  children: ReactNode;
  variant?: "orange" | "blue";
};

export function MobileFooterCard({
  title,
  children,
  variant,
}: FooterCardProps) {
  const {
    value: isOpen,
    setTrue: showModal,
    setFalse: closeModal,
  } = useBoolean(false);

  const cardClasses = tw({
    display: "flex lg:hidden",
    flexbox: "flex-col",
    spacing: "gap-4",
    padding: "p-4",
    background:
      variant === "orange"
        ? "bg-gradient-to-r from-red-100 to-orange-100"
        : "bg-gradient-to-r from-indigo-100 to-blue-100",
    border: "rounded-lg",
    cursor: "cursor-pointer",
  });

  const modalClasses = tw({
    padding: "p-6",
    border: "rounded-t-2xl",
  });

  return (
    <>
      <div className={cardClasses} onClick={showModal}>
        <Button variant="ghost">
          <Text
            semibold
            fontWeight="400"
            className={clsx(
              variant === "orange" ? "!text-orange-600" : "!text-indigo-600",
              "text-center"
            )}
          >
            {title}
          </Text>
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        className={modalClasses}
      >
        {children}
      </Modal>
    </>
  );
}
