import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "36") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - variant 36", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor36")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl36")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops36")).toBeInTheDocument();
});

test("first slide is initially visible - variant 36", async () => {
  renderCarousel();
  await expect.element(page.getByText("Yogaraptor36")).toBeInViewport();
});

test("carousel container exists - variant 36", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();
});

test("scroll area responds to scroll events - variant 36", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  const initialScrollLeft = scrollArea.scrollLeft;
  scrollArea.scrollBy(100, 0);
  
  // Small delay to allow scroll to process
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(scrollArea.scrollLeft).toBeGreaterThan(initialScrollLeft);
});

test("carousel contains three slides - variant 36", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - variant 36", async () => {
  const { getByText } = renderCarousel();
  expect(getByText("Yogaraptor36").element().textContent).toBe("Yogaraptor36");
  expect(getByText("Chillodactyl36").element().textContent).toBe("Chillodactyl36");
  expect(getByText("Tricalmatops36").element().textContent).toBe("Tricalmatops36");
});

test("carousel scroll area has correct test id - variant 36", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container");
  await expect.element(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - variant 36", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll position changes correctly - variant 36", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  expect(scrollArea.scrollLeft).toBeGreaterThan(0);
});
