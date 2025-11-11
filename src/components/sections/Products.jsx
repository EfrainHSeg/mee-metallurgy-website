export default function Products() {
  return (
    <section id="products" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Nuestros Productos</h2>
      <p className="text-gray-600 mb-8">
        Ofrecemos una amplia gama de equipos metalúrgicos para diferentes etapas del proceso minero.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Trituradoras</h3>
          <p className="text-gray-500 text-sm">Alta durabilidad y precisión en el muestreo.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Balanzas</h3>
          <p className="text-gray-500 text-sm">Pesaje de alta exactitud para laboratorios.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Tamices</h3>
          <p className="text-gray-500 text-sm">Clasificación de materiales con máxima eficiencia.</p>
        </div>
      </div>
    </section>
  );
}
