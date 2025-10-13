import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DinoTeamBuilder } from "./DinoTeamBuilder";

test("allows selecting a team of dinos by dragging them to the team area", async () => {
  const { getByLabelText } = render(<DinoTeamBuilder />);

  // Check everything is present and correct
  const teamArea = getByLabelText(/team area/i);
  expect(teamArea).toBeVisible();
  const dinoList = getByLabelText(/available dinos/i);
  const yogaraptor = dinoList.getByAltText(/yogaraptor/i);

  // Wait for the image to load before asserting visibility
  await vi.waitFor(() => expect(yogaraptor).toBeVisible());

  // Check we can drag a dino!
  await yogaraptor.dropTo(teamArea);
  expect(teamArea.element().textContent).toContain("Yogaraptor");
});
