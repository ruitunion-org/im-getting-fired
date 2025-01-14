import { FC, ButtonHTMLAttributes, CSSProperties } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "reverse" | "ghost";
  width?: CSSProperties["width"];
  size?: "sm" | "md";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  width,
  size = "md",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 rounded-lg font-medium",
        "transition-transform active:scale-95 hover:scale-[1.02]",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-100 text-gray-900",
        variant === "reverse" && "bg-blue-100 text-blue-600",
        variant === "ghost" && "bg-transparent text-gray-900",
        size === "sm" && "px-4 pt-2 pb-3",
        size === "md" && "px-6 pt-4 pb-5",
        variant === "ghost" && "!p-0 !pb-1",
        className
      )}
      style={{ width }}
      {...props}
    >
      {children}
    </button>
  );
};
