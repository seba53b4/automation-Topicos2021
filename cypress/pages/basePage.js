


const BasePage = class BasePage {

    constructor(){
        this.locatorBase = {
            table: `table > tbody > tr`,
        }
    }

    setRowsOnPage(){
        cy.get('.MuiTablePagination-root > .MuiToolbar-root > div [role="button"]')
            .click()
        cy.get('#menu- > .MuiPaper-root > .MuiList-root')
            .contains('100')
            .click()
    }

    validationEnterpriseCreated(empresa){
        this.setRowsOnPage();
        cy.get(this.locatorBase.table, {timeout: 3000}).within(($tableRow) =>{
            cy.get('td')
              .contains(empresa.nombre)   
        })
    }

    validationAreaCreated(area){
        this.setRowsOnPage();
        cy.get(this.locatorBase.table, {timeout: 3000}).within(($tableRow) =>{
            cy.get('td')
              .contains(area.nombre)   
            cy.get('td')
              .contains(area.descripcion)   
        })
    }

    validationIndicatorCreated(indicator){

        this.setRowsOnPage();
        cy.get(this.locatorBase.table).within(($tableRow) =>{
            cy.get('td')
              .contains(indicator.nombre)
            cy.get('td')
              .contains(indicator.descripcion)
            cy.get('td')
              .contains(indicator.frecuencia)
            cy.get('td')
              .contains(indicator.area)
            cy.get('td')
              .contains(indicator.tipo)
            cy.get('td')
              .contains(indicator.unidad)    
        })
        
    }

} 

exports.BasePage = BasePage;


