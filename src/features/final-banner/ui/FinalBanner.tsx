import { Button, ContentWrapper, Flex, ImagePlaceholder, Text } from "@/shared";
import Logo from "./logo.svg";
import Image from "next/image";
import { tw } from "@/shared/lib/formatTailwindClasses";

export const FinalBanner = () => {
  return (
    <ContentWrapper>
      <Flex
        className={tw({
          flexbox: "flex-col-reverse xl:flex-row xl:items-stretch",
          spacing: "gap-6 xl:gap-[50px]",
        })}
      >
        <Flex
          vertical
          className={tw({
            flexbox: "flex-1",
            spacing: "gap-6 xl:gap-10",
            padding: "px-6 py-0 xl:px-0 xl:py-4",
          })}
        >
          <Text variant="title">Как обезопасить себя в будущем?</Text>

          <Flex
            vertical
            className={tw({
              spacing: "gap-6 xl:gap-8",
            })}
          >
            <Text>
              Внезапное увольнение, инициированное работодателем — это стадия,
              когда работникам остаётся только защищаться. Как говорится,
              готовьте сани летом.
            </Text>
            <Text>
              ✊ Самое эффективный способ защиты своих трудовых прав —
              <a
                href="https://ruitunion.org/posts/2024-05-31-how-to-build-union/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text as="span" semibold color="accent">
                  {" "}
                  объединиться с коллегами{" "}
                </Text>
              </a>
              заранее, до трудового конфликта.
            </Text>
            <Text>
              💫 Помните: знание своих прав и спокойное, но твёрдое их
              отстаивание — ключ к успеху.
            </Text>
            <Text>
              ✅{" "}
              <Text as="span" semibold>
                Вы справитесь!
              </Text>{" "}
              Главное — действовать последовательно и не бояться обращаться за
              помощью к юристам или в профсоюз, если ситуация зашла в тупик.
            </Text>
          </Flex>

          <Flex
            align="center"
            vertical
            className={tw({
              flexbox: "flex-1",
              spacing: "gap-4",
            })}
          >
            <a
              className="w-full"
              href="https://t.me/itunion_feedback_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button width="100%" size="md">
                <Image src={Logo} alt="logo" />
                Профсоюз IT
              </Button>
            </a>
            <Text variant="small" color="secondary">
              Объединяйтесь!
            </Text>
          </Flex>
        </Flex>

        <Flex className="flex-1  items-stretch">
          <ImagePlaceholder
            className="overflow-hidden xl:overflow-visible"
            src="/images/final-banner.png"
            imageClassName="xl:!left-10 xl:overflow-visible xl:scale-[1.08]"
          />
        </Flex>
      </Flex>
    </ContentWrapper>
  );
};
