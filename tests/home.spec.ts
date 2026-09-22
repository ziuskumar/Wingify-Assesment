import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Dream Portal - Home Page", () => {
  test("TC-001: Loading animation appears on page load", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.loadingAnimation).toBeVisible();
  });

  test("TC-002: Loading animation disappears after loading", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.loadingAnimation).toBeVisible();
    await expect(homePage.loadingAnimation).toBeHidden({ timeout: 5000 });
  });

  test("TC-003: Main content becomes visible after loading", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.mainContent).toBeVisible({ timeout: 5000 });
  });

  test("TC-004: My Dreams button becomes visible after loading", async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.dreamButton).toBeVisible({ timeout: 5000 });
  });
});
