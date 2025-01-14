"use client";

import { ReactNode, useState } from "react";
import { Text } from "../text/Text";
import { ArrowIcon } from "./arrow-icon";
import { tw } from "@/shared/lib/formatTailwindClasses";

interface AccordionProps {
  title: string;
  children: ReactNode;
  outline?: boolean;
  size?: "sm" | "md";
}

export const Accordion = ({
  title,
  children,
  outline = false,
  size = "md",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    accordion: tw({
      width: "w-full",
      border:
        "sm:rounded-2xl " +
        (outline
          ? "border border-gray-200 rounded-none sm:rounded-2xl"
          : "border-none"),
      background: "bg-white",
      padding: "px-6 py-0",
      overflow: "overflow-hidden",
    }),
    trigger: tw({
      width: "w-full",
      padding: size === "sm" ? "py-4" : "py-6",
      display: "flex items-center justify-between gap-4",
      cursor: "cursor-pointer",
      background: "bg-transparent",
      border: "border-none",
    }),
    arrow: tw({
      display: isOpen ? "opacity-100" : "opacity-20",
      transitions: "transition-transform duration-300",
      transform: isOpen ? "rotate-0" : "rotate-180",
    }),
    content: tw({
      display: "block",
      transitions: "transition-all duration-500 ease-out",
      height: isOpen ? "max-h-[1200px]" : "max-h-0",
      effects: isOpen ? "opacity-100" : "opacity-0",
      transform: isOpen ? "translate-y-0" : "-translate-y-2",
      overflow: "overflow-hidden",
      padding: isOpen ? "pt-2 pb-6" : "pb-0",
    }),
  };

  return (
    <div className={styles.accordion}>
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <Text
          className="text-left"
          variant={size === "sm" ? "small" : "subtitle-3"}
          semibold={size === "md"}
        >
          {title}
        </Text>
        <span className={styles.arrow}>
          <ArrowIcon className="w-4 h-4" />
        </span>
      </button>
      <div className={styles.content}>
        <Text>{children}</Text>
      </div>
    </div>
  );
};
