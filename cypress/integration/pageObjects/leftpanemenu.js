import { BaseElement } from "./baseelements";
import { BasePage } from "./basepage";


class LnkCustomers extends BaseElement{
    locator = ['xpath', "//a[@class='nav-link']/p[text()=' Customers']/parent::a"]
}

class SecCustomer extends BaseElement{
    locator = ['xpath',"//*[contains(@class,'treeview')]/a/p[contains(text(),'Customers')]/parent::a"]
}

export class LeftPaneMenu extends BasePage{
    constructor(){
        super()
        this.customersLink = new LnkCustomers()
        this.customersSection = new SecCustomer()
    }
}