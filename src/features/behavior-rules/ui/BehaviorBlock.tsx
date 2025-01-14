import { Flex, Text, tw } from "@/shared";

export interface BehaviorItem {
  title: string;
  example: string;
}

interface BehaviorBlockProps {
  title?: string;
  items?: BehaviorItem[];
  isAllowed?: boolean;
}

export function BehaviorBlock({
  title,
  items = [],
  isAllowed = true,
}: BehaviorBlockProps) {
  const rootStyles = tw({
    width: "w-full",
    group: "group/root",
  });

  const itemStyles = tw({
    cursor: "cursor-default",
    padding: "p-4 pt-3 md:p-8 md:pt-5",
    background: "bg-bg-primary",
    border: "rounded-xl",
    transition: "transition-all duration-300 ease-in-out",
    group:
      "group/item group-hover/root:opacity-50 group-hover/root:!opacity-100",
  });

  const titleStyles = tw({
    spacing: "mb-2",
  });

  const exampleStyles = tw({
    transition: "transition-colors duration-300 ease-in-out",
    effects: isAllowed
      ? "group-hover/item:text-green-600 group-hover/item:border-green-600 group-hover/item:bg-green-50"
      : "group-hover/item:text-red-600 group-hover/item:border-red-600 group-hover/item:bg-red-50",
  });

  return (
    <Flex className="px-4 sm:px-0" vertical gap={32}>
      <Text className="px-4 sm:px-0" variant="subtitle-2">
        {title}
      </Text>
      <Flex vertical gap={16} className={rootStyles}>
        {items.map((item, index) => (
          <Flex gap={10} vertical className={itemStyles} key={index}>
            <Text className={titleStyles}>{item.title}</Text>
            <Text className={exampleStyles} variant="caption">
              {item.example}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
