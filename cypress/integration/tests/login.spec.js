/// <reference types="cypress-xpath" />

import { LoginPage } from "../pageObjects/loginpage";

describe('Basic Login Tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Verifies that user is able to login with valid credentials", () => {
        let lp = new LoginPage()
        lp.login('admin@yourstore.com', 'admin')
        cy.title().should('contain', 'Dashboard')
    })

    it("Verifies that user is NOT able to login with invalid password (but with valid email id).", () => {
        let lp = new LoginPage()
        lp.login('admin@yourstore.com', 'invalid_password')
        cy.title().should('not.contain', 'Dashboard')
    })

    it("Verifies that user is NOT able to login with invalid email (but with registered password).", () => {
        let lp = new LoginPage()
        lp.login('invalidemail@invalidstore.com', 'admin')
        cy.title().should('not.contain', 'Dashboard')
    })
})