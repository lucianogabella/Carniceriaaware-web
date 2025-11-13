export type ProductCategory = 'Media Res' | 'Vacuno x KG';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  weight: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}
