const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open the URL
  await page.goto('https://dc.library.northwestern.edu/');

  // Set window size
  await page.setViewportSize({ width: 1028, height: 590 });

  // Click through hero sections
  for (let i = 1; i <= 7; i++) {
    await page.click('.swiper-button-next');
  }

  // Scroll the window
  await page.evaluate(() => {
    window.scrollTo(0, 465);
  });

  // Close the browser