const { dashboard } = require("../support/pages/dashboard_page");
const { login } = require("../support/pages/login_page");
describe('Login Test Suite', () => {
    let loginData
    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        })
    });
    beforeEach(() => {
        cy.visit('/' + Cypress.env('login'));
    });
    it('TC01 - Login test with valid data', () => { // Pozitif test
        login.writeEmail(loginData.validEmail)
        login.writePassword(loginData.validPassword)
        login.clickLoginButton()
        dashboard.verifyUrl(Cypress.env('dashboard'))
    });
    it('TC02 - Login test with invalid email', () => { // Negatif test
        login.writeEmail(loginData.invalidEmail)
        login.writePassword(loginData.validPassword)
        login.clickLoginButton()
        login.verifyInvalidEmailOrPasswordMessage(loginData.invalidEmailOrPasswordMessage)
    });
    it('TC03 - Login test with invalid password', () => { // Negatif test
        login.writeEmail(loginData.validEmail)
        login.writePassword(loginData.invalidPassword)
        login.clickLoginButton()
        login.verifyInvalidEmailOrPasswordMessage(loginData.invalidEmailOrPasswordMessage)
    });
    
    it.only('TC04 - Login test with invalid data', () => { // Negatif test
        login.writeEmail(loginData.invalidEmail)
        login.writePassword(loginData.invalidPassword)
        login.clickLoginButton()
        login.verifyInvalidEmailOrPasswordMessage(loginData.invalidEmailOrPasswordMessage)
    });
});