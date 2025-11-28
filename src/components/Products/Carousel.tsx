import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { products, type Product } from "../../data/products";
import { useCarouselNavigation } from "../../hooks/useCarouselNavigation";

export default function Carousel({
  onSelectProduct,
}: {
  onSelectProduct?: (product: Product) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeout: number | null = null;

    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const cardWidth = container.clientWidth / slidesPerView;

        const page = Math.round(
          container.scrollLeft / (cardWidth * slidesPerView)
        );

        setCurrentPage(page);
      }, 120);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [slidesPerView, currentPage]);

  const { totalPages, scrollToPage, nextPage, prevPage } =
    useCarouselNavigation(
      containerRef,
      slidesPerView,
      products.length,
      currentPage,
      setCurrentPage
    );

  return (
    <div className='w-full select-none'>
      <div
        ref={containerRef}
        className='
          flex overflow-x-auto scroll-smooth snap-x snap-mandatory 
          scrollbar-hide
        '
      >
        {products.map((product) => (
          <div
            key={product.id}
            className='snap-start p-3 max-h-[70vh]'
            style={{
              width: `${100 / slidesPerView}%`,
              flexShrink: 0,
            }}
          >
            <ProductCard product={product} onClick={onSelectProduct} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <>
          <div className='flex justify-center mt-4 gap-2'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`
              w-3 h-3 rounded-full transition
              ${currentPage === index ? "bg-blue-600" : "bg-gray-300"}
            `}
              />
            ))}
          </div>
          <div className='flex justify-center mt-3 gap-4'>
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40'
            >
              Prev
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40'
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
