export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
      <p className="text-gray-600 mb-8">
        Brindamos soporte técnico, mantenimiento y capacitación para laboratorios metalúrgicos.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Instalación</h3>
          <p className="text-gray-500 text-sm">Montaje profesional de equipos metalúrgicos.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Mantenimiento</h3>
          <p className="text-gray-500 text-sm">Revisión y calibración certificada.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-2">Capacitación</h3>
          <p className="text-gray-500 text-sm">Entrenamiento para el uso y cuidado de equipos.</p>
        </div>
      </div>
    </section>
  );
}
