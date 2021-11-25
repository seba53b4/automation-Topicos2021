

const MenuVerticalPage = class MenuVerticalPage {

    constructor(){
        this.locators = {
            btn_indicator: `[href="/indicadores"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_data: `[href="/datos"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_samples: `[href="/muestras"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_reports: `[href="/reportes"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_areas: `[href="/areas"] > .MuiListItemText-root > .MuiTypography-root`,
            btn_empresa: `[href="/empresas"] > .MuiListItemText-root > .MuiTypography-root`
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
    goToReports(){
        cy.get(this.locators.btn_reports)
            .click()
    }
    goToAreas(){
        cy.get(this.locators.btn_areas)
            .click()
    }
    goToEmpresa(){
        cy.get(this.locators.btn_empresa)
            .click()
    }

} 

exports.MenuVerticalPage = MenuVerticalPage;