/// <reference types="cypress-xpath" />

export class BaseElement{
    click(force = false){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).click({force: force})
        }
        else if (strategy === 'css'){
            return cy.get(locator).click({force: force})
        }  
    }

    get text(){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).invoke('text')
        }
        else if (strategy === 'css'){
            return cy.get(locator).invoke('text')
        }  
    }

    get(){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator)
        }
        else if (strategy === 'css'){
            return cy.get(locator)
        }  
    }

}

export class BaseTxtElement extends BaseElement{
    get text(){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).invoke('attr', 'value')
        }
        else if (strategy === 'css'){
            return cy.get(locator).invoke('attr', 'value')
        }  
    }

    type(str){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).type(str)
        }
        else if (strategy === 'css'){
            return cy.get(locator).type(str)
        } 
    }

    clear(){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).clear()
        }
        else if (strategy === 'css'){
            return cy.get(locator).clear()
        } 
    }
}

export class BaseButtonElement extends BaseElement{

}

export class BaseRadioElement extends BaseElement{
    check(force = false){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).check({force: force})
        }
        else if (strategy === 'css'){
            return cy.get(locator).check({force: force})
        } 
    }

}


export class BaseCheckboxElement extends BaseElement{
    check(force = false){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).check({force: force})
        }
        else if (strategy === 'css'){
            return cy.get(locator).check({force: force})
        } 
    }

    uncheck(force = false){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).uncheck({force: force})
        }
        else if (strategy === 'css'){
            return cy.get(locator).uncheck({force: force})
        } 
    }
}

export class BaseDropdownElement extends BaseElement{
    select(value, force = false){
        let [strategy, locator] = this.locator
        if (strategy === 'xpath'){
            return cy.xpath(locator).select(value, {force: force})
        }
        else if (strategy === 'css'){
            return cy.get(locator).select(value, {force: force})
        }  
    }
}