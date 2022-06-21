const assert = require('assert');
const mock = browser.mock('**sitemap_main.xml*', { method: 'POST' }) //перевірити у тесті статус коду Test3

describe('Crossdomain', () => {
    beforeEach(async function () {
       // browser.url('https://casino-kit-prod.site/');
        browser.setWindowSize(1440, 1079);
    });
});
    //Test 0.1 Web auth//
    describe('Login to Web Auth', () => {
        it('should login with valid credentials to web auth', async () => {
            //пройти веб-авторизацію

        });
    });

     //Test 0.2 Login to Admin//
     describe('Login to Admin', () => {
        it('should login with valid credentials', async () => {
            browser.url('https://casino-kit-prod.site/sec-adm/');
            const login = await $('#user_login');
            await login.setValue('ncteDman');
            console.log(await login.getValue());
            const password = await $('#user_pass');
            await password.setValue('XijohWiu7sheeR');
            console.log(await password.getValue());
            const submitBtn = $('#wp-submit');
            submitBtn.click()
            await browser.pause(5000)
            await browser.url('https://casino-kit-prod.site/wp-admin/')
        });
    });
      //Test 0.3 Check if plugins are active//
      describe('Check if plugins are active', () => {
        it('Check if plugins are active', async () => {
            browser.url('https://casino-kit-prod.site/wp-admin/plugins.php');
            //await browser.pause(3000)
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
            browser.url('https://casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
            //await browser.pause(3000) -спробувать без паузи
        });
    }); 
    //Test 2 Checkbox in Page Post Casino Slots//
    describe('Checkbox in Page Post Casino Slots', () => {
        it('should check Checkbox in Page Post Casino Slots', async () => {
            browser.url('https://casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
            //await browser.pause(3000)-спробувать без паузи
            const CheckboxPost = $('#type_post');
            let CheckboxPostTrue = await CheckboxPost.getAttribute('checked');
            await assert.strictEqual(CheckboxPostTrue, 'checked' );//перевірити чи відпрацює
            const CheckboxPage = $('#type_page');
            let CheckboxPageTrue = await CheckboxPage.getAttribute('checked');
            await assert.strictEqual(CheckboxPageTrue, 'checked' );
            const CheckboxCasino = $('#type_casino');
            let CheckboxCasinoTrue = await CheckboxCasino.getAttribute('checked');
            await assert.strictEqual(CheckboxCasinoTrue, 'checked' );
            const CheckboxSlots = $('##type_slots');
            let CheckboxSlotsTrue = await CheckboxSlots.getAttribute('checked');
            await assert.strictEqual(CheckboxSlotsTrue, 'checked' );
            const saveSitemapBtn =$('#wpbody-content > div:nth-child(6) > div:nth-child(1) > form > button')
            setEnvBtn.click();
            await browser.pause(3000);
            });

            //const elem = await $('#elem')
            //await expect(elem).toBeSelected()
            //альтернативний спосіб, спробувати примінити його на перевірку вибраних чекбоксів
        });
        //Test 3 Generate Sitemap//
        describe('Generate Sitemap', () => {
        it('Generate Sitemap', async () => {
            const generateSitemapBtn =$('#generateSitemapAction')
            generateSitemapBtn.click();
            await browser.pause(3000);
        });
    });
        //Test 4 Sitemap status code 200//
        describe('Sitemap status code 200', () => {
        it('Sitemap status code 200', async () => {    
            await expect(mock).toBeRequestedWith({
            url: 'https://casino-kit-prod.site/sitemap_main.xml',                                 
            statusCode: 200,              //чи пройде?
        });
    });
    //Test 5 Links are present in Sitemap//
    describe('Links are present in Sitemap', () => {
        it('check if post, page, casino, slot links are present', async () => {
        browser.url('https://casino-kit-prod.site/sitemap_main.xml');
        const casinoUrl =$('body > urlset > url:nth-child(24) > loc');
        await expect(casinoUrl).toBePresent(); //перевірити чи пройде, і чи зафейлиться тест, якщо цього посилання не буде
        const pageUrl =$('body > urlset > url:nth-child(52) > loc');
        await expect(pageUrl).toBePresent();
        const postUrl =$('body > urlset > url:nth-child(64) > xhtml:link');
        await expect(postoUrl).toBePresent();
        const slotUrl =$('body > urlset > url:nth-child(91) > loc');
        await expect(slotUrl).toBePresent();
        });
    });
}); 
