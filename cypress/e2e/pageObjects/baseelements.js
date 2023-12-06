/// <reference types="cypress-xpath" />
import '../../support/commands2'

export class BaseElement{

    constructor(strategy, locator) {
        this.strategy = strategy;
        this.locator = locator;
    }

    click(force = false){
        return cy.getElement(this.strategy, this.locator).click({force: force})
    }

    get text() {
        return cy.getElement(this.strategy, this.locator).invoke('text')
    }

    get() {
        return cy.getElement(this.strategy, this.locator) 
    }

}

export class BaseTxtElement extends BaseElement{
    get text() {
        return cy.getElement(this.strategy, this.locator).invoke('attr', 'value')
    }

    type(str) {
        return cy.getElement(this.strategy, this.locator).clear().type(str)
    }

    clear() {
        return cy.getElement(this.strategy, this.locator).clear()
    }
}

export class BaseButtonElement extends BaseElement{

}

export class BaseRadioElement extends BaseElement{
    check(force = false){
        return cy.getElement(this.strategy, this.locator).check({force: force})
    }
}


export class BaseCheckboxElement extends BaseElement{
    check(force = false){
        return cy.getElement(this.strategy, this.locator).check({force: force})
    }

    uncheck(force = false){
        return cy.getElement(this.strategy, this.locator).uncheck({force: force})
    }
}

export class BaseDropdownElement extends BaseElement{
    select(value, force = false){
        return cy.getElement(this.strategy, this.locator).select(value, {force: force}) 
    }
}