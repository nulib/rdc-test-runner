import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dc.library.northwestern.edu/');
  await page.getByText('Northwestern UniversityExplore WorksBrowse CollectionsLibrariesAboutContactSign ').click();
  await page.getByRole('link', { name: 'Libraries | Digital Collections' });
  await page.getByText('LibrariesAboutContactSign in');
  await page.locator('.swiper-wrapper').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-wrapper').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('figure').filter({ hasText: 'Athletic Department Football FilmsNorthwestern vs. California (Rose Bowl), 1949' }).click();
  await page.locator('.swiper-button-next').click();
  await page.locator('figure').filter({ hasText: 'Commedia dell\'Arte: The Masks of Antonio FavaPulcinella "Stronzo" o "Arcigno"' }).click();
  await page.locator('.swiper-button-next').click();
  await page.locator('figure').filter({ hasText: 'Jim Roberts PhotographsPsychedelic Coke-bottle glasses' }).click();
  await page.locator('.swiper-button-next').click();
  await page.locator('figure').filter({ hasText: 'World War II Poster CollectionA careless word-- a needless sinking' }).click();
  await page.getByText('Northwestern University Libraries\' Digital Collections contain materials that re').click();
  await page.getByRole('button', { name: 'Dismiss' }).click();
  await page.getByRole('heading', { name: 'Enrich your research with primary sources' }).click();
  await page.getByText('Explore digital resources from the Northwestern University Library collections –').click();
  await page.locator('section').filter({ hasText: 'Enrich your research with primary sourcesExplore digital resources from the Nort' }).locator('div').nth(3).click();
  await page.getByRole('heading', { name: 'Collections' }).click();
  await page.getByRole('heading', { name: 'Works' }).click();
  await page.getByRole('link', { name: 'Ira Silverman Railroad Menu Collection Image' }).click();
  await page.getByRole('heading', { name: 'Top Subjects' }).click();
  await page.getByTestId('related-items').locator('div').filter({ hasText: 'Illinois Central Railroad CompanyPreviousNextView AllIllinois Central Railroad C' }).first().click();
  await page.getByRole('link', { name: 'Browse Collections' }).click();
  await page.getByRole('heading', { name: 'All Collections' }).click();
  await page.getByPlaceholder('Filter titles').click();
  await page.getByRole('heading', { name: 'Aldridge Collection' }).locator('a').click();
  await page.goto('https://dc.library.northwestern.edu/collections');
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').click();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').fill('cats');
  await page.getByTestId('submit-button').click();
  await page.getByRole('link', { name: 'Three cats sitting in window of clay house. Exterior Image' }).click();
  await page.getByRole('button', { name: 'inu-dil-da486556-ac8d-4c00-af34-7e114b8cd979.tif' }).click();
  await page.locator('.openseadragon-canvas').first().click({
    position: {
      x: 869,
      y: 300
    }
  });
  await page.getByRole('button', { name: 'zoom out' }).click();
  await page.getByRole('button', { name: 'reset' }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByRole('button', { name: 'Find this item' }).click();
  await page.getByTestId('facets-filter-close').click();
  await page.getByRole('button', { name: 'Cite this item' }).click();
  await page.getByTestId('facets-filter-close').click();
  await page.getByRole('button', { name: 'Download and share' }).click();
  await page.getByTestId('facets-filter-close').click();
});