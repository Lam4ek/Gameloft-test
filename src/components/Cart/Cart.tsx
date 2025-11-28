import { useCart } from "../../context/CartContext";
import { IoMdClose } from "react-icons/io";
import CartItems from "./CartItems";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ isOpen, onClose }: Props) {
  const { items, total } = useCart();

  return (
    <div
      className={`fixed h-full top-0 right-0 w-80 bg-white shadow-xl transition-transform duration-300 z-50 p-4 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>Shopping Cart</h2>
        <button
          onClick={onClose}
          className='text-gray-600 hover:text-black text-xl'
        >
          <IoMdClose />
        </button>
      </div>

      {items.length === 0 ? (
        <p className='text-gray-500 mt-10 text-center'>Your cart is empty.</p>
      ) : (
        <CartItems />
      )}

      <div className='absolute bottom-0 left-0 w-full p-4 border-t bg-white'>
        <div className='flex justify-between text-lg font-semibold'>
          <span>Total:</span>
          <span>€{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
