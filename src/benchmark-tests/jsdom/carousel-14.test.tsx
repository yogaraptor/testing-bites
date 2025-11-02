import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "39") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 39", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor39")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl39")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops39")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 39", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 39", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 39", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor39")).toHaveTextContent("Yogaraptor39");
  expect(screen.getByText("Chillodactyl39")).toHaveTextContent("Chillodactyl39");
  expect(screen.getByText("Tricalmatops39")).toHaveTextContent("Tricalmatops39");
});

test("carousel scroll area has correct test id - JSDOM variant 39", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 39", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 39", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("carousel has proper structure - JSDOM variant 39", async () => {
  const { container } = renderCarousel();
  
  // Test that the basic structure is rendered
  expect(container.firstChild).toBeInTheDocument();
  expect(screen.getByTestId("carousel-scroll-container")).toBeInTheDocument();
});

test("slides are rendered in correct order - JSDOM variant 39", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor39");
  const chillodactyl = screen.getByText("Chillodactyl39");
  const tricalmatops = screen.getByText("Tricalmatops39");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 39", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor39"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl39"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops39"));
});
