const { expect } = require("@playwright/test");
const data = JSON.parse(JSON.stringify(require("../resources/kyroTestcaseData.json")));

class LandingPage{

    constructor(page){
        this.page = page;
        this.notification = page.locator("//span[@aria-haspopup]/span[contains(@class,'overlapCircular')]");
        this.notifIcon = page.locator("//span[@aria-haspopup='true']");
    }

    async verifyNotificationCount(){
        const notifCount = await this.notification.textContent();
        expect(notifCount).toEqual(data.notifcount);
    }

    async clickNotificationIcon(){
        await this.notifIcon.click();
    }
}

module.exports = {LandingPage};