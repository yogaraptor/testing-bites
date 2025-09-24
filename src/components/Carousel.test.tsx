import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import { CssOnlyCarousel, CssWithJsCarousel } from "./Carousel";

const sampleItems = [
  { id: 1, color: "bg-red-500", title: "Slide 1" },
  { id: 2, color: "bg-blue-500", title: "Slide 2" },
  { id: 3, color: "bg-green-500", title: "Slide 3" },
  { id: 4, color: "bg-yellow-500", title: "Slide 4" },
];

const renderCssCarousel = () =>
  render(
    <CssOnlyCarousel>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
    </CssOnlyCarousel>
  );

const renderJsCarousel = () =>
  render(
    <CssWithJsCarousel>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
    </CssWithJsCarousel>
  );

test("renders slides", async () => {
  const { getByText } = renderCssCarousel();
  await expect.element(getByText("Slide 1")).toBeInTheDocument();
  await expect.element(getByText("Slide 2")).toBeInTheDocument();
  await expect.element(getByText("Slide 3")).toBeInTheDocument();
  await expect.element(getByText("Slide 4")).toBeInTheDocument();
});

test("scrolls one slide at a time", async () => {
  // renderCssCarousel();
  renderJsCarousel();

  await expect.element(page.getByText("Slide 1")).toBeInViewport();
  await expect.element(page.getByText("Slide 2")).not.toBeInViewport();

  await page.getByText("➡").click();

  await new Promise((r) => setTimeout(r, 500)); // wait for scroll to settle

  await expect
    .element(page.getByText("Slide 2"), { timeout: 1000 })
    .toBeInViewport();
});
