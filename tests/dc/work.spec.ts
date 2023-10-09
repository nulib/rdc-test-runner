import { expect, test } from "@playwright/test";

test("Public Work page", async ({ page }) => {
  await page.goto(
    "https://dc.library.northwestern.edu/items/702a177b-2259-4a0b-bf5c-3ad2d67384ee"
  );

  // Search bar
  await page
    .getByPlaceholder(
      "Search by keyword or phrase, ex: Berkeley Music Festival"
    )
    .click();
  page.getByTestId("submit-button");
  page.getByRole("link", { name: "Browse Collections" });

  // Viewer
  await page.getByRole("button", { name: "Recto" }).click();
  await page.getByRole("button", { name: "zoom in" }).click();
  await page.getByRole("button", { name: "zoom out" }).click();
  await page.getByRole("button", { name: "rotate right" }).click();
  await page.getByRole("button", { name: "rotate left" }).click();
  await page.getByRole("button", { name: "reset" }).click();
  await page.getByRole("button", { name: "close" }).click();
  page.getByRole("button", { name: "open" });

  // Viewer thumbnails
  page.getByRole("radio", { name: "Recto" });
  page.getByRole("radio", { name: "Verso" });
  await page
    .getByTestId("work-viewer-wrapper")
    .getByRole("button", { name: "Arrow Forward" })
    .click();
  await page.getByRole("button", { name: "Arrow Back" }).click();

  await page
    .getByTestId("work-viewer-wrapper")
    .getByRole("button", { name: "Search" })
    .click();
  await page
    .getByTestId("work-viewer-wrapper")
    .getByPlaceholder("Search")
    .fill("Ve");

  // TODO: verify filter results display only one record

  // TODO: Be more selective that this is the Search thumbs filter close button
  await page.getByRole("button", { name: "Close" }).click();

  // Metadata
  await expect(page.getByTestId("title")).toHaveText("Grateful Dead");
  await expect(page.getByTestId("summary")).toHaveText("The Grateful Dead");

  // Modal window buttons exist
  await expect(
    page.getByRole("button", { name: "Find this item" })
  ).toBeVisible();
  // TODO: Test the flow of opening the modals and doing things
  await expect(
    page.getByRole("button", { name: "Cite this item" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "download" })).toBeVisible();

  await page.getByText("Date").click();
  await page.getByText("circa 1965 to circa 1970").click();
  await page.getByText("Department").click();
  await page
    .getByRole("link", {
      name: "Charles Deering McCormick Library of Special Collections",
    })
    .click();
  await expect(page).toHaveURL(
    "https://dc.library.northwestern.edu/search?libraryDepartment=Charles%20Deering%20McCormick%20Library%20of%20Special%20Collections"
  );
  await page.goto(
    "https://dc.library.northwestern.edu/items/702a177b-2259-4a0b-bf5c-3ad2d67384ee"
  );

  // TODO: Test for Collection display
});

test("Private Work page", async ({ page }) => {
  await page.goto(
    "https://dc.library.northwestern.edu/items/3192df36-8f6c-4cde-bdb4-265ab8606115"
  );

  // Announcement
  const announcementEl = page.getByTestId("announcement");
  await expect(
    announcementEl.getByRole("heading", { name: "Authentication needed" })
  ).toBeVisible();
  await expect(
    announcementEl.getByText(
      "This Work requires Northwestern University NetID authentication. Please sign in"
    )
  ).toBeVisible();
  await expect(
    announcementEl.getByText(
      "If you are not a member of the Northwestern Community, email repository@northwestern.edu to request access. Please include a short description of your research needs."
    )
  ).toBeVisible();
  await expect(
    announcementEl.getByRole("link", { name: "sign in" })
  ).toBeVisible();

  // Metadata
  // TODO: Verify metadata is visible
});

test("Authenticated user", async ({ page }) => {
  await page.goto("https://dc.library.northwestern.edu/");
  await page.getByRole("link", { name: "Sign in" }).click();

  await page.getByPlaceholder("NetID").fill(process.env.AUTH_USER || "");
  await page.getByPlaceholder("Password").fill(process.env.AUTH_PASSWORD || "");
  await page.getByRole("button", { name: /Log in/i }).click();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL("https://dc.library.northwestern.edu/");

  // TODO: Add credentials to Playwright storage state to re-use between tests
  // https://playwright.dev/docs/auth#basic-shared-account-in-all-tests

  await page.goto(
    "https://dc.library.northwestern.edu/items/3192df36-8f6c-4cde-bdb4-265ab8606115"
  );

  await expect(page.getByText("Authentication needed")).not.toBeVisible();
});
