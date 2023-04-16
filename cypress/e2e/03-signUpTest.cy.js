import signUpPage from "../PageObjects/signUpPage.cy"


describe('Sign Up Page Test Cases', () => {
  it('Sign up user with valid email', () => {
    cy.visit('https://stage-v3-1-0-1.coredirection.com/')
    
    cy.fixture('loginData.json').then((data)=>{
      const signUp= new signUpPage();
      
    })
  })
})