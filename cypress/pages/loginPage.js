


const LoginPage = class LoginPage {

    constructor(){

        this.locators = {
            input_email: `:nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_passw: `:nth-child(3) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            btn_login: `.MuiButton-root`
        }
    }

    doLogin(user,password){
        cy.get(this.locators.input_email)
          .type(user)
        cy.get(this.locators.input_passw)
          .type(password)  
        cy.get(this.locators.btn_login)
          .click()      
    }

} 

exports.LoginPage = LoginPage;