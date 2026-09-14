import { test, expect } from '@playwright/test';

test('Login using valid information', async ({ page }) => {

    let alertMessage = '';

    page.once('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.goto('https://demoqa.com/login');
    await page.locator('id=userName').fill('sf');
    await page.locator('id=password').fill('Test@12345');
    await page.locator('id=login').click();
    await expect(page).toHaveURL('https://demoqa.com/profile');
    await page.locator('id=gotoStore').click();
    await page.locator('span', { hasText: 'Git Pocket Guide' }).click();
    await page.getByRole('button', { name: 'Add To Your Collection' }).click();
    await expect.poll(() => alertMessage).toBe('Book added to your collection.');

})