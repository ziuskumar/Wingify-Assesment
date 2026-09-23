import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 1,

  use: {
  headless: true,
  baseURL: 'https://arjitnigam.github.io/myDreams/',
  screenshot: 'on',
  video: 'retain-on-failure',
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