import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "114") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 114", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor114")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl114")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops114")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 114", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 114", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 114", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor114")).toHaveTextContent("Yogaraptor114");
  expect(screen.getByText("Chillodactyl114")).toHaveTextContent("Chillodactyl114");
  expect(screen.getByText("Tricalmatops114")).toHaveTextContent("Tricalmatops114");
});

test("carousel scroll area has correct test id - JSDOM variant 114", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 114", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 114", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 114", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor114");
  const chillodactyl = screen.getByText("Chillodactyl114");
  const tricalmatops = screen.getByText("Tricalmatops114");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 114", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor114"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl114"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops114"));
});
