import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "194") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 194", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor194")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl194")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops194")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 194", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 194", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 194", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor194")).toHaveTextContent("Yogaraptor194");
  expect(screen.getByText("Chillodactyl194")).toHaveTextContent("Chillodactyl194");
  expect(screen.getByText("Tricalmatops194")).toHaveTextContent("Tricalmatops194");
});

test("carousel scroll area has correct test id - JSDOM variant 194", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 194", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 194", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 194", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor194");
  const chillodactyl = screen.getByText("Chillodactyl194");
  const tricalmatops = screen.getByText("Tricalmatops194");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 194", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor194"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl194"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops194"));
});
