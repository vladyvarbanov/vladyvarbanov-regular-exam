const { test, expect } = require('@playwright/test');

test('Check cookbook page', async ({ page }) => {
    await page.goto('http://localhost:8081/cookbook');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  