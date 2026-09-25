import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Benefits from "@/components/benefits/Benefits";
import HowItWorks from "@/components/howitworks/HowItWorks";
import Showcase from "@/components/showcase/Showcase";
import Testimonial from "@/components/testimonial/Testimonial";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <HowItWorks />
        <Showcase />
        <Testimonial />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
