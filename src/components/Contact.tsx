"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-16 bg-blue-900 opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          {t.nav.contact}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <a
            href="https://wa.me/966535343673"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-green-600 font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-green-100"
          >
            <span>{t.contact.whatsapp}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
