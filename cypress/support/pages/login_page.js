class LoginPage{
    // Web Elementleri
    constructor() {
        this.pageTitle = 'h3'
        this.emailInput = '#email'
        this.passwordInput = '#password'
        this.loginButton = '[value="Login"]'
        this.invalidEmailOrPasswordMessage = ".help-block"
    }



    // Metotlar
    verifyPageTitle(pageTitle) {
        cy.get(this.pageTitle).should('have.text', pageTitle)
    }

    writeEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    writePassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickLoginButton(){
        cy.get(this.loginButton).click();
    }

    verifyInvalidEmailOrPasswordMessage(message) {
        cy.get(this.invalidEmailOrPasswordMessage).should('have.text', message)
    }

}

export const login = new LoginPage()