import { Flex, ImagePlaceholder, Text } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";

export const ManipulationHeader = () => {
  return (
    <Flex
      className={tw({
        flexbox: "flex-col lg:flex-row",
        spacing: "gap-8 lg:gap-12 xl:gap-[50px]",
      })}
      align="center"
    >
      <ImagePlaceholder
        className={tw({
          width: "w-full lg:w-1/2",
        })}
        height={500}
        src="/images/manipulation-header.png"
        overlay
      />
      <Flex
        flex={1}
        vertical
        gap={32}
        className={tw({
          width: "px-6 w-full lg:w-1/2",
        })}
      >
        <Text variant="title">Не ведитесь на манипуляции и давление</Text>
        <Text>
          Задача компании — прогнуть вас под их условия здесь и сейчас, не дав
          опомниться. Для этого бизнес прибегает к различным уловкам и
          манипуляциям.
        </Text>
      </Flex>
    </Flex>
  );
};
