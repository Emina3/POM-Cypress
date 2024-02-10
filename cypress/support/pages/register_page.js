class RegisterPage {
    // Web Elementleri
    constructor() {
        this.firstNameInput = '#first_name'
        this.lastNameInput = '#last_name'
        this.dateOfBirthInput = '#dob'
        this.addressInput = '#address'
        this.postCodeInput = '#postcode'
        this.cityInput = '#city'
        this.stateInput = '#state'
        this.countrySelect = '#country'
        this.phoneInput = '#phone'
        this.emailInput = '#email'
        this.passwordInput = '#password'
        this.registerButton = '[type="submit"]'
        this.emailAlreadyExistMessage = ".help-block"
        this.passwordMinLengthErrorMessage = "[data-test='password-error']"
        this.requiredFirstNameMessage = '[data-test="first-name-error"]'
        this.requiredLastNameMessage = '[data-test="last-name-error"]'
        this.requiredDateOfBirthMessage = '[data-test="dob-error"]'
        this.requiredAddressMessage = '[data-test="address-error"]'
        this.requiredPostCodeMessage = '[data-test="postcode-error"]'
        this.requiredCityMessage = '[data-test="city-error"]'
        this.requiredStateMessage = '[data-test="state-error"]'
        this.requiredCountryMessage = '[data-test="country-error"]'
        this.requiredPhoneMessage = '[data-test="phone-error"]'
        this.requiredEmailMessage = '[data-test="email-error"]'
        this.requiredPasswordMessage = '[data-test="password-error"]'
    }


    // Metotlar
    
    //  goToUrl(){
    //     cy.visit('/' + Cypress.env('register')); 
    //  }

    writeFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName)
    }

    writeLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName)
    }

    writeDateOfBirth(dateOfBirth) {
        cy.get(this.dateOfBirthInput).type(dateOfBirth)
    }

    writeAddress(address) {
        cy.get(this.addressInput).type(address)
    }

    writePostCode(postCode) {
        cy.get(this.postCodeInput).type(postCode)
    }

    writeCity(city) {
        cy.get(this.cityInput).type(city)
    }

    writeState(state) {
        cy.get(this.stateInput).type(state)
    }

    selectCountry(country) {
        cy.get(this.countrySelect).select(country)
    }

    writePhone(phone) {
        cy.get(this.phoneInput).type(phone)
    }

    writeEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    writePassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickRegister() {
        cy.get(this.registerButton).click()
    }

    verifyEmailAlreadyExistMessage(errorMessage) {
        cy.get(this.emailAlreadyExistMessage).should('have.text', errorMessage)
    }

    verifyPasswordMinLengthErrorMessage(errorMessage) {
        cy.get(this.passwordMinLengthErrorMessage).should('contain', errorMessage)
    }

    verifyRequiredFirstNameMessage(errorMessage) {
        cy.get(this.requiredFirstNameMessage).should('contain', errorMessage)
    }
    
    verifyRequiredLastNameMessage(errorMessage) {
        cy.get(this.requiredLastNameMessage).should('contain', errorMessage)
    }

    verifyRequiredDateOfBirthMessage(errorMessage) {
        cy.get(this.requiredDateOfBirthMessage).should('contain', errorMessage)
    }

    verifyRequiredAddressMessage(errorMessage) {
        cy.get(this.requiredAddressMessage).should('contain', errorMessage)
    }

    verifyRequiredPostCodeMessage(errorMessage) {
        cy.get(this.requiredPostCodeMessage).should('contain', errorMessage)
    }

    verifyRequiredCityMessage(errorMessage) {
        cy.get(this.requiredCityMessage).should('contain', errorMessage)
    }

    verifyRequiredStateMessage(errorMessage) {
        cy.get(this.requiredStateMessage).should('contain', errorMessage)
    }

    verifyRequiredCountryMessage(errorMessage) {
        cy.get(this.requiredCountryMessage).should('contain', errorMessage)
    }

    verifyRequiredPhoneMessage(errorMessage) {
        cy.get(this.requiredPhoneMessage).should('contain', errorMessage)
    }

    verifyRequiredEmailMessage(errorMessage) {
        cy.get(this.requiredEmailMessage).should('contain', errorMessage)
    }

    verifyRequiredPasswordMessage(errorMessage) {
        cy.get(this.requiredPasswordMessage).should('contain', errorMessage)
    }


}
export const register = new RegisterPage()