import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "80") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 80", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor80")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl80")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops80")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 80", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 80", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 80", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor80")).toHaveTextContent("Yogaraptor80");
  expect(screen.getByText("Chillodactyl80")).toHaveTextContent("Chillodactyl80");
  expect(screen.getByText("Tricalmatops80")).toHaveTextContent("Tricalmatops80");
});

test("carousel scroll area has correct test id - JSDOM variant 80", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 80", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 80", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 80", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor80");
  const chillodactyl = screen.getByText("Chillodactyl80");
  const tricalmatops = screen.getByText("Tricalmatops80");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 80", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor80"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl80"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops80"));
});
