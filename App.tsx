import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductDisplay } from './components/ProductDisplay';
import { ShoppingCart } from './components/ShoppingCart';
import { DeliveryInfo } from './components/DeliveryInfo';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { FaqAccordion } from './components/FaqAccordion';
import { Product, CartItem } from './types';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { Logistics } from './components/Logistics';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-stone-50 min-h-screen font-sans">
      <Header cartItemCount={cartItemCount} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <ProductDisplay onAddToCart={handleAddToCart} />
          </div>
          <div className="space-y-6 sticky top-24">
            <DeliveryInfo />
            <ShoppingCart 
              items={cartItems} 
              onUpdateQuantity={handleUpdateQuantity} 
              onRemoveItem={handleRemoveItem} 
            />
          </div>
        </div>
        <Logistics />
        <AboutUs />
        <FaqAccordion />
      </main>
      <Footer />
       <a
        href="https://wa.me/5491126540847"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;