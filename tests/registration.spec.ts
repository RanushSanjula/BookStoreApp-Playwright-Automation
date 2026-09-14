import { test, expect } from '@playwright/test';

test('Register using valid information', async ({ page }) => {

    let alertMessage = '';

    page.once('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.goto('https://demoqa.com/login');
    await page.locator('id=newUser').click();
    await page.locator('id=firstname').fill('Lewis');
    await page.locator('id=lastname').fill('Marcuz');
    await page.locator('id=userName').fill('Lewis');
    await page.locator('id=password').fill('Test@12345');
    await page.locator('id=register').click();
    await expect.poll(() => alertMessage).toBe('User Registered Successfully.');

})