const { BasePage } = require("./basePage")


const SamplesPage = class SamplesPage extends BasePage{

    constructor(){
        this.locators = {
            btn_addNewSample: `.MuiPaper-elevation0 > .MuiButtonBase-root`,
            ddown_indicators: `.MuiInput-root > #indicator`,
            ddown_options: `#menu-indicator > .MuiPaper-root > .MuiList-root`,
            input_date: `:nth-child(2) > .MuiFormControl-fullWidth > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_value: `#value`,
            btn_addIndicator: `.MuiButton-root`,
            btn_addNewIndicator:`.MuiPaper-elevation0 > .MuiButtonBase-root`
        }
    }

    addNewSample(muestra){
        cy.get(this.locators.btn_addNewSample)
            .click()
        cy.get(this.locators.ddown_indicators)
            .click()
        cy.get('#menu-indicatorId > .MuiPaper-root > .MuiList-root')
            .contains(muestra.nombre)
            .click()
        cy.get(this.locators.input_value)
            .type(muestra.valor)
        cy.get(this.locators.btn_addIndicator)
            .click()
    }



} 

exports.SamplesPage = SamplesPage;