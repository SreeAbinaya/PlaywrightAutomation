const {test} = require("@playwright/test");
const {PageObjectManager} = require("../pages/PageOjectManager");
const data = JSON.parse(JSON.stringify(require("../resources/kyroTestcaseData.json")));

test('Verify notification count after assigning the project', async({page}) => {
    const pageObj = new PageObjectManager(page);
    const loginPage = pageObj.getLoginPage();
    await loginPage.launchTheApp();
    await loginPage.loginToApp(data.username,data.password);
    const landingPage = pageObj.getLandingPage();
    await landingPage.verifyNotificationCount();
});

test.only('Verify notification count after reading the notification', async({page}) => {
    const pageObj = new PageObjectManager(page);
    const username = "rashokciet@gmail.com";
    const password = "@rjuN006";
    const loginPage = pageObj.getLoginPage();
    await loginPage.launchTheApp();
    await loginPage.loginToApp(username,password);
    const landingPage = pageObj.getLandingPage();
    await landingPage.clickNotificationIcon();
    const notification = pageObj.getNotifcationModule();
    await notification.clickNotifTitleCards();
    const projectPage = pageObj.getProjectPage();
    await projectPage.verifyProjectTitle();
});