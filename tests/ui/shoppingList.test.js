const { test, expect } = require('@playwright/test');

test('Check cookbook page', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081/cookbook');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  