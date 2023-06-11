class forgotPasswordPage {
    btnforgotPassword = "Forget Password?"
    emailTxt = "#forget_password > #account-recovery-modal > .modal-center > .modal-outer-box > .modal-inner-box > .modal-body > .form-container > .email-field-box > .forget-password-group > #signInEmail"
    emailValidationToast = ".toast-message"
    btnContinue = "#forget_password > #account-recovery-modal > .modal-center > .modal-outer-box > .modal-inner-box > .modal-body > .form-container > .btn-submit"
    enterCodeField = "Code"
    newPasswordField = "New Password"
    signInLink = "#recover_password > #account-recovery-modal > .modal-center > .modal-outer-box > .modal-inner-box > .modal-body > .form-container > .btn"
    signInPopUp = "Sign In"
    forgetPasswordFunc(){
        cy.contains(this.btnforgotPassword).click()
    }
    enterEmailFunc(email){
        cy.get(this.emailTxt).type(email, {force: true})
    }
    continueButtonFunc(){
        cy.get(this.btnContinue).click()
    }
    emailSuccessToastFunc(){
        cy.get(this.emailValidationToast).should('have.text', 'Email verification code has been sent successfully. Please check you mailbox.')
    }
    invalidEmailToastFunc(){
        cy.get(this.emailValidationToast).should('have.text', 'No User Found')
    }
    emptyEmailToastFunc(){
        cy.get(this.emailValidationToast).should('have.text', 'Username is required')
    }
    verifySignInLinkFunc(){
        cy.get(this.signInLink).click({force: true})
    }
    verifySignInPopUpFunc(){
        cy.contains(this.signInPopUp).should('be.visible')
    }
    // wrongCodeToastFunc(){
    //     cy.get(this.emailValidationToast).should('have.text', 'Something went wrong while creating the Password. Please try again later.')
    //     //Something went wrong while creating the Password. Please try again later.
    // }

    
    // enterCodeFunc(code){
    //     cy.contains(this.enterCodeField).type(code, {force: true})
    // }
    // // enterNewPasswordFunc(newpassword){
    //     cy.contains(this.newPasswordField).type(newpassword, {force: true})
    // }
    
}
export default forgotPasswordPage