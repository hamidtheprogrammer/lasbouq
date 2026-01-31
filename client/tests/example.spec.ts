import { test, expect } from '@playwright/test';

test.describe("Desktop", ()=>{
  test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading',{name:"Home of creative minds"})).toBeVisible();

  // CTA present
  await expect(page.getByRole("link", {name:"Apply for membership"})).toBeVisible();

});
})

test.describe("Mobile", ()=>{
  test.use({viewport: { width: 375, height: 667 }})

  test("mobile nav visible", async ({page})=>{
    await page.goto("http://localhost:3000/");

    const menu = page.getByTestId("menu");

    //expect hamburger menu to be visible
    await expect(menu).toBeVisible();

    await menu.click();

    const nav = page.getByTestId("mobile-nav");

    //see if mobile nav links are visible
    await expect(nav.getByRole("link", {name:"Membership"})).toBeVisible();

  
  })
})


