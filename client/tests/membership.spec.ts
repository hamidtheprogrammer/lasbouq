import { expect, test } from "@playwright/test";

const URL = "http://localhost:3000/";

test.describe("FORM submission", () => {
  test("Input form fields and submit", async ({ page }) => {
    await page.goto(`${URL}membership`);

    //look for headings
    expect(page.getByRole("heading", { name: "Apply NOW FOR" }));

    //look for form
    expect(page.getByTestId("form")).toBeVisible();

    // input first name
    await page.locator('input[name="firstName"]').fill("Test-user");

    // input last name
    await page.locator('input[name="lastName"]').fill("Test-user-last");

    // input email
    await page.locator('input[name="email"]').fill("Testuser@gmail.com");

    // input description
    await page
      .locator('textarea[name="info"]')
      .fill(
        "Hello, I would like to enquire about spaces in london for a team of 10 and 6000 budget"
      );

    // submit
    await page.getByRole("button", {name:"Submit"}).click();

    //form submitted
    await expect(page.getByTestId("form-submitted")).toBeVisible()


  });
});
