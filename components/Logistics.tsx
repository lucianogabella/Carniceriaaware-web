import React from 'react';

export const Logistics: React.FC = () => {
  return (
    <section className="my-16">
      <div className="bg-stone-900 text-stone-300 rounded-lg shadow-lg overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white">Logística y Distribución</h2>
              <p className="mt-4 text-stone-400 leading-relaxed">
                Estamos ubicados en Santa Fe donde tenemos el proveedor directo del frigorifico a venta al público y nuestro centro de producción de pedidos. Contamos con camionetas refrigeradas con las que hacemos entregas semanalmente en las zonas de CABA y Zona Norte. Toda la carne que vendemos es fresca y la mayoría de los cortes se entregan en bolsas etiquetadas o envasados al vacío, lo que estabiliza el sabor y frescura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};