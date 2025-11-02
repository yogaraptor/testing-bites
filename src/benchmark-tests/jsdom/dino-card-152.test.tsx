import { expect, test, vi } from "vitest";
import { DinoCard } from "../../components/DinoCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const testDinos = [
  {
    name: "Yogaraptor152",
    image: "http://localhost/yogaraptor152.png",
    description: "The chillest creature in the Cretaceous! (Test 152)",
  },
  {
    name: "Chillodactyl152",
    image: "http://localhost/chillodactyl152.png",
    description: "Flying high with zen vibes! (Test 152)",
  },
  {
    name: "Tricalmatops152",
    image: "http://localhost/tricalmatops152.png",
    description: "Three horns of tranquility! (Test 152)",
  },
];

test("renders first dino card with provided content - JSDOM variant 152", async () => {
  const dino = testDinos[0];
  render(<DinoCard {...dino} onRelease={() => {}} />);
  
  expect(screen.getByRole("heading", { name: "Yogaraptor152" })).toBeInTheDocument();
  expect(screen.getByText("The chillest creature in the Cretaceous! (Test 152)")).toBeInTheDocument();
  
  const img = screen.getByRole("presentation");
  expect(img).toHaveAttribute("src", "http://localhost/yogaraptor152.png");
});

test("renders second dino card with provided content - JSDOM variant 152", async () => {
  const dino = testDinos[1];
  render(<DinoCard {...dino} onRelease={() => {}} />);
  
  expect(screen.getByRole("heading", { name: "Chillodactyl152" })).toBeInTheDocument();
  expect(screen.getByText("Flying high with zen vibes! (Test 152)")).toBeInTheDocument();
  
  const img = screen.getByRole("presentation");
  expect(img).toHaveAttribute("src", "http://localhost/chillodactyl152.png");
});

test("renders third dino card with provided content - JSDOM variant 152", async () => {
  const dino = testDinos[2];
  render(<DinoCard {...dino} onRelease={() => {}} />);
  
  expect(screen.getByRole("heading", { name: "Tricalmatops152" })).toBeInTheDocument();
  expect(screen.getByText("Three horns of tranquility! (Test 152)")).toBeInTheDocument();
  
  const img = screen.getByRole("presentation");
  expect(img).toHaveAttribute("src", "http://localhost/tricalmatops152.png");
});

test("fires onRelease callback for first dino when release button clicked - JSDOM variant 152", async () => {
  const user = userEvent.setup();
  const handleRelease = vi.fn();
  render(<DinoCard {...testDinos[0]} onRelease={handleRelease} />);
  
  const button = screen.getByRole("button", { name: /release/i });
  await user.click(button);

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("fires onRelease callback for second dino when release button clicked - JSDOM variant 152", async () => {
  const user = userEvent.setup();
  const handleRelease = vi.fn();
  render(<DinoCard {...testDinos[1]} onRelease={handleRelease} />);
  
  const button = screen.getByRole("button", { name: /release/i });
  await user.click(button);

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("fires onRelease callback for third dino when release button clicked - JSDOM variant 152", async () => {
  const user = userEvent.setup();
  const handleRelease = vi.fn();
  render(<DinoCard {...testDinos[2]} onRelease={handleRelease} />);
  
  const button = screen.getByRole("button", { name: /release/i });
  await user.click(button);

  expect(handleRelease).toHaveBeenCalledTimes(1);
});

test("dino card displays correct data-testid - JSDOM variant 152", async () => {
  const { container } = render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const card = container.querySelector('[data-testid="dino-card"]');
  expect(card).toBeInTheDocument();
});

test("dino card button is enabled - JSDOM variant 152", async () => {
  render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const button = screen.getByRole("button", { name: /release/i });
  expect(button).toBeEnabled();
});

test("dino card image has correct alt attribute - JSDOM variant 152", async () => {
  render(<DinoCard {...testDinos[0]} onRelease={() => {}} />);
  const img = screen.getByRole("presentation");
  expect(img).toHaveAttribute("alt", "");
});

test("dino card handles multiple rapid clicks - JSDOM variant 152", async () => {
  const user = userEvent.setup();
  const handleRelease = vi.fn();
  render(<DinoCard {...testDinos[0]} onRelease={handleRelease} />);
  
  const button = screen.getByRole("button", { name: /release/i });
  
  await user.click(button);
  await user.click(button);
  await user.click(button);

  expect(handleRelease).toHaveBeenCalledTimes(3);
});
