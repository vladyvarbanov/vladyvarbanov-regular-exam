const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081/Add-Product');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  