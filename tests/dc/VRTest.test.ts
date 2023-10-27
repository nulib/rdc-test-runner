import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('test', async ({ page }) => {
  await page.goto('https://dc.library.northwestern.edu/');
  //expect to see Library Header
  await expect(page.getByRole('link', { name:'Libraries | Digital Collections' })).toBeVisible();
  //expect to see navigation buttons
  await expect (page.getByText('Northwestern UniversityExplore WorksBrowse CollectionsLibrariesAboutContactSign ')).toBeVisible;
  await page.locator('div').filter({ hasText: 'Libraries | Digital Collections' }).nth(3);
  //go to browse collections
  await page.getByRole('link', { name: 'Browse Collections' }).click();
  await expect (page.getByText('All Collections')).toBeVisible;
  //search for Arabic Manuscripts Collection
  await page.getByPlaceholder('Filter titles').click();
  await page.getByPlaceholder('Filter titles').fill('arabic');
  await expect (page.getByRole('heading', { name: 'Arabic Manuscripts from West Africa' }).locator('a')).toBeVisible;
  await expect (page.getByRole('link', { name: 'Libraries | Digital Collections' })).toBeVisible();
  await expect (page.getByRole('link', { name: 'Browse Collections' })).toBeVisible;
  await expect (page.getByRole('link', { name: 'View this Collection' })).toBeVisible();
  await expect (page.getByRole('link', { name: 'View Finding Aid' })).toBeVisible();
  await page.getByRole('tab', { name: 'About' }).click();
  await page.getByRole('tab', { name: 'Collection Organization' }).click();
  await page.getByRole('tab', { name: 'All Subjects' }).click();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').click()
  await page.goBack()
  await page.getByRole('heading', { name: 'Enrich your research with primary sources' });
  await page.getByText('Explore digital resources from the Northwestern University Library collections –');
  await page.getByText('Enrich your research with primary sourcesExplore digital resources from the Nort').click();
  await page.locator('section').filter({ hasText: 'Enrich your research with primary sourcesExplore digital resources from the Nort' }).locator('div').nth(3).click();
  await page.getByText('CollectionsView CollectionsArrow Forward').click();
  await page.locator('div').filter({ hasText: /^Ira Silverman Railroad Menu CollectionImage$/ }).first();
  await page.getByText('WorksExplore FurtherArrow Forward').click();
  await page.getByRole('contentinfo').locator('div').filter({ hasText: '© 2023 Northwestern UniversityCampus Emergency InformationCareersContact Northwe' }).first();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').click();
  await page.getByRole ('button', { name: 'Browse Collections' }).click();
  await expect (page.getByText('All Collections')).toBeVisible;
  await page.getByPlaceholder('Filter titles').fill('Arabic');
  await page.getByTitle('Arabic Manuscripts from West Africa').click()
  await expect (page.getByText ('VIEW FINDING AID')).toBeVisible();
  await expect (page.getByText ('VIEW THIS COLLECTION')).toBeVisible();
  await expect (page.getByText ('Libraries|Digital Collections')).toBeVisible();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').click()
  await page.goBack()
  await page.getByRole('link', { name: 'Browse Collections' }).scrollIntoViewIfNeeded()
  await page.getByRole('link', { name: 'Browse Collections' }).click();
  await page.locator('div').filter({ hasText: 'Northwestern UniversityExplore WorksBrowse CollectionsLibrariesAboutContactSign ' }).nth(2).click();
  await page.getByRole('heading', { name: 'All Collections' }).click();
  await page.getByPlaceholder('Filter titles').click();
  await page.getByText('All Collections16th-Early 20th Century Maps of Africa16th-Early 20th Century Map').click();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').click();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').fill('Cats');
  await page.getByTestId('submit-button').click();
  await page.getByTestId('results-count').click();
  await page.getByRole('link', { name: 'Three cats sitting in window of clay house. Exterior Image' }).click();
  await page.getByRole('button', { name: 'inu-dil-da486556-ac8d-4c00-af34-7e114b8cd979.tif' }).click();
  await page.getByTestId('title').click();
  await expect (page.getByText('Find this itemCite this itemDownload and share')).toBeVisible;
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').click();
  await page.getByPlaceholder('Search by keyword or phrase, ex: Berkeley Music Festival').fill('tintype fredrick aldridge');
})