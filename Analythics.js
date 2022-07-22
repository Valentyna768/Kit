const assert = require('assert');


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
    
