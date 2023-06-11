class editProfilePage{

    profileIcon = ".user-profile-image"
    myProfile = ".profile-window"
    firstName = "#fName"
    lastName = "#lname"
    email = "#email"
    phoneNumber = ".col-span-3 > #phone > .vti__input"
    gender = "#gender"
    dob = "#date-of-birth"
    updateCommunityProfile = ".btn-update-community-profile"
    privacyCheckbox = ":nth-child(2) > label"
    textarea = "textarea"
    selectInterests = ".user-interest-list > :nth-child(1)"
    activitySelection = ".btn-filter-activity-type-content-box"
    updateProfileButton = ".btn-update-profile"

    visit(){
        cy.visit('/')    
    }

    visitMyProfile(){
        cy.get(this.profileIcon).click()
        cy.get(this.myProfile).contains('My Profile').should('exist').click()        
    }

    enterFirstName(firstname){
        cy.get(this.firstName).clear().type(firstname).should('be.enabled')
    }

    enterLastName(lastname){
        cy.get(this.firstName).clear().type(lastname).should('be.enabled')
    }

    enterPhoneNumber(phone){
        cy.get(this.firstName).clear().type(phone).should('be.enabled')
    }

    selectGender(){
        cy.get(this.gender).should('exist')
        cy.get(this.gender).select('Female').should('have.value','Female')
    }

    dateOfBirth(){
        cy.get(this.dob).should('exist')
    }

    updateCommunityProfileButton(){
        cy.get(this.updateCommunityProfile).contains(' Update Community Profile ').should('exist').click()
    }

    selectPrivacy(){
        cy.get(this.privacyCheckbox).should('exist').click({force: true})
    }

    enterText(text){
        cy.get(this.textarea).clear().type(text)
    }

    interestSelection(){
        cy.get(this.selectInterests).click({force: true})
        cy.get(this.activitySelection).contains('Rock Climbing').click({force: true})
        cy.get(this.activitySelection).contains('Gymnastics').click({force: true})
        cy.get(this.activitySelection).contains('Zumba').click({force: true})
        cy.get(this.activitySelection).contains('Tennis').click({force: true})       
    }
    clickUpdateButton(){
        cy.get(this.updateProfileButton).should('contain.text','Update Profile').click()
        cy.log('Profile Updated Successfully')
    }



}
export default editProfilePage