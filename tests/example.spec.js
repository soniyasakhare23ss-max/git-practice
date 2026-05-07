// @ts-check
import { test, expect } from '@playwright/test';

// Test verifies that the Playwright documentation website loads successfully.
// It checks that the page title contains the word "Playwright".
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// Test verifies that clicking the "Get Started" button navigates to the Installation page.
// It confirms the page URL changes and the Installation heading with key content is visible.
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started button.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify the Installation page is opened by checking the URL
  await expect(page).toHaveURL(/.*installation.*/i);

  // Verify Installation heading is visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Additional check: Verify key Installation content is present
  await expect(page.locator('text=/npm|install|playwright/i').first()).toBeVisible();
});
