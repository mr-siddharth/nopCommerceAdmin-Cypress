import { 
    BaseCheckboxElement,
    BaseElement,
    BaseTxtElement,
    BaseRadioElement,
    BaseDropdownElement,
    BaseButtonElement
} from "./baseelements"

import { BasePage } from "./basepage"

class SelectNewsLetter extends BaseElement{

    selectStore(storeName){
        this.click()
        cy
        .getElement('xpath', `//ul[@id='SelectedNewsletterSubscriptionStoreIds_listbox']/li[text()='${storeName}']`)
        .click({force: true})
    }

    deselectStore(storeName){
        cy
        .getElement('xpath', `//ul[@id='SelectedNewsletterSubscriptionStoreIds_taglist']/li/span[text()='${storeName}']/following-sibling::span`)
        .click({force: true})
    }
}

class SelectCustomerRoles extends BaseElement {

    selectRole(role){
        cy.getElement('css', "body ul[id='SelectedCustomerRoleIds_taglist'] > li")
        .then(lis => {
            for (let li of lis){
                cy.wrap(li).find('span').eq(0).invoke('text').then(text => {
                    if (text === role){
                        this.deselectRole(role)
                    }
                    
                })
            }
        })
        this.click()
        cy
        .getElement('xpath', `//ul[@id='SelectedCustomerRoleIds_listbox']/li[text()='${role}']`)
        .click({force: true})
    }


    deselectRole(role){
        cy
        .getElement('xpath', `//ul[@id='SelectedCustomerRoleIds_taglist']/li/span[text()='${role}']/following-sibling::span`)
        .click() 
    }

    deselectAll(){
        cy.getElement('xpath', "body ul[id='SelectedCustomerRoleIds_taglist'] > li")
        .then(lis => {
            for (let li of lis){
                cy.wrap(li)
                .getElement('xpath', "span[text()]/following-sibling::span")
                .click()
                }
            })
    }
}

class AddCustomerPage extends BasePage{
    constructor() {
        super()
        this.email = new BaseTxtElement('css', 'input#Email')
        this.password = new BaseTxtElement('css', 'input#Password')
        this.firstName = new BaseTxtElement('css', 'input#FirstName')
        this.lastName = new BaseTxtElement('css', 'input#LastName')
        this.male = new BaseRadioElement('css', 'input#Gender_Male')
        this.female = new BaseRadioElement('css', 'input#Gender_Female')
        this.dob = new BaseTxtElement('css', 'input#DateOfBirth')
        this.taxExempt = new BaseCheckboxElement('css', 'input#IsTaxExempt')
        this.companyName = new BaseTxtElement('css', 'input#Company')
        this.newsLetter = new SelectNewsLetter('css', 'ul#SelectedNewsletterSubscriptionStoreIds_taglist + input')
        this.customerRoles = new SelectCustomerRoles('css', 'ul#SelectedCustomerRoleIds_taglist + input')
        this.vendorManager = new BaseDropdownElement('css', 'select#VendorId')
        this.active = new BaseCheckboxElement('css', 'input#Active')
        this.adminComment = new BaseTxtElement('css', 'textarea#AdminComment')
        this.saveBtn = new BaseButtonElement('css', "button[name='save']")
        this.saveAndEditBtn = new BaseButtonElement('css', "button[name='save-continue']")
    }

    getAlertMessage(){
        return cy.getElement('css', 'div.alert').invoke('text').invoke('slice', 2).invoke('trim')
    }

    visit() {
        cy.visit('/Admin/Customer/Create');
        return this;
    }
    
}

const addCustomerPage = new AddCustomerPage();
export default addCustomerPage;
