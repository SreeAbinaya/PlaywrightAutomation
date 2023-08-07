class Notification{
    constructor(page){
        this.page=page;
        this.notifTitle = page.locator("//div[@data-test-id='layout-wrapper']//div[contains(text(),'New Project 7')]");
    }

    async clickNotifTitleCards(){
        await this.notifTitle.click();
    }
}
module.exports = {Notification}