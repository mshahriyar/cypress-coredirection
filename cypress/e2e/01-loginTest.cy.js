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

    it('Verify Title of sign in page', ()=>{
        
        login.title()
    })
    it('Validate Username, password field and Login button exist', () => {

        login.validateUIFields()
    })

    it.only('Login with valid credentials', () => {

        login.setUserName(data.username)
        login.setPassword(data.password)
        login.btnLogin()
        cy.wait(3000)
        login.downloadPopup()
       
        
    })

    it.skip('Login with correct username and short length password', () => {

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
    it('Verify the Create New Account button is present and functional', () => {

    login.createNewAccount()

    })

    })