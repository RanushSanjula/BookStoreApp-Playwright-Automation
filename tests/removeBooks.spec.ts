import { test, expect } from '@playwright/test';

test('Remove books', async ({ page }) => {

  let alertMessage = '';

  page.on('dialog', async (dialog) => {
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
  await page.getByRole('listitem').filter({ hasText: 'Profile' }).click();
  await page.locator('#delete-record-9781449325862 > svg > path').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await expect.poll(() => alertMessage).toBe('Book deleted.');


})
