import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "198") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - variant 198", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor198")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl198")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops198")).toBeInTheDocument();
});

test("first slide is initially visible - variant 198", async () => {
  renderCarousel();
  await expect.element(page.getByText("Yogaraptor198")).toBeInViewport();
});

test("carousel container exists - variant 198", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();
});

test("scroll area responds to scroll events - variant 198", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  const initialScrollLeft = scrollArea.scrollLeft;
  scrollArea.scrollBy(100, 0);
  
  // Small delay to allow scroll to process
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(scrollArea.scrollLeft).toBeGreaterThan(initialScrollLeft);
});

test("carousel contains three slides - variant 198", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - variant 198", async () => {
  const { getByText } = renderCarousel();
  expect(getByText("Yogaraptor198").element().textContent).toBe("Yogaraptor198");
  expect(getByText("Chillodactyl198").element().textContent).toBe("Chillodactyl198");
  expect(getByText("Tricalmatops198").element().textContent).toBe("Tricalmatops198");
});

test("carousel scroll area has correct test id - variant 198", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container");
  await expect.element(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - variant 198", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll position changes correctly - variant 198", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  expect(scrollArea.scrollLeft).toBeGreaterThan(0);
});
