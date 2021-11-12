

const SamplesPage = class SamplesPage {

    constructor(){
        this.locators = {
            btn_addNewIndicator: `[data-testid=AddIcon]`,
            ddown_indicators: `.MuiInput-root > #indicator`,
            ddown_options: `#menu-indicator > .MuiPaper-root > .MuiList-root`,
            input_date: `:nth-child(2) > .MuiFormControl-fullWidth > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_value: `#value`,
            btn_addIndicator: `.MuiButton-root`
        }
    }

    addNewIndicator(){
        cy.get(this.locators.btn_addNewIndicator)
            .click()
        cy.get(this.locators.input_value)
            .type('11/06/2021')
        cy.get(this.locators.ddown_indicators)
            .click()
        cy.get(this.locators.ddown_options)
            .contains('None')
            .click()
    }



} 

exports.SamplesPage = SamplesPage;