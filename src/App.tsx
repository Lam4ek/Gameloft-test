import { useState } from "react";
import ProductsGrid from "./components/Carousel";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";

export default function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <header className='flex justify-between items-center mb-10'>
        <h1 className='text-3xl font-bold'>Products</h1>
        <CartButton onClick={() => setOpenCart(true)} />
      </header>
      <ProductsGrid />
      <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
    </div>
  );
}
