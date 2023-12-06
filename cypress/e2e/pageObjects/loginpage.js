import { BasePage } from "./basepage";
import {
    BaseTxtElement,
    BaseButtonElement,
    BaseElement
} from "./baseelements"

class LoginPage extends BasePage{
    constructor() {
        super()
        this.txt_email = new BaseTxtElement('css', 'input#Email')
        this.txt_password = new BaseTxtElement('css', 'input#Password')
        this.loginbutton = new BaseButtonElement('css', 'button.login-button')
        this.error_message = new BaseElement('css', 'div.message-error')
    }

    visit() {
        cy.visit('/login')
        return this
    }

    login(email, password) {
        this.txt_email.clear().type(email)
        this.txt_password.clear().type(password)
        this.loginbutton.click()
        return this
    }

    getErrorMessage() {
        return this.error_message.text
    }
}

const loginPage = new LoginPage();
export default loginPage;