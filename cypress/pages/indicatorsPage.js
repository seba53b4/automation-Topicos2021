const { BasePage } = require("./basePage");



const IndicatorsPage = class IndicatorsPage extends BasePage{

    constructor(){
        super();
        this.locators = {
            btn_addNewIndicator: `.MuiPaper-elevation0 > .MuiButtonBase-root`,
            btn_createindicator: `.MuiPaper-root > .MuiButtonBase-root`,
            input_name: `:nth-child(1) > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_description: `:nth-child(1) > :nth-child(2) > .MuiOutlinedInput-root`,
            lbox_area:`#mui-component-select-area`,
            input_unit:`.css-13sljp9 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            lbox_freq:`#id_frecuencia`,
            chbox_directa: `:nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input`,
            chbox_indirecta:`:nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input`,
            lbox_indicatorOne: `#id_indicador1`,
            lbox_indicatorTwo: `#id_indicador2`,
            lbox_operator: `#id_operador_1`,
            table_indicators: `table > tbody > tr`
        }
    }

    addNewIndicatorDirect(indicator){

        cy.get(this.locators.btn_addNewIndicator)
            .click()
        cy.get(this.locators.input_name)
            .type(indicator.nombre)
        cy.get(this.locators.input_description)
            .type(indicator.descripcion)
        cy.get(this.locators.lbox_area)
            .click()
        cy.get('#menu-area > .MuiPaper-root > .MuiList-root')
            .contains(indicator.area)
            .click()
         
        cy.get(this.locators.input_unit)
            .type(indicator.unidad)
        cy.get(this.locators.lbox_freq)
            .click()
        cy.get('#menu-frecuencia > .MuiPaper-root > .MuiList-root')
            .contains(indicator.frecuencia)
            .click()    
        cy.get(this.locators.btn_createindicator)
            .click()
    }



    addNewIndicatorInDirect(indicator, withConstant = false){
        cy.get(this.locators.btn_addNewIndicator)
            .click()
        cy.get(this.locators.chbox_indirecta)
            .check()
            cy.get(this.locators.input_name)
            .type(indicator.nombre)
        cy.get(this.locators.input_description)
            .type(indicator.descripcion)
        cy.get(this.locators.lbox_area)
            .click()
        cy.get('#menu-area > .MuiPaper-root > .MuiList-root')
            .contains(indicator.area)
            .click()
        cy.get(this.locators.input_unit)
            .type(indicator.unidad)
        cy.get(this.locators.lbox_freq)
            .click()
        cy.get('#menu-frecuencia > .MuiPaper-root > .MuiList-root')
            .contains(indicator.frecuencia)
            .click()    
        cy.get(this.locators.btn_createindicator)
            .click()
        cy.get(this.locators.lbox_indicatorOne)
            .click()
        cy.get('#menu-indicadorValue1 > .MuiPaper-root > .MuiList-root')
            .contains(indicator.indicadorOne)
            .click()
        cy.get(this.locators.lbox_operator)
            .click()
        cy.get('#menu-operadorValue1 > .MuiPaper-root > .MuiList-root')
            .contains(indicator.operador)
            .click()
        
        cy.get(this.locators.lbox_indicatorTwo)
            .click()
        if (!withConstant) {
        cy.get('#menu-indicadorValue2 > .MuiPaper-root > .MuiList-root')
            .contains(indicator.indicadorTwo)
            .click()
                
        } else {
            cy.get('#menu-indicadorValue2 > .MuiPaper-root > .MuiList-root')
            .contains('Una constante')
            .click()
            cy.get('#id_form_3 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input')
                .clear()
                .type(indicator.constante)
        }
        cy.get(this.locators.btn_createindicator)
            .click()
        
    }

    // validationIndicatorCreated(indicator){

    //     cy.get('.MuiTablePagination-root > .MuiToolbar-root > div [role="button"]')
    //         .click()
    //     cy.get('#menu- > .MuiPaper-root > .MuiList-root')
    //         .contains('100')
    //         .click()
    //     cy.get(this.locators.table_indicators).within(($tableRow) =>{
    //         cy.get('td')
    //           .contains(indicator.nombre)
    //         cy.get('td')
    //           .contains(indicator.descripcion)
    //         cy.get('td')
    //           .contains(indicator.frecuencia)
    //         cy.get('td')
    //           .contains(indicator.area)
    //         cy.get('td')
    //           .contains(indicator.tipo)
    //         cy.get('td')
    //           .contains(indicator.unidad)    
    //     })
        
    // }


} 

exports.IndicatorsPage = IndicatorsPage;