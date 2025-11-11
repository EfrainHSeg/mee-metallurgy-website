import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Marcas", href: "#marcas" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Barra metálica superior */}
      <motion.div
        style={{ scaleX: progress }}
        className="origin-left h-[3px] bg-linear-to-r from-[#888] via-[#ccc] to-[#666]"
      />

      {/* Fondo negro sólido */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "bg-black shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "bg-black"
        }`}
      >
        {/* Contenedor principal */}
        <div
          className={`relative flex items-center justify-between px-[7%] lg:px-[10%] py-8 transition-all duration-300 ${
            isScrolled ? "py-6" : "py-8"
          }`}
        >
          {/* LOGO — texto con efecto metálico */}
          <a
            href="#inicio"
            className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-[#b5b5b5] via-[#ffffff] to-[#8c8c8c] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:from-[#ffffff] hover:to-[#b5b5b5] transition-all duration-300"
          >
            ME&E
          </a>

          {/* Menú Desktop centrado */}
          <div className="hidden md:flex items-center gap-20 text-[18px] font-bold absolute left-[58%] -translate-x-1/2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-[#e60023] transition
                           after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#e60023]
                           after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-3xl"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-start gap-4 px-8 pb-6 bg-black border-t border-gray-700"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white text-lg font-semibold hover:text-[#e60023] transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
