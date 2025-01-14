import clsx from "clsx";
import classes from "./Flex.module.scss";
import { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;

  vertical?: boolean;
  gap?: number;
  flex?: number;

  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];

  style?: CSSProperties;
};

export function Flex({
  children,
  vertical,
  gap,
  flex,
  justify,
  align,
  ...props
}: Props) {
  return (
    <div
      className={clsx(classes.root, props.className, {
        [classes.vertical]: vertical,
      })}
      style={{
        gap: gap ? `${gap}px` : undefined,
        flex,
        justifyContent: justify,
        alignItems: align,
        ...props.style,
      }}
    >
      {children}
    </div>
  );
}
