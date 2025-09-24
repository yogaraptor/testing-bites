import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import { CssScrollSnapCarousel, JsScrollCarousel } from "./Carousel";

const renderCssCarousel = () =>
  render(
    <CssScrollSnapCarousel>
      <div>Yogaraptor</div>
      <div>Chillodactyl</div>
      <div>Calmodon</div>
    </CssScrollSnapCarousel>
  );

const renderJsCarousel = () =>
  render(
    <JsScrollCarousel>
      <div>Yogaraptor</div>
      <div>Chillodactyl</div>
      <div>Calmodon</div>
    </JsScrollCarousel>
  );

test("renders slides", async () => {
  const { getByText } = renderCssCarousel();
  await expect.element(getByText("Yogaraptor")).toBeInTheDocument();
  await expect.element(getByText("Chillodactyl")).toBeInTheDocument();
  await expect.element(getByText("Calmodon")).toBeInTheDocument();
});

test("scrolls one slide at a time", async () => {
  renderCssCarousel();
  // renderJsCarousel();
  const targetElement = page.getByTestId("carousel-scroll-container").element();

  await expect.element(page.getByText("Yogaraptor")).toBeInViewport();
  await expect.element(page.getByText("Chillodactyl")).not.toBeInViewport();

  targetElement!.scrollBy(300, 0);

  await expect
    .element(page.getByText("Chillodactyl"), { timeout: 1000 })
    .toBeInViewport();

  targetElement!.scrollBy(300, 0);

  await expect
    .element(page.getByText("Calmodon"), { timeout: 1000 })
    .toBeInViewport();
});
