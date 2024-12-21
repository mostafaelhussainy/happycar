import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}
