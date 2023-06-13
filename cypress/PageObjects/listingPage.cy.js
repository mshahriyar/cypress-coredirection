class listingPage{

    locationListingPage = "a[title='Location Listing']"
    searchActivity = "input[placeholder='Search Activity, Provider Name..']"
    selectCategory = "#category"
    searchLocation = "input[placeholder='Search Location...']"
    searchButton = "button[class='rounded-full']"
    mapButton = ".btn-map"

    visit(){
        cy.visit('/')    
    }

    filterByActivityName(){
        cy.get(this.searchActivity).clear().type('QA')
   
    }
    filterByCategory(){
        cy.get(this.selectCategory).select('Gyms & Health Clubs').should('have.value', '8')
        
    }
    filterByLocation(){
        cy.get(this.searchLocation).clear().type('Gulberg, Lahore, Punjab, Pakistan{downarrow}{enter}')
//        cy.get('input[value="Gulberg, Lahore, Punjab, Pakistan"]').
    }
    searchFilterButton(){
        cy.get(this.searchButton).click({force: true})
        cy.wait(2000)
        cy.scrollTo(0,300)
    }

}
export default listingPage