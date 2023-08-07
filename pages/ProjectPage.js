const {expect} = require("../playwright.config");
const data = JSON.parse(JSON.stringify(require("../resources/kyroTestcaseData.json")));

class ProjectPage{
    constructor(page){
        this.page=page;
        this.projectTitle= page.locator("//div[contains(@class,'MuiBox-root')]//h3");
    }

    async verifyProjectTitle(){
        const title = await this.projectTitle.textContent();
        expect(title).toEqual(data.projectTitle);
    }
}

module.exports={ProjectPage}