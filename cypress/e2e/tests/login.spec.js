/// <reference types="cypress-xpath" />

import loginPage from "../pageObjects/loginpage";

describe('Basic Login Tests', () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it("Verifies that user is able to login with valid credentials", () => {
        loginPage.login('admin@yourstore.com', 'admin')
        loginPage.title.should('contain', 'Dashboard')
    })

    it("Verifies that user is NOT able to login with invalid password (but with valid email id).", () => {
        loginPage.login('admin@yourstore.com', 'invalid_password')
        loginPage.title.should('not.contain', 'Dashboard')
    })

    it("Verifies that user is NOT able to login with invalid email (but with registered password).", () => {
        loginPage.login('invalidemail@invalidstore.com', 'admin')
        loginPage.title.should('not.contain', 'Dashboard')
    })
})