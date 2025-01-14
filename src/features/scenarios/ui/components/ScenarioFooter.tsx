"use client";

import { Flex, Text } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";
import { ReactNode } from "react";
import { FooterCardProps, MobileFooterCard } from "./MobileFooterCard";

type Props = {
  agreementContent?: ReactNode;
  actionContent?: ReactNode;
};

export function ScenarioFooter({ agreementContent, actionContent }: Props) {
  return (
    <Flex
      className={tw({
        flexbox: "flex-col lg:flex-row",
        spacing: "gap-4 lg:gap-[50px] mt-4",
      })}
    >
      {agreementContent && (
        <FooterCard title="Что будет, если соглашусь?" variant="orange">
          {agreementContent}
        </FooterCard>
      )}

      {actionContent && (
        <FooterCard title="Что делать?" variant="blue">
          {actionContent}
        </FooterCard>
      )}
    </Flex>
  );
}

function FooterCard({ title, children, variant }: FooterCardProps) {
  const desktopVariant = (
    <div className="flex-col gap-4 hidden lg:flex lg:flex-1">
      <Text variant="subtitle-3" semibold>
        {title}
      </Text>
      <Flex vertical gap={16}>
        {children}
      </Flex>
    </div>
  );

  return (
    <>
      {desktopVariant}
      <MobileFooterCard variant={variant} title={title}>
        <Flex vertical gap={16}>
          {children}
        </Flex>
      </MobileFooterCard>
    </>
  );
}
