Cypress.Commands.add('getElement', (strategy, locator) => {
    if (strategy === 'xpath'){
        return cy.xpath(locator)
    }
    else if (strategy === 'css'){
        return cy.get(locator)
    }
    else {
        throw new Error("Invalid strategy. Please use either 'xpath' or 'css'.")
    }
});