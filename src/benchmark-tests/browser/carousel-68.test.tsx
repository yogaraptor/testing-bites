import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "93") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - variant 93", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor93")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl93")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops93")).toBeInTheDocument();
});

test("first slide is initially visible - variant 93", async () => {
  renderCarousel();
  await expect.element(page.getByText("Yogaraptor93")).toBeInViewport();
});

test("carousel container exists - variant 93", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();
});

test("scroll area responds to scroll events - variant 93", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  const initialScrollLeft = scrollArea.scrollLeft;
  scrollArea.scrollBy(100, 0);
  
  // Small delay to allow scroll to process
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(scrollArea.scrollLeft).toBeGreaterThan(initialScrollLeft);
});

test("carousel contains three slides - variant 93", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - variant 93", async () => {
  const { getByText } = renderCarousel();
  expect(getByText("Yogaraptor93").element().textContent).toBe("Yogaraptor93");
  expect(getByText("Chillodactyl93").element().textContent).toBe("Chillodactyl93");
  expect(getByText("Tricalmatops93").element().textContent).toBe("Tricalmatops93");
});

test("carousel scroll area has correct test id - variant 93", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container");
  await expect.element(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - variant 93", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll position changes correctly - variant 93", async () => {
  renderCarousel();
  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  scrollArea.scrollBy(200, 0);
  await new Promise(resolve => setTimeout(resolve, 100));
  
  expect(scrollArea.scrollLeft).toBeGreaterThan(0);
});
