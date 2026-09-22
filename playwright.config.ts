import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: true,
    baseURL: 'https://arjitnigam.github.io/myDreams/',
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
  ],

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});