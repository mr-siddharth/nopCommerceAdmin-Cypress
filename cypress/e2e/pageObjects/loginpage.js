import { BasePage } from "./basepage";
import {
    BaseTxtElement,
    BaseButtonElement,
    BaseElement
} from "./baseelements"

class TxtEmail extends BaseTxtElement{
    locator = ['css', 'input#Email']
}

class TxtPassword extends BaseTxtElement{
    locator = ['css', 'input#Password']
}

class LoginButton extends BaseButtonElement{
    locator = ['css', 'button[type=submit]']
}

class ErrorMessage extends BaseElement{
    locator = ['css', 'div.message-error']
}

export class LoginPage extends BasePage{
    constructor(){
        super()
        this.txt_email = new TxtEmail()
        this.txt_password = new TxtPassword()
        this.loginbutton = new LoginButton()
        this.error_message = new ErrorMessage()
    }

    login(email, password){
        this.txt_email.clear().type(email)
        this.txt_password.clear().type(password)
        this.loginbutton.click()
    }

    getErrorMessage(){
        return this.error_message.text
    }
}