const assert = require('assert');
const https = require("https");
//const fetch = require("node-fetch"); -не проходить, потрібно більше поковиряти


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
        //  //Test 4 Sitemap status code 200// - не розумію як встановити/зробити щоб запит проходив
        //  describe('Sitemap status code 200', () => {
        //     it('Test 1: Status of https://qa.casino-kit-prod.site/sitemap_main.xml', async function () {
        //         let siteUrl = 'https://qa.casino-kit-prod.site/sitemap_main.xml';
        //         await browser.url(siteUrl);
        //         let siteLink = await fetch(siteUrl);
        //         console.log(siteLink.status);
        //         let getStatus = siteLink.status;
        //         await assert(getStatus === 200);
        //     });
        // });

        //Test 5 Links are present in Sitemap//
    describe('Links are present in Sitemap', () => {
        it('check if post, page, casino, slot links are present', async () => {
        browser.url('https://qa.casino-kit-prod.site/sitemap_main.xml');
        const casinoUrl =$('body > urlset > url:nth-child(2) > loc');
        await expect(casinoUrl).toBePresent(); 
        await expect(casinoUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/zigzag777-casino/')
        const pageUrl =$('body > urlset > url:nth-child(42) > loc');
        await expect(pageUrl).toBePresent();
        await expect(pageUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/how-to-play-roulette/')
        const postUrl =$('body > urlset > url:nth-child(74) > loc');
        await expect(postUrl).toBePresent();
        await expect(postUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/postslug5/post-for-test/')
        const slotUrl =$('body > urlset > url:nth-child(97) > loc');
        await expect(slotUrl).toBePresent();
        await expect(slotUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/testslot5/pontoon-gamesos/')
        });
    });
    //Test 6 Open admin crossdomain settings again//
    describe('Open admin crossdomain settings', () => {
        it('should open crossdomain setting page in admin', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
        });
    }); 
     //Test 7 Checkbox in Category Payment Software//
     describe('Check selcted Checkbox in Category Payment Software', () => {
        it('should check Checkbox in Category Payment Software', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
            //await browser.pause(3000)-спробувать без паузи
            const selectedTaxonomies=$('#wpbody-content > div:nth-child(6) > div:nth-child(1) > form > div:nth-child(2) > input[type=hidden]')
            let selectedTaxonomiesChecked = await selectedTaxonomies.getAttribute('value');
            await assert.strictEqual(selectedTaxonomiesChecked, 'category,payments,software' )
            const saveSitemapBtn =$('#wpbody-content > div:nth-child(6) > div:nth-child(1) > form > button')
            saveSitemapBtn.click();
            await browser.pause(3000);
            });
        });
        //Test 8 Open category page in admin//
     describe('Open category page in admin', () => {
        it('should Open category page in admin', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/term.php?taxonomy=category&tag_ID=1814&post_type=casino&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dcategory%26post_type%3Dcasino');
        });
    });
    //Test 9 Check selected checkbox and update category page//
    describe('Check selected checkbox and update category page', () => {
        it('should check selected checkbox and update category page', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/term.php?taxonomy=category&tag_ID=1814&post_type=casino&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dcategory%26post_type%3Dcasino');
            const checkbox=$('#edittag > div.form-field.term-group > input[type=checkbox]')
            await expect(checkbox).toHaveAttr('checked')
            const updateBtn=$('#edittag > div.edit-tag-actions > input')
            updateBtn.click();
            await browser.pause(3000);
        });
    });
    //Test 10 Open payment page in admin//
    describe('Open payment page in admin', () => {
        it('should Open payment page in admin', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/term.php?taxonomy=payments&tag_ID=78&post_type=casino&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dpayments%26post_type%3Dcasino');
        });
    });
     //Test 11 Check selected checkbox and update payment page//
     describe('Check selected checkbox and update payment page', () => {
        it('Check selected checkbox and update payment page', async () => {
            browser.url('https://qa.casino-kit-prod.site/wp-admin/term.php?taxonomy=payments&tag_ID=78&post_type=casino&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dpayments%26post_type%3Dcasino');
            const checkbox=$('#edittag > div.form-field.term-group > input[type=checkbox]')
            await expect(checkbox).toHaveAttr('checked')
            const updateBtn=$('#edittag > div.edit-tag-actions > input')
            updateBtn.click();
            await browser.pause(3000);
        });
    });
//Test 12 Open sowtware page in admin//
describe('Open sowtware page in admin', () => {
    it('should Open sowtware page in admin', async () => {
        browser.url('https://qa.casino-kit-prod.site/wp-admin/term.php?taxonomy=software&tag_ID=1863&post_type=casino&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dsoftware%26post_type%3Dcasino');
    });
});
 //Test 13 Check selected checkbox and update software page//
 describe('Check selected checkbox and update software page', () => {
    it('Check selected checkbox and update software page', async () => {
        browser.url('https://qa.casino-kit-prod.site/wp-admin/term.php?taxonomy=software&tag_ID=1863&post_type=casino&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dsoftware%26post_type%3Dcasino');
        const checkbox=$('#edittag > div.form-field.term-group > input[type=checkbox]')
        await expect(checkbox).toHaveAttr('checked')
        const updateBtn=$('#edittag > div.edit-tag-actions > input')
        updateBtn.click();
        await browser.pause(3000);
    });
});
//Test 14 Open settings page in admin//
describe('Open settings page in admin', () => {
    it('should Open settings page in admin', async () => {
        browser.url('https://qa.casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
    });
});
 //Test 15 Sitemap generating with taxonomies
 describe('Generate new sitemap', () => {
    it('Generate new sitemap', async () => {
        browser.url('https://qa.casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
        const saveSitemapBtn =$('#wpbody-content > div:nth-child(6) > div:nth-child(1) > form > button')
        saveSitemapBtn.click();
        await browser.pause(3000);
        const genBtn = $('#generateSitemapAction')
        genBtn.click()
        await browser.pause(5000)
    });
});
//  //Test 16 Sitemap status 200 - поки не відпрацьовуе, на початку документу не проходить fetch
//  describe('Sitemap status code 200', () => {
//     it('Test 1: Status of https://qa.casino-kit-prod.site/sitemap_main.xml', async function () {
//         let siteUrl = 'https://qa.casino-kit-prod.site/sitemap_main.xml';
//         await browser.url(siteUrl);
//         let siteLink = await fetch(siteUrl);
//         console.log(siteLink.status);
//         let getStatus = siteLink.status;
//         await assert(getStatus === 200);
//     });
// });
   //Test 5 Taxonomies Links are present in Sitemap//
   describe('Taxonomies Links are present in Sitemap', () => {
    it('check if category,payment and software links are present', async () => {
    browser.url('https://qa.casino-kit-prod.site/sitemap_main.xml');
    const categoryUrl =$('body > urlset > url:nth-child(138) > loc');
    await expect(categoryUrl).toBePresent(); 
    await expect(categoryUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/category/test-category-for-4-0-0-da-year/')
    const paymentUrl =$('body > urlset > url:nth-child(140) > loc');
    await expect(paymentUrl).toBePresent(); 
    await expect(paymentUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/payment-for-test/')
    const softwareUrl =$('body > urlset > url:nth-child(137) > loc');
    await expect(softwareUrl).toBePresent(); 
    await expect(softwareUrl).toHaveTextContaining('https://qa.casino-kit-prod.site/soft5/test-software-for-4-0-0/')
    });
});
    
