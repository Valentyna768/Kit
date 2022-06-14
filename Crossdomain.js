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
            const btnStatus = $('#crossdomain_status');
            expect(btnStatus).toHaveAttribute('value="true"');
            const updateSaveBtn = $('#crossdomainAction');
            updateSaveBtn.click()
            await browser.pause(5000)
            const CheckCount = $('#crossCheckCount')
            expect(CheckCount).toHaveElementProperty('12')
            const resultCount = $('#crossDomainResponse > span:nth-child(2)')
            expect (resultCount).toHaveElementProperty('12') //тест проходить навіть якщо значення інше.Можливо .toHaveElementProperty не є вірним
        });
    });
    //Test 3 Enable language switcher settings//
    describe('Enable language switcher settings', () => {
        it('Click on button and update crossdomain settings', async () => {
            const showLangCheck = await $('#show_select_languages_in_header_menu');
            await expect(showLangCheck).toBePresent();
            const menuView = $('#show_lang_menu_view > option:nth-child(2)');
            expect(menuView).toHaveAttribute('value="image" selected');
            const saveSettingsBtn =$('#wpbody-content > div:nth-child(7) > form > button');
            saveSettingsBtn.click();
            await browser.pause(3000)
        });
    });
    //Test 4 Set environement//
    describe('Set environement', () => {
        it('Check prod environement and save settings', async () => {
            const envSelector =$('#crossdomain_env > option:nth-child(2)');
            expect(envSelector).toHaveAttribute('value="prod" selected');
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
            expect(imgSwitchHome).toHaveAttribute('title="flag2"'); //Чи вірно обрано .toHaveAttribute?
            expect(imgSwitchHome).toHaveAttribute('alt="alt2"'); //Чи вірно обрано .toHaveAttribute?
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
            const imgSwitchHome = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchHome).toHaveAttribute('data-srcset="https://casino-kit-prod.site/wp-content/uploads/2021/12/Double-Joker-1_s.jpg 490w');
        });
    });
    //Test 12 Check img alt and title for casino page language switcher //
    describe('Check img alt and title for casino page language switcher', () => {
        it('Check img alt and title for casino page language switcher', async () => {
            browser.url('https://casino-kit-prod.site/wir-wetten-casino')
            await browser.pause (3000);
            const imgSwitchCasino = $('body > div.bfad349.lzimg > div.bfad087 > div > div.bfadb64 > header > div > nav.bfad2839.js-language-nav > ul > li > a > img');
            expect(imgSwitchCasino).toHaveAttribute('title="flagtitle1212"');
            expect(imgSwitchCasino).toHaveAttribute('alt="test1212"');
        });
    });
});