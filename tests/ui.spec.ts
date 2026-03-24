import { test, expect } from '@playwright/test';

test('Should have shuffle card info', async ({ page }) => {
  await page.goto('/');

  const suffleCardTxt=await page.locator('#shuffle').textContent();
  expect(suffleCardTxt).toBe('Shuffle the Cards:');

  const suffleCardUrl=await page.locator('#shuffle+pre').textContent();
  if(suffleCardUrl!==null){
    expect(suffleCardUrl.replace(/\u00A0/g, ' ').trim()).toBe('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 copy');
  }
});
