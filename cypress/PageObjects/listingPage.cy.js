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
    favorite(){
      
        if(cy.get('[data-v-7c5bf9b6=""][data-v-f703d2b8=""] > :nth-child(2) > .section-body > .custom-container > .content-container > .swiper-container > .swiper-wrapper > .swiper-slide > .card > .card-body > .btn-fav-box > .span-circle').should('exist'))
        {
            cy.log('Already favorite')
            this.unfavorite()
        }
        else{
            cy.get(':nth-child(1) > .section-body > .custom-container > .content-container > .swiper-container > .swiper-wrapper > .swiper-slide-active > .card > .card-body > .btn-fav-box > .span-circle > svg').click({force: true})
            cy.wait(1000)
        }
        
    }
    unfavorite(){
        // if(){

        // }
        // else{

        // }
        cy.get('[data-v-7c5bf9b6=""][data-v-f703d2b8=""] > :nth-child(2) > .section-body > .custom-container > .content-container > .swiper-container > .swiper-wrapper > .swiper-slide > .card > .card-body > .btn-fav-box > .span-circle').click({force: true})
        cy.get('[data-v-7c5bf9b6=""][data-v-f703d2b8=""] > :nth-child(2) > .section-body > .custom-container > .content-container > .swiper-container > .swiper-wrapper > .swiper-slide > .card > .card-body > .btn-fav-box > .span-circle').should('not.exist')
    }

}
export default listingPage