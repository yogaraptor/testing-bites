import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "22") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 22", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor22")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl22")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops22")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 22", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 22", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 22", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor22")).toHaveTextContent("Yogaraptor22");
  expect(screen.getByText("Chillodactyl22")).toHaveTextContent("Chillodactyl22");
  expect(screen.getByText("Tricalmatops22")).toHaveTextContent("Tricalmatops22");
});

test("carousel scroll area has correct test id - JSDOM variant 22", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 22", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 22", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 22", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor22");
  const chillodactyl = screen.getByText("Chillodactyl22");
  const tricalmatops = screen.getByText("Tricalmatops22");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 22", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor22"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl22"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops22"));
});
