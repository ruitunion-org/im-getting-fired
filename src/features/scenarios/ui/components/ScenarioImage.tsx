import { ImagePlaceholder } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";
import { ImagePlaceholderProps } from "@/shared/ui/image-placeholder/ImagePlaceholder";

type Props = {
  imagePosition: "left" | "right" | "top";
  imageHeight?: number;
  imageSrc?: string;
  imageProps?: ImagePlaceholderProps;
};

export function ScenarioImage({ imageHeight, imageSrc, imageProps }: Props) {
  return (
    <ImagePlaceholder
      width="100%"
      className={tw({
        width: "max-w-full h-full",
        display: "order-1 flex-1",
        height: `max-h-[${imageHeight}px]`,
      })}
      imageClassName="object-contain"
      height="auto"
      src={imageSrc}
      overlay
      {...imageProps}
    />
  );
}
