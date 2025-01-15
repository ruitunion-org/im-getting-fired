import type { Metadata } from "next";
import { Geologica } from "next/font/google";

import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const geologica = Geologica({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Меня увольняют?!",
  description:
    "Если вы зашли на этот сайт, то, скорее всего, вас пытаются уволить. Главное – сохраняйте спокойствие и следуйте нашим инструкциям, чтобы обезопасить себя в будущем.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          defer
          data-domain="layoffs.ruitunion.org"
          src="https://plausible.ruitunion.org/js/plausible.js"
        ></script>
      </head>
      <body className={`${geologica.className}  antialiased`}>{children}</body>
    </html>
  );
}
