"use client";

import { useParams } from "next/navigation";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

const dictionaries = { en, ar };

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as "en" | "ar") || "en";
  return dictionaries[locale] || en;
}
