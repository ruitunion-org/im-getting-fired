import { ContentWrapper, Flex, tw } from "@/shared";
import { BehaviorBlock } from "./BehaviorBlock";

import { allowedTexts } from "./allow";
import { forbiddenTexts } from "./forbidden";

export const BehaviorRules = () => {
  const containerStyles = tw({
    flexbox: "flex-col lg:flex-row",
    spacing: "gap-10 lg:gap-[70px]",
  });

  const blockStyles = tw({
    flexbox: "flex-1",
    sizing: "w-full",
  });

  return (
    <ContentWrapper
      title="Ведите себя корректно"
      withoutBackground
      anchor="behavior-rules"
    >
      <Flex className={containerStyles}>
        <Flex className={blockStyles}>
          <BehaviorBlock isAllowed title="✅ Можно" items={allowedTexts} />
        </Flex>
        <Flex className={blockStyles}>
          <BehaviorBlock
            isAllowed={false}
            title="⛔️ Не стоит"
            items={forbiddenTexts}
          />
        </Flex>
      </Flex>
    </ContentWrapper>
  );
};
