import { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Happy Car Company",
  description: "Expert car maintenance services",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}
