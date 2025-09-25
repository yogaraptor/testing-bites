import type { PropsWithChildren } from "react";
import styles from "./Carousel.module.css";

export const CarouselItem = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`${styles.carouselItem} ${className}`}>{children}</div>
);
