import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser/providers/playwright";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: "firefox" }],
    },
    include: ["src/benchmark-tests/browser/*.test.{ts,tsx}"],
    watch: false,
  },
});
