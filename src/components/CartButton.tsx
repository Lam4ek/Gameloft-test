import { useCart } from "../context/CartContext";

export default function CartButton({ onClick }: { onClick: () => void }) {
  const { totalQuantity } = useCart();

  return (
    <div className='relative inline-block' onClick={onClick}>
      <button className='px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition'>
        Cart
      </button>

      {totalQuantity > 0 && (
        <div
          className='
          absolute 
          -bottom-2 
          -left-2

          w-6 h-6 
          rounded-full 
          bg-red-500 
          text-white 
          text-xs 
          font-bold 
          flex items-center justify-center
          shadow-[0_0_0_3px_white]
          '
        >
          {totalQuantity}
        </div>
      )}
    </div>
  );
}
