import { test, expect } from "@playwright/test";
import { DreamsDiaryPage } from "../pages/DreamsDiaryPage";

test.describe("Dream Portal - Dreams Diary", () => {
  test("TC-008: Dreams Diary contains exactly 10 dream entries", async ({
    page,
  }) => {
    const diaryPage = new DreamsDiaryPage(page);

    await diaryPage.open();

    await expect(diaryPage.dreamRows).toHaveCount(10);
  });
  test("TC-009: Every dream has a valid dream type", async ({ page }) => {
    const diaryPage = new DreamsDiaryPage(page);

    await diaryPage.open();

    const dreams = await diaryPage.getTableRowData();

    for (const dream of dreams) {
      expect(["Good", "Bad"]).toContain(dream.dreamType);
    }
  });
  test("TC-010: Every dream entry has all required fields", async ({
    page,
  }) => {
    const diaryPage = new DreamsDiaryPage(page);

    await diaryPage.open();

    const dreams = await diaryPage.getTableRowData();

    for (const dream of dreams) {
      expect(dream.dreamName).not.toBe("");
      expect(dream.daysAgo).not.toBe("");
      expect(dream.dreamType).not.toBe("");
    }
  });
});
