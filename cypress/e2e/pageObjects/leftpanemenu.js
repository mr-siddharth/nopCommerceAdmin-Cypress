import { BaseElement } from "./baseelements";
import { BasePage } from "./basepage";

class LeftPaneMenu extends BasePage{
    constructor() {
        super()
        this.customersLink = new BaseElement('xpath', "//a[@class='nav-link']/p[text()=' Customers']/parent::a")
        this.customersSection = new BaseElement('xpath',"//*[contains(@class,'treeview')]/a/p[contains(text(),'Customers')]/parent::a")
    }
}


const leftPaneMenu = new LeftPaneMenu();
export default leftPaneMenu;