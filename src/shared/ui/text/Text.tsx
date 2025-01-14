import { CSSProperties, ElementType, ReactNode } from "react";
import { tw } from "@/shared/lib/formatTailwindClasses";
import clsx from "clsx";

export type TextVariant =
  | "mainTitle"
  | "title"
  | "subtitle"
  | "subtitle-2"
  | "subtitle-3"
  | "body"
  | "caption"
  | "small";
export type TextColor =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "white"
  | "accent";

interface TextProps {
  className?: string;
  variant?: TextVariant;
  color?: TextColor;
  as?: ElementType;
  children: ReactNode;
  style?: CSSProperties;
  semibold?: boolean;
  fontWeight?: CSSProperties["fontWeight"];
}

const variants = {
  mainTitle: tw({
    typography:
      "text-[32px] sm:text-[48px] lg:text-[50px] xl:text-[72px] font-black leading-[1.2] sm:leading-[1.2]",
  }),
  title: tw({
    typography:
      "text-[32px] sm:text-[48px] lg:text-[50px] xl:text-[58px] font-black leading-[1.2] sm:leading-[1.1]",
  }),
  subtitle: tw({
    typography:
      "text-[32px] md:text-[40px] lg:text-[48px] font-[600] leading-[120%]",
  }),
  "subtitle-2": tw({
    typography:
      "text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[120%]",
  }),
  "subtitle-3": tw({
    typography:
      "text-[20px] md:text-[22px] lg:text-[24px] font-[400] leading-[150%]",
  }),
  body: tw({
    typography: "text-[18px] sm:text-[20px] font-[400] leading-[180%]",
  }),
  small: tw({
    typography:
      "text-[16px] md:text-[17px] lg:text-[18px] font-[500] leading-[1.6]",
  }),
  caption: tw({
    typography:
      "text-[16px] md:text-[17px] lg:text-[18px] font-[400] leading-[1.6] bg-[rgb(0,0,0)]/[0.05] px-4 py-3.5 border-l-4 border-[#555] rounded",
  }),
};

const colors = {
  primary: "text-text-1",
  secondary: "text-text-2",
  accent: "text-text-accent",
  error: "text-text-red",
  success: "text-text-success",
  white: "text-bg-primary",
};

export function Text({
  className,
  variant = "body",
  color = "primary",
  as: Component = "div",
  children,
  style,
  semibold,
  fontWeight,
}: TextProps) {
  return (
    <Component
      className={clsx(
        "m-0",
        variants[variant],
        colors[color],
        semibold && "font-semibold",
        fontWeight && `!font-[${fontWeight}]`,
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
}
