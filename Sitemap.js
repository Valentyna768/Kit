const assert = require('assert');
//const mock = browser.mock('**sitemap_main.xml*', { method: 'POST' }) //перевірити у тесті статус коду Test3

describe('Crossdomain', () => {
    beforeEach(async function () {
        browser.setWindowSize(1440, 1079);
    });
});
 

     //Test 0.2 Login to Admin//
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
      //Test 0.3 Check if plugins are active//
      describe('Check if plugins are active', () => {
        it('Check if plugins are active', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/plugins.php');
            await browser.pause(3000)
            const cloackingPlugin = $('#the-list > tr:nth-child(7) > td.plugin-title.column-primary > div > span');
            let cloackingPluginActive = await cloackingPlugin.getAttribute('class');
            await assert.strictEqual(cloackingPluginActive, 'deactivate' );
            const crossdomainPlugin = $('#the-list > tr:nth-child(10) > td.plugin-title.column-primary > div > span');
            let crossdomainPluginActive = await crossdomainPlugin.getAttribute('class');
            await assert.strictEqual(crossdomainPluginActive, 'deactivate' );
        });
    }); 
     //Test 1 Open admin crossdomain settings//
     describe('Open admin crossdomain settings', () => {
        it('should open crossdomain setting page in admin', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
        });
    }); 
    //Test 2 Checkbox in Page Post Casino Slots//
    describe('Checkbox in Page Post Casino Slots', () => {
        it('should check Checkbox in Page Post Casino Slots', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
            //await browser.pause(3000)-спробувать без паузи
            const selectedPosts=$('#wpbody-content > div:nth-child(6) > div:nth-child(1) > form > div:nth-child(1) > input[type=hidden]')
            let selectedPostsChecked = await selectedPosts.getAttribute('value');
            await assert.strictEqual(selectedPostsChecked, 'post,page,casino,slots' )
            const saveSitemapBtn =$('#wpbody-content > div:nth-child(6) > div:nth-child(1) > form > button')
            saveSitemapBtn.click();
            await browser.pause(3000);
            });
        });
        //Test 3 Generate Sitemap//
        describe('Generate Sitemap', () => {
            it('Generate Sitemap', async () => {
                const generateSitemapBtn =$('#generateSitemapAction')
                generateSitemapBtn.click();
                await browser.pause(3000);
                const message=$('#responseSitemapAction')
                await expect(message).toExist()
                await expect(message).toHaveTextContaining('sitemap is generated')
            });
        });
    
