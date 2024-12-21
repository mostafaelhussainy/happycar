"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the header
        setIsVisible(false);
      } else {
        // If scrolling up, show the header
        setIsVisible(true);
      }
      // Remember the current page location for the next scroll event
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Workshop" className="w-20" />
            <span className="text-xl font-bold">Happy Car</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                {/* Fixed the section ID */}
                <Link
                  href="#hero"
                  scroll={false} // Disabling default scroll behavior of Link
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  scroll={false}
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  scroll={false}
                  onClick={() => scrollToSection("location")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
