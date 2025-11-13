import { Product, ProductCategory } from './types';

export const CATEGORIES = ['Media Res', 'Vacuno x KG', 'Todos'];

export const CATEGORY_INFO: Record<ProductCategory, { name: string; description: string }> = {
  'Media Res': {
      name: 'Media Res',
      description: 'La opción ideal para familias y mayoristas. Carne de novillito de primera calidad para stockear tu freezer con los mejores cortes.'
  },
  'Vacuno x KG': {
      name: 'Vacuno por Kilo',
      description: 'Ternera y novillito chico de producción propia criado a campo con terminación en corral. Encontrá tus cortes favoritos para la parrilla o la cocina diaria.'
  }
};

const STATIC_MEAT_IMAGE_URL = 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=400&h=300&fit=crop';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Media Res Familiar',
    category: 'Media Res',
    description: 'Ideal para grandes reuniones o para stockear el freezer. Carne de novillito de primera calidad.',
    price: 350000,
    weight: 'aprox: 100 kg/s.',
    imageUrl: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=400&h=300&fit=crop',
  },
  { id: 2, name: '5 Costillas', price: 15500, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 3, name: 'Arañita', price: 12600, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 4, name: 'Asado', price: 13600, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 5, name: 'Asado Banderita', price: 14200, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 6, name: 'Azotillo', price: 7000, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 7, name: 'Bife Ancho', price: 15900, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 8, name: 'Bife Angosto', price: 15100, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 9, name: 'Bola de Lomo', price: 11200, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 10, name: 'Ceja', price: 11800, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 11, name: 'Chingolo', price: 8100, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 12, name: 'Colita de Cuadril', price: 16400, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 13, name: 'Cuadrada', price: 11200, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 14, name: 'Cuadril', price: 11200, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 15, name: 'Entraña', price: 19900, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 16, name: 'Falda con Hueso', price: 12000, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 17, name: 'Falda sin Hueso', price: 13700, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 18, name: 'Garrón', price: 6600, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 19, name: 'Hookipa', price: 15600, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 20, name: 'Lomo', price: 17200, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 21, name: 'Marucha', price: 13200, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 22, name: 'Matambre', price: 15900, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 23, name: 'Punta de Asado', price: 8100, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 24, name: 'Nalga', price: 13000, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 25, name: 'Osobuco', price: 6600, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 26, name: 'Paleta', price: 9800, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 27, name: 'Peceto', price: 13000, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 28, name: 'Picanha', price: 13000, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 29, name: 'Tapa de Asado', price: 11800, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 30, name: 'Tapa de Nalga', price: 10000, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 31, name: 'Tortuguita', price: 6500, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 32, name: 'Vacio', price: 15900, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 33, name: 'Roast Beef', price: 9800, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
  { id: 34, name: 'Recortes', price: 6600, category: 'Vacuno x KG', description: 'Corte fresco de novillito de primera calidad, perfecto para tus preparaciones diarias.', weight: 'aprox: 1 kg/s.', imageUrl: STATIC_MEAT_IMAGE_URL },
];
