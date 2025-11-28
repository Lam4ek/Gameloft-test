import { useCallback, useMemo } from "react";
import type { RefObject } from "react";

export function useCarouselNavigation(
  containerRef: RefObject<HTMLDivElement | null>,
  slidesPerView: number,
  itemsCount: number,
  currentPage: number,
  setCurrentPage: (page: number) => void
) {
  const totalPages = useMemo(
    () => Math.ceil(itemsCount / slidesPerView),
    [itemsCount, slidesPerView]
  );

  const scrollToPage = useCallback(
    (page: number) => {
      const container = containerRef.current;
      if (!container) return;

      const cardWidth = container.clientWidth / slidesPerView;
      const scrollLeft = page * cardWidth * slidesPerView;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      setCurrentPage(page);
    },
    [containerRef, slidesPerView, setCurrentPage]
  );

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) scrollToPage(currentPage + 1);
  }, [currentPage, totalPages, scrollToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) scrollToPage(currentPage - 1);
  }, [currentPage, scrollToPage]);

  return { totalPages, scrollToPage, nextPage, prevPage };
}
