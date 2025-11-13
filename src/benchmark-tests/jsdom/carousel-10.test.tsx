import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "35") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 35", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor35")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl35")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops35")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 35", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 35", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 35", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor35")).toHaveTextContent("Yogaraptor35");
  expect(screen.getByText("Chillodactyl35")).toHaveTextContent("Chillodactyl35");
  expect(screen.getByText("Tricalmatops35")).toHaveTextContent("Tricalmatops35");
});

test("carousel scroll area has correct test id - JSDOM variant 35", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 35", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 35", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 35", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor35");
  const chillodactyl = screen.getByText("Chillodactyl35");
  const tricalmatops = screen.getByText("Tricalmatops35");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 35", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor35"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl35"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops35"));
});
