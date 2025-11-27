import { useState } from "react";
import ProductsGrid from "./components/Carousel";
import Cart from "./components/Cart";

export default function App() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <header className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Products</h1>
        <button
          onClick={() => setOpenCart(true)}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        >
          Cart
        </button>
      </header>
      <ProductsGrid />
      <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
    </div>
  );
}
