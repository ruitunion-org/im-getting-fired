import { ContentWrapper, Flex } from "@/shared";
import { ManipulationHeader } from "./components/ManipulationHeader";
import { ManipulationScenarios } from "./components/ManipulationScenarios";
import { WhatToDo } from "./components/WhatToDo";

export const Manipulations = () => {
  return (
    <ContentWrapper anchor="manipulations">
      <Flex className="flex-col gap-[32px] md:gap-[60px]">
        <ManipulationHeader />
        <ManipulationScenarios />
        <WhatToDo />
      </Flex>
    </ContentWrapper>
  );
};
