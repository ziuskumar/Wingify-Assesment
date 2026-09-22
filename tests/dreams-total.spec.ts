import { test, expect } from '@playwright/test';
import { DreamsTotalPage } from '../pages/DreamsTotalPage';
import { DreamsDiaryPage } from '../pages/DreamsDiaryPage';

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
  test("TC-018: Summary recurring count matches independently calculated diary count", async ({
    page,
  }) => {
    const diaryPage = new DreamsDiaryPage(page);
    await diaryPage.open();

    const dreams = await diaryPage.getTableRowData();

    const dreamCounts = new Map<string, number>();

    for (const dream of dreams) {
      dreamCounts.set(
        dream.dreamName,
        (dreamCounts.get(dream.dreamName) ?? 0) + 1,
      );
    }

    const independentlyCalculatedRecurringCount = [
      ...dreamCounts.values(),
    ].filter((count) => count > 1).length;

    const totalPage = new DreamsTotalPage(page);
    await totalPage.open();

    const stats = await totalPage.getSummaryStats();

    expect(stats.recurringDreams).toBe(independentlyCalculatedRecurringCount);
  });
});
