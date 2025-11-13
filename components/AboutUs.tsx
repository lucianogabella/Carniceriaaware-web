import React from 'react';
import { StarIcon } from './icons/StarIcon';
import { TruckIcon } from './icons/TruckIcon';
import { StoreIcon } from './icons/StoreIcon';
import { CreditCardIcon } from './icons/CreditCardIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="text-[#70282C] mb-3">{icon}</div>
        <h3 className="font-semibold text-stone-800 mb-1">{title}</h3>
        <p className="text-sm text-stone-600">{description}</p>
    </div>
);


export const AboutUs: React.FC = () => {
  return (
    <section className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-stone-800">Por Qué Elegir Carnicería Aware</h2>
        <p className="mt-2 text-stone-600 max-w-2xl mx-auto">Más que carne, ofrecemos una tradición de calidad y confianza que pasa de generación en generación.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-lg shadow-sm border border-stone-200">
          <FeatureCard 
            icon={<StarIcon className="w-10 h-10" />}
            title="Calidad Superior"
            description="Seleccionamos solo los mejores cortes de novillitos criados a campo."
          />
          <FeatureCard 
            icon={<TruckIcon className="w-10 h-10" />}
            title="Envío Refrigerado"
            description="Tu pedido llega fresco y en perfectas condiciones a tu puerta."
          />
          <FeatureCard 
            icon={<StoreIcon className="w-10 h-10" />}
            title="Retiro en Tienda"
            description="Hacé tu pedido online y retiralo en nuestro local sin esperas."
          />
          <FeatureCard 
            icon={<CreditCardIcon className="w-10 h-10" />}
            title="Pagos Seguros"
            description="Aceptamos todos los medios de pago con la máxima seguridad."
          />
      </div>
    </section>
  );
};
