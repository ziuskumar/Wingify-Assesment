import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly loadingAnimation = this.page.locator('#loadingAnimation');
  readonly mainContent = this.page.locator('#mainContent');
  readonly dreamButton = this.page.locator('#dreamButton');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.page.goto('/myDreams/');
  }

  async clickMyDreams(): Promise<void> {
    await this.dreamButton.click();
  }
}