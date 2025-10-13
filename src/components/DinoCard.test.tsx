import { expect, test, vitest } from "vitest";
import { DinoCard } from "./DinoCard";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";

const dino = {
  name: "Yogaraptor",
  image: "http://localhost/yogaraptor.png",
  description: "The chillest creature in the Cretaceous!",
};

test("renders with provided content", async () => {
  const { getByRole, getByText } = render(<DinoCard {...dino} />);
  await expect
    .element(getByRole("heading", { name: "Yogaraptor" }))
    .toBeVisible();
  await expect
    .element(getByText("The chillest creature in the Cretaceous!"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/yogaraptor.png");
});

test("fires onRelease callback when release button clicked", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...dino} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});
