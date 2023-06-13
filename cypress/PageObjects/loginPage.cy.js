
class loginPage {
    singInButton =  ".py-2"
    userNameTxt = "#signInEmail"
    passwordTxt = "#signInPassword"
    loginButton = ":nth-child(3) > .btn-submit"
    verifyLogin = ".btn-warable-action"
    passwordLengthError=".toast-message"
    passwordIncorrectError = ".toast-message"
    usernameIncorrectError = ".toast-message"
    createAccount = ".account-btn-box > .btn-signup"
    showPassword = ".mr-8"
    profileIcon = ".user-profile-image"
    closeDownloadPopUpButton = ".btn-warable-action"


    visit(){
        cy.visit('/')
    }
    title(){
        cy.title().should('eq', 'Core Direction | Inspiring Movement')
    }
    signIn()
    {   
        cy.get(this.singInButton).click({force: true})
        cy.contains('Sign in to your account').should('exist')
    }
    validateUIFields(){
        
        cy.get(this.userNameTxt).should('exist')
        cy.get(this.passwordTxt).should('exist')
        cy.get(this.loginButton).should('be.visible')
    }
    setUserName(username){
        cy.get(this.userNameTxt).type(username)
    }
    setPassword(password){
        cy.get(this.passwordTxt).type(password)
    }
    btnLogin(){
        cy.get(this.loginButton).click()
    }
    // validateLogin(){    
    //     cy.get(this.profileIcon).should('be.visible')
    // }
    downloadPopup(){
        if(cy.get('.wearable-title').contains('Download The App')){
            
            cy.get(this.closeDownloadPopUpButton).click({force: true})
        }
        else{
            cy.get(this.profileIcon).should('be.visible')
        }
        cy.get(this.profileIcon).click()
        cy.get('.profile-window').contains('My Profile').should('exist').click()
        //cy.get('[href="/settings"] > .profile-menu-link').click({force: true})
        cy.get('.profile-pic').should('exist').click()

    }

    validatePassLength(){
        cy.get(this.passwordLengthError).should("have.text", "ValidationError: 'Password' length must be at least 8 characters long")
    }
    
    validateWrongPassword(){
        cy.get(this.passwordIncorrectError).should("have.text", "Incorrect username or password.")
    }
    
    validateUsernameIncorrect(){
        cy.get(this.usernameIncorrectError).should("have.text", "No User Found")
    }
    eyeIcon(){
        cy.get(this.showPassword).should('be.visible').click( {multiple: true})
    }
    createNewAccount(){
        cy.get(this.createAccount).should('be.visible').click({force: true})
        cy.contains(' Welcome! ').should('exist')

    }
    
}
export default loginPage