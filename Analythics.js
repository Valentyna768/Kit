const assert = require('assert');
const exp = require('constants');


describe('Crossdomain', () => {
    beforeEach(async function () {
        browser.setWindowSize(1440, 1079);
    });
});
 

     //Test 0.1 Login to Admin//
     describe('Login to Admin', () => {
        it('should login with valid credentials', async () => {
            browser.url('https://qa.casino-kit-prod.site/sec-adm');
            const login = await $('#user_login');
            await login.setValue('ncteDman');
            console.log(await login.getValue());
            const password = await $('#user_pass');
            await password.setValue('XijohWiu7sheeR');
            console.log(await password.getValue());
            const submitBtn = $('#wp-submit');
            submitBtn.click()
            await browser.pause(5000)
            await browser.url('https://qa.casino-kit-prod.site/wp-admin/')
        });
    });
      //Test 0.2 Check if Tracking script is tutn on //
      describe('Check if Tracking script is tutn on', () => {
        it('Check if Tracking script is tutn on', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/admin.php?page=theme-general-settings');
            await browser.pause(3000)
            const trackScr=$('#acf-group_5c934156d45d3 > div.inside.acf-fields.-top.-sidebar > div.acf-tab-wrap.-left > ul > li.active > a')
            trackScr.click
            await browser.pause(3000)
            const trackSwitch = $('#acf-group_5c934156d45d3 > div.inside.acf-fields.-top.-sidebar > div.acf-field.acf-field-true-false.acf-field-5f4d3598b92a6 > div.acf-input > div > label > div');
            let trackSwitchYes = await trackSwitch.getAttribute('class');
            await assert.strictEqual(trackSwitchYes, 'acf-switch -on' );
        });
    }); 
    //Test 0.3 Check GTM code //
    describe('Check GTM code', () => {
        it('Check GTM code', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/admin.php?page=analytic-general-settings');
            await browser.pause(3000)
            const gtm=$('#acf-field_5e5d2203033c4')
            let gymCode = await gtm.getAttribute('value');
            await assert.strictEqual(gymCode, 'GTM-TG62KD5' );
            const gtmRadiobtn = $('#acf-group_5e5d21e510692 > div.inside.acf-fields.-top > div.acf-field.acf-field-radio.acf-field-5e5d22154b457 > div.acf-input > ul > li:nth-child(1) > label')
            let gtmRadiobtnYes = await gtmRadiobtn.getAttribute('class')
            await assert.strictEqual (gtmRadiobtnYes, 'selected')
        });
    }); 
        //Test 1 Check GTM head code on Homepage//
    describe('Check GTM head code on Homepage', () => {
        it('Check GTM head code on Homepage', async () => {
            browser.url('https://qa.casino-kit-prod.site');
            const headGtm = $('head > script:nth-child(44)')
            let headGtmCode = await headGtm.getAttribute('src')
            await assert.strictEqual(headGtmCode, 'https://www.googletagmanager.com/gtm.js?id=GTM-TG62KD5')
        });
    }); 
      //Test 2 Check GTM body code on Homepage//
      describe('Check GTM body code on Homepage', () => {
        it('Check GTM body code on Homepage', async () => {
            browser.url('https://qa.casino-kit-prod.site');
            await browser.pause(3000)
            const headGtm = $('body > noscript')
            await expect(headGtm).toBePresent();
        });
    }); 
     //Test 3 and 4 Check redirect from cart logo 1 and dataLayer events//
describe('Check redirect from cart logo 1 and dataLayer events', () => {
    it('Check redirect from cart logo 1 and dataLayer events', async () => {
        browser.url('https://qa.casino-kit-prod.site/');
        await browser.pause(2000)
        const logoRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-fragment-table-body.bfad91c.bfad7bc > div:nth-child(1) > div > div.bfad713.bfaddf4')
        await expect(logoRedirect).click
        await browser.newWindow ('https://qa.casino-kit-prod.site/to-casino/?id=27774&location=https://qa.casino-kit-prod.site/&cid=1943612551.1655798843&element=cl1&casino_name=nitrocasino&position=1&geo=')
        await expect(browser).toHaveUrlContaining('https://biitly.info/7nvXrK?id_casino=27774&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=cl1&cid=368111694.1658728743&position=1&geo=not-geolocation&casino_name=nitrocasino')
        await browser.pause(3000)
        await browser.switchWindow('https://qa.casino-kit-prod.site/')
        await browser.pause(3000)
        //console.log({event: 'GAevent', eventCategory: 'toCasino', eventAction: 'cl1', eventLabel: 'NітrоСąsіnо', position: 1,})
    });
})
//Test 5 and 6 Check redirect from table overlay 2 and dataLayer events//
describe('Check redirect from cart overlay 2 and dataLayer events', () => {
    it('Check redirect from cart overlay 2 and dataLayer events', async () => {
        browser.url('https://qa.casino-kit-prod.site/');
        await browser.pause(2000)
        const overlayRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-fragment-table-body.bfad91c.bfad7bc > div:nth-child(2) > div')
        await expect(overlayRedirect).click
        await browser.newWindow('https://qa.casino-kit-prod.site/to-casino/?id=27151&location=https://qa.casino-kit-prod.site/&cid=1943612551.1655798843&element=cb1&casino_name=african%20grand%20casino&position=2&geo=') 
        await expect(browser).toHaveUrlContaining('https://biitly.info/7nvXrK?id_casino=27151&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=cb1&cid=1943612551.1655798843&position=2&geo=not-geolocation&casino_name=african+grand+casino')
        await browser.pause(3000)
        await browser.switchWindow('https://qa.casino-kit-prod.site/')
        await browser.pause(3000)
        //console.log({event: 'GAevent', eventCategory: 'toCasino', eventAction: 'cl1', eventLabel: 'NітrоСąsіnо', position: 1,})
    });
})
//Test 7 and 8 Check redirect from cart 3 cta and dataLayer events//
describe('Check redirect from cart 3 cta and dataLayer events', () => {
    it('Check redirect from cart 3 cta and dataLayer events', async () => {
        browser.url('https://qa.casino-kit-prod.site/');
        await browser.pause(2000)
        const overlayRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-fragment-table-body.bfad91c.bfad7bc > div:nth-child(3) > div > div.bfadfa99.bfadcef5.bfaddf4 > button')
        await expect(overlayRedirect).click
        await browser.newWindow('https://qa.casino-kit-prod.site/to-casino/?id=26934&location=https://qa.casino-kit-prod.site/&cid=1943612551.1655798843&element=btn1&casino_name=brazino777%20casino&position=3&geo=') 
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('https://biitly.info/7nvXrK?id_casino=26934&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=btn1&cid=1943612551.1655798843&position=3&geo=not-geolocation&casino_name=brazino777+casino')
        await browser.pause(2000)
        await browser.switchWindow('https://qa.casino-kit-prod.site/')
        await browser.pause(3000)
        //console.log({event: 'GAevent', eventCategory: 'toCasino', eventAction: 'cl1', eventLabel: 'NітrоСąsіnо', position: 1,})
    });
})
//Test 9 and 10 Check redirect from table logo 4 and dataLayer events//
describe('Check redirect from table logo 4 and dataLayer events', () => {
    it('Check redirect from table logo 4 and dataLayer events', async () => {
        browser.url('https://qa.casino-kit-prod.site/');
        await browser.pause(2000)
        const overlayRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-ajax-casino-table > div.bfadbb4.bfad537 > div > div.js-fragment-table-body.bfad510d > div:nth-child(1) > div.bfad3a2.bfadc0fa > div > img')
        await expect(overlayRedirect).click
        await browser.newWindow('https://qa.casino-kit-prod.site/to-casino/?id=27129&location=https://qa.casino-kit-prod.site/&cid=1943612551.1655798843&element=l1&casino_name=butlers%20bingo&position=4&geo=') 
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('https://biitly.info/7nvXrK?id_casino=27129&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=l1&cid=1943612551.1655798843&position=4&geo=not-geolocation&casino_name=butlers+bingo')
        await browser.pause(2000)
        await browser.switchWindow('https://qa.casino-kit-prod.site/')
        await browser.pause(3000)
        //console.log({event: 'GAevent', eventCategory: 'toCasino', eventAction: 'cl1', eventLabel: 'NітrоСąsіnо', position: 1,})
    });
})
//Test 11 and 12 Check redirect from table overlay 5 and dataLayer events//
describe('Check redirect from table overlay 5 and dataLayer events', () => {
    it('Check redirect from table overlay 5 and dataLayer events', async () => {
        browser.url('https://qa.casino-kit-prod.site/');
        await browser.pause(2000)
        const overlayRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-ajax-casino-table > div.bfadbb4.bfad537 > div > div.js-fragment-table-body.bfad510d > div:nth-child(2)')
        await expect(overlayRedirect).click
        await browser.newWindow('https://qa.casino-kit-prod.site/to-casino/?id=26936&location=https://qa.casino-kit-prod.site/&cid=1943612551.1655798843&element=t1&casino_name=casino%20empire777&position=5&geo=') 
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('https://biitly.info/7nvXrK?id_casino=26936&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=t1&cid=1943612551.1655798843&position=5&geo=not-geolocation&casino_name=casino+empire777')
        await browser.pause(2000)
        await browser.switchWindow('https://qa.casino-kit-prod.site/')
        await browser.pause(3000)
        //console.log({event: 'GAevent', eventCategory: 'toCasino', eventAction: 'cl1', eventLabel: 'NітrоСąsіnо', position: 1,})
    });
})
//Test 13 and 14 Check redirect from table cta 6 and dataLayer events//
describe('Check redirect from table cta 6 and dataLayer events', () => {
    it('Check redirect from table cta 6 and dataLayer events', async () => {
        browser.url('https://qa.casino-kit-prod.site/');
        await browser.pause(2000)
        const overlayRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-ajax-casino-table > div.bfadbb4.bfad537 > div > div.js-fragment-table-body.bfad510d > div:nth-child(3) > div.bfad3a2.bfadce3.bfadd93 > button')
        await expect(overlayRedirect).click
        await browser.newWindow('https://qa.casino-kit-prod.site/to-casino/?id=26930&location=https://qa.casino-kit-prod.site/&cid=1943612551.1655798843&element=b1&casino_name=casino%20777&position=6&geo=') 
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('https://biitly.info/7nvXrK?id_casino=26930&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=b1&cid=1943612551.1655798843&position=6&geo=not-geolocation&casino_name=casino+777')
        await browser.pause(2000)
        await browser.switchWindow('https://qa.casino-kit-prod.site/')
        await browser.pause(3000)
        //console.log({event: 'GAevent', eventCategory: 'toCasino', eventAction: 'cl1', eventLabel: 'NітrоСąsіnо', position: 1,})
    });
})
