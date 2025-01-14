import { Flex, Text } from "@/shared";
import { tw } from "@/shared/lib/formatTailwindClasses";
import Link from "next/link";

export const WhatToDo = () => {
  return (
    <div
      className={tw({
        border: "border-2 border-orange-500 rounded-lg",
        background: "bg-orange-50/30",
        padding: "mx-4 px-6 pt-6 pb-6 md:pt-8 md:pb-10 md:px-10",
      })}
    >
      <Flex vertical gap={24}>
        <Text variant="subtitle-3" semibold>
          👨‍💼 Что делать?
        </Text>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <Text>❌</Text>
            <Text>Не подписывайте ничего</Text>
          </li>
          <li className="flex gap-2">
            <Text>⏳</Text>
            <Text>
              «Прикидывайтесь шлангом» и повторяйте эти слова, пока встреча не
              закончится: «Мне нужно 3 дня, чтобы посоветоваться и всё
              обдумать»
            </Text>
          </li>
          <li className="flex gap-2">
            <Text>✍️</Text>
            <Link href="#write-everything">
              <Text color="accent">Фиксируйте всё</Text>
            </Link>
          </li>
        </ul>
      </Flex>
    </div>
  );
};
