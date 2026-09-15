import { test, expect } from '@playwright/test';

test('Login using valid information', async ({ page }) => {


    await page.goto('https://demoqa.com/login');
    await page.locator('id=userName').fill('sf');
    await page.locator('id=password').fill('Test@12345');
    await page.locator('id=login').click();
    await expect(page).toHaveURL('https://demoqa.com/profile');
    await page.locator('id=gotoStore').click();
    await page.locator('id=searchBox').fill('Git Pocket Guide');
    await page.locator('span', { hasText: 'Git Pocket Guide' }).isVisible();


})