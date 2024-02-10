import { faker } from "@faker-js/faker";
import { login } from "../support/pages/login_page";
import { register } from "../support/pages/register_page"
describe('Register Test Suit', () => {
  let registerData
  let loginData
  let fakeMail
  before(() => {
    cy.fixture('register_data').then((data) => {
      registerData = data
    })
    cy.fixture('login_data').then((data) => {
      loginData = data
    })
    fakeMail = faker.internet.email()
  });
  beforeEach(() => {
    cy.visit('/' + Cypress.env('register'));
  });
  it('TC01 - Register test with valid data', () => {
    register.writeFirstName(registerData.firstName)
    register.writeLastName(registerData.lastName)
    register.writeDateOfBirth(registerData.dateOfBirth)
    register.writeAddress(registerData.address)
    register.writePostCode(registerData.postCode)
    register.writeCity(registerData.city)
    register.writeState(registerData.state)
    register.selectCountry(registerData.country)
    register.writePhone(registerData.phone)
    register.writeEmail(fakeMail) 
    register.writePassword(registerData.password)
    register.clickRegister()
    login.verifyPageTitle(loginData.pageTitle)
  })
  it('TC02 - Register test with less than 6 characters', () => {
    register.writeFirstName(registerData.firstName)
    register.writeLastName(registerData.lastName)
    register.writeDateOfBirth(registerData.dateOfBirth)
    register.writeAddress(registerData.address)
    register.writePostCode(registerData.postCode)
    register.writeCity(registerData.city)
    register.writeState(registerData.state)
    register.selectCountry(registerData.country)
    register.writePhone(registerData.phone)
    register.writeEmail(faker.internet.email()) 
    register.writePassword(registerData.password5characters)
    register.clickRegister()
    register.verifyPasswordMinLengthErrorMessage(registerData.passwordMinLengthErrorMessage)
  });
  it('TC03 - Register test with same email data', () => {
    register.writeFirstName(registerData.firstName)
    register.writeLastName(registerData.lastName)
    register.writeDateOfBirth(registerData.dateOfBirth)
    register.writeAddress(registerData.address)
    register.writePostCode(registerData.postCode)
    register.writeCity(registerData.city)
    register.writeState(registerData.state)
    register.selectCountry(registerData.country)
    register.writePhone(registerData.phone)
    register.writeEmail(fakeMail)
    register.writePassword(registerData.password)
    register.clickRegister()
    register.verifyEmailAlreadyExistMessage(registerData.emailAlreadyExistMessage)
  });
  it('TC04 - Validating required field messages', () => {
    register.clickRegister()
    register.verifyRequiredFirstNameMessage(registerData.requiredFirstNameMessage)
    register.verifyRequiredLastNameMessage(registerData.requiredLastNameMessage)
    register.verifyRequiredDateOfBirthMessage(registerData.requiredDateOfBirthMessage)
    register.verifyRequiredAddressMessage(registerData.requiredAddressMessage)
    register.verifyRequiredPostCodeMessage(registerData.requiredPostCodeMessage)
    register.verifyRequiredCityMessage(registerData.requiredCityMessage)
    register.verifyRequiredStateMessage(registerData.requiredStateMessage)
    register.verifyRequiredCountryMessage(registerData.requiredCountryMessage)
    register.verifyRequiredPhoneMessage(registerData.requiredPhoneMessage)
    register.verifyRequiredEmailMessage(registerData.requiredEmailMessage)
    register.verifyRequiredPasswordMessage(registerData.requiredPasswordMessage)
  });
})