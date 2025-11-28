import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type Props = {
  product: Product;
  onClick?: (product: Product) => void;
};

export default function ProductCard({ product, onClick }: Props) {
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => onClick?.(product)}
      className='cursor-pointer bg-white rounded-xl h-full shadow-sm p-4 flex flex-col transition hover:shadow-md'
    >
      <img
        src={product.image}
        alt={product.title}
        className='rounded-lg object-cover w-full h-48 mb-4'
      />

      <h3 className='text-lg font-semibold'>{product.title}</h3>
      <p className='text-sm text-gray-600 mt-1 flex-1'>{product.description}</p>

      <div className='mt-4 flex items-center justify-between'>
        <span className='font-bold text-xl'>€{product.price}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
