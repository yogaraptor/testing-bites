import { expect, test } from "vitest";
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
