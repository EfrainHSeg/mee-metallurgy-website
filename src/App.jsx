// src/App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout components
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

// Section components
import Hero from "./components/sections/Hero.jsx";
import Products from "./components/sections/Products.jsx";
import Services from "./components/sections/Services.jsx";
import Brands from "./components/sections/Brands.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";

// Common components
import WhatsAppButton from "./components/common/WhatsAppButton.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

export default function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  // Refresh AOS after mount (si no usas router, con una sola vez basta)
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Brands />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
