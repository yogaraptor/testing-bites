import React, { type PropsWithChildren } from "react";
import styles from "./Carousel.module.css";

const CarouselItem = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`${styles.carouselItem} ${className}`}>{children}</div>
);

export const CssOnlyCarousel = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.carouselRoot} data-testid="css-carousel">
      <div
        className={styles.carouselScrollContainerCssOnly}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

export const CssWithJsCarousel = ({ children }: PropsWithChildren) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselRoot} data-testid="js-carousel">
      <button
        className={styles.carouselButtonLeft}
        onClick={() => handleScroll("left")}
      >
        ⬅
      </button>
      <button
        className={styles.carouselButtonRight}
        onClick={() => handleScroll("right")}
      >
        ➡
      </button>
      <div
        ref={scrollContainerRef}
        className={styles.carouselScrollContainer}
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
