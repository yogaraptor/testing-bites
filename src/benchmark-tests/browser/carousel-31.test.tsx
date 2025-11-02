import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "56") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - variant 56", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor56")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl56")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops56")).toBeInTheDocument();
});

test("first slide is initially visible - variant 56", async () => {
  renderCarousel();
  await expect.element(page.getByText("Yogaraptor56")).toBeInViewport();
});

test("carousel container exists - variant 56", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();
});

test("scroll area responds to scroll events - variant 56", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  const initialScrollLeft = scrollArea.scrollLeft;
  scrollArea.scrollBy(100, 0);
  
  // Small delay to allow scroll to process
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(scrollArea.scrollLeft).toBeGreaterThan(initialScrollLeft);
});

test("carousel contains three slides - variant 56", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - variant 56", async () => {
  const { getByText } = renderCarousel();
  expect(getByText("Yogaraptor56").element().textContent).toBe("Yogaraptor56");
  expect(getByText("Chillodactyl56").element().textContent).toBe("Chillodactyl56");
  expect(getByText("Tricalmatops56").element().textContent).toBe("Tricalmatops56");
});

test("carousel scroll area has correct test id - variant 56", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container");
  await expect.element(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - variant 56", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll position changes correctly - variant 56", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  expect(scrollArea.scrollLeft).toBeGreaterThan(0);
});
