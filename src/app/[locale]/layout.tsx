import { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Happy Car Company",
  description: "Expert car maintenance services",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}
