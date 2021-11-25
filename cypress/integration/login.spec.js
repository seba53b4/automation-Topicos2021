/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');
const { LoginPage } = require('../pages/loginPage');

describe('Test on Area', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  

    it('Create new samples', () => {
      const loginPage = new LoginPage(); 
      const menuVerticalPage = new MenuVerticalPage();
      const samplesPage = new SamplesPage();

     loginPage.doLogin('deres@gmail.com','hola1234')

  });
    
    
  });
  