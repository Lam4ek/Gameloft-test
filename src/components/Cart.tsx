import { useCart } from "../context/CartContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ isOpen, onClose }: Props) {
  const { items, increase, decrease, removeFromCart, total } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 z-50 p-4 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>Shopping Cart</h2>
        <button
          onClick={onClose}
          className='text-gray-600 hover:text-black text-xl'
        >
          ✕
        </button>
      </div>

      {items.length === 0 ? (
        <p className='text-gray-500 mt-10 text-center'>Your cart is empty.</p>
      ) : (
        <div className='space-y-4 max-h-[70vh] overflow-y-auto pr-2'>
          {items.map((item) => (
            <div key={item.product.id} className='border-b pb-3'>
              <div className='flex justify-between'>
                <span className='font-medium'>{item.product.title}</span>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className='text-gray-400 hover:text-black'
                >
                  X
                </button>
              </div>

              <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => decrease(item.product.id)}
                    className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
                  >
                    –
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
