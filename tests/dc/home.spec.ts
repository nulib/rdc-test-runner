import { expect, test } from "@playwright/test";

test("Homepage", async ({ page }) => {
  await page.goto("https://dc.library.northwestern.edu/");

  // Check for main page elements
  page.getByRole("link", { name: "Libraries | Digital Collections" });
  page.getByPlaceholder(
    "Search by keyword or phrase, ex: Berkeley Music Festival"
  );
  await page
    .getByRole("link", { name: "Berkeley Folk Music Festival" })
    .click();

  page.getByRole("heading", {
    name: "Enrich your research with primary sources",
  });
  page.getByText(
    "Explore digital resources from the Northwestern University Library collections –"
  );

  await page
    .locator("section")
    .filter({
      hasText:
        "Enrich your research with primary sourcesExplore digital resources from the Nort",
    })
    .locator("div")
    .nth(3)
    .click();

  await page.getByRole("button", { name: "Learn More" }).click();
  await expect(page).toHaveURL("https://dc.library.northwestern.edu/about");
  await page
    .getByRole("link", { name: "Libraries | Digital Collections" })
    .click();

  page.getByRole("heading", { name: "Collections" });
  await page.getByText("CollectionsView CollectionsArrow Forward");
  await page.getByText("WorksExplore FurtherArrow Forward").click();
  await page.getByTestId("search-results-grid").click();
});
