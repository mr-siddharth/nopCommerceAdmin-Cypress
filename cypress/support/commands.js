// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "../e2e/pageObjects/loginpage";

Cypress.Commands.add('login', () => {
    cy.session('admin@yourstore.com', () => {
        loginPage.visit();
        loginPage.login("admin@yourstore.com", "admin");
        loginPage.title.should('contain', 'Dashboard');
        cy.getCookie('.Nop.Authentication').should('exist').its('value').as('authCookie');
    },
    {
        validate() {},
        cacheAcrossSpecs: true
    })
});