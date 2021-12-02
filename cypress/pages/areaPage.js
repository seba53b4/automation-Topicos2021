const { BasePage } = require("./basePage")

const AreaPage = class AreaPage extends BasePage{

    constructor(){
      super();
        this.locators = {
            btn_crearArea: `.MuiPaper-elevation0 > .MuiButtonBase-root`,
            input_nombre: `:nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input`,
            input_descr:`:nth-child(2) > .MuiOutlinedInput-root`,
            btn_agregarArea:`.MuiPaper-root > .MuiButtonBase-root`
        }
    }

    addNewArea(area){
        cy.get(this.locators.btn_crearArea)
          .click()
        cy.get(this.locators.input_nombre)
          .type(area.nombre)
        cy.get(this.locators.input_descr)
          .type(area.descripcion)
        cy.get(this.locators.btn_agregarArea)
          .click()   
    }

} 

exports.AreaPage = AreaPage;