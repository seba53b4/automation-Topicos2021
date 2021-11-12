/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');

describe('Test on Indicator', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  
    it('Create new indicator', () => {
        const menuVerticalPage = new MenuVerticalPage();
        const samplesPage = new SamplesPage();

        menuVerticalPage.goToSamples();
        samplesPage.addNewIndicator();

    })
    
  });
  