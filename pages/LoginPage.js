class LoginPage{

    constructor(page){
        this.page = page;
        this.userName = page.locator("[name='email']");
        this.passWord = page.locator("[name='password']");
        this.signIn = page.locator("[name='submit']");
    }

    async launchTheApp(){
        try {
            this.page.goto("https://stage.kyro.ai");
        } catch (error) {
            console.error("Error navigating:", error);
        }
        
    }

    async loginToApp(username,password){
        await this.page.waitForSelector("[name='email']");
        await this.userName.type(username);
        await this.passWord.type(password);
        await this.signIn.click();
    }
}

module.exports = {LoginPage};