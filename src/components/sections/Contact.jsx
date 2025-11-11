export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
      <p className="text-gray-600 mb-6">¿Tienes dudas o necesitas una cotización? Escríbenos.</p>
      <a
        href="mailto:info@mee-engineering.com"
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar correo
      </a>
    </section>
  );
}
