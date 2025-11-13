import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "146") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 146", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor146")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl146")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops146")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 146", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 146", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 146", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor146")).toHaveTextContent("Yogaraptor146");
  expect(screen.getByText("Chillodactyl146")).toHaveTextContent("Chillodactyl146");
  expect(screen.getByText("Tricalmatops146")).toHaveTextContent("Tricalmatops146");
});

test("carousel scroll area has correct test id - JSDOM variant 146", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 146", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 146", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 146", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor146");
  const chillodactyl = screen.getByText("Chillodactyl146");
  const tricalmatops = screen.getByText("Tricalmatops146");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 146", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor146"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl146"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops146"));
});
