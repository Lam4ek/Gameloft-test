import { useState } from "react";
import ProductsCarousel from "./components/Carousel";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";
import type { Product } from "./data/products";
import ProductModal from "./components/ProductModal";

export default function App() {
  const [openCart, setOpenCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <header className='flex justify-between items-center mb-10'>
        <h1 className='text-3xl font-bold'>Products</h1>
        <CartButton onClick={() => setOpenCart(true)} />
      </header>
      <ProductsCarousel onSelectProduct={setSelectedProduct} />
      <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
