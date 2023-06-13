import listingPage from "../PageObjects/listingPage.cy";

const listing = new listingPage()

describe('Listing Page', () => {
  
    before(()=>{
        cy.fixture('editData.json').then(function(data){
            globalThis.data = data
        })
    })

    beforeEach(() => {
        
        cy.login(data.username, data.password)
        cy.visit('/')
            //cy.location('pathname').should('eq', '/listing')            
    })

    it('Verify the listing page open after login', () => {
      
      
        cy.url().should('include', '/listing')
    })

    it('Verify user can search activity by using name',()=>{
        listing.filterByActivityName()
        listing.searchFilterButton()
        cy.contains('QA').should('exist')
    })
    it('Verify user can search activity by using category',()=>{
        listing.filterByCategory()
        listing.searchFilterButton()
        cy.contains('Gyms & Health Clubs').should('exist')
    })
    it('Verify user can search activity by using Location',()=>{
        listing.filterByLocation()
        listing.searchFilterButton()
    })

    it('Apply filter using different combination', () => {
      
        listing.filterByActivityName()
        listing.filterByCategory()
        listing.filterByLocation()
        listing.searchFilterButton()
        

    })

});