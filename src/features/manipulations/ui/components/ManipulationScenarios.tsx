import { Flex, ImagePlaceholder, Text } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";

export const ManipulationScenarios = () => {
  return (
    <Flex vertical gap={32} className="px-0">
      <Text className="px-4 sm:px-2 md:px-0" variant="subtitle-2">
        Чаще всего происходит следующее
      </Text>
      <Flex vertical gap={32}>
        <Flex
          className={tw({
            flexbox: "flex-col md:flex-row",
            spacing: "gap-6 md:gap-12 lg:gap-[50px]",
          })}
        >
          <Flex
            flex={1}
            vertical
            gap={4}
            className={tw({
              width: "w-full md:w-1/2",
            })}
          >
            <ImagePlaceholder
              overlay
              height={500}
              className="overflow-hidden"
              src="/images/manipulation-1.png"
            />
            <Text className="py-4 px-4">
              Вам назначают встречу «один на один»
            </Text>
          </Flex>
          <Flex
            flex={1}
            vertical
            gap={4}
            className={tw({
              width: "w-full md:w-1/2",
            })}
          >
            <ImagePlaceholder
              overlay
              height={500}
              className="overflow-hidden"
              src="/images/manipulation-2.png"
            />
            <Text className="py-4 px-4">
              Придя туда, вы обнаруживаете, что встреча, конечно же, не один на
              один. Против вас будут HR и ещё несколько руководителей.
            </Text>
          </Flex>
        </Flex>

        <ManipulationArguments />
      </Flex>
    </Flex>
  );
};

const ManipulationArguments = () => {
  return (
    <Flex vertical>
      <ImagePlaceholder
        className="overflow-hidden"
        height={500}
        src="/images/manipulation-3.png"
      />
      <Flex vertical gap={24} className="py-4 px-4">
        <Text>
          Вся эта толпа начинает морально давить на вас, озвучивая примерно
          следующие аргументы:
        </Text>
        <div
          className={tw({
            grid: "grid grid-cols-1 md:grid-cols-2",
            spacing: "gap-2 md:gap-6",
          })}
        >
          <Text variant="caption">
            Решение принято, мы здесь, чтобы договориться об условиях.
          </Text>
          <Text variant="caption">
            Мы тебя уволим по статье с записью в трудовой.
          </Text>
          <Text variant="caption">
            Других вариантов нет. Нужно подписать сейчас.
          </Text>
          <Text variant="caption">
            Ты попадёшь в чёрные списки и никуда больше не устроишься.
          </Text>
          <Text variant="caption">У компании нет средств на оплату труда.</Text>
          <Text variant="caption">
            Мы выплатим тебе как по сокращению, но нужно уволиться именно «по
            собственному».
          </Text>
        </div>
      </Flex>
    </Flex>
  );
};
