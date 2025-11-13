import React from 'react';
import { LocationIcon } from './icons/LocationIcon';

export const DeliveryInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 border border-stone-200 shadow-sm">
      <div className="flex items-center">
        <div className="bg-stone-100 p-3 rounded-full mr-4">
          <LocationIcon className="w-6 h-6 text-[#70282C]" />
        </div>
        <div>
          <h4 className="font-semibold">Envíos a Domicilio</h4>
          <p className="text-sm text-stone-600">¡Hacemos envíos! Cubrimos desde Santa Fe hasta Zona Norte y C.A.B.A.</p>
        </div>
      </div>
      <div className="mt-4">
        <select className="w-full p-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#70282C] focus:outline-none">
          <option>Delivery</option>
          <option>Retiro en tienda</option>
        </select>
      </div>
    </div>
  );
};
