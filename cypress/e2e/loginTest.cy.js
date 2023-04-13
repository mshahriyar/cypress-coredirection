import loginPage from "../PageObjects/loginPage.cy"
const login = new loginPage()

before(function()
{
    cy.fixture('loginData.json').then(function(data){
    globalThis.data=data
  })
})

beforeEach(function()
{
    login.visit()
    login.signIn()
})

describe('Login Page Test Cases', () => {

  it('Login with valid credentials', () => {
  
      login.setUserName(data.username)
      login.setPassword(data.password)
      login.btnLogin()
      login.validateLogin()
  })
  
  it('Login with correct username and short length password', () => {
    
      login.setUserName(data.username)
      login.setPassword(data.shortlengthpassword)
      login.btnLogin()
      login.validatePassLength()

  })
  it('Login with valid username and invalid password', () => {
    
      login.setUserName(data.username)
      login.setPassword(data.incorrectpassword)
      login.btnLogin()
      login.validateWrongPassword()

  })
  
  it('Login with incorrect username and correct password', () => {
    
      login.setUserName(data.usernameincorrect)
      login.setPassword(data.password)
      login.btnLogin()
      login.validateUsernameIncorrect()
  
  })

  it('Verify the password visible icon is present and functional', () => {
    
      login.setPassword(data.password)
      login.eyeIcon()
      
  })
  it.only('Verify the Create New Account button is present and functional', () => {
    
    login.createNewAccount()
    
})

})