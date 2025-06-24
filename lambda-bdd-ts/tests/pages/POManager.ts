import {Page} from '@playwright/test';
import { homePage } from '../pages/homePage';
import { LoginPage } from '../pages/LoginPage';
import { MegaMenuPage } from '../pages/MegaMenuPage';
import { registerPage } from '../pages/registerPage';

class POManager{
    private readonly page: Page;
    private readonly home: homePage;
    private readonly loginPage: LoginPage;
    private readonly megamenuPage: MegaMenuPage;
    private readonly registerpage: registerPage;

    constructor(page: Page){
        this.page = page;
        this.home = new homePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.megamenuPage = new MegaMenuPage(this.page);
        this.registerpage = new registerPage(this.page);

    }

     getHomePage(): homePage {
        return this.home;
    }

     getLoginPage(): LoginPage {
        return this.loginPage;
    }

      getMegaMenuPage(): MegaMenuPage {
        return this.megamenuPage;
    }

     getRegisterPage(): registerPage {
        return this.registerpage;
    }

} 

export { POManager };
