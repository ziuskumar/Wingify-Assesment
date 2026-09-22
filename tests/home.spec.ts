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
  test("TC-005: My Dreams opens the required pages", async ({
    page,
    context,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    const pagesBeforeClick = context.pages().length;

    await homePage.clickMyDreams();

    await page.waitForTimeout(1000);

    const openedPages = context.pages().slice(pagesBeforeClick);

    expect(openedPages.length).toBe(2);

    const urls = openedPages.map((openedPage) => openedPage.url());

    expect(urls).toContain(
      "https://arjitnigam.github.io/myDreams/dreams-diary.html",
    );

    expect(urls).toContain(
      "https://arjitnigam.github.io/myDreams/dreams-total.html",
    );
  });
  test("TC-006: My Dreams opens the Dreams Diary page", async ({
    page,
    context,
  }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    const pagesBeforeClick = context.pages().length;

    await homePage.clickMyDreams();

    await page.waitForTimeout(1000);

    const openedPages = context.pages().slice(pagesBeforeClick);

    const diaryPage = openedPages.find(
      (openedPage) =>
        openedPage.url() ===
        "https://arjitnigam.github.io/myDreams/dreams-diary.html",
    );

    expect(diaryPage).toBeDefined();
  });
});
