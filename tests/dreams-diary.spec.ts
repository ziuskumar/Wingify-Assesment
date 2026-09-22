import { test, expect } from '@playwright/test';
import { DreamsDiaryPage } from '../pages/DreamsDiaryPage';

test.describe('Dream Portal - Dreams Diary', () => {

  test('TC-008: Dreams Diary contains exactly 10 dream entries', async ({ page }) => {
    const diaryPage = new DreamsDiaryPage(page);

    await diaryPage.open();

    await expect(diaryPage.dreamRows).toHaveCount(10);
  });

});