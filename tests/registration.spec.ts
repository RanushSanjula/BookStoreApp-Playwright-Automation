import { test, expect } from '@playwright/test';

test('Register using valid information', async ({ page }) => {

    let alertMessage = '';

    page.once('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    // await page.goto('https://demoqa.com/login');
    // await page.locator('id=newUser').click();
    // await page.locator('id=firstname').fill('Max');
    // await page.locator('id=lastname').fill('Anton');
    // await page.locator('id=userName').fill('Max');
    // await page.locator('id=password').fill('Test@12345');
    // await page.locator('id=register').click();
    // // await page.waitForTimeout(5000);
    // // expect(alertMessage).toBe('User Registered Successfully.');
    // await expect.poll(() => alertMessage).toBe('User Registered Successfully.');

})