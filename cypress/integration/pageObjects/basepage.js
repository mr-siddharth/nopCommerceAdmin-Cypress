/// <reference types="cypress-xpath" />

export class BasePage{

    get title(){
        return cy.title()
    }

}