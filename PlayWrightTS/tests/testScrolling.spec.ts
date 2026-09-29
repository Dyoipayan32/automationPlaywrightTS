import{test, expect} from '@playwright/test';
test('testpageScrolling', async({page})=>{
    await page.goto("https://techbeamers.com/selenium-practice-test-page/");
    // const targetElement = page.locator("xpath=//div[@class='form-group']/label[@for='country']");
    const targetElement = page.locator("xpath=//div[@class='progress-container']/label");
    await targetElement.scrollIntoViewIfNeeded();  
    await expect(targetElement).toBeVisible();
    const increaseBar = page.locator("[id='progress-increase']")
    await increaseBar.click();
});


test('testSlideToRight', async({page})=>{
    await page.goto("https://techbeamers.com/selenium-practice-test-page/");
    // const targetElement = page.locator("xpath=//div[@class='form-group']/label[@for='country']");
    const targetElement = page.locator("xpath=//div[@class='progress-container']/label");
    await targetElement.scrollIntoViewIfNeeded();  
    await expect(targetElement).toBeVisible();
    const slider = page.locator("[id='range-slider']");
    await slider.scrollIntoViewIfNeeded();
    await slider.focus();
    const slidervalue = Number(await slider.evaluate((el) => (el as HTMLInputElement).value));
    console.log(slidervalue);
    const targetValue=80;
    for(let i=0;i<Math.abs(targetValue-slidervalue);i++){
        await slider.press(targetValue>slidervalue?"ArrowRight":"ArrowLeft")
    }
    const sliderNewvalue = Number(await slider.inputValue());
    console.log(sliderNewvalue);   
    expect(sliderNewvalue).toEqual(targetValue);
});

test('testSlideToLeft', async({page})=>{
    await page.goto("https://techbeamers.com/selenium-practice-test-page/");
    // const targetElement = page.locator("xpath=//div[@class='form-group']/label[@for='country']");
    const targetElement = page.locator("xpath=//div[@class='progress-container']/label");
    await targetElement.scrollIntoViewIfNeeded();  
    await expect(targetElement).toBeVisible();
    const slider = page.locator("[id='range-slider']");
    await slider.scrollIntoViewIfNeeded();
    await slider.focus();
    const slidervalue = Number(await slider.evaluate((el) => (el as HTMLInputElement).value));
    console.log(slidervalue);
    const targetValue=10;
    for(let i=0;i<Math.abs(targetValue-slidervalue);i++){
        await slider.press(targetValue<slidervalue?"ArrowLeft":"ArrowRight")
    }
    const sliderNewvalue = Number(await slider.inputValue());
    console.log(sliderNewvalue);   
    expect(sliderNewvalue).toEqual(targetValue);
});

const myFuntion = (a:number, b:number) => {
    return a*b;
}


