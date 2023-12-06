/// <reference types="cypress-xpath" />

import addCustomerPage from "../pageObjects/addcustomerpage";
import leftPaneMenu from "../pageObjects/leftpanemenu";
import customersPage from "../pageObjects/customerspage";
import { getRandomString } from "../utils/lib";


describe("Add New Customer Tests", () => {
    beforeEach(function() {
        cy.login()
    })

    it("Verifies that a new customer can be added with details entered in all the available fields.", () => {
        cy.visit('/')

        leftPaneMenu.customersSection.click()
        leftPaneMenu.customersLink.click()

        customersPage.btnAddNew.click(true)

        addCustomerPage.email.type(getRandomString() + '@gmail.com')
        addCustomerPage.password.type("password123")
        addCustomerPage.firstName.type("Aman")
        addCustomerPage.lastName.type("Sharma")
        addCustomerPage.male.check()
        addCustomerPage.dob.type("9/3/1985")
        addCustomerPage.companyName.type("SuperSaber Inc.")
        addCustomerPage.taxExempt.check()
        addCustomerPage.newsLetter.selectStore("Your store name")
        addCustomerPage.customerRoles.selectRole('Registered')
        addCustomerPage.customerRoles.selectRole("Forum Moderators")
        addCustomerPage.vendorManager.select("Vendor 2")
        addCustomerPage.adminComment.type("Testing 1 2 3")
        addCustomerPage.saveBtn.click()
        addCustomerPage.getAlertMessage().should('eq', "The new customer has been added successfully.")
    })

    it("Verifies that an appropriate alert message is shown when a user tries to assign roles, 'Registered' and 'Guests' at the same time to a customer.", () => {
        addCustomerPage.visit()
        addCustomerPage.email.type(getRandomString() + '@gmail.com')
        addCustomerPage.customerRoles.selectRole("Registered")
        addCustomerPage.customerRoles.selectRole("Guests")
        addCustomerPage.saveBtn.click()
        addCustomerPage.getAlertMessage().should('eq', "The customer cannot be in both 'Guests' and 'Registered' customer roles")
        
    })

    it("Verifies that a 'Registered' customer cannot be added without an email address", () => {
        addCustomerPage.visit()
        addCustomerPage.password.type(getRandomString())
        addCustomerPage.customerRoles.selectRole("Registered")
        addCustomerPage.saveBtn.click()
        addCustomerPage.getAlertMessage().should('eq', "Valid Email is required for customer to be in 'Registered' role")
        
    })
    
    it("Verifies that a 'Registered' customer can be added with just an email address", () => {
        addCustomerPage.visit()
        addCustomerPage.email.type(getRandomString() + '@gmail.com')
        addCustomerPage.customerRoles.selectRole("Registered")
        addCustomerPage.saveBtn.click()
        addCustomerPage.getAlertMessage().should('eq', "The new customer has been added successfully.")
    })
})
