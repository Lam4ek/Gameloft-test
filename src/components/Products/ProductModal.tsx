import { useCart } from "../../context/CartContext";
import type { Product } from "../../data/products";
import { IoMdClose } from "react-icons/io";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addToCart } = useCart();

  return (
    <div
      className='fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-2xl p-6 w-[90%] max-w-lg shadow-xl relative'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-3 right-3 text-gray-400 hover:text-black'
          onClick={onClose}
        >
          <IoMdClose />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className='w-full h-56 object-cover rounded-xl'
        />

        <h2 className='text-2xl font-bold mt-4'>{product.title}</h2>
        <p className='text-gray-600 mt-2'>{product.description}</p>

        <div className='flex justify-between items-center mt-4'>
          <div className='text-xl font-bold'>${product.price}</div>

          <button
            onClick={() => {
              addToCart(product);
              onClose();
            }}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
