class signUpPage{

    signUpButton = ":nth-child(2) > .btn-signup"
    signinbtn = ":nth-child(2) > .nav-link"
    facebookbtn = ".social-list > :nth-child(1) > .social-link"
    googlebtn = ".social-list > :nth-child(2) > .social-link"
    applebtn = ".social-list > :nth-child(3) > .social-link"
    homebtn = ".mr-7 > .nav-link"
    emailField = "#email"
    signUp = ".signup-form > .btn-submit"
    emailValidation = "span"
    firstNameField = "#fName"
    lastNameField = "#lname"
    usernameField = "#username"
    phoneNumberField = ".vti__input"
    genderSelection = "#gender"
    nextBtn = ".btn-box > .btn-submit"
    password = "#password"
    confirmPassword = "#confirm-password"
    submitInfo = ".btn-register"
    successMessage = ".toast-message"
    createProfile = ".additional-info-link"
    chooseImage = ".btn-upload-img"
    addBio = "#bio"

   
    
    visit(){
        cy.visit('/')
    }
    title(){

        cy.title().should('eq', 'Core Direction | Inspiring Movement')
    
    }
    signUpbtn(){

        cy.get(this.signUpButton).click({force: true})

    }
    signInbtnVisible(){
 
        cy.get(this.signinbtn).should('be.visible')
 
    }
    homebtnVisible(){
 
        cy.get(this.homebtn).should('be.visible')
 
    }
    socialSignupVisible(){
 
        cy.log('Sign up with Facebook')
        cy.get(this.facebookbtn).should('be.visible')
        cy.log('Sign up with Google')
        cy.get(this.googlebtn).should('be.visible')
        cy.log('Sign up with Apple') 
        cy.get(this.applebtn).should('be.visible')
    
    }
    enterEmail(email){
    
        cy.get(this.emailField).type(email)
   
    }

    clickSignUp(){
   
        cy.get(this.signUp).click({force: true})
   
    }
    emailValidToast(){
   
        cy.get(this.emailValidation).should('have.text', 'Email must be a valid email')
   
    }
    alreadyRegisterToast(){
   
        cy.get(this.emailValidation).should('have.text', 'This email is already being used. Please sign in instead.')
   
    }
    randomEmailFunc(){
        var chars = '1234567890';
        var string = '';
        for(var ii=0; ii<3; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        cy.get(this.emailField).type('shery' + string + '@mailinator.com');
     
    }
    enterFirstName(firstName){
        cy.get(this.firstNameField).type(firstName+ '{enter}')
       
    }
    enterLastName(lastName){
        cy.get(this.lastNameField).type(lastName + '{enter}')
    }
    enterUsername(){
    
        var chars = '123456789';
        var  string1 = '';
        for(var i=0; i<3; i++){
        string1 += chars[Math.floor(Math.random() * chars.length)];
        }
        cy.get(this.usernameField).type('shery'+ string1);
        cy.get('.btn-box > .btn-submit').should('exist').click()   
       
    
    }
    enterPhoneNumber(mobileNumber){
    
        cy.wait(5000)
        cy.get(this.phoneNumberField).type(mobileNumber)
        cy.get('.btn-box > .btn-submit').should('exist').click()   
    
    }
    selecGender(){
    
        cy.get(this.genderSelection).select('Male').should('have.value','Male')
        cy.get('.btn-box > .btn-submit').should('exist').click()      
    
    }
    selectDoB(){
    
        cy.get('input[type="date"]').click()
        cy.get('.input-field').type('1995-11-23')
        cy.get('.btn-box > .btn-submit').should('be.visible').click({ multiple: true })
    
    }
    enterPasswrod(){
    
        cy.get(this.password).type('Shery1234')
    
    }
    enterConfirmPassword(){
    
        cy.get(this.confirmPassword).type('Shery1234')
    
    }
    selectTerms(){
        cy.contains('I want to receive promotional emails from and about Core Direction products and services.').click({force: true})
    }
    registerBtn(){
        cy.get(this.submitInfo).contains('Register my info').should('exist').click()
        cy.wait(2000)
        cy.get(this.successMessage).should('have.text','You have been registered successfully. Confirmation email has been sent to your email')        
        cy.wait(1000)
    }
    addProfileInfo(){
        cy.get(this.createProfile).click()
        cy.wait(1000)
        //cy.get('.addition-info-title').should('include', 'shery'+ string1 )
        cy.get('.avatar-section > .section-title').should('exist')
        //cy.get(this.chooseImage).should('to.be.visible')
        //select avatar
        cy.get(':nth-child(1) > .build-in-img').click()
        //Verfy bio section
        cy.get('.bio-box > .section-title').should('exist')
        //Add bio
        cy.get(this.addBio).type('Software Test Engineer')
        //select privacy type public
        cy.get('[type="radio"]').first().check()
        //next button
        cy.get('.btn-navigate').click()
        //search friend 
        cy.get('.friend-input-field').type('test_shery48')
        //Click searc
        cy.get('.btn-find-friend').click()
        cy.wait(2000)
        //Follow button
        cy.get('.btn-action').click()

        //Proceed next
        cy.get(':nth-child(7) > .btn-submit').click()
        //seelct activity
        cy.get(':nth-child(7) > button > .btn-filter-activity-type-item').click()
        //save to proceed
        cy.get(':nth-child(9) > .btn-submit').click()
        cy.wait(2000)

    }

}
export default signUpPage