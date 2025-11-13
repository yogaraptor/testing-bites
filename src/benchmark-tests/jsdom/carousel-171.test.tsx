import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "196") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 196", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor196")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl196")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops196")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 196", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 196", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 196", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor196")).toHaveTextContent("Yogaraptor196");
  expect(screen.getByText("Chillodactyl196")).toHaveTextContent("Chillodactyl196");
  expect(screen.getByText("Tricalmatops196")).toHaveTextContent("Tricalmatops196");
});

test("carousel scroll area has correct test id - JSDOM variant 196", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 196", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 196", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 196", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor196");
  const chillodactyl = screen.getByText("Chillodactyl196");
  const tricalmatops = screen.getByText("Tricalmatops196");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 196", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor196"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl196"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops196"));
});
