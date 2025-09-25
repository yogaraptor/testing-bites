import React, { type PropsWithChildren } from "react";
import styles from "./Carousel.module.css";
import { CarouselItem } from "./CarouselItem";

export const CarouselWithJsSnap = ({ children }: PropsWithChildren) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<number | null>(null);

  const snapToNearestItem = React.useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const nearestIndex = Math.round(currentScroll / itemWidth);
    const targetScroll = nearestIndex * itemWidth;

    // Only snap if we're not already at the target position
    if (Math.abs(currentScroll - targetScroll) > 1) {
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to snap after scrolling stops
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (!isScrollingRef.current) {
          snapToNearestItem();
        }
        isScrollingRef.current = false;
      }, 150);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [snapToNearestItem]);

  return (
    <div className={styles.carouselRoot} data-testid="js-carousel">
      <div
        ref={scrollContainerRef}
        className={styles.carouselScrollContainer}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "none", // Disable CSS scroll snap since we're handling it with JS
        }}
        data-testid="carousel-scroll-container"
      >
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index} className={styles.carouselItem}>
            {child}
          </CarouselItem>
        ))}
      </div>
    </div>
  );
};

export default CarouselWithJsSnap;
