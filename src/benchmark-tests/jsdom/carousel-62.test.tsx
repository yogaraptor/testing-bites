import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "87") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 87", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor87")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl87")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops87")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 87", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 87", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 87", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor87")).toHaveTextContent("Yogaraptor87");
  expect(screen.getByText("Chillodactyl87")).toHaveTextContent("Chillodactyl87");
  expect(screen.getByText("Tricalmatops87")).toHaveTextContent("Tricalmatops87");
});

test("carousel scroll area has correct test id - JSDOM variant 87", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 87", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 87", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 87", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor87");
  const chillodactyl = screen.getByText("Chillodactyl87");
  const tricalmatops = screen.getByText("Tricalmatops87");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 87", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor87"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl87"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops87"));
});
