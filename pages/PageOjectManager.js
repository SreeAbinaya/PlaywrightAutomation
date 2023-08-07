const { LandingPage } = require("./LandingPage");
const { LoginPage } = require("./LoginPage");
const {Notification} = require("./Notification");
const { ProjectPage } = require("./ProjectPage");

class PageObjectManager{

    constructor(page){
        this.page = page;
        this.login = new LoginPage(page);
        this.landing = new LandingPage(page);
        this.notif=new Notification(page)
        this.project = new ProjectPage(page);
    }

    getLoginPage(){
        return this.login;
    }

    getLandingPage(){
        return this.landing;
    }

    getNotifcationModule(){
        return this.notif;
    }

    getProjectPage(){
        return this.project;
    }
}

module.exports={PageObjectManager};