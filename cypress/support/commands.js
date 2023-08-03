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

Cypress.Commands.add('login', (username, password)=>{

    cy.session('login', ()=>{
        cy.visit('/')
        cy.get('.py-2').click()
        cy.get('#signInEmail').clear().type(username)
        cy.get('#signInPassword').clear().type(password) 
        cy.get(':nth-child(3) > .btn-submit').click()
        cy.wait(3000)
        //cy.get('.btn-warable-action').click()
    })

    //When you want to use your session across all specs then use this below statment
    // {
    //     cachAcrossSpecs: true
    // }
    
})