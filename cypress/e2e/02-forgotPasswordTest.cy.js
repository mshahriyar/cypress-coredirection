import forgotPasswordPage from "../PageObjects/forgotPasswordPage.cy"
import loginPage from "../PageObjects/loginPage.cy"

describe('Forgot Password Page Test Cases', () => {
    const forgotPassword= new forgotPasswordPage();
    const login= new loginPage();

    beforeEach(() => {
        cy.visit('https://stage-v3-1-0-1.coredirection.com/')
        login.signIn()
    });
    it('forgot password with valid email', () => {        

        cy.fixture('loginData.json').then((data)=>{
            forgotPassword.forgetPasswordFunc()
            forgotPassword.enterEmailFunc(data.email)
            forgotPassword.continueButtonFunc()
            forgotPassword.emailSuccessToastFunc()
           
            // forgotPassword.enterCodeFunc(data.codes)
            // forgotPassword.enterNewPasswordFunc(data.newpassword)
        })
    })
    it('Verify Sign in Instead link is working', () => {
        
        cy.fixture('loginData.json').then((data)=>{
            forgotPassword.forgetPasswordFunc()
            forgotPassword.enterEmailFunc(data.email)
            forgotPassword.continueButtonFunc()
            forgotPassword.emailSuccessToastFunc()
            forgotPassword.verifySignInLinkFunc()
            forgotPassword.verifySignInPopUpFunc()
          })
    })
    it('forgot password with Invalid email', () => {

        cy.fixture('loginData.json').then((data)=>{
            forgotPassword.forgetPasswordFunc()
            forgotPassword.enterEmailFunc(data.invalidemail)
            forgotPassword.continueButtonFunc()
            forgotPassword.invalidEmailToastFunc()
            
        })
    })
    it('forgot password when email is empty', () => {

        cy.fixture('loginData.json').then((data)=>{
            forgotPassword.forgetPasswordFunc()
            forgotPassword.continueButtonFunc()
            forgotPassword.emptyEmailToastFunc()
            
        })
    })
})