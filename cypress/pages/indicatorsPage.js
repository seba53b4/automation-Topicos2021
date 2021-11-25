


const IndicatorsPage = class IndicatorsPage {

    constructor(){

        this.locators = {
            btn_addNewIndicator: `.MuiPaper-elevation0 > .MuiButtonBase-root`,
            btn_createindicator: `.MuiPaper-root > .MuiButtonBase-root`,
            input_name: `:nth-child(1) > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_description: `:nth-child(1) > :nth-child(2) > .MuiOutlinedInput-root`,
            lbox_area:`#mui-component-select-area`,
            lbox_unit:`#mui-component-select-unidad`,
            lbox_freq:`#id_frecuencia`,
            chbox_directa: `:nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input`,
            chbox_indirecta:`:nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input`,
            lbox_indicatorOne: `#id_indicador1`,
            lbox_indicatorTwo: `#id_indicador2`,
            lbox_operator: `#id_operador_1`,
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
        cy.get(this.locators.lbox_unit)
            .click()    
        cy.get('#menu-unidad > .MuiPaper-root > .MuiList-root')
            .contains(indicator.unidad)
            .click()
        cy.get(this.locators.lbox_freq)
            .click()
        cy.get('#menu-frecuencia > .MuiPaper-root > .MuiList-root')
            .contains(indicator.frecuencia)
            .click()    
        cy.get(this.locators.btn_createindicator)
            .click()
    }



    addNewIndicatorInDirect(indicator){
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
        cy.get(this.locators.lbox_unit)
            .click()    
        cy.get('#menu-unidad > .MuiPaper-root > .MuiList-root')
            .contains(indicator.unidad)
            .click()
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
        cy.get('#menu-indicadorValue2 > .MuiPaper-root > .MuiList-root')
            .contains(indicator.indicadorTwo)
            .click()
        cy.get(this.locators.btn_createindicator)
            .click()
    }

    validationIndicatorCreated(type,indicator){
        if (type == 'D') {
            
            

        } else if (type == 'I'){
            
        }
    }


} 

exports.IndicatorsPage = IndicatorsPage;