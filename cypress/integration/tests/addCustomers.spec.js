/// <reference types="cypress-xpath" />

import { LoginPage } from "../pageObjects/loginpage";
import { AddCustomerPage } from "../pageObjects/addcustomerpage";
import { LeftPaneMenu } from "../pageObjects/leftpanemenu";
import { CustomersPage } from "../pageObjects/customerspage";
import { getRandomString } from "../utils/lib";


describe("Add New Customer Tests", () => {
    before(function() {
        cy.login()
    })

    beforeEach(function() {
        cy.setCookie('.Nop.Authentication', this.authCookie)
    })

    it("Verifies that a new customer can be added with details entered in all the available fields.", () => {
        cy.visit('/')

        const lpm = new LeftPaneMenu()
        lpm.customersSection.click()
        lpm.customersLink.click()

        const cp = new CustomersPage()
        cp.btnAddNew.click(true)

        const addCustPage = new AddCustomerPage()
        addCustPage.email.type(getRandomString() + '@gmail.com')
        addCustPage.password.type("password123")
        addCustPage.firstName.type("Aman")
        addCustPage.lastName.type("Sharma")
        addCustPage.male.check()
        addCustPage.dob.type("9/3/1985")
        addCustPage.companyName.type("SuperSaber Inc.")
        addCustPage.taxExempt.check()
        addCustPage.newsLetter.selectStore("Your store name")
        addCustPage.customerRoles.selectRole('Registered')
        addCustPage.customerRoles.selectRole("Forum Moderators")
        addCustPage.vendorManager.select("Vendor 2")
        addCustPage.adminComment.type("Testing 1 2 3")
        addCustPage.saveBtn.click()
        addCustPage.getAlertMessage().should('eq', "The new customer has been added successfully.")
    })

    it("Verifies that an appropriate alert message is shown when a user tries to assign roles, 'Registered' and 'Guests' at the same time to a customer.", () => {
        cy.visit('/Admin/Customer/Create')
        const addCustPage = new AddCustomerPage()
        addCustPage.email.type(getRandomString() + '@gmail.com')
        addCustPage.customerRoles.selectRole("Registered")
        addCustPage.customerRoles.selectRole("Guests")
        addCustPage.saveBtn.click()
        addCustPage.getAlertMessage().should('eq', "The customer cannot be in both 'Guests' and 'Registered' customer roles")
        
    })

    it("Verifies that a 'Registered' customer cannot be added without an email address", () => {
        cy.visit('/Admin/Customer/Create')
        const addCustPage = new AddCustomerPage()
        addCustPage.password.type(getRandomString())
        addCustPage.customerRoles.selectRole("Registered")
        addCustPage.saveBtn.click()
        addCustPage.getAlertMessage().should('eq', "Valid Email is required for customer to be in 'Registered' role")
        
    })
    
    it("Verifies that a 'Registered' customer can be added with just an email address", () => {
        cy.visit('/Admin/Customer/Create')
        const addCustPage = new AddCustomerPage()
        addCustPage.email.type(getRandomString() + '@gmail.com')
        addCustPage.customerRoles.selectRole("Registered")
        addCustPage.saveBtn.click()
        addCustPage.getAlertMessage().should('eq', "The new customer has been added successfully.")
        
    })
})
