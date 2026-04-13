import { test, expect } from "@playwright/test";

const URL = "http://localhost:3000/";

test.describe("Homepage", () => {
  test("has title and CTA", async ({ page }) => {
    await page.goto(URL);

    // Expect a title "to contain" a substring.
    await expect(
      page.getByRole("heading", { name: "Home of creative minds" })
    ).toBeVisible();

    // CTA present
    await expect(page.getByTestId("membership-cta")).toBeVisible();
  });

  test("about us link", async ({ page }) => {
    await page.goto(URL);

    // About us link

    const storyButton = page.getByTestId("about-btn");

    await storyButton.click();

    await expect(page).toHaveURL(`${URL}about`);
  });

  test("view locations link", async ({ page }) => {
    await page.goto(URL);

    // View locations link

    const locationButton = page.getByRole("link", {
      name: "View our locations",
    });

    await locationButton.click();

    await expect(page).toHaveURL(`${URL}spaces/city/page/1`);
  });

  test("benefit section visible", async ({ page }) => {
    await page.goto(URL);

    //see benefit section is visible

    await expect(page.getByTestId("benefits")).toBeVisible();
  });
});

//cache hit test (homepage section requiring cms renders without cms connection due to ISR)
test.describe("Homepage ISR/ No JS", () => {
  // FOR this test to run in local, there must be a next build running
  // and the homepage should be visited at least once manually to cache the page

  test.use({
    javaScriptEnabled: false,
  });

  test("renders homepage location without JS (cache hit test)", async ({
    page,
  }) => {
    await page.goto(URL);

    //get space grid container on home page
    const spacesGrid = page.getByTestId("spaces-grid");

    await expect(spacesGrid).toBeVisible();

    // space cards render 
    await expect(spacesGrid.getByTestId("space-card")).toHaveCount(3)


  });
});

test.describe("Mobile", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("mobile nav visible", async ({ page }) => {
    await page.goto(URL);

    const menu = page.getByTestId("menu");

    //expect hamburger menu to be visible
    await expect(menu).toBeVisible();

    await menu.click();

    const nav = page.getByTestId("mobile-nav");

    await expect(nav).toBeVisible();

    //see if mobile nav links are visible
    await expect(nav.locator('a[href="/membership"]')).toBeVisible();
  });
});
