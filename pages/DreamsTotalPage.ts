import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface SummaryStats {
  goodDreams: number;
  badDreams: number;
  totalDreams: number;
  dreamsThisWeek: number;
  recurringDreams: number;
}

export class DreamsTotalPage extends BasePage {
  readonly summaryTable = this.page.locator('#dreamsTotal');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.page.goto('dreams-total.html');
  }

  async getSummaryStats(): Promise<SummaryStats> {
    const rows = this.page.locator('#dreamsTotal tbody tr');
    const count = await rows.count();

    const stats: SummaryStats = {
      goodDreams: 0,
      badDreams: 0,
      totalDreams: 0,
      dreamsThisWeek: 0,
      recurringDreams: 0,
    };

    for (let i = 0; i < count; i++) {
      const cells = rows.nth(i).locator('td');

      const label = (await cells.nth(0).innerText()).trim();
      const value = Number((await cells.nth(1).innerText()).trim());

      switch (label) {
        case 'Good Dreams':
          stats.goodDreams = value;
          break;

        case 'Bad Dreams':
          stats.badDreams = value;
          break;

        case 'Total Dreams':
          stats.totalDreams = value;
          break;

        case 'Dreams This Week':
          stats.dreamsThisWeek = value;
          break;

        case 'Recurring Dreams':
          stats.recurringDreams = value;
          break;
      }
    }

    return stats;
  }
}