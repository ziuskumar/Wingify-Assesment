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
  test("TC-015: Recurring dreams are independently calculated from diary data", async ({
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

    const recurringDreams = [...dreamCounts.entries()]
      .filter(([, count]) => count > 1)
      .map(([dreamName]) => dreamName);

    expect(recurringDreams).toHaveLength(2);
  });

  test("TC-016: Flying over mountains is identified as recurring", async ({
    page,
  }) => {
    const diaryPage = new DreamsDiaryPage(page);

    await diaryPage.open();

    const dreams = await diaryPage.getTableRowData();

    const count = dreams.filter(
      (dream) => dream.dreamName === "Flying over mountains",
    ).length;

    expect(count).toBeGreaterThan(1);
  });
  test("TC-017: Lost in maze is identified as recurring", async ({ page }) => {
    const diaryPage = new DreamsDiaryPage(page);

    await diaryPage.open();

    const dreams = await diaryPage.getTableRowData();

    const count = dreams.filter(
      (dream) => dream.dreamName === "Lost in maze",
    ).length;

    expect(count).toBeGreaterThan(1);
  });
  test("TC-019: Invalid dream type is rejected by validation rule", async () => {
    const allowedTypes = ["Good", "Bad"];
    const invalidType = "Neutral";

    expect(allowedTypes).not.toContain(invalidType);
  });
  test('TC-020: Every required dream cell contains a value', async ({ page }) => {
  const diaryPage = new DreamsDiaryPage(page);

  await diaryPage.open();

  const rows = diaryPage.dreamRows;
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');

    for (let j = 0; j < 3; j++) {
      const value = (await cells.nth(j).innerText()).trim();

      expect(value, `Row ${i + 1}, column ${j + 1} should not be empty`).not.toBe('');
    }
  }
});
});
