import { expect, test, vitest } from "vitest";
import { DinoCard } from "../../components/DinoCard";
import { render } from "vitest-browser-react";

const testDinos = [
  {
    name: "Yogaraptor146",
    image: "http://localhost/yogaraptor146.png",
    description: "The chillest creature in the Cretaceous! (Test 146)",
  },
  {
    name: "Chillodactyl146",
    image: "http://localhost/chillodactyl146.png",
    description: "Flying high with zen vibes! (Test 146)",
  },
  {
    name: "Tricalmatops146",
    image: "http://localhost/tricalmatops146.png",
    description: "Three horns of tranquility! (Test 146)",
  },
];

test("renders first dino card with provided content - variant 146", async () => {
  const dino = testDinos[0];
  const { getByRole, getByText } = render(<DinoCard {...dino} onRelease={() => {}} />);
  await expect
    .element(getByRole("heading", { name: "Yogaraptor146" }))
    .toBeVisible();
  await expect
    .element(getByText("The chillest creature in the Cretaceous! (Test 146)"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/yogaraptor146.png");
});

test("renders second dino card with provided content - variant 146", async () => {
  const dino = testDinos[1];
  const { getByRole, getByText } = render(<DinoCard {...dino} onRelease={() => {}} />);
  await expect
    .element(getByRole("heading", { name: "Chillodactyl146" }))
    .toBeVisible();
  await expect
    .element(getByText("Flying high with zen vibes! (Test 146)"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/chillodactyl146.png");
});

test("renders third dino card with provided content - variant 146", async () => {
  const dino = testDinos[2];
  const { getByRole, getByText } = render(<DinoCard {...dino} onRelease={() => {}} />);
  await expect
    .element(getByRole("heading", { name: "Tricalmatops146" }))
    .toBeVisible();
  await expect
    .element(getByText("Three horns of tranquility! (Test 146)"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/tricalmatops146.png");
});

test("fires onRelease callback for first dino when release button clicked - variant 146", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[0]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("fires onRelease callback for second dino when release button clicked - variant 146", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[1]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("fires onRelease callback for third dino when release button clicked - variant 146", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[2]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("dino card displays correct data-testid - variant 146", async () => {
  const { container } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const card = container.querySelector('[data-testid="dino-card"]');
  expect(card).toBeInTheDocument();
});

test("dino card button is enabled - variant 146", async () => {
  const { getByRole } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await expect.element(button).toBeEnabled();
});

test("dino card image has correct alt attribute - variant 146", async () => {
  const { getByRole } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const img = getByRole("presentation");
  expect(img.element()).toHaveAttribute("alt", "");
});

test("dino card handles multiple rapid clicks - variant 146", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[0]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  
  await button.click({ timeout: 1000 });
  await button.click({ timeout: 1000 });
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(3);
});
