import editProfilePage from "../PageObjects/editProfilePage.cy";
import loginPage from "../PageObjects/loginPage.cy";

const editProfile = new editProfilePage()



describe('Edit Profile', () => {
  
    before(()=>{
        cy.fixture('editData.json').then(function(data){
            globalThis.data = data
        })
    })

    beforeEach(() => {
        
        cy.login(data.username, data.password)
            //cy.location('pathname').should('eq', '/listing')
       
        
    })

    it('Verify user can go to my profile page', () => {
      
       cy.visit('/')
       editProfile.visitMyProfile()
       
    })

    it('Verify user can update the profile information', () => {
        cy.visit('/')
        editProfile.visitMyProfile()
        editProfile.enterFirstName(data.firstname)
        editProfile.enterLastName(data.lastname)
        editProfile.enterPhoneNumber(data.phone)
        editProfile.selectGender()
        editProfile.dateOfBirth()
        editProfile.updateCommunityProfileButton()
        editProfile.selectPrivacy()
        editProfile.enterText(data.text)
        editProfile.interestSelection()
        editProfile.clickUpdateButton()


    })

});