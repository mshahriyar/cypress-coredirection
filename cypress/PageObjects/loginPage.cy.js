
class loginPage {
    singInButton =  ".py-2"
    userNameTxt = "#signInEmail"
    passwordTxt = "#signInPassword"
    loginButton = ":nth-child(3) > .btn-submit"
    verifyLogin = ".btn-warable-action"
    passwordLengthError=".toast-message"
    passwordIncorrectError = ".toast-message"
    usernameIncorrectError = ".toast-message"
    //visitUrl = "https://stage-v3-1-0-1.coredirection.com/"
    baseURL = "https://stage-v3-1-0-1.coredirection.com"
    createAccount = ".account-btn-box > .btn-signup"
    showPassword = ".mr-8"

    visit(){
        cy.visit(this.baseURL)
        cy.title().should('eq', 'Core Direction | Inspiring Movement')
    }
    signIn()
    {   
        cy.get(this.singInButton).click({force: true})
        cy.contains('Sign in to your account').should('exist')
    }
    setUserName(username){
        cy.contains('Username').should('exist')
        cy.get(this.userNameTxt).type(username)
    }
    setPassword(password){
        cy.contains('Password').should('exist')
        cy.get(this.passwordTxt).type(password)
    }
    btnLogin(){
        cy.get(this.loginButton).should('be.visible')
        cy.get(this.loginButton).click()
    }
    // validateLogin(){
    //     cy.get(this.verifyLogin).click()
    // }

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

    // scrollDown(){
    //     cy.scrollTo('bottom')
    // }
    // scrollUp(){
    //     cy.scrollTo('topRight')
    // }
    // clickPasswordShowIcon(){
    
}
export default loginPage