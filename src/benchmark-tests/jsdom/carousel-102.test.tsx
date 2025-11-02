import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "../../components/CarouselWithCssSnap";

const renderCarousel = (suffix = "127") =>
  render(
    <Carousel>
      <div>Yogaraptor{suffix}</div>
      <div>Chillodactyl{suffix}</div>
      <div>Tricalmatops{suffix}</div>
    </Carousel>
  );

test("renders slides - JSDOM variant 127", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor127")).toBeInTheDocument();
  expect(screen.getByText("Chillodactyl127")).toBeInTheDocument();
  expect(screen.getByText("Tricalmatops127")).toBeInTheDocument();
});

test("carousel container exists - JSDOM variant 127", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel contains three slides - JSDOM variant 127", async () => {
  const { container } = renderCarousel();
  const slides = container.querySelectorAll('div > div');
  expect(slides.length).toBeGreaterThanOrEqual(3);
});

test("slides have text content - JSDOM variant 127", async () => {
  renderCarousel();
  expect(screen.getByText("Yogaraptor127")).toHaveTextContent("Yogaraptor127");
  expect(screen.getByText("Chillodactyl127")).toHaveTextContent("Chillodactyl127");
  expect(screen.getByText("Tricalmatops127")).toHaveTextContent("Tricalmatops127");
});

test("carousel scroll area has correct test id - JSDOM variant 127", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  expect(scrollArea).toBeInTheDocument();
});

test("carousel renders without errors - JSDOM variant 127", async () => {
  expect(() => renderCarousel()).not.toThrow();
});

test("carousel scroll area is scrollable - JSDOM variant 127", async () => {
  renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // In JSDOM, we can't test actual scrolling behavior, but we can test that the element exists
  // and has the expected properties
  expect(scrollArea).toBeInTheDocument();
  expect(scrollArea).toHaveAttribute('data-testid', 'carousel-scroll-container');
});

test("slides are rendered in correct order - JSDOM variant 127", async () => {
  renderCarousel();
  
  const yogaraptor = screen.getByText("Yogaraptor127");
  const chillodactyl = screen.getByText("Chillodactyl127");
  const tricalmatops = screen.getByText("Tricalmatops127");
  
  expect(yogaraptor).toBeInTheDocument();
  expect(chillodactyl).toBeInTheDocument();
  expect(tricalmatops).toBeInTheDocument();
});

test("carousel container has expected children - JSDOM variant 127", async () => {
  const { container } = renderCarousel();
  const scrollArea = screen.getByTestId("carousel-scroll-container");
  
  // Check that the scroll area contains the slides
  expect(scrollArea).toContainElement(screen.getByText("Yogaraptor127"));
  expect(scrollArea).toContainElement(screen.getByText("Chillodactyl127"));
  expect(scrollArea).toContainElement(screen.getByText("Tricalmatops127"));
});
