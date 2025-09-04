import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser/providers/playwright";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: "firefox" }],
    },
  },
});
