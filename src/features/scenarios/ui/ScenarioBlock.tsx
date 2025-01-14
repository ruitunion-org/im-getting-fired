import { ReactNode } from "react";
import { Flex } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";
import { ScenarioImage } from "./components/ScenarioImage";
import { ScenarioContent } from "./components/ScenarioContent";
import { ScenarioFooter } from "./components/ScenarioFooter";
import { ImagePlaceholderProps } from "@/shared/ui/image-placeholder/ImagePlaceholder";

type Props = {
  title: string;
  description: ReactNode;
  agreementContent?: ReactNode;
  actionContent?: ReactNode;
  imageHeight?: number;
  middleContent?: ReactNode;
  bottomContent?: ReactNode;
  fullWidthImage?: boolean;
  imagePosition?: "left" | "right" | "top";
  imageSrc?: string;
  imageProps?: ImagePlaceholderProps;
};

export function ScenarioBlock({
  title,
  description,
  agreementContent,
  actionContent,
  middleContent,
  bottomContent,
  imageHeight = 310,
  fullWidthImage = false,
  imagePosition = "left",
  imageSrc,
  imageProps
}: Props) {
  return (
    <div
      className={tw({
        display: "flex",
        flexbox: "flex-col",
        spacing:
          imagePosition === "top" ? "gap-4 md:gap-8" : "gap-4 md:gap-[50px]",
        background: "bg-bg-primary",
        border: "rounded-[20px]",
        padding: "p-4 pb-10 md:pb-12 md:p-[40px] lg:p-[60px_70px]",
      })}
    >
      <Flex
        vertical={fullWidthImage || imagePosition === "top"}
        className={tw({
          flexbox: "flex-1 flex-col lg:flex-row gap-6 lg:gap-[50px]",
          effects: imagePosition === "top" ? "lg:gap-[24px]" : "",
        })}
      >
        {(imagePosition === "left" || imagePosition === "top") && (
          <ScenarioImage
            imagePosition={imagePosition}
            imageHeight={imageHeight}
            imageSrc={imageSrc}
            imageProps={imageProps}
          />
        )}

        <ScenarioContent title={title} description={description} />

        {imagePosition === "right" && (
          <ScenarioImage
            imagePosition={imagePosition}
            imageHeight={imageHeight}
            imageSrc={imageSrc}
          />
        )}
      </Flex>

      {middleContent && <div>{middleContent}</div>}

      <ScenarioFooter
        agreementContent={agreementContent}
        actionContent={actionContent}
      />

      {bottomContent && <div>{bottomContent}</div>}
    </div>
  );
}
