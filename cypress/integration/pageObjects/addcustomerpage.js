import { 
    BaseCheckboxElement,
    BaseElement,
    BaseTxtElement,
    BaseRadioElement,
    BaseDropdownElement,
    BaseButtonElement
} from "./baseelements"

import { BasePage } from "./basepage"

class TxtEmail extends BaseTxtElement{
    locator = ['css', 'input#Email']
}

class TxtPassword extends BaseTxtElement{
    locator = ['css', 'input#Password']
}

class TxtFirstName extends BaseTxtElement{
    locator = ['css', 'input#FirstName']
}

class TxtLastName extends BaseTxtElement{
    locator = ['css', 'input#LastName']
}

class RadMale extends BaseRadioElement{
    locator = ['css', 'input#Gender_Male']
}

class RadFemale extends BaseRadioElement{
    locator = ['css', 'input#Gender_Female']
}

class TxtDOB extends BaseTxtElement{
    locator = ['css', 'input#DateOfBirth']
}

class TxtCompanyName extends BaseTxtElement{
    locator = ['css', 'input#Company']
}

class ChkTaxExempt extends BaseCheckboxElement{
    locator = ['css', 'input#IsTaxExempt']
}

class SelectNewsLetter extends BaseElement{
    locator = ['css', 'ul#SelectedNewsletterSubscriptionStoreIds_taglist + input']

    selectStore(storeName){
        this.click()
        cy
        .xpath(`//ul[@id='SelectedNewsletterSubscriptionStoreIds_listbox']/li[text()='${storeName}']`)
        .click({force: true})
    }

    deselectStore(storeName){
        cy
        .xpath(`//ul[@id='SelectedNewsletterSubscriptionStoreIds_taglist']/li/span[text()='${storeName}']/following-sibling::span`)
        .click({force: true})
    }

    // getAllAvailableOptions(){
    //     let options = []
    //     cy
    //     .xpath("//ul[@id='SelectedNewsletterSubscriptionStoreIds_listbox']/li")
    //     .then(elements => {
    //         for (let element of elements){
    //             cy.wrap(element).invoke('text').then((text) => {
    //                 options.push(text)
    //             })
    //         }
    //     })
    //     return options
    // }
}

class SelectCustomerRoles extends BaseElement{
    locator = ['css', 'ul#SelectedCustomerRoleIds_taglist + input']

    // getSelectedRoles(){
    //     cy.get('body').find("ul[id='SelectedCustomerRoleIds_taglist'] > li")
    //     .then(lis => {
    //         return ['Registered']
    //         // for (let li of lis){
    //         //     cy.wrap(roles).invoke('push', cy.wrap(li).find('span').eq(0).invoke('text'))
    //         // }
    //         // cy.log("STAAAAAART")
    //         // cy.log(roles)
    //         return roles
    //     })
    // }

    selectRole(role){
        cy.get('body').find("ul[id='SelectedCustomerRoleIds_taglist'] > li")
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
        .xpath(`//ul[@id='SelectedCustomerRoleIds_listbox']/li[text()='${role}']`)
        .click({force: true})
    }


    deselectRole(role){
        cy
        .xpath(`//ul[@id='SelectedCustomerRoleIds_taglist']/li/span[text()='${role}']/following-sibling::span`)
        .click() 
    }

    deselectAll(){
        cy.get('body').find("ul[id='SelectedCustomerRoleIds_taglist'] > li")
        .then(lis => {
            for (let li of lis){
                cy.wrap(li)
                .xpath("span[text()]/following-sibling::span")
                .click()
                }
            })
    }

    // getAllAvailableRoles(){
    //     let roles = []
    //     cy
    //     .xpath("//ul[@id='SelectedCustomerRoleIds_listbox']/li")
    //     .then(elements => {
    //         for (let element of elements){
    //             cy.wrap(element).invoke('text').then((text) => {
    //                 roles.push(text)
    //             })
    //         }
    //     })
    //     return roles
    // }
}

class LstVendorManager extends BaseDropdownElement{
    locator = ['css', 'select#VendorId']
}


class ChkActive extends BaseCheckboxElement{
    locator = ['css', 'input#Active']
}

class TxtAdminComment extends BaseTxtElement{
    locator = ['css', 'textarea#AdminComment']
}

class BtnSave extends BaseButtonElement{
    locator = ['css', "button[name='save']"]
}

class BtnSaveAndEdit extends BaseButtonElement{
    locator = ['css', "button[name='save-continue']"]
}

export class AddCustomerPage extends BasePage{
    constructor(){
        super()
        this.email = new TxtEmail()
        this.password = new TxtPassword()
        this.firstName = new TxtFirstName()
        this.lastName = new TxtLastName()
        this.male = new RadMale()
        this.female = new RadFemale()
        this.dob = new TxtDOB()
        this.taxExempt = new ChkTaxExempt()
        this.companyName = new TxtCompanyName()
        this.newsLetter = new SelectNewsLetter()
        this.customerRoles = new SelectCustomerRoles()
        this.vendorManager = new LstVendorManager()
        this.active = new ChkActive()
        this.adminComment = new TxtAdminComment()
        this.saveBtn = new BtnSave()
        this.saveAndEditBtn = new BtnSaveAndEdit()
    }

    // getErrorMessages(){
    //     let messages = []
    //     cy
    //     .get("div.validation-summary-errors > ul > li")
    //     .then(elements => {
    //         for (let element of elements){
    //             cy.wrap(element).invoke('text').then((text) => {
    //                 messages.push(text)
    //             })
    //         }
    //     })
    //     return messages
    // }

    getAlertMessage(){
        return cy.get('div.alert').invoke('text').invoke('slice', 2).invoke('trim')
    }
    
}

