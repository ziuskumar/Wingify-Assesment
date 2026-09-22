import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface DreamEntry {
  dreamName: string;
  daysAgo: string;
  dreamType: string;
}

export class DreamsDiaryPage extends BasePage {
  readonly dreamsTable = this.page.locator('#dreamsDiary');
  readonly dreamRows = this.page.locator('#dreamsDiary tbody tr');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.page.goto('dreams-diary.html');
  }

  async getRowCount(): Promise<number> {
    return this.dreamRows.count();
  }

  async getTableRowData(): Promise<DreamEntry[]> {
    const rows = this.dreamRows;
    const count = await rows.count();

    const entries: DreamEntry[] = [];

    for (let i = 0; i < count; i++) {
      const cells = rows.nth(i).locator('td');

      entries.push({
        dreamName: (await cells.nth(0).innerText()).trim(),
        daysAgo: (await cells.nth(1).innerText()).trim(),
        dreamType: (await cells.nth(2).innerText()).trim(),
      });
    }

    return entries;
  }
}