const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081/');
    const heading = await page.$('p');
    const text = await heading.textContent();
    expect(text).toContain('Cookbook');  
  });
  