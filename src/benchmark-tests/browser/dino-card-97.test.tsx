import { expect, test, vitest } from "vitest";
import { DinoCard } from "../../components/DinoCard";
import { render } from "vitest-browser-react";

const testDinos = [
  {
    name: "Yogaraptor97",
    image: "http://localhost/yogaraptor97.png",
    description: "The chillest creature in the Cretaceous! (Test 97)",
  },
  {
    name: "Chillodactyl97",
    image: "http://localhost/chillodactyl97.png",
    description: "Flying high with zen vibes! (Test 97)",
  },
  {
    name: "Tricalmatops97",
    image: "http://localhost/tricalmatops97.png",
    description: "Three horns of tranquility! (Test 97)",
  },
];

test("renders first dino card with provided content - variant 97", async () => {
  const dino = testDinos[0];
  const { getByRole, getByText } = render(<DinoCard {...dino} onRelease={() => {}} />);
  await expect
    .element(getByRole("heading", { name: "Yogaraptor97" }))
    .toBeVisible();
  await expect
    .element(getByText("The chillest creature in the Cretaceous! (Test 97)"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/yogaraptor97.png");
});

test("renders second dino card with provided content - variant 97", async () => {
  const dino = testDinos[1];
  const { getByRole, getByText } = render(<DinoCard {...dino} onRelease={() => {}} />);
  await expect
    .element(getByRole("heading", { name: "Chillodactyl97" }))
    .toBeVisible();
  await expect
    .element(getByText("Flying high with zen vibes! (Test 97)"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/chillodactyl97.png");
});

test("renders third dino card with provided content - variant 97", async () => {
  const dino = testDinos[2];
  const { getByRole, getByText } = render(<DinoCard {...dino} onRelease={() => {}} />);
  await expect
    .element(getByRole("heading", { name: "Tricalmatops97" }))
    .toBeVisible();
  await expect
    .element(getByText("Three horns of tranquility! (Test 97)"))
    .toBeVisible();
  const img = getByRole("presentation").element() as HTMLImageElement;
  await expect(img.src).toBe("http://localhost/tricalmatops97.png");
});

test("fires onRelease callback for first dino when release button clicked - variant 97", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[0]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("fires onRelease callback for second dino when release button clicked - variant 97", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[1]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("fires onRelease callback for third dino when release button clicked - variant 97", async () => {
  const handleRelease = vitest.fn();
  const { getByRole } = render(
    <DinoCard {...testDinos[2]} onRelease={handleRelease} />
  );
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await button.click({ timeout: 1000 });

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("dino card displays correct data-testid - variant 97", async () => {
  const { container } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const card = container.querySelector('[data-testid="dino-card"]');
  expect(card).toBeInTheDocument();
});

test("dino card button is enabled - variant 97", async () => {
  const { getByRole } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const button = getByRole("button", { name: /release/i });
  await expect.element(button).toBeVisible();
  await expect.element(button).toBeEnabled();
});

test("dino card image has correct alt attribute - variant 97", async () => {
  const { getByRole } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const img = getByRole("presentation");
  expect(img.element()).toHaveAttribute("alt", "");
});

test("dino card handles multiple rapid clicks - variant 97", async () => {
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
