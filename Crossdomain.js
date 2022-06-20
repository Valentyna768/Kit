const assert = require('assert');

describe('Crossdomain', () => {
    beforeEach(async function () {
       // browser.url('https://casino-kit-prod.site/');
        browser.setWindowSize(1440, 1079);
    });
     //Test 0 Login to Admin//
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
    //Test 1 Open admin crossdomain settings//
    describe('Open admin crossdomain settings', () => {
        it('should open crossdomain setting page in admin', async () => {
            browser.url('https://casino-kit-prod.site/wp-admin/options-general.php?page=sitemap-custom-polylang');
            await browser.pause(3000)
        });
    }); 
      //Test 2 Updating crossdomain settings//
      describe('Updating crossdomain settings', () => {
        it('Click on button and update crossdomain settings', async () => {
        const btnStatus = $('#crossdomain_status > option:nth-child(1)');
        let btnStatusTitle = await btnStatus.getAttribute('value');
        await assert.strictEqual(btnStatusTitle, 'true' );
        const btnStatusFalce = $('#crossdomain_status > option:nth-child(2)');
        let btnStatusFalceTitle = await btnStatusFalce.getAttribute('value');
        await assert.strictEqual(btnStatusFalceTitle, 'false' );
        const updateSaveBtn = $('#crossdomainAction');
        updateSaveBtn.click()
        await browser.pause(5000)
        const CheckCount = $('#crossCheckCount')
        await expect(CheckCount).toHaveText('12')
        const resultCount = $('#crossDomainResponse > span:nth-child(2)')
        await expect (resultCount).toHaveText('12') 
        });
    });
    //Test 3 Enable language switcher settings//
    describe('Enable language switcher settings', () => {
        it('Enable language switcher settings', async () => {
            const showLangCheck = await $('#show_select_languages_in_header_menu');
            await expect(showLangCheck).toBePresent();
            const menuView = $('#show_lang_menu_view > option:nth-child(2)');
            let menuViewImg = await menuView.getAttribute('value');
            await assert.strictEqual(menuViewImg, 'image' );
            await expect (menuView).toHaveAttribute('selected')
            //expect(menuView).toHaveAttribute('value="image" selected');
            const saveSettingsBtn =$('#wpbody-content > div:nth-child(7) > form > button');
            saveSettingsBtn.click();
            await browser.pause(3000)
        });
    });
    //Test 4 Set environement//
    describe('Set environement', () => {
        it('Check prod environement and save settings', async () => {
            const envSelector =$('#crossdomain_env > option:nth-child(2)');
            let envSelectorEnv = await envSelector.getAttribute('value');
            await assert.strictEqual(envSelectorEnv, 'prod' );
            await expect (envSelector).toHaveAttribute('selected')
            const setEnvBtn =$('#wpbody-content > div:nth-child(8) > form > button')
            setEnvBtn.click();
            await browser.pause(3000);
        });
    });
    //Test 5 Check all href for homepage//
    describe('Check all href for homepage', () => {
        it('Check all href for homepage', async () => {
            browser.url('https://casino-kit-prod.site/')
            await browser.pause (3000); //чи  потрібна тут пауза
            // в коді не можу знайти потрібні зв'язки, відпрацювати цей кейс коли буде новий енв і налаштована зв'язка

        });
    });
    //Test 6 Check canonical for homepage//
    describe('Check canonical for homepage', () => {
        it('Check canonical for homepage', async () => {
            browser.url('https://casino-kit-prod.site/');
            await browser.pause (3000); //чи  потрібна тут пауза
            const canonical = $('head > link:nth-child(32)');
            expect(canonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/"'); //Чи вірно обрано .toHaveAttribute? вставити правильний канонікал коли буде новий енв і налаштована зв'язка
        });
    });
    //Test 7 Check img url for language switcher for homepage//
    describe('Check img url for language switcher for homepage', () => {
        it('Check img url for language switcher', async () => {
            browser.url('https://casino-kit-prod.site/');
            await browser.pause (3000); //чи  потрібна тут пауза
            const imgSwitchHome = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchHome).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');//Чи вірно обрано .toHaveAttribute? вставити правильний img коли буде новий енв і налаштована зв'язка
        });
    });
    //Test 8 Check img alt and title for homepage language switcher //
    describe('Check img alt and title for homepage language switcher', () => {
        it('Check img alt and title for homepage language switcher', async () => {
            browser.url('https://casino-kit-prod.site/');
            await browser.pause (3000); //чи  потрібна тут пауза
            const imgSwitchHome = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            let imgSwitchHomeTitle = await imgSwitchHome.getAttribute('title');
            await assert.strictEqual(imgSwitchHomeTitle, 'flag2' );
            let imgSwitchHomeAlt = await imgSwitchHome.getAttribute('alt');
            await assert.strictEqual(imgSwitchHomeAlt, 'alt2' );
        });
    });
    //Test 9 Check href for casino page//
    describe('Check href for casino page', () => {
        it('Check href for casino page', async () => {
            browser.url('https://casino-kit-prod.site/wir-wetten-casino')
            await browser.pause (3000);
            const casinoHref = $('head > link:nth-child(43)')
            expect(casinoHref).toHaveAttribute('href="https://casino-kit-prod.site/wir-wetten-casino/alternate/"')
        });
    });
    //Test 10 Check canonical for casinopage//
    describe('Check canonical for casinopage', () => {
        it('Check canonical for casinopage', async () => {
            browser.url('https://casino-kit-prod.site/wir-wetten-casino')
            await browser.pause (3000);
            const casinoCanonical = $('head > link:nth-child(28)');
            expect(casinoCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/wir-wetten-casino/canonical/"'); 
        });
    });
    //Test 11 Check casinopage img url for language switcher //
    describe('Check casinopage img url for language switcher', () => {
        it('Check casinopage img url for language switcher', async () => {
            browser.url('https://casino-kit-prod.site/wir-wetten-casino')
            await browser.pause (3000);
            const imgSwitchCasino = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchCasino).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
        });
    });
    //Test 12 Check img alt and title for casino page language switcher //
    describe('Check img alt and title for casino page language switcher', () => {
        it('Check img alt and title for casino page language switcher', async () => {
            browser.url('https://casino-kit-prod.site/wir-wetten-casino')
            await browser.pause (3000);
            const imgSwitchCasino = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            let imgSwitchCasinoTitle = await imgSwitchCasino.getAttribute('title');
            await assert.strictEqual(imgSwitchCasinoTitle, 'flagtitle1212' );
            let imgSwitchCasinoAlt = await imgSwitchCasino.getAttribute('alt');
            await assert.strictEqual(imgSwitchCasinoAlt, 'test1212' );
        });
    });
     //Test 13 Check href for slot page//
     describe('Check href for slot page', () => {
        it('Check href for slot page', async () => {
            browser.url('https://casino-kit-prod.site/testslot5/test-slot-for-4-0-0/')
            await browser.pause (3000);
            const slotHref = $('head > link:nth-child(47)')
            expect(slotHref).toHaveAttribute('href="https://casino-kit-prod.site/testslot5/test-slot-for-4-0-0/alternate/"')
        });
    });
    //Test 14 Check canonical for slot page//
    describe('Check canonical for slot page', () => {
        it('Check canonical for casinopage', async () => {
            browser.url('https://casino-kit-prod.site/testslot5/test-slot-for-4-0-0/')
            await browser.pause (3000);
            const slotCanonical = $('head > link:nth-child(26)');
            expect(slotCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/testslot5/test-slot-for-4-0-0/canonical/"'); 
        });
    });
    //Test 15 Check slot page img url for language switcher //
    describe('Check slot page img url for language switcher', () => {
        it('Check slot page img url for language switcher', async () => {
            browser.url('https://casino-kit-prod.site/testslot5/test-slot-for-4-0-0/')
            await browser.pause (3000);
            const imgSwitchSlot = $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchSlot).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
        });
    });
    //Test 16 Check img alt and title for slot page language switcher //
    describe('Check img alt and title for slot page language switcher', () => {
        it('Check img alt and title for slot page language switcher', async () => {
            browser.url('https://casino-kit-prod.site/testslot5/test-slot-for-4-0-0/')
            await browser.pause (3000);
            const imgSwitchSlot = $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            let imgSwitchSlotTitle = await imgSwitchSlot.getAttribute('title');
            await assert.strictEqual(imgSwitchSlotTitle, 'flag_for_slot' );
            let imgSwitchSlotAlt = await imgSwitchSlot.getAttribute('alt');
            await assert.strictEqual(imgSwitchSlotAlt, 'alt_for_slot' );
        });
    });
     //Test 17 Check href for payment page//
     describe('Check href for payment page', () => {
        it('Check href for payment page', async () => {
            browser.url('https://casino-kit-prod.site/american-express/')
            await browser.pause (3000);
            const paymentHref = $('head > link:nth-child(41)')
            expect(paymentHref).toHaveAttribute('href="https://casino-kit-prod.site/american-express/alternate/"')
        });
    });
    //Test 18 Check canonical for payment page//
    describe('Check canonical for payment page', () => {
        it('Check canonical for payment page', async () => {
            browser.url('https://casino-kit-prod.site/american-express/')
            await browser.pause (3000);
            const paymentCanonical = $('head > link:nth-child(27)');
            expect(paymentCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/american-express/canonical/"'); 
        });
    });
    //Test 19 Check payment page img url for language switcher //
    describe('Check payment page img url for language switcher', () => {
        it('Check payment page img url for language switcher', async () => {
            browser.url('https://casino-kit-prod.site/american-express/')
            await browser.pause (3000);
            const imgSwitchPayment = $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchPayment).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
        });
    });
    //Test 20 Check img alt and title for payment page language switcher //
    describe('Check img alt and title for payment page language switcher', () => {
        it('Check img alt and title for payment page language switcher', async () => {
            browser.url('https://casino-kit-prod.site/american-express/')
            await browser.pause (3000);
            const imgSwitchPayment = $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchPayment).toHaveAttribute('title="flag_for_payment"');
            expect(imgSwitchPayment).toHaveAttribute('alt="alt_for_payment"');
        });
    });
    //Test 21 Check href for software page//
    describe('Check href for software page', () => {
        it('Check href for software page', async () => {
            browser.url('https://casino-kit-prod.site/soft5/1x2-gaming/')
            await browser.pause (3000);
            const softwareHref = $('head > link:nth-child(41)')
            expect(softwareHref).toHaveAttribute('href="https://casino-kit-prod.site/soft5/1x2-gaming/alternate/"')
        });
    });
    //Test 22 Check canonical for software page//
    describe('Check canonical for software page', () => {
        it('Check canonical for software page', async () => {
            browser.url('https://casino-kit-prod.site/soft5/1x2-gaming/')
            await browser.pause (3000);
            const softwareCanonical = $('head > link:nth-child(27)');
            expect(softwareCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/soft5/1x2-gaming/canonical/"'); 
        });
    });
    //Test 23 Check software page img url for language switcher //
    describe('Check software page img url for language switcher', () => {
        it('Check software page img url for language switcher', async () => {
            browser.url('https://casino-kit-prod.site/soft5/1x2-gaming/')
            await browser.pause (3000);
            const imgSwitchSoftware = $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchSoftware).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
        });
    });
    //Test 24 Check img alt and title for software page language switcher //
    describe('Check img alt and title for software page language switcher', () => {
        it('Check img alt and title for software page language switcher', async () => {
            browser.url('https://casino-kit-prod.site/soft5/1x2-gaming/')
            await browser.pause (3000);
            const imgSwitchSoftware = await $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            let imgSwitchSoftwareTitle = await imgSwitchSoftware.getAttribute('title');
            await assert.strictEqual(imgSwitchSoftwareTitle, 'flag_for_software' );
            let imgSwitchSoftwareAlt = await imgSwitchSoftware.getAttribute('alt');
            await assert.strictEqual(imgSwitchSoftwareAlt, 'alt_for_software' );
        });
    });
        //Test 25 Check href for tag page//
        describe('Check href for tag page', () => {
            it('Check href for tag page', async () => {
                browser.url('https://casino-kit-prod.site/testtag5/tag-for-test/')
                await browser.pause (3000);
                const tagHref = $('head > link:nth-child(45)')
                expect(tagHref).toHaveAttribute('href="https://casino-kit-prod.site/testtag/test/alternate/"')
            });
        });
        //Test 26 Check canonical for tag page//
        describe('Check canonical for tag page', () => {
            it('Check canonical for tag page', async () => {
                browser.url('https://casino-kit-prod.site/testtag5/tag-for-test/')
                await browser.pause (3000);
                const tagCanonical = $('head > link:nth-child(28)');
                expect(tagCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/testtag/test/canonical/"'); 
            });
        });
        //Test 27 Check tag page img url for language switcher //
        describe('Check tag page img url for language switcher', () => {
            it('Check tag page img url for language switcher', async () => {
                browser.url('https://casino-kit-prod.site/testtag5/tag-for-test/')
                await browser.pause (3000);
                const imgSwitchTag = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
                expect(imgSwitchTag).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
            });
        });
        //Test 28 Check img alt and title for tag page language switcher //
        describe('Check img alt and title for tag page language switcher', () => {
            it('Check img alt and title for tag page language switcher', async () => {
                browser.url('https://casino-kit-prod.site/testtag5/tag-for-test/')
                await browser.pause (3000);
                const imgSwitchTag = await $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
                let imgSwitchTagTitle = await imgSwitchTag.getAttribute('title');
                await assert.strictEqual(imgSwitchTagTitle, 'flag_for_tag' );
                let imgSwitchTagAlt = await imgSwitchTag.getAttribute('alt');
                await assert.strictEqual(imgSwitchTagAlt, 'alt_for_tag' );
            });
        });
         //Test 29 Check href for post page//
         describe('Check href for post page', () => {
            it('Check href for post page', async () => {
                browser.url('https://casino-kit-prod.site/postslug5/what-do-you-need-to-know-before-playing-blackjack-online/')
                await browser.pause (3000);
                const postHref = $('head > link:nth-child(49)')
                expect(postHref).toHaveAttribute('href="https://casino-kit-prod.site/postslug5/what-do-you-need-to-know-before-playing-blackjack-online/alternate/"')
            });
        });
        //Test 30 Check canonical for post page//
        describe('Check canonical for post page', () => {
            it('Check canonical for post page', async () => {
                browser.url('https://casino-kit-prod.site/postslug5/what-do-you-need-to-know-before-playing-blackjack-online/')
                await browser.pause (3000);
                const postCanonical = $('head > link:nth-child(28)');
                expect(postCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/postslug5/what-do-you-need-to-know-before-playing-blackjack-online/canonical/"'); 
            });
        });
        //Test 31 Check post page img url for language switcher //
        describe('Check post page img url for language switcher', () => {
            it('Check post page img url for language switcher', async () => {
                browser.url('https://casino-kit-prod.site/postslug5/what-do-you-need-to-know-before-playing-blackjack-online/')
                await browser.pause (3000);
                const imgSwitchPost = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
                expect(imgSwitchPost).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
            });
        });
        //Test 32 Check img alt and title for post page language switcher //
        describe('Check img alt and title for post page language switcher', () => {
            it('Check img alt and title for post page language switcher', async () => {
                browser.url('https://casino-kit-prod.site/postslug5/what-do-you-need-to-know-before-playing-blackjack-online/')
                await browser.pause (3000);
                const imgSwitchPost = await $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
                let imgSwitchPostTitle = await imgSwitchPost.getAttribute('title');
                await assert.strictEqual(imgSwitchPostTitle, 'flag_for_post' );
                let imgSwitchPostAlt = await imgSwitchPost.getAttribute('alt');
                await assert.strictEqual(imgSwitchPostAlt, 'alt_for_post' );
            });
        });
          //Test 33 Check href for page//
          describe('Check href for page', () => {
            it('Check href for page', async () => {
                browser.url('https://casino-kit-prod.site/test-page-for-4-0-0/')
                await browser.pause (3000);
                const pageHref = $('head > link:nth-child(45)')
                expect(pageHref).toHaveAttribute('href="https://casino-kit-prod.site/test-page-for-4-0-0/alternate/"')
            });
        });
        //Test 34 Check canonical for page//
        describe('Check canonical for page', () => {
            it('Check canonical for page', async () => {
                browser.url('https://casino-kit-prod.site/test-page-for-4-0-0/')
                await browser.pause (3000);
                const pageCanonical = $('head > link:nth-child(26)');
                expect(pageCanonical).toHaveAttribute('rel="canonical", href="https://casino-kit-prod.site/test-page-for-4-0-0/canonical/"'); 
            });
        });
        //Test 35 Check page img url for language switcher //
        describe('Check page img url for language switcher', () => {
            it('Check page img url for language switcher', async () => {
                browser.url('https://casino-kit-prod.site/test-page-for-4-0-0/')
                await browser.pause (3000);
                const imgSwitchPage = $('body > div > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
                expect(imgSwitchPage).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
            });
        });
        //Test 36 Check img alt and title for page language switcher //
        describe('Check img alt and title for page language switcher', () => {
            it('Check img alt and title for page language switcher', async () => {
                browser.url('https://casino-kit-prod.site/test-page-for-4-0-0/')
                await browser.pause (3000);
                const imgSwitchSoPage = await $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
                let imgSwitchSoPageTitle = await imgSwitchSoPage.getAttribute('title');
                await assert.strictEqual(imgSwitchSoPageTitle, 'flag_for_page' );
                let imgSwitchSoPageAlt = await imgSwitchSoPage.getAttribute('alt');
                await assert.strictEqual(imgSwitchSoPageAlt, 'alt_for_page' );
            });
        });
});
