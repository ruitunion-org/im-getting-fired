import { ContentWrapper, Text, ImagePlaceholder, Button, Flex } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";
import Link from "next/link";

export const MainBanner = () => {
  const containerClasses = tw({
    display: "flex flex-col lg:flex-row",
    flexbox: "items-stretch center",
    spacing: "gap-0 sm:gap-8 md:gap-8 lg:gap-8",
    background: "bg-bg-primary",
    border: "rounded-xl",
    padding: "p-6 md:p-0",
  });

  const contentContainerClasses = tw({
    display: "flex flex-col",
    sizing: "w-full md:flex-1",
    spacing: "gap-4  lg:gap-8",
    background: "bg-bg-primary",
    border: "rounded-0 sm:rounded-[20px]",
    padding: "pt-6 sm:p-8 md:p-10 lg:p-[60px_70px]",
  });

  return (
    <ContentWrapper className={"h-full align-"}>
      <div className={containerClasses}>
        <ImagePlaceholder
          src={"/images/main-banner.png"}
          className={"h-[300px] w-full lg:h-auto lg:flex-1 overflow-hidden"}
          overlay
        />
        <div className={contentContainerClasses}>
          <Text variant="mainTitle" as="h1">
            Меня увольняют. <br />
            Что делать?
          </Text>
          <Flex vertical className="gap-4 mb-4">
            <Text variant="body" semibold>
              Если вы зашли на этот сайт, то, скорее всего, вас пытаются
              уволить.
            </Text>
            <Text variant="body" semibold>
              Главное –{" "}
              <span className="text-green-600">сохраняйте спокойствие</span> и{" "}
              <span className="text-green-600">следуйте нашим инструкциям</span>
              , чтобы обезопасить себя в будущем
            </Text>
          </Flex>

          <Link className="w-full md:w-auto" href="#scenarios">
            <Button width="100%" variant="reverse">
              <Text color="accent" variant="small">
                Изучить возможные сценарии
              </Text>
            </Button>
          </Link>
        </div>
      </div>
    </ContentWrapper>
  );
};
