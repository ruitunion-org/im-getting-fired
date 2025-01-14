"use client";

import { FC, ReactNode, useState } from "react";
import { Text } from "@/shared/ui/text/Text";
import { Flex, ImagePlaceholder, Button, Modal } from "@/shared";
import clsx from "clsx";

interface WriteEverythingCardProps {
  imageSrc: string;
  title: string;
  description: ReactNode;
  whatToDoContent?: ReactNode;
  large?: boolean;
  imageClassName?: string;
}

export const WriteEverythingCard: FC<WriteEverythingCardProps> = ({
  title,
  description,
  whatToDoContent,
  large,
  imageSrc,
  imageClassName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Flex
        className={clsx(
          "flex-col p-0 md:p-6 bg-white rounded-2xl gap-4 md:gap-6",
          large && "py-0 gap-12 flex-col lg:flex-row"
        )}
      >
        <ImagePlaceholder
          src={imageSrc}
          className={clsx(
            "rounded-lg mx-4 mt-4 !h-[150px] md:!h-[300px] !w-auto",
            large && "!h-[150px] lg:!w-1/2 lg:!h-auto"
          )}
          imageClassName={clsx("!object-contain", imageClassName)}
        />

        <Flex
          className={clsx("px-4 pb-4", large && "lg:py-6")}
          flex={1}
          vertical
          gap={24}
        >
          <Flex vertical gap={10}>
            <Text variant="subtitle-2">{title}</Text>
            <Text className="md:block hidden">{description}</Text>
          </Flex>

          {whatToDoContent && (
            <>
              <div className="hidden lg:flex flex-col gap-4">
                <Text semibold variant="subtitle-3">
                  Что делать?
                </Text>
                <Text>{whatToDoContent}</Text>
              </div>
            </>
          )}
          <Button
            onClick={() => setIsModalOpen(true)}
            className={clsx("lg:hidden", large && "md:hidden")}
            variant="reverse"
            size="sm"
          >
            Что делать?
          </Button>
        </Flex>
      </Flex>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="p-6 rounded-t-2xl"
        title={title}
      >
        <Flex vertical gap={24}>
          <Text>{description}</Text>

          {whatToDoContent && (
            <Flex vertical gap={16}>
              <Text semibold variant="subtitle-3">
                Что делать?
              </Text>
              <Text>{whatToDoContent}</Text>
            </Flex>
          )}
        </Flex>
      </Modal>
    </>
  );
};
