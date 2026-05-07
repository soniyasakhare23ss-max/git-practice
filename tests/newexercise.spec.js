import { test, expect } from '@playwright/test';

// Test verifies that users can add multiple todo items to the TodoMVC application.
// It also confirms that specific items can be marked as completed successfully.
test('Add multiple todos and mark one as complete', async ({ page }) => {
  // Set a slower execution speed for visibility
  page.setDefaultTimeout(3000);
  
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.waitForTimeout(1000);
  
  // Get the todo input textbox for reusable reference
  const todoInput = page.getByRole('textbox', { name: 'What needs to be done?' });
  
  // Add first todo item
  await todoInput.fill('Playwright classes');
  await page.waitForTimeout(500);
  await todoInput.press('Enter');
  await page.waitForTimeout(500);
  
  // Add second todo item
  await todoInput.fill('Workshop 3 pillar');
  await page.waitForTimeout(500);
  await todoInput.press('Enter');
  await page.waitForTimeout(500);
  
  // Add third todo item
  await todoInput.fill('check claude AI');
  await page.waitForTimeout(500);
  await todoInput.press('Enter');
  await page.waitForTimeout(800);
  
  // Mark the third todo item as complete
  await page.getByRole('listitem').filter({ hasText: 'check claude AI' }).getByLabel('Toggle Todo').check();
  await page.waitForTimeout(500);
  
  // Assertion 1: Verify all three todo items were added to the list
  await expect(page.getByRole('listitem')).toHaveCount(3);
  
  // Assertion 2: Verify all specific todo items are visible with correct text
  await expect(page.getByRole('listitem').filter({ hasText: 'Playwright classes' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Workshop 3 pillar' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'check claude AI' })).toBeVisible();
  
  // Assertion 3: Verify the completed item is marked as done (checkbox is checked)
  const completedItem = page.getByRole('listitem').filter({ hasText: 'check claude AI' });
  await expect(completedItem.getByLabel('Toggle Todo')).toBeChecked();
});