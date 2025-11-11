const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-accent-green mb-4">ME&E</h3>
            <p className="text-text-secondary text-sm">
              Metallurgy Equipments Engineering<br/>
              Equipos para laboratorios metalúrgicos
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#productos" className="hover:text-accent-green transition">Agitadores</a></li>
              <li><a href="#productos" className="hover:text-accent-green transition">Balanzas</a></li>
              <li><a href="#productos" className="hover:text-accent-green transition">Trituradoras</a></li>
              <li><a href="#productos" className="hover:text-accent-green transition">Tamices</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#servicios" className="hover:text-accent-green transition">Capacitación</a></li>
              <li><a href="#servicios" className="hover:text-accent-green transition">Software</a></li>
              <li><a href="#servicios" className="hover:text-accent-green transition">Optimización</a></li>
              <li><a href="#servicios" className="hover:text-accent-green transition">Balances</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>San Isidro, Lima - Perú</li>
              <li>info@mee-engineering.com</li>
              <li>+51 XXX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2025 ME&E - Metallurgy Equipments Engineering. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer