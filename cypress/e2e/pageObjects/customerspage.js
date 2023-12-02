import { BaseButtonElement } from "./baseelements";
import { BasePage } from "./basepage";

class BtnAddNew extends BaseButtonElement{
    locator = ['xpath', "//a[normalize-space() = 'Add new']"]
}

export class CustomersPage extends BasePage{
    constructor(){
        super()
        this.btnAddNew = new BtnAddNew()
    }
}