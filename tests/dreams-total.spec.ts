import { test, expect } from "@playwright/test";
import { DreamsTotalPage } from "../pages/DreamsTotalPage";

test.describe("Dream Portal - Dreams Total", () => {
  test("TC-011: Good Dreams count is 6", async ({ page }) => {
    const totalPage = new DreamsTotalPage(page);

    await totalPage.open();

    const stats = await totalPage.getSummaryStats();

    expect(stats.goodDreams).toBe(6);
  });

  test("TC-012: Bad Dreams count is 4", async ({ page }) => {
    const totalPage = new DreamsTotalPage(page);

    await totalPage.open();

    const stats = await totalPage.getSummaryStats();

    expect(stats.badDreams).toBe(4);
  });

  test("TC-013: Total Dreams count is 10", async ({ page }) => {
    const totalPage = new DreamsTotalPage(page);

    await totalPage.open();

    const stats = await totalPage.getSummaryStats();

    expect(stats.totalDreams).toBe(10);
  });

  test("TC-014: Recurring Dreams count is 2", async ({ page }) => {
    const totalPage = new DreamsTotalPage(page);

    await totalPage.open();

    const stats = await totalPage.getSummaryStats();

    expect(stats.recurringDreams).toBe(2);
  });
});
