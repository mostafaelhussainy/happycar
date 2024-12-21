"use client";

import { useTranslations } from "@/hooks/useTranslations";
import { useState, useEffect } from "react";

const images = [
  "/workshop1.jpg",
  "/workshop2.jpg",
  "/workshop3.jpg",
  "/workshop4.jpg",
  "/workshop5.jpg",
];

export default function Hero() {
  const t = useTranslations();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-50" />
          <img
            src={src}
            alt="Workshop"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">{t.hero.title}</h1>
        <p className="text-2xl mb-8">{t.hero.tagline}</p>
      </div>
    </section>
  );
}
