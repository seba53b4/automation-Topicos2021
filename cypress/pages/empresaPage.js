
const EmpresaPage = class EmpresaPage {

    constructor(){
        this.locators = {
            btn_crear: `.MuiPaper-elevation0 > .MuiButtonBase-root`,
            input_name: `.MuiPaper-elevation0 > .MuiButtonBase-root`,
            input_RUT:`:nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_razonSocial: `:nth-child(3) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_rubro:`:nth-child(4) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            btn_crear: `.MuiPaper-root > .MuiButtonBase-root`
        }
    }
    addNewEnterprise(empresa){
        cy.get(this.locators.btn_crear)
            .click()
        cy.get(this.locators.input_name)
            .type(empresa.nombre)
            
        cy.get(this.locators.input_RUT)
            .type(empresa.RUT)
            
        cy.get(this.locators.input_razonSocial)
            .type(empresa.razonSocial)
            
        cy.get(this.locators.input_rubro)
            .type(empresa.rubro)
            
        cy.get(this.locators.btn_crear)
            .click()  
    }

} 

exports.EmpresaPage = EmpresaPage;