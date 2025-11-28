import { IoMdClose } from "react-icons/io";
import { useCart } from "../../context/CartContext";

function CartItems() {
  const { items, increase, decrease, removeFromCart } = useCart();
  return (
    <div className='space-y-4 overflow-y-auto pr-2'>
      {items.map((item) => (
        <div key={item.product.id} className='border-b pb-3'>
          <div className='flex justify-between'>
            <span className='font-medium'>{item.product.title}</span>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className='text-gray-400 hover:text-black'
            >
              <IoMdClose />
            </button>
          </div>

          <div className='flex justify-between items-center mt-2'>
            <div className='flex items-center gap-2'>
              <button
                onClick={() => decrease(item.product.id)}
                className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increase(item.product.id)}
                className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
              >
                +
              </button>
            </div>

            <div className='text-right'>
              {item.quantity > 5 ? (
                <>
                  <div className='text-red-500 font-semibold'>
                    €{(item.product.price * item.quantity * 0.9).toFixed(2)}
                  </div>
                  <div className='text-xs text-gray-500 line-through'>
                    €{(item.product.price * item.quantity).toFixed(2)}
                  </div>
                  <div className='text-green-600 text-xs'>
                    10% discount applied
                  </div>
                </>
              ) : (
                <div className='font-semibold'>
                  €{(item.product.price * item.quantity).toFixed(2)}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
