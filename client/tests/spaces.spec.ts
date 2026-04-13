import { expect, test } from "@playwright/test";

const URL = "http://localhost:3000/";

test.describe("Spaces page", () => {
  test("UI renders correctly", async ({ page }) => {
    await page.goto(`${URL}spaces/city/page/1`);

    //look for headings
    expect(page.getByRole("heading", { name: "Our member" }));

    //look for form
    expect(page.getByTestId("spaces-grid")).toBeVisible();

  });
});

//cache hit test (Space page section requiring cms renders without cms connection due to ISR)
test.describe("Spaces page ISR/ No JS", () => {
  // FOR this test to run in local, there must be a next build running
  // and the locations/spaces page should be visited at least once manually to cache the page

  test.use({
    javaScriptEnabled: false,
  });

  test("renders spaces grid location without JS (cache hit test)", async ({
    page,
  }) => {
    await page.goto(`${URL}spaces/city/page/1`);

    //get space grid container on home page
    const spacesGrid = page.getByTestId("spaces-grid");

    await expect(spacesGrid).toBeVisible();

    // space cards render 
    await expect(spacesGrid.getByTestId("space-card")).toHaveCount(6)


  });
});
