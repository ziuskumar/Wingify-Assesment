import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Dream Portal - Home Page', () => {

  test('TC-001: Loading animation appears on page load', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.loadingAnimation).toBeVisible();
  });

});