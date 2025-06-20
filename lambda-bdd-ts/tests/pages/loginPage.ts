import {test, expect,Locator,Page} from '@playwright/test';
export class LoginPage{
    page:Page;

    constructor(page:Page){
        this.page=page;
    }

     async goToU(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    }

}
module.exports={LoginPage};