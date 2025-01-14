"use client";

import { CSSProperties } from "react";
import clsx from "clsx";
import { tw } from "@/shared/lib/formatTailwindClasses";
import Image from "next/image";

export interface ImagePlaceholderProps {
  className?: string;
  imageClassName?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  src?: string;
  overlay?: boolean;
  overlayClassName?: string;
}

const baseClasses = tw({
  position: "relative",
  effects: "w-full h-full rounded-xl",
});

export function ImageWithPlaceholder({
  className,
  width,
  height,
  src,
  imageClassName,
  overlay = false,
  overlayClassName,
}: ImagePlaceholderProps) {
  if (!src) {
    return null;
  }

  return (
    <div className={clsx(baseClasses, className)} style={{ width, height }}>
      <div className="absolute inset-0 bg-black/[0.04] rounded-xl" />

      <Image
        fill
        src={src}
        alt=""
        className={clsx("w-full h-full object-cover !relative", imageClassName)}
      />

      {overlay && (
        <div
          className={clsx(
            "absolute inset-0 rounded-xl bg-black/[0.03]",
            overlayClassName
          )}
        ></div>
      )}
    </div>
  );
}
