import { expect, test, vitest } from "vitest";
import { DinoCard } from "./DinoCard";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";

const dino = {
  name: "Tyrannosaurus Rex",
  image: "https://example.com/trex.png",
  description: "A large carnivorous dinosaur.",
};

test("renders with provided content", async () => {
  const { getByRole, getByText } = render(<DinoCard {...dino} />);
  await expect
    .element(getByRole("heading", { name: "Tyrannosaurus Rex" }))
    .toBeVisible();
  await expect
    .element(getByText("A large carnivorous dinosaur."))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("https://example.com/trex.png");
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
