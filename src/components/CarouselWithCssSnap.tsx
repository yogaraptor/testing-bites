import React, { type PropsWithChildren } from "react";
import styles from "./Carousel.module.css";
import { CarouselItem } from "./CarouselItem";

export const CarouselWithCssSnap = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.carouselRoot} data-testid="css-carousel">
      <div
        className={styles.carouselScrollContainer}
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

export default CarouselWithCssSnap;
