/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');

describe('Test Indicator', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  
    it('Create new indicator', () => {
        const menuVerticalPage = new MenuVerticalPage();
        const samplesPage = new SamplesPage();

        console.log();
        menuVerticalPage.goToSamples();
        samplesPage.addNewIndicator();

    })

    
  
  })
  