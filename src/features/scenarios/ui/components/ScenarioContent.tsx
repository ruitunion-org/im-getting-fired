import { Flex, Text } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: ReactNode;
};

export function ScenarioContent({ title, description }: Props) {
  return (
    <Flex
      flex={1}
      gap={16}
      vertical
      className={tw({
        display: "order-2 lg:order-1",
      })}
    >
      <Text variant="subtitle">{title}</Text>
      <Text variant="subtitle">{description}</Text>
    </Flex>
  );
}
