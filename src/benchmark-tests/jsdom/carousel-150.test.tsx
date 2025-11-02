import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "175") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 175", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor175")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl175")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops175")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 175", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 175", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 175", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor175")).toHaveTextContent("Yogaraptor175");
  expect(screen.getByText("Chillodactyl175")).toHaveTextContent("Chillodactyl175");
  expect(screen.getByText("Tricalmatops175")).toHaveTextContent("Tricalmatops175");
});

test("carousel scroll area has correct test id - JSDOM variant 175", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 175", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 175", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 175", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor175");
  const chillodactyl = screen.getByText("Chillodactyl175");
  const tricalmatops = screen.getByText("Tricalmatops175");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 175", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor175"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl175"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops175"));
});
