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
     //Test 2 Check redirect from table logo//
     describe('Check GTM body code on Homepage', () => {
        it('Check GTM body code on Homepage', async () => {
            browser.url('https://qa.casino-kit-prod.site');
            await browser.pause(2000)
            const logoRedirect = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > main > section:nth-child(2) > div.js-fragment-table-body.bfad91c.bfad7bc > div:nth-child(1) > div > div.bfad713.bfaddf4')
            await expect(logoRedirect).click
            await browser.newWindow ('https://biitly.info/7nvXrK?id_casino=27774&location=https%3A%2F%2Fqa.casino-kit-prod.site%2F&element=cl1&cid=368111694.1658728743&position=1&geo=not-geolocation&casino_name=nitrocasino')
            await browser.pause(3000)
        });
    }); 
