

const MenuVerticalPage = class MenuVerticalPage {

    constructor(){
        this.locators = {
            btn_indicator: `[href="/indicadores"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_data: `[href="/datos"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_samples: `[href="/muestras"] > .MuiListItemText-root > .MuiTypography-root`
        }
    }

    goToIndicator(){
        cy.get(this.locators.btn_indicator)
            .click()
    }
    goToSamples(){
        cy.get(this.locators.btn_samples)
            .click()
    }

} 

exports.MenuVerticalPage = MenuVerticalPage;