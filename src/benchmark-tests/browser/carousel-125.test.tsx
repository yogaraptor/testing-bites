import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "150") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - variant 150", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor150")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl150")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops150")).toBeInTheDocument();
});

test("first slide is initially visible - variant 150", async () => {
  renderCarousel();
  await expect.element(page.getByText("Yogaraptor150")).toBeInViewport();
});

test("carousel container exists - variant 150", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();
});

test("scroll area responds to scroll events - variant 150", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  const initialScrollLeft = scrollArea.scrollLeft;
  scrollArea.scrollBy(100, 0);
  
  // Small delay to allow scroll to process
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(scrollArea.scrollLeft).toBeGreaterThan(initialScrollLeft);
});

test("carousel contains three slides - variant 150", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - variant 150", async () => {
  const { getByText } = renderCarousel();
  expect(getByText("Yogaraptor150").element().textContent).toBe("Yogaraptor150");
  expect(getByText("Chillodactyl150").element().textContent).toBe("Chillodactyl150");
  expect(getByText("Tricalmatops150").element().textContent).toBe("Tricalmatops150");
});

test("carousel scroll area has correct test id - variant 150", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container");
  await expect.element(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - variant 150", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll position changes correctly - variant 150", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  expect(scrollArea.scrollLeft).toBeGreaterThan(0);
});
