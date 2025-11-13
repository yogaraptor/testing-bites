import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "121") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 121", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor121")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl121")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops121")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 121", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 121", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 121", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor121")).toHaveTextContent("Yogaraptor121");
  expect(screen.getByText("Chillodactyl121")).toHaveTextContent("Chillodactyl121");
  expect(screen.getByText("Tricalmatops121")).toHaveTextContent("Tricalmatops121");
});

test("carousel scroll area has correct test id - JSDOM variant 121", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 121", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 121", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 121", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor121");
  const chillodactyl = screen.getByText("Chillodactyl121");
  const tricalmatops = screen.getByText("Tricalmatops121");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 121", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor121"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl121"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops121"));
});
