import { PropsWithChildren } from "react";
import { Text } from "../text/Text";
import { tw } from "@/shared/lib/formatTailwindClasses";
import clsx from "clsx";

type Props = PropsWithChildren & {
  title?: string;
  withoutBackground?: boolean;
  anchor?: string;
  className?: string;
};

export const ContentWrapper = ({
  children,
  title,
  withoutBackground,
  anchor,
  className,
}: Props) => {
  const rootClasses = tw({
    display: "overflow-hidden flex flex-col",
    spacing: "gap-[30px] sm:gap-[50px] md:gap-[70px]",
  });

  const contentClasses = tw({
    sizing: "w-full",
    effects: "rounded-0 sm:rounded-[20px]",
    colors: withoutBackground ? "bg-transparent" : "bg-bg-primary",
    spacing: withoutBackground
      ? "p-0"
      : "p-0 sm:p-6 md:p-8 pb-10 sm:pb-6 md:pb-8",
  });

  return (
    <div className={clsx(rootClasses, className)}>
      {anchor && <a className="relative top-[-60px] w-0 h-0" id={anchor} />}
      {title && (
        <div className="px-8 sm:px-0">
          <Text variant="title">{title}</Text>
        </div>
      )}
      <div className={contentClasses}>{children}</div>
    </div>
  );
};
