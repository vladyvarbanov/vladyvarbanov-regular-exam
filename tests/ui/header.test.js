const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081'); 
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  