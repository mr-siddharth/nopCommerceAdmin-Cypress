// /// <reference types="cypress-xpath" />

// describe('my first ever cypress test suite', () => {

//     it("my first ever cypress test", () => {
//         cy.visit("https://admin-demo.nopcommerce.com")
//         cy.get('input#Email').clear().type("admin@yourstore.com")
//         cy.get("[for='Email']").invoke('text').then((html) => {
//             console.log("HTML:" + html)
//         })
//         cy.get('input#Password').clear().type("admin")
//         cy.get('button[type=submit]').click()
//         cy.title().should('contain', 'Dashboard')
//         cy.get('[class*="treeview"]').find('a > p').contains('Customers').parent('a').click()
//         cy.xpath("//a[@class='nav-link']/p[text()=' Customers']/parent::a").click()
//         // cy.get('[class*="treeview"]').find('a > p').contains('Customers').parent('a').parent('li').find('ul a').contains('Customers').click()
//         // cy.get('a.nav-link > p').contains('Customers').parent('a').click()
//     })
// })