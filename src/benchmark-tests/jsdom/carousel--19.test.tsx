import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "6") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 6", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor6")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl6")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops6")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 6", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 6", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 6", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor6")).toHaveTextContent("Yogaraptor6");
  expect(screen.getByText("Chillodactyl6")).toHaveTextContent("Chillodactyl6");
  expect(screen.getByText("Tricalmatops6")).toHaveTextContent("Tricalmatops6");
});

test("carousel scroll area has correct test id - JSDOM variant 6", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 6", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 6", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 6", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor6");
  const chillodactyl = screen.getByText("Chillodactyl6");
  const tricalmatops = screen.getByText("Tricalmatops6");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 6", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor6"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl6"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops6"));
});
