/// <reference types="cypress" />

const { LoginPage } = require('../pages/loginPage');
const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');

describe('Test on Samples - Usuario Empresa', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  
    it('Create new samples', () => {
        const menuVerticalPage = new MenuVerticalPage();
        const samplesPage = new SamplesPage();
        const loginPage = new LoginPage(); 

        loginPage.doLogin('agustinfece@gmail.com','hola1234');
        menuVerticalPage.goToSamples();
        samplesPage.addNewSample({
          nombre: 'Consumo de agua',
          valor: '1500'
        })


    });
    
  });
  