import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
// import Carousel from "./CarouselWithJsSnap";
import Carousel from "./CarouselWithCssSnap";

const renderCarousel = () =>
  render(
    <Carousel>
      <div>Yogaraptor</div>
      <div>Chillodactyl</div>
      <div>Tricalmatops</div>
    </Carousel>
  );

test("renders slides", async () => {
  const { getByText } = renderCarousel();
  await expect.element(getByText("Yogaraptor")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl")).toBeInTheDocument();
  await expect.element(getByText("Tricalmatops")).toBeInTheDocument();
});

test("scrolls one slide at a time", async () => {
  renderCarousel();

  const scrollArea = page.getByTestId("carousel-scroll-container").element();
  expect(scrollArea).toBeInTheDocument();

  await expect.element(page.getByText("Yogaraptor")).toBeInViewport();
  await expect.element(page.getByText("Chillodactyl")).not.toBeInViewport();
  await expect.element(page.getByText("Tricalmatops")).not.toBeInViewport();

  scrollArea.scrollBy(300, 0);

  await expect
    .element(page.getByText("Chillodactyl"), { timeout: 1000 })
    .toBeInViewport();

  scrollArea.scrollBy(300, 0);

  await expect
    .element(page.getByText("Tricalmatops"), { timeout: 1000 })
    .toBeInViewport();
});
