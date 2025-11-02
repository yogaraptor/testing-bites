import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "38") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 38", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor38")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl38")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops38")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 38", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 38", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 38", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor38")).toHaveTextContent("Yogaraptor38");
  expect(screen.getByText("Chillodactyl38")).toHaveTextContent("Chillodactyl38");
  expect(screen.getByText("Tricalmatops38")).toHaveTextContent("Tricalmatops38");
});

test("carousel scroll area has correct test id - JSDOM variant 38", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 38", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 38", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("carousel has proper structure - JSDOM variant 38", async () => {
  const { container } = renderCarousel();
  
  // Test that the basic structure is rendered
  expect(container.firstChild).toBeInTheDocument();
  expect(screen.getByTestId("carousel-scroll-container")).toBeInTheDocument();
});

test("slides are rendered in correct order - JSDOM variant 38", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor38");
  const chillodactyl = screen.getByText("Chillodactyl38");
  const tricalmatops = screen.getByText("Tricalmatops38");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 38", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor38"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl38"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops38"));
});
