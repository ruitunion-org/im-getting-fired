import { ContentWrapper, Flex, Text } from "@/shared";
import { WriteEverythingCard } from "./WriteEverythingCard";

export const WriteEverything = () => {
  return (
    <ContentWrapper
      withoutBackground
      title="Фиксируйте всё"
      anchor="write-everything"
    >
      <Flex vertical className="gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6">
          <WriteEverythingCard
            imageSrc="/images/write-everything-1.png"
            title="Документы"
            description="У вас на руках должны быть все важные документы, связанные с работой: трудовой договор, должностные инструкции, правила внутреннего трудового распорядка и так далее."
            imageClassName="rotate-[5deg] scale-[1.2] relative !top-[0px]"
            whatToDoContent={
              <Text>
                Если этих документов у вас нет, что случается довольно часто,
                воспользуйтесь{" "}
                <a
                  href="https://www.consultant.ru/document/cons_doc_LAW_34683/a302936f3dc61c4dbbf9969d5a5f370e2b846e32/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text as="span" semibold color="accent">
                    статьёй 62 ТК РФ
                  </Text>
                </a>
                . Согласно этой статье, вы имеете право запросить у работодателя
                копии документов, связанных с вашей работой. Работодатель обязан
                предоставить их в течение трёх рабочих дней с момента подачи
                запроса.
              </Text>
            }
          />
          <WriteEverythingCard
            imageSrc="/images/write-everything-2.png"
            title="Переписка по Email"
            description="Электронная переписка является письменным доказательством, и суды её принимают во внимание при рассмотрении дел. Для использования переписки в суде необходимо заверить её у нотариуса."
            imageClassName="rotate-[15deg] scale-110 relative !top-[-10px] md:!top-[-20px]"
            whatToDoContent={
              <>
                <Flex vertical gap={16}>
                  <Text>
                    💼 Подготовьте сообщения, которые нужно заверить. На них
                    должны быть видны email-адреса, а также информация о том,
                    кем и когда были отправлены сообщения.
                  </Text>
                  <Text>✍️ Заверьте сообщения у нотариуса.</Text>
                </Flex>
              </>
            }
          />
          <WriteEverythingCard
            imageSrc="/images/write-everything-3.png"
            title="Переписка в мессенджерах"
            imageClassName="scale-[1.3] relative"
            description={
              <Text>
                Переписка в мессенджерах хоть и напоминает электронную почту, но
                реже рассматривается как доказательство. Это связано с тем, что
                через мессенджеры сложно достоверно установить отправителя и
                получателя.{" "}
                <Text as="span" semibold>
                  Обязанность доказать, что аккаунт действительно принадлежит
                  руководителю, лежит на работнике.
                </Text>
              </Text>
            }
            whatToDoContent={
              <Flex vertical gap={16}>
                <Text>
                  ✉️ Подготовьте сообщения, которые нужно заверить. Из них
                  должно быть ясно, кем, кому и когда они были отправлены.
                </Text>
                <Text>✍️ Заверьте сообщения у нотариуса.</Text>
              </Flex>
            }
          />
          <WriteEverythingCard
            imageSrc="/images/write-everything-4.png"
            title="Скриншоты"
            imageClassName="scale-[1.25] rotate-[10deg] relative"
            description="Скриншоты можно использовать в качестве доказательства. Это могут быть снимки электронной переписки, корпоративного портала, документов и так далее. Скриншоты также нужно заверить у нотариуса."
            whatToDoContent={
              <Flex vertical gap={16}>
                <Text>
                  🖥️ Подготовьте скриншоты, которые нужно заверить. Важно, чтобы
                  на снимках был виден весь экран, включая дату, время, адрес
                  сайта и другую важную информацию.{" "}
                  <Text as="span" semibold>
                    Не обрезайте изображение.
                  </Text>
                </Text>
                <Text>✍️ Заверьте сообщения у нотариуса.</Text>
              </Flex>
            }
          />
        </div>
        <WriteEverythingCard
          imageSrc="/images/write-everything-5.png"
          title="Аудиозапись"
          large
          imageClassName="scale-[1.25] md:scale-100"
          description={
            <Flex vertical gap={16}>
              <Text>
                Вы имеете право вести аудиозапись для защиты своих трудовых прав
                и фиксации их нарушений (Определение Первого КСОЮ от 22.06.2021
                по делу №88-12888/2021, апелляционное определение Сахалинского
                облсуда от 02.05.2023 по делу №33-1098/2023).
              </Text>
              <Text variant="subtitle-3" semibold>
                Однако аудиозапись должна быть сделана правильно
              </Text>
              <Text>
                <Text as="span" semibold color="secondary">
                  [ 1 ]&nbsp;&nbsp;
                </Text>
                Включите диктофон на телефоне
              </Text>
              <Text>
                <Text as="span" semibold color="secondary">
                  [ 2 ]&nbsp;&nbsp;
                </Text>
                Произнесите, когда, кем и в каких условиях осуществляется
                аудиозапись
              </Text>
              <Text>
                <Text as="span" semibold color="secondary">
                  [ 3 ]&nbsp;&nbsp;
                </Text>
                Продолжайте запись разговора так долго, сколько это требуется.
                Согласие руководства, HR и работодателя не требуется.
              </Text>
            </Flex>
          }
        />
      </Flex>
    </ContentWrapper>
  );
};
