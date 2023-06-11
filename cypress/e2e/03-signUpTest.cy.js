import signUpPage from "../PageObjects/signUpPage.cy"
const signup = new signUpPage()

before(() => {
  cy.fixture('signUpData.json').then(function(data){
    globalThis.data = data
  })
});

beforeEach(() => {
  signup.visit()
  signup.signUpbtn()
});


describe('SignUp Page Test Cases', () => {
  
  it('Verify the title of Sign up page', () => {
    
    signup.title()
  
  })

  it('Verify Sign in and Home button is present on top of the page', () => {
    
    signup.signInbtnVisible()
    signup.homebtnVisible()
  
  })

  it('Verify Social sign up links are visible on sign up page', () => {
    
    signup.socialSignupVisible()
  
  })

  it('Verify the error shows when enters invalid email', () => {
    signup.enterEmail(data.invalidemail)
    signup.clickSignUp()
    signup.emailValidToast()
  
  })

  it('Verify the app shows error when user enter already registered email', () => {
    
    signup.enterEmail(data.alreadyRegisterdemail)
    signup.clickSignUp()
    signup.alreadyRegisterToast()
  
  })

  it.only('Verify the user sign up with valid email', () => {
    

    signup.randomEmailFunc()

    signup.clickSignUp()
// Clear saved cache 
    cy.clearLocalStorage()
    cy.getAllLocalStorage().should('be.empty')

    signup.enterFirstName(data.firstName)
    signup.enterLastName(data.lastName)
    signup.enterUsername()
    signup.enterPhoneNumber(data.mobileNumber)    
    signup.selecGender()
    signup.selectDoB()
    signup.enterPasswrod()
    signup.enterConfirmPassword()
    signup.selectTerms()
    signup.registerBtn()
    signup.addProfileInfo()
  })

})