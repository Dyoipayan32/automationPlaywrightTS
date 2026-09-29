// import {test, expect} from '@playwright/test';

// test('LoginTest', async({page}) => {
//     // await page.goto('/');
//     await page.goto('https://courses.ultimateqa.com/users/sign_in');
//     // await page.fill('xpath=//*[@id="user[email]"]', 'dyoipayandas@gmail.com');
//     // await page.fill('xpath=//*[@id="user[password]"]', 'Dwai@ultiqa2026');
//     const emailSelector = '[name="user[email]"]';
//     const passwordSelector = '[name="user[password]"]';
    
//     await page.fill(emailSelector, 'dyoipayandas@gmail.com');
//     await page.fill(passwordSelector, 'Dwai@ultiqa2026');
    
//     await page.click('xpath=//button[@type="submit"]');
    
//     const welcomeHeader = page.locator('xpath=//div[@class="student-dashboard__container"]//h2[@class="student-dashboard__welcome section__heading"]');
//     // Assertion: element should be visible
//     await expect(welcomeHeader).toBeVisible();

//     // Option 2: Programmatic check
//     const isWelcomeTextVisible = await welcomeHeader.isVisible();
//     console.log(isWelcomeTextVisible);
// });