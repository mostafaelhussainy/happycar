"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Happy Car Company</h2>
        <p className="mb-2">Location: {t.location.description}</p>
        <p>
          {t.footer.rights} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
