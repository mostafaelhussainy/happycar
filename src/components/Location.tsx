"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function Location() {
  const t = useTranslations();

  return (
    <section id="location" className="py-16 bg-blue-900 opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          {t.location.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7040911750155!2d46.6887193!3d24.7136111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0x98f57db590140964!2sHappy%20Car%20Company!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300 ease-in-out transform hover:scale-105"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-lg text-white mb-6">{t.location.description}</p>
            <a
              href="https://maps.app.goo.gl/6ozhMQKiScb8zqzp7?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
