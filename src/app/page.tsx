import {
  MainBanner,
  AdditionalInfo,
  BehaviorRules,
  FinalBanner,
  Header,
  Manipulations,
  Scenarios,
  WriteEverything,
} from "@/features";
import { tw } from "@/shared/lib/formatTailwindClasses";

const headerItems = [
  { label: "Сценарии", href: "scenarios" },
  { label: "Правила поведения", href: "behavior-rules" },
  { label: "Манипуляции", href: "manipulations" },
  { label: "Фиксируйте всё", href: "write-everything" },
  { label: "Дополнительно", href: "additional-info" },
];

const containerClasses = tw({
  display: "flex flex-col",
  sizing: "min-h-screen",
  flexbox: "items-center",
  spacing:
    "px-0 sm:px-8 xl:px-[90px] pb-5 sm:pb-8 md:pb-10",
});

const mainClasses = tw({
  sizing: "w-full max-w-[1200px]",
  display: "flex flex-col",
  spacing: "gap-[40px] sm:gap-[60px] md:gap-[70px]",
});

export default function Home() {
  return (
    <div className={containerClasses}>
      <Header items={headerItems} />
      <main className={mainClasses}>
        <MainBanner />
        <Scenarios />
        <BehaviorRules />
        <Manipulations />
        <WriteEverything />
        <AdditionalInfo />
        <FinalBanner />
      </main>
    </div>
  );
}
