import { BaseButtonElement } from "./baseelements";
import { BasePage } from "./basepage";

class CustomersPage extends BasePage{
    constructor(){
        super()
        this.btnAddNew = new BaseButtonElement('xpath', "//a[normalize-space() = 'Add new']")
    }
}

const customersPage = new CustomersPage();
export default customersPage;