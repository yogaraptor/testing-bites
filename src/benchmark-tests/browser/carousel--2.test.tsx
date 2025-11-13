import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "23") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - variant 23", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor23")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl23")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops23")).toBeInTheDocument();
});

test("first slide is initially visible - variant 23", async () => {
  renderCarousel();
  await expect.element(page.getByText("Yogaraptor23")).toBeInViewport();
});

test("carousel container exists - variant 23", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();
});

test("scroll area responds to scroll events - variant 23", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  const initialScrollLeft = scrollArea.scrollLeft;
  scrollArea.scrollBy(100, 0);
  
  // Small delay to allow scroll to process
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(scrollArea.scrollLeft).toBeGreaterThan(initialScrollLeft);
});

test("carousel contains three slides - variant 23", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - variant 23", async () => {
  const { getByText } = renderCarousel();
  expect(getByText("Yogaraptor23").element().textContent).toBe("Yogaraptor23");
  expect(getByText("Chillodactyl23").element().textContent).toBe("Chillodactyl23");
  expect(getByText("Tricalmatops23").element().textContent).toBe("Tricalmatops23");
});

test("carousel scroll area has correct test id - variant 23", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container");
  await expect.element(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - variant 23", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll position changes correctly - variant 23", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  expect(scrollArea.scrollLeft).toBeGreaterThan(0);
});
